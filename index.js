//exercise prime numbers
//prime numbers are numbers that can only be divided by themself and 1 
//only include numbers 2+.  
//factors are only 1 and itself
//example of composite number (opposite of prime), 12 can be divided by 1,2,3,4,6,12;
// example of prime number 11


//my answer: 
showPrimes(20); //answer should come out as 2,3,5,7,11,13,17,19

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (i === 2) {
            console.log('J ' + i);
        }
        if (i % 2 !== 0) {
            for (let index = 0; index <= 10 && index !== i; index++) {
                if (i % index === 0) break;
                console.log('J ' + i);
            }
        }
    }
}   


//Mosh answer:

showPrimesMosh(20);

function showPrimesMosh(limit) {
    for (let number = 2; number <= limit; number++) {
        
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log('M ' + number)
    }
}


//second challenge on isPrime, extract some of the code and
//separate into 2 functions:


//my answer: 
showPrimes2(20); //answer should come out as 2,3,5,7,11,13,17,19

function showPrimes2(limit) {
    for (let i = 2; i <= limit; i++) 
        if (checkIfPrime(i)) console.log('J2  ' + i);        
}   

function checkIfPrime(number) {
    if (number === 2) return true;
    if (number % 2 !== 0)
        for (let index = 2; index <= 10 && index !== number; index++) {
            if (number % index === 0) return false;
            return true;
        }
}


//Mosh answer: 



showPrimesMosh2(20);

function showPrimesMosh2(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrimeMosh(number)) console.log('M2  ' + number);
    }

function isPrimeMosh(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;

    return true;
}

