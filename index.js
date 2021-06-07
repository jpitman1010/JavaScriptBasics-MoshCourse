//Arrays - combinging and slicing arrays

const first  = [1, 2, 3];
const second = [4, 5, 6];

//to combine use combine

//concat method, but it will create a new array to combine the two,

const combined = first.concat(second);

console.log(combined);

//if you want to get parts of an array, use slice: 

const sliceCombined = combined.slice(2,4);

console.log(sliceCombined);

const combined2 = first.concat(second);

console.log(combined2);

const sliceGetAll = combined2.slice();

console.log(sliceGetAll);

const sliceGetFrom2ndIndex = combined2.slice(2);

console.log(sliceGetFrom2ndIndex);


//when combining arrays, if you substitute in an array with an
// object with key and value pair
// when you copy the array, it copies the object's reference, not the value itself
//so if you were to set firstObjArray and then change the value, it will change in 
//console.log:

const firstObjArray = [{ id: 1 }];

const combined3 = firstObjArray.concat(second);

console.log(combined3);

firstObjArray[0].id = 10; 

console.log(combined3); // now the first object shows referenced value for id as 10

//same principle applies to splice method.