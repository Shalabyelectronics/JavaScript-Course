function sayHello(name) {
  console.log("Hi " + name);
}

sayHello("Ali");

// Task 1 :
/*
Re-write the function you find in assignment.js as an arrow function.
*/
const sayHelloArrow = (name) => console.log("Hi " + name);

sayHelloArrow("Shalaby");

// Task 2 :
/*
Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
*/

const sayHelloArrow1 = (sayTo, name) => console.log(`${sayTo} ${name}.`);
const sayHelloArrow2 = () => console.log(`Hello World!`);
const sayHelloArrow3 = () => `Hello World!`;

sayHelloArrow1("Bye", "Shalaby");
sayHelloArrow2();
console.log(sayHelloArrow3());

// Task 3 :
/*
Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
*/
const sayHelloArrow4 = (sayTo = "Hi", name = "Buddy.") =>
  console.log(`${sayTo} ${name}.`);
sayHelloArrow4();

// Task 4 :
/*
// Task 3 :
/*
Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.
*/

const checkInput = (...inputs) => {
  if (inputs.length) {
    return inputs;
  } else {
    const checker = () => "string is Empty";
    return checker();
  }
};

console.log(checkInput());
