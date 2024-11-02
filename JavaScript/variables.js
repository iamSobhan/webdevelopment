// Variables

 var x = 5;  // Can be re-assigned, function-scoped
 var b = 6;
 var c = x+b;
 document.write("The Result is" + "=" +c);

 let y = 20; // Can be re-assigned, block-scoped
 const z = 30; // Cannot be re-assigned

// Data Types
// 1.Primitive Data Types
// Number

 let age = 25; 
 let price = 99.99;

// String

 let name = "John";
 let greeting = "Hello, ${name}!";

// Boolean

 let isOpen = true;

// Null 

 let result = null;

// Undefined

 let score;
 console.log(score);

// Symbol
 let symbol1 = Symbol("symbol1");

// BigInt

 let bigNumber = BigInt(1234567890123456789012345678901234567890);


//2.Object Data Type

 let person = {
    name: "Ribu",
    age: 28
  };
  console.log(person.name); 

  // Array

   let numbers = [1, 2, 3, 4];
     console.log(numbers[1]); 
     
// Function

 function greet() {
    return "Hello!";
  }
  

  // Type Checking 

  let age = 25;
  console.log(typeof age);

  let name = "Ribu";
  console.log(typeof name);

  let isAvailable = true;
  console.log(typeof isAvailable); 

  //Type Conversion

  console.log("5" + 5); // "55" (string concatenation due to implicit type conversion)

  let num = "123";
  console.log(Number(num)); 
  

  




