//cloning an object

//this is older approach...
const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// console.log(another);

//this is a better/ newer approach

// const another = Object.assign({
//     color: 'yellow'
//     //you can assign new key value pairs using this method.
// }, circle);

// console.log(another);

//even more simple and elegant way to clone an object is: 

const another = { ...circle };
//this ... spreads all properties and methods of the object and spreads it into
//the object (brackets) to which you are putting into the newly cloned object.
console.log(another);