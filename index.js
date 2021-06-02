//Operators Precedence

// 

let x = 2 + 3 * 4;
// because multiplication has higher precedence it will do that operations first.
console.log(x); //returns 14 because it does 3*4 first and then adds 2

//best to use perenthesis to have it evaluate in the order you choose.

//but if you do:
let y = (2 + 3) * 4;
console.log(y); // returns 20 because it will add 2+3 first then mult by 4.