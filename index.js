//built in string object

const message = 'This is my first message';

//why when we use . after a string we have declaired, do we get a bunch of method 
//options when string is a primitive object and cannot have methods??

//because there are two types of strings, you can have the string primitive object 
//like above, then you can also make a String('hi') object that allows you to use
//functions built into Javascript for the string object.

const anotherString = new String('hi');
console.log('this is the typeof the message = ', typeof(message))
console.log('this is the typeof the anotherString object = ', typeof(anotherString))


//however, if you try to use the dot methods with the string, JavaScript in the background
//will wrap the string behind the scenes into a string object for us, allowing us to use
//the methods (which is why you can see a list of methods when you type message. )

//learn more in the docs, google javascript string, go to Mozilla docs

console.log(message.length);
console.log(message[1]);
console.log(message.includes('my'));//returns true or false, the searchers are case
//sensitive.
console.log(message.endsWith('e')); //can find if anything ends with the letter 'e'
console.log(message.indexOf('my')); //it will give 8 because in message the word my
//starts at index 8
console.log(message.replace('first', 'second')); //this creates a new string and does not
//modify the original string...
console.log(message);

console.log(message.toUpperCase()); //also returns a new string, doesn't modify original string


const message2 = '   I am going to  use this    message to show the trim    method.      ';
console.log(message2);
console.log(message2.trimRight());
console.log(message2.trimLeft());
console.log(message2.trimStart());
console.log(message2.trimEnd());
//notice it doesn't trim mid parts of the string.


//if you wish to use a single quote for an apostrophe inside your string, 
//but you have used single quotes around your string, you can use the ESCAPE
// key  \   to indicate to not treat it as the end of the string.

const message3 = 'I can\'t, won\'t, shouldn\'t, but I will!';
console.log(message3);

//   \n will create a new line

const message4 = 'I \nwant\nevery\nword\non\na\nnew\nline.';
console.log(message4);

const message5 = 'Using split method for the string object.';
console.log(message5.split(' ')); //output is an array of each word split based on
//the ' '(space) or any other character chosen to split by.









