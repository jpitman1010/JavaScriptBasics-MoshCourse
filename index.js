//filtering arrays

const numbers = [1, -1, 2, 3];

const filteredNumbers = numbers.filter(function(value) {
    return value >= 0;
});

console.log(filteredNumbers);

//can use arrow function for this too:

const filteredNumbers2 = numbers.filter(value => value >= 0 );

console.log(filteredNumbers2);

//can exchange value in arrow function to be v or n or whatever.