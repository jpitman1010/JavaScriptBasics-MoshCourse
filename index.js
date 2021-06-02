//Bitwise Operators
// Doesn't have as much practical use in most of programming
//decimal to binary - works on the individual bits of a number
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2); // bitwise OR -returns 3 because it is combining 1 and 2
console.log(1 & 2); // bitwise AND - returns 0

// Read, Write, Execute
    // 0000100  -Read
    // 0000110 - Read and Write permissions
    // 0000001 - Read, write and execute permissions

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no';
//if this condition evaluates to true (myPermission = readPermission) it will return 'yes'
console.log(message);  //returns yes because myPermission does have readPermission

//but if you remove the readPermission from myPermission like:
//myPermission = myPermission | writePermission;
// you will get 'no' because the statement is no longer true.




