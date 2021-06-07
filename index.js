//Arrays:

//Adding new elements:

const numbers = [3, 4];

//constant doesn't stop us from modifying the content of the array, just stops us from 
//assigning it to a completely different i.e. numbers = [] won't work.

numbers.push(5,6);

console.log(numbers);

numbers.unshift(1,2);
//unshift adds numbers to begining of array.
console.log(numbers)

//add/remove to middle of the array, use starting point at the index where you want to 
//add something, 0 for second element since you don't want to delete at this point:
numbers.splice(2,0, 'a', 'b');
console.log(numbers); //adds a and b between 2 and 3.


