//Functions

//performing a task (to display something on the console)
function greet(name, lastName) {
    //name is a parameter only accessable by this function
    console.log('Hello ' + name + ' ' + lastName);
}

//the arguement is the actual value supplying the parameter in the function above.
greet('Julie', 'Pitman');


//a fcn that calculates a value (must use return within fcn here)

function square(number) {
    return number * number
}

//declaring the function through a variable (variable declaration)
let number = square(2);
console.log(number)

//console.log() is actually also a function call, 
//passing an argument or another function
//a function is a statement that either performs a task
//or calculates and returns a value


