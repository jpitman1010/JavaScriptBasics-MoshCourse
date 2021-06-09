//exercise: Sum of Arguments

//create function called sum taking a varying number of arguments and
//returns their sum. 
//do it first to accept multiple arguments, then 2nd challenge is to allow it to 
//accept an array as the argument (instead of) and still get the same results.


//my answer 1st challenge: 
console.log(sum(1, 2, 3, 4)); //output should be 10
console.log(sum(2, 3)); //output should be 5
console.log(sum(1)); //output should be 1

function sum() {
    let total = 0;

    for (let value of arguments) 
        total += value;
    return total;
}

//my 2nd answer to 1st challenge


console.log(sum2(1, 2, 3, 4)); //output should be 10
console.log(sum2(2, 3)); //output should be 5
console.log(sum2(1)); //output should be 1

function sum2(...arguments) {
    return arguments.reduce((a, b) => a + b);
}


//2nd challenge:

console.log(sum3([1, 2, 3, 4])); //output should be 10
console.log(sum3([2, 3])); //output should be 5
console.log(sum3([1])); //output should be 1


function sum3(...args) {
    if (args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];
    return args.reduce((a, b) => a + b)
}


//Mosh answer
