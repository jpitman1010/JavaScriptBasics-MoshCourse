//arguements

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
//you can also pass only 1 argument
console.log(sum(1));
//result is NaN because the sum of 1 + undefined == NaN

//same happens if we pass no arguments or additional arguments:
console.log(sum()); //results in NaN
console.log(sum(1, 2, 3, 4, 5)); //result is still 3, 
//because only the first 2 arguments are being used.


//if you want a varied number of parameters in a function
//every function has a built in function called
// arguments (sort of looks like array but it is
//actually an object, they keys being the indexes 
//to the arguments passed in the function)

function sum2(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum2(1, 2, 3, 4, 5)); 

//to change the function to add all the arguments passed
//into  the function:

function sum3() {
    let total = 0;

    for (let value of arguments)
        total += value;
    return total
}

console.log(sum2(1, 2, 3, 4, 5)); 