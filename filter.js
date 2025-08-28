const a = [1, 2, 3, 4, 5, 6, 7];

const b = a.filter((element) => {
    return element % 2 == 0;
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
// const e = students.filter((element) => {
// //     return element.marks < 50;
// // });

// console.log(e);
const f = students.filter((element) => {
    return element.marks > 50;
});

console.log(f);

