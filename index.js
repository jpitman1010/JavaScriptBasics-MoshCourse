//Objects
//object oriented programming (OOP) style;
//when we see a program as a collection of objects that talk to each other
//to perform some functionality:
//below we have an object with several properties
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

circle.draw();
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
    this.draw = function () {
        console.log('draw constructor fcn circle');
    }
}
//this: is a reference to the object that is executing this piece of code.
//objects are dynamic, and can have new properties added to them.
const circle3 = new Circle(1);
//in order to use constructor fcn, must define a constructor (in this case called circle)
//make the const set to reserved keyword 'new' then call the fcn Circle and pass the radius
//this creates a new javascript object and sets it equal to an empty object:
//similar to const x = {}, next it sets the object's that have 'this' and place it into
//the new empty object.  It then automatically returns 'this' (all things using this in object)

console.log(circle3);


//dynamic nature of objects:

// if you want to add a key to the factory function circle:

circle.color = 'yellow';
console.log(circle); //and the color properties has been added to the circle object

//you can also delete properties and methods from objects:

delete circle.color;
console.log(circle); //and color has now been removed from the circle object.

//why when we use const to define the circle object, then can we add or delete 
//properties and methods; it is because we aren't changing the const circle, rather 
//the object properties within it.  So you couldn't change circle to circle = 3 because
//it is a const, but you can change the parameters within the object within the const



//every object in javascript has a constructor property that is used to create the
//object.   for instance:
const another = new Circle(2)
console.log(another.constructor);
//this is what constructor looks like when using the contructor object; it will
//show the basically the object code and properties, not the output like when we 
 //called console.log(circle3)


console.log(circle.constructor);
//this actually outputs a function (constructor function); 
//if we were to set let x = {}; JavaScript would basically take this and
//turn it into let x = new Object();

//in Javascript there are other constructors: 
// new String(); // string literals are normally used instead:
//is same as: '', "", ``; but the latter is cleaner coding than new String();
// new Boolean(); // boolean literals are normally used instead:
// true, false
// new Number(); // number literals are normally used instead:
// 1,2,3,4, ...

//every object has a constructor property that represents the function that was used
//to create that object.