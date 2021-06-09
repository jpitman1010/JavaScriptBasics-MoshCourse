// Function Declaration

//with function declarations, we can call the function
//before we write the function:
walk();
//in JavaScript, a Function Declaration will move
//all functions to the top before running them
//which is called Hoisting (the process of moving
// function declarations to the top of the file done 
//automatically by JavaScript engine running the code.)

function walk() {
    console.log('walk');
}

//Anonymous Function Expression
    //cannot call function before it has been
    //declaired.
    //if you try to call run() prior to it being
    //declaired, you get the following error:
    // Uncaught ReferenceError: run is not defined
    //same thing happens when you do 
    // console.log(x);
    // let x = 1;

let run = function () {
    console.log('run');
};
//anytinme we declair a variable like run, even if
//it is set to a function, we complete it with
// a semicolon

// Named Function Expression

let runFast = function fast() {
    console.log('run fast')
};

run();
let move = run;
move();



