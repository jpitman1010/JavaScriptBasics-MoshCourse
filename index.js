//speed limit is 70km/hr;
//if driving at or below speed limit, no issues for driver
//for every 5 km/hr over speed limit, driver gets 1 point 
//(so 72 still ok with zero points)
//use Math.floor(can pass float into here)
//if driver gets more than 12 points then their license should be suspended.


console.log(checkSpeed(70)); //expected output 0
console.log(checkSpeed(72)); //expected output 0
console.log(checkSpeed(75)); //expected output 1
console.log(checkSpeed(90)); //expected output 4
console.log(checkSpeed(75.2)); //expected output 1
console.log(checkSpeed(200));  //expected output 26, so shoudl output "License suspended"


//my answer:
function checkSpeed(speed) {
    let points = 0;
    const speedLimit = 70;
    const acceptableSpeed = speedLimit + 4.9;

    while (speed > acceptableSpeed ) {
        points += 1;
        speed -= 5;
    }
    if (points < 13) return points;
    return "License Suspended!";
}


//Mosh answer

console.log(checkSpeedMosh(70)); //expected output 0
console.log(checkSpeedMosh(72)); //expected output 0
console.log(checkSpeedMosh(75)); //expected output 1
console.log(checkSpeedMosh(90)); //expected output 4
console.log(checkSpeedMosh(75.2)); //expected output 1
console.log(checkSpeedMosh(200));  //expected output 26, so shoudl output "License suspended"

function checkSpeedMosh(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok', 0);
        return; 
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) 
        return console.log('License suspended!');
    else  
        return console.log('Points', points);
}