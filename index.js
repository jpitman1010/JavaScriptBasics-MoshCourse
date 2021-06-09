//exercise Error Handling

// const numbers = [1, 2, 3, 4];

// const count = countOccurrences(numbers, 1);
// console.log(count);

// function countOccurrences(array, searchElement) {
//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         return accumulator + occurrence;
//     }, 0);
// }

//here we assume that the first value is an array, but what if we pass a boolean, null,
//undefined or a number?  Modify function and add handling. 
//if first argument isn't array, throw exception, then wrap const count and console log in
//try exception and catch exception on console.log







function countOccurrences(array, searchElement) {
    // if (typeof array !== 'array') //my answer
    if (!Array.isArray(array))
        throw new Error('This is not an array');
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(numbers, 1);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}
    
    
try {
    const numbers2 = 1234;
    const count = countOccurrences(numbers2, 1);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}
    
    
try {
    const numbers3 = null;
    const count = countOccurrences(numbers3, 1);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}
    