const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// You can define your function from any where on your script but it is a good practice to keep them on the top.

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function showResultLog() {
  return logEntries;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
  return `${resultBeforeCalc} ${operator} ${calcNum}`;
}
function add() {
  // ----------------------------------------
  // To Check the type of data stored in variable
  // console.log(typeof userInput.value);
  // ----------------------------------------

  // ----------------------------------------
  // Don't repeat the same code everywhere and it is better to define the code the repetitive used
  // ----------------------------------------
  const enteredNumber = getUserNumberInput();
  // so You need just to edit  getUserNumberInput function and it will change every where
  let calculationDescription = createAndWriteOutput(
    "+",
    currentResult,
    enteredNumber
  );
  currentResult += enteredNumber;
  outputResult(currentResult, calculationDescription);
  logEntries.push(currentResult);
  // Using an alert inside a function is not a good practice
  // alert(result);
  // But is a good practice to add return keyword instead to return the value
  // return result;
}

function substract() {
  const enteredNumber = getUserNumberInput();
  let calculationDescription = createAndWriteOutput(
    "-",
    currentResult,
    enteredNumber
  );
  currentResult -= enteredNumber;
  outputResult(currentResult, calculationDescription);
  logEntries.push(currentResult);
}
function multiplay() {
  const enteredNumber = getUserNumberInput();
  let calculationDescription = createAndWriteOutput(
    "*",
    currentResult,
    enteredNumber
  );
  currentResult *= enteredNumber;
  outputResult(currentResult, calculationDescription);
  logEntries.push(currentResult);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  let calculationDescription = createAndWriteOutput(
    "/",
    currentResult,
    enteredNumber
  );
  currentResult /= enteredNumber;
  outputResult(currentResult, calculationDescription);
  logEntries.push(currentResult);
}

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Try linebreak
// let errorMessage = "An error \n occurred!";

// Call Add Function
// currentResult = add(5, 5);
// add(50, 50);

// Add event listiner t add button

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiplay);
divideBtn.addEventListener("click", divide);
