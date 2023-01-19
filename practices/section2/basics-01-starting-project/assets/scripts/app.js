const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  // Using an alert inside a function is not a good practice
  // alert(result);
  // But is a good practice to add return keyword instead to return the value
  return result;
}

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// Try linebreak
// let errorMessage = "An error \n occurred!";

// Call Add Function
currentResult = add(5, 5);
add(50, 50);

outputResult(currentResult, calculationDescription);
