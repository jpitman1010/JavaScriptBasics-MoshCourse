//Logical Operators with Non-boolean values

//  false || true      will return true
// false || 'Mosh'     will return 'Mosh'
// false || 1          will return 1


//the result of a logical expression is not necessarily true or false.  
//if the types do not match, it evaluates it as "Truthy" or "Falsy"

//Falsy (false) values:
    // undefined
    // null
    // 0 
    // false 
    // ''
    // NaN (not a number)

//anything ont Falsy is Truthy and return whatever the other operand is, 
//since the first operand is false, it continues to look on other side of ||
//and finds the 'Mosh' or 1 to be truthy.  
    

//false || 1 || 2
    //when we have more than one ||, if JavaScript finds the first Truthy part of the 
    //equation, it stops.  So output for : false || 1 || 2 would be 1.   
    //This is called short-circuting


// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// //this last one states that if we have a value for userColor we will use that, if not
// //we will use the default color.
// console.log(currentColor); //returns 'red'


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); //returns 'blue'