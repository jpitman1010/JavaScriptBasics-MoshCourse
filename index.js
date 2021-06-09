//exercise -Moving an element

 const numbers = [1, 2, 3, 4];
//Mosh Answer

const output = moveMosh(numbers, 0, 0); //returns original array
console.log(output);
console.log(moveMosh(numbers, 3, 0)); //returns original array
console.log(moveMosh(numbers, 0, 1)); // passing 1 as offset, 1&2 swap places
// console.log(moveMosh(numbers, 4, 1)); // passing -2 or less as offset from index 1
// //, output = console.error('Invalid offset');
// console.log(moveMosh(numbers, 0, 5)); // passing 4 or more as offset, output =
// //console.error('Invalid offset');
// console.log(moveMosh(numbers, 3, 2)); // passing -2 or less as offset from index 1
// //, output = console.error('Invalid offset');
// console.log(moveMosh(numbers, 0, -1));  // passing -1 or less as offset from index 0
// //, output = console.error('Invalid offset');
// console.log(moveMosh(numbers, 1, -2)); // passing -2 or less as offset from index 1
// //, output = console.error('Invalid offset');
console.log(moveMosh(numbers, 0, 2)); // passing 2 as offset, output = [2, 3, 1, 4];
console.log(moveMosh(numbers, 0, 3)); // passing 3 as offset, output = [2, 3, 4, 1];
console.log(moveMosh(numbers, 1, -1)); // passing -1 as offset at index 1, output = [2, 1, 3, 4];
console.log(moveMosh(numbers, 1, 2)); // passing 2 as offset, output = [1, 3, 4, 2];
console.log(moveMosh(numbers, 3, -2)); // passing -1 as offset at index 1, output = [1, 4, 2, 3];


function moveMosh(array, index, offset) {
    const position = index + offset; 
    if (position >= array.length || position < 0) {
        console.error('Invalid Offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}