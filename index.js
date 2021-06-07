//exercise Address Object
//create an address object that shows:
    //street
    //city
    //zipCode
//then create a function that showAddress(address) and shows all the
//values of the address object.

//my answer:
const address = {
    street: '123 Fake Street',
    city: 'Springfield',
    zipCode: 11111
};

function showAddress(address) {
    for (partOf in address)
        console.log(address.street);
        console.log(address.city);
        console.log(address.zipCode);
}

showAddress(address);

//Mosh answer:

let addressMosh = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddressMosh(address) {
    for (let key in address)
        console.log(key, address[key]);
}

console.log(showAddressMosh(addressMosh));