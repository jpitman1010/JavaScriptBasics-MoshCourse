// Arrays finding elements (reference types)

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

//includes method won't work with reference types:

console.log(courses.includes({ id: 1, name: 'a' })); //output is false even though
//what is  being searched for is within the array. because the object passed through
//the courses.includes is a different one from the object made above.  2 diff references.

//must use the find method in order to find whether something is in a reference obj.

//google javascript array find

//use a predicate/call-back function

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);


const notCourse = courses.find(function(course) {
    return course.name === 'xyz';
});

console.log(notCourse);

const findCourseIndex = courses.findIndex(function(course){
    return course.name === 'a';
});

console.log(findCourseIndex); //output is 0 because first index in courses is 0,
//which contains name === 'a'
