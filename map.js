const a = [1, 2, 3, 4, 5, 6, 7];

const b = a.map((element) => {
    return element * element;
});
console.log(b);

const students = [
    {
        name: "a",
        marks: 20
    }, {
        name: "b",
        marks: 84
    }, {
        name: "c",
        marks: 39
    }, {
        name: "d",
        marks: 68
    }, {
        name: "e",
        marks: 90
    }, 
];
const isStudentPassed = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false
    } else {
        element.isPassed = true
    }
    return element
});

console.log(isStudentPassed);


