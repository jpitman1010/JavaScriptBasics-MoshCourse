//exercise 2: Includes

const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

//write a function like the includes method, impliment 
//the method as though it doesn't exist.
//write a fcn that has to parameters (array, searchElement) and if it includes 
//the searchElement, return true, otherwise return false.


//my answer:
const checkIfIncluded = includes(numbers, 2); //expect true
const checkIfIncluded2 = includes(numbers, -2); //expect false
const checkIfIncluded3 = includes(numbers, 6); //expect false


function includes(array, searchElement) {
    for (num of array) 
        if (num === searchElement)
            return true;
    return false;
}   

console.log(checkIfIncluded);
console.log(checkIfIncluded2);
console.log(checkIfIncluded3);


//Mosh answer:


function includesMosh(array, searchElement) {
    for (let element of array) 
        if (element === searchElement)
            return true;
    return false;
}   

const checkIfIncludedMosh = includes(numbers, 2); //expect true
const checkIfIncludedMosh2 = includes(numbers, -2); //expect false
const checkIfIncludedMosh3 = includes(numbers, 6); //expect false

console.log(checkIfIncludedMosh);
console.log(checkIfIncludedMosh2);
console.log(checkIfIncludedMosh3);
