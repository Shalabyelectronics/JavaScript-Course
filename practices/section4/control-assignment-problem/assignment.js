const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// Q1
/*
In the attached code assignment.js, you find a variable that holds a random number between 0 and 1. Write code that shows an alert (with any message) when that number is greater than 0.7.
*/
// try one
function quetion1() {
  while (true) {
    let randomValue = Math.random();
    if (randomValue > 0.7) {
      alert(`Done the Value that greater than 0.7 is ${randomValue}`);
      break;
    }
  }
}

// Q2
/*
Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.
*/
// try one
function quetion2() {
  let listOfNum = [];
  for (let i = 0; i < 10; i++) {
    listOfNum.push(Math.round(Math.random() * 10));
  }
  for (const num of listOfNum) {
    console.log(num);
  }
  console.log("Another Way to Loop throw List using Classic Loop");
  for (let x = 0; x < listOfNum.length; x++) {
    console.log(listOfNum[x]);
  }
  console.log("All Done");
  return listOfNum;
}
// Q3
/*
Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
*/
// try one

function quetion3(list) {
  for (let i = list.length; i >= 0; i--) {
    console.log(list[i]);
  }
}
/*
const list = quetion2();
console.log("----------------------");
quetion3(list);
*/
// -------------------------------------
// Q4
/*
Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
*/
// try one
function quetion4() {
  let firstRandomNum;
  let secondRandomNum;
  while (true) {
    firstRandomNum = Math.trunc(Math.random() * 10);
    secondRandomNum = Math.trunc(Math.random() * 10);
    if (
      (firstRandomNum > 0.7 && secondRandomNum > 0.7) ||
      firstRandomNum < 0.2 ||
      secondRandomNum < 0.2
    ) {
      alert(
        `First number is (${firstRandomNum})\nsecond number is (${secondRandomNum})`
      );
      break;
    }
  }
}

// quetion4();
