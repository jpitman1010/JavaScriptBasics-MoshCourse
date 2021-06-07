//reducing an array

const numbers = [1, -1, 2, 3];

//how to calculate sum of all numbers in an array:

let sum = 0;

for (let n of numbers) 
    sum += n;

console.log(sum);

//cleaner more elegant way to write this:

const reduceArray = numbers.reduce((accumilator, currentValue) => {
    return accumilator + currentValue;
}, 0);
//passing zero at end of the function allows you to set accumilator to start at 0 since
//we put zero 
//the way this works:
//example:
//accumilator = 0, currentValue = 1 => accumilator=1;
//accumilator = 1, currentValue = -1 => accumilator=0;
//accumilator = 0, currentValue = 2 => accumilator=2;
//accumilator = 2, currentValue = 3 => accumilator=5;

console.log(reduceArray);


//can reduce code even further by removing the second parameter to the function, allowing
//for accumilator to be set to the first element in the array and removing the return and curly 
//braces and semicolen and turning it into one line within the reduce function.
const reduceArray2 = numbers.reduce(
    (accumilator, currentValue) => accumilator + currentValue
);
//basically it removes the first example step above
console.log(reduceArray2);
