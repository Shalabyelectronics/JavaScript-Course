const startGameBtn = document.getElementById("start-game-btn");
// Because of Hoisting feature we can call function befor its declared
// startGame();

function startGame() {
  console.log("Game starting .....");
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
