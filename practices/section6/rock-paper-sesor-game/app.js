const startGameBtn = document.getElementById("start-game-btn");

const availableChoices = {
  1: "rock",
  2: "paper",
  3: "scissors",
  4: "Random",
};
let isStarting = false;
// Because of Hoisting feature we can call function befor its declared
// startGame();
const getRandomChoice = () => {
  let randomNum = Math.round(Math.random() * 10);
  while (true) {
    if (randomNum > 0 && randomNum < 4) {
      // console.log(`Our Randomly choice for you is ${availableChoices[randomNum]}`);
      return availableChoices[randomNum];
    }
    randomNum = Math.round(Math.random() * 10);
  }
};
const getUserInput = () => {
  const userChoose = prompt(
    "Please Choose from 1 to 4 Only\n(1) for rock,\n(2) for paper,\n(3) for scissors or\n(4) for random."
  );
  // console.log(userChoose, "Print user choice");
  const result = availableChoices[userChoose] ? userChoose : userChoose;
  // console.log(result, "print result");
  if (result < 4) {
    // console.log(`Your choice is ${availableChoices[userChoose]}`);
    return availableChoices[userChoose];
  } else if (result == 4) {
    return getRandomChoice();
  } else {
    alert(`You can't choose (${userChoose}) : Please Choose Wisly!!!`);
    getUserInput();
  }
};

const getComputerChoice = () => {
  const computerChoice = getRandomChoice();
  // console.log(`Computer choice is ${computerChoice}`);
  return computerChoice;
};

const checkWinner = (user, computer) => {
  if (
    (user === "paper" && computer === "rock") ||
    (computer === "paper" && user === "rock")
  ) {
    if (user === "paper" && computer === "rock") {
      alert(
        `User Won: because User choose ${user} and Computer choose ${computer}`
      );
    } else {
      alert(
        `Computer Won: because Computer choose ${computer} and User choose ${user}`
      );
    }
  } else if (
    (user === "paper" && computer === "scissors") ||
    (computer === "paper" && user === "scissors")
  ) {
    if (user === "scissors" && computer === "paper") {
      alert(
        `User Won: because User choose ${user} and Computer choose ${computer}`
      );
    } else {
      alert(
        `Computer Won: because Computer choose ${computer} and User choose ${user}`
      );
    }
  } else if (
    (user === "rock" && computer === "scissors") ||
    (computer === "rock" && user === "scissors")
  ) {
    if (user === "rock" && computer === "scissors") {
      alert(
        `User Won: because User choose ${user} and Computer choose ${computer}`
      );
    } else {
      alert(
        `Computer Won: because Computer choose ${computer} and User choose ${user}`
      );
    }
  } else {
    alert(`It is Draw!!!`);
  }
  isStarting = false;
};

const startGame = () => {
  isStarting = true;
  console.log("Game starting .....");
  const userChoice = getUserInput();
  const computerChoice = getComputerChoice();
  console.log(`User Input ${userChoice}\nComputer Choice ${computerChoice}`);
  checkWinner(userChoice, computerChoice);
};

startGameBtn.addEventListener("click", () => {
  if (!isStarting) {
    startGame();
  } else {
    alert("Game Already started!!!");
  }
});

function test() {
  const testList = ["paper", "rock", "scissors"];
  for (let i = 0; i < 10000; i++) {
    let isUndefined = getRandomChoice();
    if (!isUndefined) {
      console.log(`${isUndefined}`);
      break;
    } else if (testList.includes(isUndefined)) {
      console.log("All fine");
    }
  }
}

/*
// 

**The different between statment and expression that statment need to state what you are going to do on other hand expression is when we assigned to avalue or assign to statment that yield us a value

** Function is an Object and by using console.dir you check what stored inside of it.
 console.dir(startGame);


// Method is a function withen an Object as below

const yourName = {
  ownerName: "Shalaby",
  greatMe: function greatMe(userName) {
    userName = true ? userName : "buddy";
    console.log(`Hi ${userName} I'm ${this.ownerName} `);
  },
};
// greatme is a method 
yourName.greatMe("samer");


*/
