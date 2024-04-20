
var chemMarks = document.querySelector('#chem-marks')
var phyMarks = document.querySelector('#phy-marks')
var mathMarks = document.querySelector('#math-marks')
var comMarks = document.querySelector('#com-marks')
var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')


function calculatePercentage() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);

    var totalMarks = 400;
    var obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;


    if (studentPercentage >= 101) {
        grade.innerHTML = 'Try Again!'
    } else if (studentPercentage >= 90) {
        grade.innerHTML = 'A<sup>1+</sup>'
    } else if (studentPercentage >= 80) {
        grade.innerHTML = 'A<sup>1</sup>'
    } else if (studentPercentage >= 70) {
        grade.innerHTML = 'A'
    } else if (studentPercentage >= 60) {
        grade.innerHTML = 'B'
    } else if (studentPercentage >= 50) {
        grade.innerHTML = 'C'
    } else if (studentPercentage >= 40) {
        grade.innerHTML = 'D'
    } else {
        grade.innerHTML = 'FAIL'
    }
}
