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