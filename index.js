//Arrays - joining

const numbers = [1, 2, 3, 4];

const joined = numbers.join(','); //join method returns a string, 
//notice when you type join( it gives the pop up that shows what you can use
//as a parameter, anytime it has a ? it means it is an optional parameter, so you can
//or don't have to use it.

console.log(joined);


//splice is often used with join, but it only works on strings, not on arrays.

const message = 'This is my message.';
const parts = message.split(' ');

console.log(parts);

const combined = parts.join('-');

console.log(combined);

//this is used for example if you got to stack overflow for an issue, the title will be 
//separated with white spaces like you would expect when you are reading, but if 
//you look at url for that page, the title is in the url, and you cannot use white
//spaces in url.  the words of title in url are combined/joined using the hyphen.