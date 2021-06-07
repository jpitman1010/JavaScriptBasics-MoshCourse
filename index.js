//Exercise: Array from range

const numbers = arrayFromRange(-4, 4);
const numbers2 = arrayFromRange(4, -1);//expect output of empty array when max is lower
//than min

console.log(numbers);
console.log(numbers2);

//my answer:
function arrayFromRange(min, max) {
    const array = [];
    for (min; min <= max; min++)
        array.push(min);
    return array;
}

//Mosh answer: 
const numbersMosh = arrayFromRange(-4, 4);

console.log(numbersMosh);

function arrayFromRangeMosh(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        array.push(i);
    return output;
}