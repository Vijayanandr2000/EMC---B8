import express from 'express';

import { MongoClient, ObjectId } from "mongodb";

const app = express();

app.use(express.json());

const uri = 'mongodb+srv://vijayanandr2000:Vdc62dnCun30UT1T@cluster0.ghvowhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(uri);

let productCollection

const connectDB = async () => {
    try {
        await client.connect()
        productCollection = client.db('ecommerce').collection('product')
        console.log("DB connection established");
    } catch (error) {
        console.log("ERROR: While connecting DB: ", error);
        process.exit(1);
    }
}

const serverError = (res, error) => {
    return res.status(500).send({
        message: "Something went wrong",
        error: error.message
    })
}

app.get('/', (req, res) => {
    console.log("Request reached server");
    res.send("hi")
})

app.post('/product', async (req, res) => {
    try {
        const { name, description, price } = req.body

        const findProduct = await productCollection.findOne({ name: name })

        if (findProduct?._id) {
            return res.status(400).send({
                message: "Product already exists",
                id: findProduct._id
            })
        }

        const newProduct = { name, description, price }
        const result = await productCollection.insertOne(newProduct)

        return res.status(201).send({
            message: "Product created successfully",
            productDetails: {
                id: result.insertedId,
                ...newProduct
            }
        })
    } catch (error) {
        return serverError(res, error)
    }
})

app.get('/products', async (req, res) => {
    try {
        const products = await productCollection.find().toArray()
        return res.status(200).send(products)
    } catch (error) {
        return serverError(res, error)
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const products = await productCollection.findOne({ _id: new ObjectId(id) })
        return res.status(200).send(products)
    } catch (error) {
        return serverError(res, error)
    }
})

app.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { price } = req.body
        const updateProduct = { price }

        const result = await productCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateProduct }
        )

        console.log(result);

        if (result.modifiedCount === 0) {
            return res.status(400).send({
                message: "Product Not Found"
            })
        }

        return res.status(200).send({
            message: "Product updated successfully"
        })
    } catch (error) {
        return serverError(res, error)
    }
})

app.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params

        const result = await productCollection.deleteOne(
            { _id: new ObjectId(id) }
        )

        console.log(result);

        if (result.deletedCount === 0) {
            return res.status(400).send({
                message: "Product Not Found"
            })
        }

        return res.status(200).send({
            message: "Product deleted successfully"
        })
    } catch (error) {
        return serverError(res, error)
    }
})

app.listen(8080, () => {
    console.log("server started at:", "http://localhost:8080");
    connectDB()
})
// vijayanandr2000
// Vdc62dnCun30UT1T

// mongodb+srv://vijayanandr2000:Vdc62dnCun30UT1T@cluster0.ghvowhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0