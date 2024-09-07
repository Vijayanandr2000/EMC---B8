const users = [
    {
        name: 'John',
        age: 22,
        city: 'London'
    },
    {
        name: 'John1',
        age: 14,
        city: 'London'
    },
    {
        name: 'John2',
        age: 18,
        city: 'London'
    },
    {
        name: 'John3',
        age: 40,
        city: 'London'
    },
]




for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.age >= 18) {
        console.log(user.name);
        // console.log(user.names);
    }
}