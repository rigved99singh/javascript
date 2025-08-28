// console.log(this);

// function showThis() {
//   console.log(this);
// }

// showThis();

// const userData = {
//   name: "Aquib",
//   age: 22,
//   isAlive: true,
//   address: {
//     country: "India",
//     state: "Delhi",
//     previousAddress: {
//       country: "India",
//       state: "Bombay"
//     }
//   },
//   greet: function() {
//     console.log(`hello ${this.name} from ${this.address.state} who used to live in ${this.address.previousAddress.state}`);
//   }
// };

// userData.greet(); 

function Person(name) {
  this.name = name;
}

const person1 = new Person("Aquib");
console.log(person1.name);