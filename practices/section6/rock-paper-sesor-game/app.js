const startGameBtn = document.getElementById("start-game-btn");
// Because of Hoisting feature we can call function befor its declared
// startGame();

function startGame() {
  console.log("Game starting .....");
}

startGameBtn.addEventListener("click", startGame);

/*


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
