// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed!");
//   }
// });
// myPromise.then((message) => {
//   console.log(message); // Output: Operation was successful!
// });

// 2nd example
// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Change to false to test rejection

//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message); // Output if success: Operation was successful!
//   })
//   .catch((error) => {
//     console.error(error); // Output if failure: Operation failed!
//   });

// 3rd exaple
  const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched
    return "Processing data";
  })
  .then((processMessage) => {
    console.log(processMessage); // Output: Processing data
    return "Data processed";
  })
  .then((finalMessage) => {
    console.log(finalMessage); // Output: Data processed
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("All operations completed"); // Output: All operations completed
  });


//   real exaple
function orderPizza () {
    return new Promise(function(res, rej) {
        setTimeout(() => {
            const pizza = "pizza";
            res(pizza);
            rej("An error occured while ordering pizza.")
        }, 2000);
    });
}

const pizzaPromise = orderPizza();

pizzaPromise.then((pizza) =>{
    console.log(`my ${pizza} has been ordered.`)
}).catch(error => {
    console.log(error)
}) // Output: My pizza has been ordered.



