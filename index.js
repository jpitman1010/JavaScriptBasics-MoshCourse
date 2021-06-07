// Value types are primitives and are copied by their values
// object types are references and are copied by their reference

let x = 10;
let y = x;

x = 20;


console.log(x); //output is 20
console.log(y); //output is 10

//x and y are independent of each other.  

//so if you change the variable of x to an object (we will call it xx)

let xx = { value: 20};
let yy = xx;

console.log(xx); //output {value: 20}
console.log(xx.value); //output
console.log(yy); 

//when we use an object it is not stored in the variable, it is stored in an external 
//place in memory.  Both xx and yy are pointing to the same place in the memory.

//primitives are copied by values, reference types are copied by variables.

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); //output is 10 because the value is copied into the parameter 
//of the function, so the value assigned to number is only going to change the parameter
//within the function.

//if we change number to an object, it will be able to point to the same point in memory
// and give the desired output.

let obj = { value: 10};

function increaseObj(obj) {
    obj.value++;
}
increaseObj(obj);
console.log(obj); //output of object's value is now 11 because obj is passed by it's
//reference.  