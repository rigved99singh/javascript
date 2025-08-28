// // GLOBAL SCOPE
// var global_variable1 = "greeks";
// let global_variable2 = "rigved";
// const global_variable3 = "singh";
// function check_global_variable() {
//     console.log(global_variable1);
//     console.log(global_variable2);
//     console.log(global_variable3);   
// }
// check_global_variable();

// // function/local scope
// function check_function_scope() {
//     var variable1 = "rigved";
//     let variable2 = "singh";
//     const variable3 = "men"
//     console.log(variable1);
//     console.log(variable2);
   
// }
// check_function_scope();
// console.log(variable3);

// block scope
// {
//     var game_1 = "the";
//     const game_2 = "boss";
//     let x=2;
//     x*=2;
//     console.log(x);
//     console.log(game_2);
        
// }
// console.log(game_1);

// {
//     var game_1 = "the";
//     const game_2 = "boss";
//     let x=2;
//     x*=2;
//     console.log(game_1);
//     console.log(x);
//     console.log(game_2);
       
// }

// // lexical scope
// function outerFunction() {
//     const outerVariable = "hello";
//     function innerFunction() {
//         const innerVariable = "rigved";
//         console.log(`${outerVariable} ${innerVariable}`);
        
//     }
//     innerFunction();
// }
// outerFunction();


//     function multiplier(r) {
//             function multiple() {
//             return r * 4;
//         }
//         return multiple();
//     }
//     console.log(multiplier(4));


 //password vault//
 
 function outerfunction() {
    let secret1 = "123"


    function innerfunction1() {
        let secret2 = "456"
        

         function innerfunction2() {
          let secret3 = "789" 
          console.log(secret2);
          
         }innerfunction2()

    }innerfunction1()
    
 }
 outerfunction()

//  function bank() {
//    let principle = 10000
//    console.log("this is your current amount =", principle);

//    function deposit(d) {
//       return principle + d
//    }
//    console.log("this is your amount after deposit =", deposit());
//    deposit();

//    function withdrawal(w) {
//       return principle + w
//    }
//    console.log("this is your amount after withdrawal =", withdrawal(5000));
//    withdrawal();
//  }
//  bank();

 function bank() {
   let principle = 10000;
   console.log("This is your current amount =", principle);

   function deposit(d) {
      principle += d;
      return principle;
   }
   console.log("This is your amount after deposit =", deposit(5000));

   function withdrawal(w) {
      principle -= w;
      return principle;
   }
   console.log("This is your amount after withdrawal =", withdrawal(2000));
}

bank()
   







