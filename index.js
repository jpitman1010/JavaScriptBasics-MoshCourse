//Scope: Local vs. Global

const message = 'hi';

console.log(message);

//but what if you set the variable up inside of a block?

{
    const message2 = 'hello';
}

// console.log(message2); //you get reference error saying message 2 is not defined.
//when defining variables with const or let it is only be accessed within that block.

//say you have the block within a function: 


function start() {
    const message = 'Hi';

    if (true) {
        const message2 = 'Bye';
        //this constant is only accessable in this block.
    }
    // console.log(message2); //uncaught reference error, message2 undefined...
}

start();

const color = 'red';  //this constant has global scope, so it can be accessed everywhere.
//in general it is considered bad practice to define global variables or constants.
//think of it like this being a toothbrush and each function is a person, you don't want
//every person sharing the same tooth brush, it can lead to all kinds of bugs and issues within
//the program.  

function begin() {
    const message = 'Hi';
    console.log(message, color);
}

function end() {
    const message = 'Bye';
    const color = 'blue'; //local variables/constants take presidence over global
    console.log(message, color);
}

begin();
end();
