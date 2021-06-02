//exercise write a fcn isLandscape(width, height) {
//     return true if width greater than height;
//     else return false
// }

function isLandscape(width, height) {
    // return (width > height) ? true : false;
    //this is considered a poor way of writing code for returning just true or false

    //can also use if and else:
    // if (width > height) return true;
    // return false;
    //still not ideal way to write the code.

    return (width > height);
    //this will give true if width is greater than height and false if not, 
    //much cleaner way to write the code!!
 }

console.log(isLandscape(2,4));
console.log(isLandscape(2,1));
console.log(isLandscape(2,2));
console.log(isLandscape(2,-1));