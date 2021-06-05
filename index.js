//Exercise 9 - grade 

// take an array of grades
// find average of array
// if average of grades comes to:
// 1-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

// const marks  = [80, 80, 50]

console.log(calculateGrade([100,95,98])); //outcome should be 97.6, so A should be grade
console.log(calculateGrade([80,100,70])); //outcome should be 83.33, so B should be grade
console.log(calculateGrade([80,80,50])); //outcome should be 70, so C should be grade
console.log(calculateGrade([20,70,100])); //outcome should be 63.3, so D should be grade
console.log(calculateGrade([0,0,0])); //outcome should be 0, so F should be grade

//my answer: 

function calculateGrade(marks) {
    let grade = 0;

    for (let mark of marks) grade += mark; 

    grade /= marks.length;
    
    if (grade >= 90 && grade <= 100) return "A";
    else if (grade >= 80 && grade < 90) return "B";
    else if (grade >= 70 && grade < 80) return "C";
    else if (grade > 59 && grade < 70) return "D";
    else return "F";
}


console.log(calculateGradeMosh([100,95,98])); //outcome should be 97.6, so A should be grade
console.log(calculateGradeMosh([80,100,70])); //outcome should be 83.33, so B should be grade
console.log(calculateGradeMosh([80,80,50])); //outcome should be 70, so C should be grade
console.log(calculateGradeMosh([20,70,100])); //outcome should be 63.3, so D should be grade
console.log(calculateGradeMosh([0,0,0])); //outcome should be 0, so F should be grade


function calculateGradeMosh(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum/ marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';  
    return 'A';
}

//even better, extract some of the work into a separate function:
console.log(calculateAverageMosh2([100,95,98])); //outcome should be 97.6, so A should be grade
console.log(calculateAverageMosh2([80,100,70])); //outcome should be 83.33, so B should be grade
console.log(calculateAverageMosh2([80,80,50])); //outcome should be 70, so C should be grade
console.log(calculateAverageMosh2([20,70,100])); //outcome should be 63.3, so D should be grade
console.log(calculateAverageMosh2([0,0,0])); //outcome should be 0, so F should be grade


function calculateAverage(array) {
    let sum = 0;
    for (let num of array)
        sum += num;
    return sum/ array.length;
}

function calculateAverageMosh2(array) {
    let average = calculateAverage(array);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';  
    return 'A';
}


