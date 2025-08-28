let fruit = ["apple", "banana","orange"]
console.log(fruit);

console.log(fruit[1]);
console.log(fruit.length);
fruit.push("grapes");
console.log(fruit);
fruit.unshift("kiwi");
console.log(fruit);

let lastfruit = fruit.pop();
console.log(fruit);
console.log(lastfruit);
fruit.shift();
console.log(fruit);

fruit.sort();
console.log(fruit);

let number = [34,1,89];
number.sort();
console.log(number);
console.log(number.includes(54));
// console.log(fruit.indexOf("apple"));

let removed = fruit.splice(1,1);
console.log(fruit);
console.log(removed);
fruit.splice(1,0,"mango");
console.log(fruit);

let userData = {
    name: "riggi",
    age: 18,
    country: "India"
} 
console.log(userData);
console.log(userData.name);
userData.job = "rigved";
console.log(userData);
userData.age = 21;
console.log(userData);
delete userData.country;
console.log(userData);

let nameData = {
    naam: "riggi",
    umar: 18,
    desh: "India"
}
 for(let key in nameData){
console.log(`${key}:${nameData[key]}`);

}

let utensils = ["pencil", "rubber","scale"]
for(let index in utensils){
console.log(`${index}:${utensils[index]}`);

}





















