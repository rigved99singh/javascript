const a = [1, 2, 3, 4, 5, 6, 7];


const b = a.find((element) => {
    return element % 2 == 0;
});


const c = a.find((element) => {
    return element % 9 == 0;
});

console.log(b); 
console.log(c); 

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
const g = students.find((element) => {
    return element.marks < 50;
});

console.log(g);
