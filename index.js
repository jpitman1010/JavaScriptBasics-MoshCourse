//Objects
//object oriented programming (OOP) style;
//when we see a program as a collection of objects that talk to each other
//to perform some functionality:
//below we have an object with several properties
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();
//we are calling the call method of the object, not the function because
//once the function is inside of the object, it's name changes to method.


//if objects have logic, we need to use factory or constructor functions.

//factory function:
//uses camel notation

function createCircle(radius) {
    return {
        radius,
        //radius: radius can be reduced to just radius,
        draw() {
            console.log('draw');
        }
        //when defining a method inside of an object and within a function,
        //you can drop the key value syntax and just write it like the function
        //above
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);
//can call circle1.draw to see 'draw' output



//constructor function 
//to construct or create an object, however naming convention is different from 
//uses Pascal Notation: PascalNotationUsesEveryFirstLetterInUppercase
//instead of returning like in factory function, we will use 'this' special keyword

function Circle(radius) {
    this.radius = radius;
    //this: is a reference to the object that is executing this piece of code.
    //objects are dynamic, and can have new properties added to them.
    this.draw = function () {
        console.log('draw constructor fcn circle');
    }
}
const circle = new Circle(1);
//in order to use constructor fcn, must define a constructor (in this case called circle)
//make the const set to reserved keyword 'new' then call the fcn Circle and pass the radius
//this creates a new javascript object and sets it equal to an empty object:
//similar to const x = {}, next it sets the object's that have 'this' and place it into
//the new empty object.  It then automatically returns 'this' (all things using this in object)

console.log(circle)