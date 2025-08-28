// // for loop-using for loop calculate the sum of number from 1 to 10
// a = 1
// sum = 0
// for (a = 1;a <= 10;a++){
//     sum = sum + a;  
//     console.log(sum);
// }

// // while loop
// while(a <= 10){
//     sum = sum + a;
//     console.log(sum);
//     a++;
    
// }

// // do loop
// do{
//     sum = sum +a;
//     console.log(sum);
//     a++;
    
// } while(a <= 10);

// using break
i = 0;
do {
    if(i == 3) {
        break;
    }
    console.log(i);
    i++;   
}while (i < 5);

// continue
for(i = 0; i < 5; i++){
    if (i == 3){
        continue;
    }
    console.log(i);
    
}

// while loop
while (i < 5){
    if (i == 3){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// do while
do {
    if (i == 3){
        i++;
        continue;
    }
    console.log(i);
    i++;
} while (i < 5)