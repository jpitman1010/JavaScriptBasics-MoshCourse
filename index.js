// If ...else

//Get current hour, then greet user accordingly.

//if hour between 6a-12pm: Good morning!
// I hours between 12pm and 6pm: Good afternoon!
// otherwise: Good evening!

// if (condition) 
    //statement

//if there are multiple statements you must use curly braces after condition: 
// if (condition) {
    //statement
//}
//when we are only using a signle statement remove curly braces after condition

let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!');
else 
    console.log('Good evening!');
