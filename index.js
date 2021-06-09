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

console.log(sum3(1, 2, 3, 4, 5)); 


//The Rest Operator
    //this is not the spread operator like with arrays
    //it is the Rest Operator and uses args(or whatever you call it)
    //the ... before args it allows all of the arguments
    //to come through as an array.  Then you can use reduce
    //to get the sum


function sum4(...args) {
    // console.log(args);
    return args.reduce((a, b) => a + b);
}

console.log(sum4(1, 2, 3, 4, 5)); 

//next level for this function:  

//can rename args
function sum5(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b)
    return total * (1 - discount)
}

console.log(sum5(0.1, 20, 30)); 

//rest parameter must be the last parameter in the function
