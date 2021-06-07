//Iterating Array

const numbers = [1, 2, 3, 4];

for (let number of numbers)
    console.log(number);

//this works the same:
numbers.forEach(function(number){
    console.log(number);
});

//this also works the same:

numbers.forEach(number => 
    console.log(number)
);

//can also add a second parameter:

numbers.forEach((number, index) => console.log(index, number));
