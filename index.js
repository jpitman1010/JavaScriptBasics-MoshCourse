//Logical Operators

//decisions based on multiple conditions

//Logical AND (&&)
//returns true if both operands are true

// console.log(true && true); //returns true (just once)

// console.log(true && false); //returns false since one is true and one is false
// console.log(false && true);//returns false since one is true and one is false


// let highIncome = true;
// let goodCreditScore = true;
// let elegibleForLoan = highIncome && goodCreditScore;

// console.log(elegibleForLoan); //returns true  

//Logical OR (||)
//returns true if both operands are true

let highIncome = false;
let goodCreditScore = true;
let elegibleForLoan = highIncome || goodCreditScore;

console.log('elegible', elegibleForLoan); //returns true  because as long as ONE operand in 
//the expression is true, it will return true.  unless both are false, it will return true

//Logical NOT (!)

let applicationRefused = !elegibleForLoan;
//it will return opposite of
console.log('application refused', applicationRefused); //returns false, always opposite returned

