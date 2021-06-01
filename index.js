//equality operators

// === is strict equality operator
//it ensures that both sides of the operator are exactly the same type and value
console.log(1 === 1);  //true
console.log('1' === 1); //false because the type of one operand 
//is a string and the other a number

//  == is a loose equality operator - doesn't care about types matching, it will convert
//and only check to see that values are equal
console.log(1 === 1); //true
console.log('1' == 1); //true -if the operand on the left side is a string, it 
//automatically converts the value on the right side to the same type.  so it is 
//in the end comparing '1' to '1'
console.log(true == 1);  //true - because it automatically turns the second operand/value 
//to the same type as the left operand.

//should use strict most of the time because it is more precise and accurate.
