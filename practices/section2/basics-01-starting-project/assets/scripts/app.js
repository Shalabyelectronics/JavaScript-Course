const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// Try linebreak
// let errorMessage = "An error \n occurred!";

outputResult(currentResult, errorMessage);
