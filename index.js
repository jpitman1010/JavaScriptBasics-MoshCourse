//exercise count occurrences 

const numbers = [1, 2, 3, 4, 1];

console.log(countOccurrences(numbers, 1)); //expected output 5
console.log(countOccurrences([1, 1, 2], 1)); // expected output 2
console.log(countOccurrences([2, 2, 2], 1)); //expected output 0

// my answer first challenge way (given 2 challenges to solve 2 different ways)

function countOccurrences(array, searchElement) {
    let count = 0;
    for  (number of array)
        if (number === searchElement) count++;
    return count;
}

//my second answer using reducer for array: 
const reduceArray = numbers.reduce( function
    (accumulator, searchElement) {
        if (searchElement === 1)
            accumulator++
        return accumulator }, 0);

console.log(reduceArray);


//Mohs Answer: 

const count = countOccurrencesMosh(numbers, 1);

console.log(count);

// function countOccurrencesMosh(array, searchElement) {
//     let count = 0;
//     for (let element of array)
//         if (element === searchElement)
//             count ++;
//     return count;
// }

function countOccurrencesMosh(array, searchElement) {
    array.reduce((accumulator, current) => {
        const occurence = (current === searchElement ? 1 : 0);
        console.log(accumulator, current, searchElement);
        console.log(accumulator + occurence);
        return accumulator + occurence;
    }, 0);
}


