// Let vs Var

let x = 0;
var y = 0; //should avoid var

function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); //gives error because i is in a local scope to the for block.
}

// start();

function start2() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // does NOT give error because var associates i with the function 
    //not with the block of code.  also allows for i to go to 5.
}

start2();

//when using var, you don't get the reference error that you should get, also it allows 
//i to go to 5 in console.log, so it is not following the object.

//var's scope isn't limited to the block where it is defined, it is limited to the function
//so it is best to use let and const (block scope variables), whereas var creates function scoped 
//variables


function start3() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }
    console.log(color); 
}

start3();



var colorRed = 'red';
console.log(colorRed)
//var variables attach to a window object (go to console in live server  (web) and 
//type in window into console, you will see window object,
//if you type window.colorRed you will see the window object attached to this var) 
let age = 30;
//let doesn't attach the variable to the window object.   

//window object is something central, there is only 1 instance of the window object.


//if you are using an external library and they happen to have a variable set to the same
//name as one of your variables and both are attached to the window centralized object, it 
//can override your variable and cause all sorts of problems.


//when we declair a function it is actually global and added to the window object.

function sayHi() {
    console.log('Hi');
}
//go to live server console and type in window.sayHi
//this is bad practice, but will learn later how to encapsulate functions 
//to keep them from attaching to the window.