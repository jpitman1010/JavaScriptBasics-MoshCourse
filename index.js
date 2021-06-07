//Arrays - sorting

const numbers = [2, 3, 4, 1];

//when you have numbers and strings in an array, this works:
numbers.sort();

console.log(numbers);

numbers.reverse();

console.log(numbers);


//but when you have objects in an array:

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'}
];

//say you wanted to sort by name;

//the sort method takes an argument, so we can pass a function to compare the objects

courses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses);

//however if Javascript is changed to javascript, due to the ASCII numbers assigned
//to characters, the uppercase will come before the lowercase.


const courses2 = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'}
];

courses2.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses2);

//to fix this issue of uppercase and lowercase:


const courses3 = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'}
];

courses3.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    //can also use toLowerCase
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses3);