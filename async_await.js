// async
//  async function greet() {
//     return "Hello, World!";
//  }
//  greet().then((message) => console.log(message));
 

// await
// let result = await Promise;

// function delay(ms) {
//     return  new Promise((resolve)=>setTimeout(resolve,ms));
// }
// async function sayHello(){
//     console.log("start");
//     await delay(2000);
//     console.log("hello");
//     console.log("end");
    
    
// }
// sayHello()

// combine
function getCheese() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("🧀");
        }, 1000);
    });
}

function getDough(cheese) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${cheese} 🫓`);
        }, 2000);
    });
}

function getPizza(dough) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${dough} 🍕`);
        }, 2000);
    });
}

async function orderPizza() {
    const cheese = await getCheese();
    const dough = await getDough(cheese);
    const pizza = await getPizza(dough);

    return `Here is your ${pizza}`;
}

orderPizza().then((pizza) => {
    console.log(pizza);
}) // Output: (after 5 seconds) Here is your 🧀 🫓 🍕



