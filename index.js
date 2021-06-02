//Do ... While

//must declair the variable outside of the loop 
//(for reasons of scope, to be learned later)

// let i =0;

// // while (condition) {
// //     statement
// // }

// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }



//do while 

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//do while loops are always evaluated at least 1x, even if condition evaluates to false

let i = 9;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

//will console log 9 in this expression since it always must run at least 1x
//practically speaking will likely use a regular while loop