const defaultResult = 0;
let currentResult = defaultResult;

// You can define your function from any where on your script but it is a good practice to keep them on the top.
function add(num1, num2) {
  const result = currentResult + userInput.value;
  let calculationDescription = `${currentResult} + ${userInput.value}`;
  outputResult(result, calculationDescription);
  // Using an alert inside a function is not a good practice
  // alert(result);
  // But is a good practice to add return keyword instead to return the value
  // return result;
}

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Try linebreak
// let errorMessage = "An error \n occurred!";

// Call Add Function
// currentResult = add(5, 5);
// add(50, 50);

// Add event listiner t add button

addBtn.addEventListener("click", add);
