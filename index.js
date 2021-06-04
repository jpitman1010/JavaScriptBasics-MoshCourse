//Exercise 5, Even and Odd Numbers

//write a function showNumbers(limit) and show
//""EVEN" if it is even number and "ODD" if odd number.
//zero counts as even.  Should only show up to and including
//the limit provided.

//my answer
showNumber(5);
showNumber(10);
showNumber(0);

function showNumber(limit) {
    let i = 0;
    while (i >= 0 && i <= limit) {
        console.log(i, (i % 2 === 0) ? "EVEN": "ODD");
        i++;
    }
}

//Mosh answer
showNumberMosh(5);
showNumberMosh(10);
showNumberMosh(0);

function showNumberMosh(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}