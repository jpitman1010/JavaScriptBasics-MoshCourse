//Arrays -removing elements

const numbers = [1, 2, 3, 4];
console.log(numbers);


//removing from end:
const last  = numbers.pop();
console.log(numbers);
console.log(last);


//removing from beginning:
const first = numbers.shift();
console.log(numbers);
console.log(first);

//removing from middle:
//get back to original array by adding the numbers back:
numbers.unshift(1);
numbers.push(4);
console.log(numbers);

const middle = numbers.splice(2,1)
console.log(numbers); //3 has been removed because it is in index 2
console.log(middle);