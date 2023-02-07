/*
Create an array of numbers (of your choice) and perform three array operations on it: filter for numbers greater than 5, map every number to an object which holds the number on some property (e.g. "num") and reduce the array to a single number (the multiplication of all numbers).
*/

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 66, 9, 87];
const greaterThanFive = numsArr.filter((num) => num > 5);
const createObjNums = numsArr.map((num) => ({ number: num }));
const sumNums = numsArr.reduce((a, b) => a + b);
const multiNums = numsArr.reduce((a, b) => a * b);
// console.log(greaterThanFive);
// console.log(createObjNums);
// console.log(sumNums);
// console.log(multiNums);

/*
Write a function ("findMax") which executes some logic that finds the largest number in a list of arguments. Pass the array from task 1 split up into multiple arguments to that function.
*/

const findMax = (anyArr) => {
  anyArr.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else if (a > b) {
      return -1;
    }
  });
  return anyArr[0];
};

// console.log(findMax(numsArr));

/*
Tweak the "findMax" function such that it finds both the minimum and maximum and returns those as an array. Then use destructuring when calling the function to store the two results in separate constants.
*/
const findMaxTweak = (anyArr) => {
  anyArr.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else if (a > b) {
      return -1;
    }
  });
  return [anyArr[0], anyArr[anyArr.length - 1]];
};

const [largestNum, smallestNum] = findMaxTweak(numsArr);

// console.log(findMaxTweak(numsArr));
// console.log(largestNum);
// console.log(smallestNum);

/* 
Create a list (and possibly some surrounding logic) where you ensure that NO duplicate values can be added. Use whichever approach seems appropriate to you.
*/

const uniqeValue = Array.from(new Set(numsArr));

console.log(uniqeValue);
