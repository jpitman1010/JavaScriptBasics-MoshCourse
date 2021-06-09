//Getters and Setters


const person = {
    firstName: 'Julie',
    lastName: 'Pitboss',
    get fullName() {
        return `${person.firstName} ${person.lastname}`
        //using template literals for the method;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}


//gertters access properties in a method
//setters allow you to change (mutate) the properties.

person.fullName = 'John Smith';

console.log(person);

