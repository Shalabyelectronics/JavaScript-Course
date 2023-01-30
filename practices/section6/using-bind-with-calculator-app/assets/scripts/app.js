const defaultResult = 0;
let currentResult = defaultResult;
let logEntriesList = [];
let countLog = -1;
const calculationSymbol = {
  ADD: "+",
  SUB: "-",
  MULT: "*",
  DEVID: "/",
};

// You can define your function from any where on your script but it is a good practice to keep them on the top.

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function pushLogEntries(operation, prevResult, number, result) {
  logEntry = {
    operation: operation,
    pervResult: prevResult,
    number: number,
    result: result,
  };
  logEntriesList.push(logEntry);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
  return `${resultBeforeCalc} ${operator} ${calcNum}`;
}

const calculation = (operationKey) => {
  const enteredNumber = getUserNumberInput();
  // console.log(calculationSymbol[operationKey]);
  let calculationDescription = createAndWriteOutput(
    calculationSymbol[operationKey],
    currentResult,
    enteredNumber
  );
  const initResult = currentResult;
  switch (operationKey) {
    case "ADD":
      currentResult += enteredNumber;
      break;
    case "SUB":
      currentResult -= enteredNumber;
      break;
    case "MULT":
      currentResult *= enteredNumber;
      break;
    case "DEVID":
      currentResult /= enteredNumber;
      break;
  }

  outputResult(currentResult, calculationDescription);
  pushLogEntries(operationKey, initResult, enteredNumber, currentResult);
  countLog++;
  console.log(logEntriesList[countLog].operation);
};

addBtn.addEventListener("click", calculation.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculation.bind(this, "SUB"));
multiplyBtn.addEventListener("click", calculation.bind(this, "MULT"));
divideBtn.addEventListener("click", calculation.bind(this, "DEVID"));
