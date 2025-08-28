// let element = document.getElementById('demo')
// // .style.color = "yellow"
// //         // let element1 = document.getElementsByClassName('if')
// //         // for (let i = 0; i < element1.length; i++){
// //         //     element1[i].style.color = "green"
// //         // }
// element.addEventListener("click", function(){
//     let currentColor = element.style.color;
//     if (currentColor === "red"){
//         element.style.color = "blue";
//     } else{
//         element.style.color = "red";
//     }
// }
// );
// let element2 = document.getElementsByClassName('if')
// element2.addEventListener("click", function(){
//     let currentColor1 = element2.style.color;
//     if (currentColor1 === "red"){
//         element2.style.color = "blue";
//     } else{
//         element2.style.color = "red";
//     }
// }
// );

let rigved= document.getElementsByTagName('p')
for (let i = 0; i < rigved.length; i++){
    rigved[i].style.color = "red"
}