//Count Truthy

//crearte a function countTruthy(array) that 
//iterates an array and counts all of the truthy elements
//ex: 
// const isActive = true; 
// const name = 'Julie';
// if (isActive) console.log('Hello'); //returns true or false
// however:
// if (name) console.log('Hello'); //returns truthy or falsy
//because it is trying to evaluate a string, it returns a truthy value because
//it is not the boolean true/false it but it is still truthy.
//if string is empty, it is going to return falsy.

//Falsy values are: undefined, null, '', false, 0, NaN

//my answer:
countTruthy([1,2,3]); //should return 3
countTruthy([NaN,2,3]); //should return 2
countTruthy(['',2,3]); //should return 2
countTruthy([null,2,3]); //should return 2
countTruthy([undefined,2,3]); //should return 2
countTruthy([false,2,3]); //should return 2
countTruthy([]); //should return 0
countTruthy([NaN, undefined, 0, false, null]); //should return 0
countTruthy([-1,2,3]); //should return 3

function countTruthy(array) {
    let truthyCount = 0
    for (let i = 0; i <= array.length; i++) {
        if (array[i] ? truthyCount += 1 : truthyCount += 0);
    }
    return console.log(truthyCount)
}

//Mosh answer: 

console.log(countTruthyMosh([1,2,3])); //should return 3
console.log(countTruthyMosh([NaN,2,3])); //should return 2
console.log(countTruthyMosh(['',2,3])); //should return 2
console.log(countTruthyMosh([null,2,3])); //should return 2
console.log(countTruthyMosh([undefined,2,3])); //should return 2
console.log(countTruthyMosh([false,2,3])); //should return 2
console.log(countTruthyMosh([])); //should return 0
console.log(countTruthyMosh([NaN, undefined, 0, false, null])); //should return 0
console.log(countTruthyMosh([-1,2,3])); //should return 3


function countTruthyMosh(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count ++;
    return count;
}