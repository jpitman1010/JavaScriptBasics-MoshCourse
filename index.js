// for...in loop
//used to iterate over the properties of an object
//can also use to iterate over an array, but isn't ideal, that will be on next lecture

const person = {
    name: 'Julie',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

    //to get element within the object or array, use square bracket notation