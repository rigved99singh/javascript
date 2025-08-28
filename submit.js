// const form = document.getElementById("subscribeForm")
// const message = document.getElementById("message")
// form.addEventListener("submit", function(event){
//     event.preventDefault
//     const email = document.getElementById("email").ariaValueMax;
//     message.textContent = `thanks for subscribing with ${email}!`;
// })

const select = document.getElementById("country")
const display = document.getElementById("selection")
select.addEventListener("change", function(){
    display.textContent = `Selected Country : ${select.value}`;
})

// const input = document.getElementById("username")
// const output = document.getElementById("output")
// input.addEventListener("change", function(){
//     output.textContent = `You Entered : ${input.value}`;
// })