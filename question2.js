// 1.Create an array: How would you create an array in JavaScriptcontaining the numbers 1 through 5?
let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}

console.log(numbers);

let num = [1,2,3,4,5];
console.log(num);


// Access elements: How do you access the second element of an array?
console.log(num[1]);

// Iterate through an array: Write code to print each element of an array to the console.
let numm = [1,2,3,4,5];
for (let i = 0; i < numm.length;i++) {
    console.log(`index: ${i}, vlaue: ${numm[i]}`);
}

// Add/Remove elements: How do you add a new element to the beginning/end of an array? How do you remove the last element?
numm.push(6);
numm.splice(1,1);
console.log(numm);

// Array length: How do you determine the number of elements in an array?

console.log(numm.length);

