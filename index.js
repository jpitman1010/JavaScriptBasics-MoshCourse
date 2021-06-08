//Exercise  - except:
//build a function that passes 2 parameters, numbers array and excluded.  if 
//excluded is a number in the array, return a new array exlcluding that number.

const numbers = [1, 2, 3, 4, 1 , 2, 1];

const output = except(numbers, [1,2]);

console.log(output);

//my answer:

function except(array, excluded) {
    const newArray = array
    for (let number of excluded) 
        for (let num of array) 
            if (num === number) {                
                const findIndexToRemove = newArray.indexOf(num);
                newArray.splice(findIndexToRemove,findIndexToRemove+1); 
            }
    return newArray
}


//Mosh answer: 

const outputMosh = exceptMosh(numbers, [1,2]);

console.log(outputMosh);

function exceptMosh(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}
