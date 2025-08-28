// setInterval(() => {
//   let time = new Date().toLocaleTimeString();
//   console.log(time);
// }, 1000);
// setInterval(() => {
//   console.log("Hello world");
// }, 2000);


// let myInterval = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// // 5 second baad band karo
// setTimeout(() => {
//   clearInterval(myInterval);
//   console.log("Band kar diya");
// }, 5000);


let myInterval = setInterval(()=>{
    console.log("Hello World");
    
},1000);
setTimeout(()=>{
    clearInterval(myInterval);
    console.log("stop");
    
},5000);