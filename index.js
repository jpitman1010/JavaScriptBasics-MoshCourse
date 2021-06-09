//Getters and Setters


const person = {
    firstName: 'Julie',
    lastName: 'Pitboss',
    get fullName() {
        return `${person.firstName} ${person.lastname}`
        //using template literals for the method;
    },
    set fullName(value) { 
        if (typeof value !== 'string') //return; //this works to ensure it is a string 
        //passed into value or returns what the name is already set to.  But not best way.
        //instead use:
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = '';
}
catch (e) {
    console.log(e);
    alert(e);
    //will learn later how to not use alert to tell user about error
}
//gertters access properties in a method
//setters allow you to change (mutate) the properties.

person.fullName = 'John Smith';

console.log(person);


// try and catch

//what would happen if you passed a boolean to this method? or null or undefined?
// console.log(person.fullName = null);  //you get an error because a boolean doesn't have 
// //properties of split.
// console.log(person.fullName = undefined); // same output as null
// console.log(person.fullName = true); // same output as null and undefined




