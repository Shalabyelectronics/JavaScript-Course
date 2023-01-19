const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert(result);
}

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// Try linebreak
// let errorMessage = "An error \n occurred!";

// Call Add Function
add(5, 5);
add(50, 50);

outputResult(currentResult, errorMessage);
