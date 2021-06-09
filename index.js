// Function Declaration

function walk() {
    console.log('walk');
}

//Anonymous Function Expression

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

