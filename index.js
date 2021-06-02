// write a function fizzBuzz(input){
//     return a string
// }
//if number is divisible by 3, we will get output of Fizz
//if number is divisible by 5, we will get oupput of Buzz
//if number is divisible by both 3 and 5, we get FizzBuzz output
//else: return same number being passed into input
//if passing a non Number, should return a message, "Not a number"


//my answer
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(22));
// console.log(fizzBuzz('three'));

// function fizzBuzz(input) {
//     if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
//     else if (input % 3 === 0 && input % 5 !== 0) return 'Fizz';
//     else if (input % 5 === 0 && input % 3 !== 0) return 'Buzz';
//     else if (input !== NaN) return 'Not a number';
//     else return input;
// }

//Mosh answer:
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(22));
console.log(fizzBuzz('three'));

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}