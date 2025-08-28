function greet(name,callback) {
    console.log("hello" + name);
    callback();
}
function sayBye() {
    console.log('Goodbye!');
    
}
greet("Rigved",sayBye)

// asynchronous 1st ex
console.log("1");
setTimeout(() => {
    console.log("2");
    
},2000);
console.log("3");

// 2nd example
function delayedGreeting(name,callback) {
    setTimeout(() => {
    console.log(`Hello,${name}!`);
    callback();
},2000);
}
function notify() {
    console.log("Greeting completed");
    
}
delayedGreeting("Rigved",notify);

// using anonymous function as callback
setTimeout(function(){
    console.log("Timer done");
    
},2000);

// 2nd example
function processArray(arr,callback) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr
}
const numbers = [1,2,3,4];
const doubled = processArray(numbers,function(num){
    return num * 2
});
console.log(doubled);

// call back hell
console.log("Start");

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);



