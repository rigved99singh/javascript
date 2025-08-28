const fruits = ["apple","banana"];
const moreFruits = [...fruits,"mango","orange"];
console.log(moreFruits);

// array clone krna (copy)
const original = [1,2,3];
const copy = [...original];
console.log(copy);

// function argument
function sum(a,b,c) {
    return a + b + c;
}
const numbers = [5,10,15];
console.log(sum(...numbers));

// object spread
const user = {name:"rigved", age: 25};
const updatedUser = {...user,city:"raipur"};
console.log(updatedUser);




