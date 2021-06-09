// Area of a circle

//create a circle object using object literal syntax

//should have following properties:
// circle.radius = 2;
//should also have an area property that cannot be changed from the outside.]


let circle = {
    radius: 1,
    get area() {
    //    return 3.14159265359 * radius * radius, my answer
    //Mosh's answer:
    return Math.PI * this.radius * this.radius;
    }
};


console.log(circle);

console.log(circle.radius);
console.log(circle.area);


circle.radius = 2;

console.log(circle);
console.log(circle.radius);
console.log(circle.area);


circle.radius = 3;

console.log(circle);
console.log(circle.radius);
console.log(circle.area);


circle.area = 12

console.log(circle.area); //doesn't change area from outside

