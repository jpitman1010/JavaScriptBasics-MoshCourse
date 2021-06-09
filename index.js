//Default Parameters

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

//if you want default values for rate and year

function interest2(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest2(10000));

//you can declair a value for the parameter of the fcn
// you must pass value for all other parameters following it
//or you can get errors (NaN in this case)

//a trick to get around not setting years = something in parameters
//and avoiding errors, is to call the function with undefined as the
//rate and you won't get an error.  

function interest2(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}


console.log(interest5(100000, undefined, 5));

//when rate or year is called as an argument in the 
//calling of the function, it trumps the default 
//parameter of the function (unless argument is undefined).  
//but coding with undefined in argument when calling function
//is considered ugly code.

function interest2(principal, rate = 3.5, years = 2) {
    return principal * rate / 100 * years;
}


console.log(interest5(100000, 12, 5));