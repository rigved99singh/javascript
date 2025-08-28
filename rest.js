function sum(...numbers) {
    console.log(numbers);
    
}
sum(10,20,30)

// fixed + rest combination
function show(a,b,...rest) {
    console.log("a:",a);
    console.log("b:",b);
    console.log("rest:",rest);
    
}
show(5,10,15,20,25);

// destructuring 
const [first,...others] = [100,200,300,400];
console.log(first);
console.log(others);

