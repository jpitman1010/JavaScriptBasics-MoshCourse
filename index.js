// Finding Elements (primitives)

const numbers = [1, 1, 2, 3, 4, 1];

console.log(numbers.indexOf(2)); //you get 1
console.log(numbers.indexOf('a')); //you get -1 because it is not in the array

console.log(numbers.lastIndexOf(1)); //when you have multiples of something, it will show
//the last index of the given element.

console.log(numbers.indexOf(1) !== -1); //to find out if there is an element in the array
//this will give true or false answer.  but this is a little ugly so instead use:

console.log(numbers.includes(1)); //this does same thing and gives back true/false

//you can start your search of index starting from a different point
//by passing another paramter to tell it where to start:

console.log(numbers.indexOf(1)); //output is 0 since 1 is at start of list/0 index

console.log(numbers.indexOf(1, 2)); //output is 5, because it will skip the first 1 and 
//start the search at index 2.

