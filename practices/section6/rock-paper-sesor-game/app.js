const startGameBtn = document.getElementById("start-game-btn");
// Because of Hoisting feature we can call function befor its declared
// startGame();

function getUserInput() {
  const availableChoices = {
    1: "rock",
    2: "paper",
    3: "scissors",
    4: "Random",
  };
  const userChoose = parseInt(
    prompt(
      "Please Choose from 1 to 4 Only\n(1) for rock,\n(2) for paper,\n(3) for scissors or\n(4) for random."
    )
  );
  console.log(userChoose, "Print user choice");
  const result = availableChoices[userChoose] ? userChoose : 10;
  console.log(result, "print result");
  if (result < 4) {
    console.log(`Your choice is ${availableChoices[userChoose]}`);
  } else if (result === 4) {
    let randomNum = Math.round(Math.random() * 10);
    while (true) {
      if (randomNum > 0 && randomNum < 4) {
        console.log(
          `Our Randomly choice for you is ${availableChoices[randomNum]}`,
          randomNum
        );

        break;
      }
      randomNum = Math.round(Math.random() * 10);
    }
  } else {
    console.log("Please Choose Wisly!!!");
  }
}

function startGame() {
  console.log("Game starting .....");
  getUserInput();
}

startGameBtn.addEventListener("click", startGame);

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
