const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculator(operationName) {
  if (
    operationName === "ADD" ||
    operationName === "SUBTRACT" ||
    operationName === "MULTIPLY" ||
    operationName === "DIVIDE"
  ) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operationSympol;
    if (operationName === "ADD") {
      currentResult += enteredNumber;
      operationSympol = "+";
    } else if (operationName === "SUBTRACT") {
      currentResult -= enteredNumber;
      operationSympol = "-";
    } else if (operationName === "MULTIPLY") {
      currentResult *= enteredNumber;
      operationSympol = "*";
    } else if (operationName === "DIVIDE") {
      currentResult /= enteredNumber;
      operationSympol = "/";
    }
    console.log("What happening");
    createAndWriteOutput(operationSympol, initialResult, enteredNumber);
    writeToLog(operationName, initialResult, enteredNumber, currentResult);
  } else {
    createAndWriteOutput("?", "?", "?");
  }
}

function add() {
  calculator("ADD");
}

function subtract() {
  calculator("SUBTRACT");
}

function multiply() {
  calculator("MULTIPLY");
}

function divide() {
  calculator("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
