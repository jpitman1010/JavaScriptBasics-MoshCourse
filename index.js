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