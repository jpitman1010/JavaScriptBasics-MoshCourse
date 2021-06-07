//date

const now = new Date();
console.log(now)
const date1 = new Date('May 11 2018 09:00');
console.log(date1)

//months are zero based, so zero is January, and 11 === December
const date2 = new Date(2018, 4, 11, 9);
console.log(date2);

//google search javascript dates

//each one of these Date objects has a list of built in methods you can use, example:

console.log(now.getDate()); //remember all months are zero indexed, so 7 is June, etc...
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getMonth());
console.log(now.getDay());

//also have set methods:

console.log(date1.setFullYear(2017));
console.log(date1); //now year shows 2017

//all of these have built in methods to be able to convert them (like to a string)

console.log(now.toDateString());
console.log(now.toTimeString());

// toISOString() method is used when you are trying to transfer a date and time from
//client side to the server. Used when building web app or phone app and using 
//a server/backend  It gives dateTtimeZ:
console.log(now.toISOString());