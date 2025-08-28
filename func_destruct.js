// const UserData = {
//     name: "rigved",
//     age: 25,
// }
// const { name,age} = UserData

// function display({name,age}){
//     console.log(`name: ${name}`);
    
// }

// display(UserData);

let diagonal
const ratios = {
    side: 2,
    area: 4,
}
const{side,area} = ratios

function finddiagonal({side,area}) {
    console.log(`SIDE: ${side}, AREA: ${area}`);
    diagonal = side * 1.41421356
    console.log("DIAGONAL: ", diagonal);
    
    
}
finddiagonal(ratios)
