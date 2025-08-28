// const Userdata = {
//     name: "rigved",
//     age: 25,
//     education: "graduate",
// }

// const{name,age,education} = Userdata

// console.log(name);
// console.log(age);
// console.log(education);

const Info = {
    firstname: "rigved",
    lastname: "singh",

    age: {
        birthyear: 1999,
        birthmonth: 11,
    }
}

const { firstname,
    lastname,
    age: {
        birthyear,
        birthmonth,
    }

} = Info

console.log(birthmonth);


