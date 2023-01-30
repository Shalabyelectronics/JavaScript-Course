const showTotalResult = (message, result) => {
  console.log(`${message} ${result}`);
};

const sumNumbers = (showResult, ...numbers) => {
  total = 0;
  for (number of numbers) {
    total += number;
  }
  showResult(total);
};

const subNumbers = (showResult, ...numbers) => {
  total = 0;
  for (number of numbers) {
    total -= number;
  }
  showResult(total);
};

subNumbers(
  showTotalResult.bind(this, "The total result of addition is :"),
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
);
sumNumbers(
  showTotalResult.bind(this, "The total result of addition is :"),
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
);
