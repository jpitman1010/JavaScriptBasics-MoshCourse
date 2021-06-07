// exercise 2, Address factory and constructor functions

//create address object, write 2 diff fcns (factory and constructor) 
//to initialize an address object

//my answer:

//factory function:  

function showAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const address1 = showAddress('123 Fake Street', 'Springfield', '11111');

const address2 = showAddress('123 Simpsons Street', 'Springflied2', '22222');

console.log(address1);

console.log(address2);


//constructor function:

function ShowAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

const address3 = new ShowAddress('987 Fake Street', 'FakeCity', '33333');

const address4 = new ShowAddress('654 AnotherFakeStreet', 'AnotherFakeCity', '44444');

console.log(address3);

console.log(address4);


//Mosh answer:

//factory function 

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address5 = createAddress('a', 'b', 'c');

console.log(address5);

//constructor function:

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address6 = new Address('d', 'e', 'f');

console.log(address6)