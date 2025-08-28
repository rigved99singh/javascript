// class Animal {
//     speak() {
//         console.log("Animal speaks");
        
//     }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// class Puppy extends Dog {
//   speak() {
//     console.log("Puppy cry");
//   }
// }
// const a = new Animal();
// const d = new Dog();
// const p = new Puppy();
// a.speak(); 
// d.speak(); 
// p.speak(); 

// class Person {
//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`this is ${this.name}, i am ${this.age} years old`);
        
//     }
// }
// class Student extends Person {
//     constructor (name,age,grade) {
//         super (name,age);
//         this.grade = grade;
//     }
//     introduce() {
//         console.log(`${this.grade} is studying`);
        
//     }
// }
// class Mate extends Student {
//     constructor (name,age,grade,pass) {
//         super (name,age,grade);
//         this.pass = this.pass;
//     }
//     study() {
//         console.log(`${this.name} is studying hard to pass: ${this.pass}`);
        
//     }
// }

// const mate1 = new Mate("Rigved", 22, "A", true);
// mate1.greet();
// mate1.introduce();     
// mate1.study();    

// overriding 
// class Animal {
//     speak(){
//         console.log("Animal nol raha hai");
        
//     }
// }
// class  Dog extends Animal {
//     speak(){
//         // super.speak()
//         console.log("bhau bhau");
        
//     }
// }
// let d = new Dog()
// d.speak()

// method overriding using super

// class Person {
//     constructor(name){
//         this.name = name
//         console.log('Person constructor hai');
        
//     }
// }
// class  Student extends Person {
//     constructor(name,rollNo){
//         super(name);
//         this.rollNo = rollNo
//         console.log('Student constructor hai');
        
//     }
// }
// let s1 = new Student ("rigved",105)
// s1.Student

// polymorphism

class Animal {
    speak(){
        console.log("Animal sound...");
        
    }
}
class  Dog extends Animal {
    speak(){
        console.log("bhau bhau");
        
    }
}
class Cat extends Animal {
    speak(){
        console.log("meow meow");
        
    }
}
let a1 = new Dog()
let a2 = new Cat()
a1.speak()
a2.speak()








