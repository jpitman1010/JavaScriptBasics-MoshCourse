// Exercise get max

//my answer: 
const numbers = [1, 2, 3, 4];
const numbers2 = [-1, -2, -3, -4];
const numbers3 = [];
const numbers4 = [0, 1, 30, 100];

console.log(getMax(numbers)); // expected output 4
console.log(getMax(numbers2)); // expected output -1
console.log(getMax(numbers3)); //expected output undefined
console.log(getMax(numbers4)); //expected output 100

function getMax(array) {
    let max = array[0];
    for (number of array)
        (number > max) ? (max = number) : max;
    return max;
}

//second part of challenge, solve using reduce method in arrays

console.log(getMax2(numbers)); // expected output 4
console.log(getMax2(numbers2)); // expected output -1
console.log(getMax2(numbers3)); //expected output undefined
console.log(getMax2(numbers4)); //expected output 100


function getMax2(array) {
    if (array.length === 0) return undefined;

    return array.reduce((accumulator, current) => 
    (current > accumulator) ? current : accumulator);
}

//Mosh answer: 


console.log(getMaxMosh(numbers)); // expected output 4
console.log(getMaxMosh(numbers2)); // expected output -1
console.log(getMaxMosh(numbers3)); //expected output undefined
console.log(getMaxMosh(numbers4)); //expected output 100



function getMaxMosh(array) {
    if (array.length === 0) return undefined;

    let max = array[0];
    
    for (let i = 1; i < array.length; i++) 
        if (array[i] > max)
            max = array[i];

    return max;
}


console.log(getMaxMosh2(numbers)); // expected output 4
console.log(getMaxMosh2(numbers2)); // expected output -1
console.log(getMaxMosh2(numbers3)); //expected output undefined
console.log(getMaxMosh2(numbers4)); //expected output 100



function getMaxMosh2(array) {
    if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}
