// function declaration
function myFunction() {
    console.log("hello");
    
}
myFunction();

function greetins(name){
    console.log("hello, " + name);
    
}
greetins("rigved");

// function with return
function add(a, b) {
    return a + b;
}
let result = add(3, 5);
console.log(result);

// anonymous function
let greet = function(name) {
    return "hello, " + name
};
console.log(greet("rigved"));

// arrow function
let great = name => "hello, " + name;
console.log(great("rigved"));


// local global
let x = 9;
function local () {
    let z = 10;
    console.log(x);
    console.log(z);
    
}
local();
console.log(x);


function add(a, b){
    console.log(a + b);
    
}
add(2, 3);

function add(a, b, c) {
    console.log(a + b + c);
    
}
let p = 3;
let q = 4;
add(p, q, 4)

function add(a, b) {
    return a + b;
}
let m = 34
console.log(add(m, 23));


// arrow function for .sort
let nums = [200, 300, 100];
nums.sort((a, b) => a - b);
console.log(nums);

let fruit = ["apple" , "banana" , "orange"];
fruit.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
    
})