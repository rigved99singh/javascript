// let demoElement = document.getElementById('demo')
// demoElement.innerHTML = "HELLO JAVASCRIPT !"
// demoElement.style.color = "green"

// let classElement = document.getElementsByClassName('class')
// for(let i=0; i<classElement.length; i++){
//     classElement[i].style.color = "red"
// }

// let firstExampleElement = document.querySelector('.element');
// firstExampleElement.textContent = 'first example changed';

// let secondExampleElement = document.querySelector('.class');
// secondExampleElement.textContent = 'second example changed';


let paragraph = document.querySelectorAll('p')
paragraph.forEach (p => {
    let words = p.innerText.split(" ")
    if (words.length >= 3) {
        let firstThree = `<span style ="color:blue">${words[0]}${words[1]}${words[2]}</span>`
        let rest = words.slice(3).join(" ");
        p.innerHTML = `${firstThree} ${rest}`

    }
})






