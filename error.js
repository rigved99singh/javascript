// try {
//   let result = 10 / 0; // This will not throw an error
//   console.log(result);

//   let person = undefined;
//   console.log(person.name); // This will throw an error
// } catch (error) {
//   console.error("An error occurred:", error.message);
// } finally {
//   console.log("I will run even if there's an error.");
// }

// try {
//   let result = 10 / 0; // This will not throw an error
//   console.log(result);

//   let person = {
//        name: "rigved",
//        age: 20


//   }
//   console.log(person.name); // This will throw an error
// } catch (error) {
//   console.error("An error occurred:", error.message);
// } finally {
//   console.log("I will run even if there's an error.");
// }

//  throwing custom error

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed");
//   }
//   return a / b;
// }

// try {
//   let result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   console.error("Error:", error.message);
// }

//  nested error

// try {
//   try {
//     let result = divide(10, 0);
//   } catch (error) {
//     console.error("Error in inner try block:", error.message);
//   }

//   // Some other code that may throw an error
//   let person = null;
//   console.log(person.name); // This will throw an error
// } catch (error) {
//   console.error("Error in outer try block:", error.message);
// }


// try {
//   let x = y + 10;
// } catch (error) {
//   console.log("error aaya:", error .message);
  
// }


// try {
//   console.log("kaam shuru");
  
// } catch (error) {
//   console.log("catch mein aaya:",error.message);
  
// }finally{
//   console.log("finally block hamesha chalega");
  
// }


//custom//
// function divide (a,b){
//   if (b===0){
//     throw new Error("0 se divide nahi kar sakte hai")
//   }
//   return a/b
// }
// try{
//   let result = divide(10,2)
//   console.log(result);
  
// }catch(error){
//   console.log("error:",error.message);
  
// }

//nested//

// try{
//   try{
//     let result = divide(10,0)
//   }catch(error){
//     console.log("error in inner try block:", error.message);
    
//   }
//   let person = null;
//   console.log(person.name);
//   }catch(error){
//     console.log("error in outer try block:", error.message);
    
//   }
  


// try{
//   console.log("outer try block chalu");
//   try{
//     let a = 10
//     let b= 0
//     if(b===0){
//       throw new Error("0 se divide nahi kar skte hai ")
//     }
//     console.log(a/b);
    
//   }catch(innerError){
//     console.log("innerError handle hua hai:",innerError.message);
    
//   }
//   let arr = [1,2,3,4,5,6,7]
//   console.log(arr[7].toString())
  
// }catch(outerError){
//   console.log("outer error handle hua hai:",outerError.message);
  
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'ValidationError';
//   }
// }

// function validateAge(age) {
//   if (age < 18) {
//     throw new ValidationError('Age must be at least 18');
//   }
//   return true;
// }

// try {
//   validateAge(15);
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.error('Validation Error:', error.message);
//   } else {
//     console.error('General Error:', error.message);
//   }
// }

// custom class error
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyCustomError';
  }
}

function divide(a,b) {
  if (b === 0) {
    throw new MyCustomError('o se divide nhi hoga');
  }
  return a/b;
}

try {
  let result = divide(10,0)
} catch (error) {
  if (error instanceof MyCustomError) {
    console.error('custom error aayega', error.message);
  } else {
    console.error('kuch aur aayega', error.message);
  }
}
