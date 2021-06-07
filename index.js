
//Equality

//use constructor function and compare 2 addresses to see that each of their properties
//are equal to one another.  === will check for same point in memory, so can't use that
//and will need to check each property.
// second function should be written to see if the objects are the same, are they referencing
//the same objects.


//constructor function:

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('d', 'e', 'f');
let address2 = new Address('d', 'e', 'f');

//my answer: 

function areEqual(address1, address2) {
    for (key in address1) {
        for (key in address2){
            if (address1[key] != address2[key]) return false;
        }
    }
    return true;
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
    if (address1 !== address2) return false;
}

console.log(areSame(address1, address2));




//Mosh answer: 
function areEqualMosh(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode;
}

console.log(areEqualMosh(address1, address2))

function areSameMosh(address1, address2) {
    return address1 === address2;
}

console.log(areSameMosh(address1, address2));


//if we set a new variable of address3 = address1 and check for if they are the same,
//they will be (not part of exercise, just good to know):

let address3 = address1;

console.log(areSameMosh(address1, address3)); //outcome is now true because they
//are pointing to the same place in memory.