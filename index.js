//Exercise Sum of Multiples of 3 and 5 from 0 up to a limit
//multiples of 3 for a limit of 10 = 3,6,9
//multiples of 5 for a limit of 10 = 5, 10
//add these tother and get total of 33


//my answer:
console.log(sum(10));

function sum(limit) {
    let addedSum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0) addedSum += i;
        if (i % 5 === 0) addedSum += i;
    }

    return addedSum;
}


console.log(sumMosh(10));

function sumMosh(limit) {
    let addedSum = 0;
    
    for (let i = 0; i <= limit; i++) 
        if (i % 3 === 0 || i % 5 === 0) addedSum += i;

    return addedSum;
}