// function greet(name = "guest") {
//     return `Hello, ${name}!`; 
// }
// console.log(greet());

// function calculateBill(amount, tax=0.05) {
//     return amount + (amount * tax)
// }
// console.log(calculateBill(100));
// console.log(calculateBill(100,0.1));

function show(message = "default message") {
    console.log(message);
    
}
// show(undefined)
show(null)