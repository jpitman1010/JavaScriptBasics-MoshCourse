//show stars in rows
//rows == number of stars in the final row
// function is to return 1 added star (aligned left)
//for each row up through the row parameter

//my answer:

showStars(1);
showStars(2);
showStars(3);
showStars(4);
showStars(5);

function showStars(rows) {
    let stars = makeStarArray(rows);
    for (star of stars)
        console.log(star);
}

function makeStarArray(rows) {
    let starsArray = ['*'];
    if (rows >= 2) {
        for (let i = 1; i < rows; i++) {
            starsArray[i] = starsArray[i-1] + '*';
        }
    }
    return starsArray;
}



//Mosh answer:

showStarsMosh(0);
showStarsMosh(1);
showStarsMosh(2);
showStarsMosh(3);
showStarsMosh(4);
showStarsMosh(5);

function showStarsMosh(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

