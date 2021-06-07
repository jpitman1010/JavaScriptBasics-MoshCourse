//template literals: 

//Literals are used for:
    //Object === {}
    //Boolean === true, false
    //String === '',""
    //Template === ``

//Template literals help us to write cleaner code.

const message = `This is my
first message`; //by putting the back tics and hitting enter where you 
//want the line break, it will create it without the string literal \n

const message2 = 
`This is my
first message`;

console.log(message);
console.log(message2); //they come out exactly the same.

//great for using to write emails, allows you to see the formatting:

const message3 = 
`Hi Mosh,

Thank you for teaching this class!!

Regards,
Julie`;

console.log(message3);  //comes out exactly as written!!

//can add placeholders too!!  


const somebody = 'Mosh';
const me = 'Julie';

const message4 = 
`Hi ${somebody},

Thanks for teaching this course!

Regards,
${me}`;

console.log(message4);