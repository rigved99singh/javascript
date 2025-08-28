// const input = document.getElementById('textInput')
// const output = document.getElementById('output')
// input.addEventListener("keyup",function(event){
//     output.textContent = `you release the "${event.key}" key.`;
// })

let intput = document.getElementById("text")
let output = document.getElementById("output")
intput.addEventListener("keyup",function(event){
    output.textContent=`You release "${event.key}"key.`;
})