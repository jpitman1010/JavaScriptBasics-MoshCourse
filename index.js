//break and continue

let i = 0;

// while (i <= 10) {
//     if (i === 5) break;
//     console.log(i);
//     i++;
// }

while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;
        //considered an ugly way to code, it causes the loop to 
        //jump into the next iteration;
    }
    console.log(i);
    i++;
}

//this outputs 1,3,5,7,9
//whereas if the if statement stopped at if(i % 2) {statement}; then it would output even numbers