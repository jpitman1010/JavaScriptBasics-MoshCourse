//Testing the elements of an array

const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive); //as soon as you hit the first negative number the 
//method terminates

//if we replace every with some, and save changes it will show 


const oneOrMorePositives = numbers.some(function(value) {
    return value >= 0;
});

console.log(oneOrMorePositives); //returns true because there is at least 1 positive


//some older browsers don't support this.