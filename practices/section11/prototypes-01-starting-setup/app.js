// class Person {
//   name = "Shalaby";
//   constructor() {
//     this.age = 30;
//   }

//   greeting() {
//     console.log(`Hi I am ${this.name} and I'm ${this.age} years old.`);
//   }
// }

function Person() {
  this.name = "Shalaby";
  this.age = 39;
  this.greeting = () => {
    console.log(`Hi I am ${this.name} and I'm ${this.age} years old.`);
  };
}

const test = new Person();
test.greeting();
