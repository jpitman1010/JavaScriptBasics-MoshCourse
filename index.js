// Exercise: Write a fcn that takes 2 numbers and returns the max of the two.

function maxNum(num1, num2) {
    // if (num1 > num2) return ( num1, console.log(num1));
    // return (num2, console.log(num2));
    //no need to include else when the only one if statement because if 
    //that condition is false it will return the other

    //this is another option of how to write the code above:
    return (num1 > num2) ? num1 : num2;
}

maxNum(33,22);

let number = maxNum(3,3);
console.log(number);
// let number = maxNum(3,1);
// console.log(number);
// let number = maxNum(1,3);
// console.log(number);

//always test functions with all diff. possible scenarios