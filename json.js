// json with string
// const person = {
//     name: "aquib",
//     age: 20,
//     country: "India"
// };
// const jsonString = JSON.stringify(person);
// console.log(jsonString);


// json with parses
const jsonString = '{"name":"Aquib","age":22,"country":"India"}';

const person = JSON.parse(jsonString);
console.log(person.name); 
console.log(person.age);  
console.log(person.country); 
