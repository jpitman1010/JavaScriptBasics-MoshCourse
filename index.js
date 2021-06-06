// functions are objects:

//if you want to pass an object as a parameter you can use ` to go onto multiple lines:

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle2 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw')
}
`);

const anotherCircle = new Circle(1);
const anotherCircle2 = new Circle2(2);

console.log(anotherCircle);
console.log(anotherCircle2);

//methods available

Circle.call({}, 1);
//the first argument of the call method specifies the target: 'this' 
console.log('logging call method', Circle.call({}, 1));


Circle.apply({}, [1]);
//the first argument of the call method specifies the target: 'this' 
console.log('logging apply method', Circle.apply( {}, [1]));