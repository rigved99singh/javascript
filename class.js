// class Person {
//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`this is ${this.name}, i am ${this.age} years old`);
        
//     }
// }
// const Person1 = new Person("rigved",25)
// Person1.greet()


// extend class
class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`this is ${this.name}, i am ${this.age} years old`);
        
    }
}
class Student extends Person {
    constructor (name,age,grade) {
        super (name,age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying`);
        
    }
}
const Student1 = new Student("rigved",25,"A")
Student1.greet();
Student1.study();

// super keyword
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // Call the constructor of the superclass
//     this.grade = grade;
//   }

//   greet() {
//     super.greet(); // Call the greet method of the superclass
//     console.log(`I am in grade ${this.grade}.`);
//   }
// }

// const student1 = new Student("Aquib", 22, 'A');
// student1.greet(); 

//  example
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Call the constructor of the superclass (Animal)
//     this.breed = breed;
//   }

//   speak() {
//     super.speak(); // Call the speak method of the superclass
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog1 = new Dog("Chhotu", 'German Shepherd');
// dog1.speak();

// static
// class MathUtil {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(MathUtil.add(5, 7));


