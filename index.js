
let person = {
    name: 'Julie',
    age: 30
}; //using curly braces allows for 
//an object literal, you can then use key value pairs 
//to input attributes to that object.

console.log('person object literal = ', person);

//dot notation -this is cleaner coding and easier to use per Mosh
person.name = 'John';

console.log('person dot notation =', person.name);

//bracket Notation
person['age'] = '22';

console.log('person bracket notation for age = ', person.age);


let selection = 'name';

//target property is to use selection
person[selection] = 'Mary';

console.log('target property of selection =', person.name);