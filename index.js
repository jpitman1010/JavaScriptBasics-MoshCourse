//While

//must declair the variable outside of the loop 
//(for reasons of scope, to be learned later)

let i =0;

// while (condition) {
//     statement
// }

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}