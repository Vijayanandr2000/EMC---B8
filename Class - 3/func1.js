// (function () {
//     console.log('IIFE');
// }())



// const vijay = {
//     name: 'vijay',
//     age: 22,
//     city: 'cennai',
//     info: function () {
//         console.log('My name is ' + vijay.name + ' my age is ' + vijay.age);

//         console.log(`My name is ${this.name}`);

//         console.log(this);
//     }
// }

// vijay.info()



// function add(a, b) {
//     return a + b;
// }


// var add = (a, b) => {
//     console.log(this);
//     return a + b
// }

// console.log(add(1, 2));


console.log('5' == 5, '' == [], 0 == [], 0 == false); //coercion
console.log('5' === 5, '' === [], 0 === []);
