const ATTACK_PLAYER_AMOUNT = 10;
const ATTACK_MONSTER_AMOUNT = 14;
const STRONG_ATTACK_AMOUNT = 17;
const HEAL_AMOUNT = 20;
const ATTACK_MODE = "ATTACK";
const STRONG_ATTACK_MODE = "STRONG_ATTACK";
const PLAYER_ATTACK_EVENT = "PLAYER_ATTACK";
const PLAYER_STRONG_ATTACK_EVENT = "PLAYER_STRONG_ATTACK";
const MONSTER_ATTACK_EVENT = "MONSTER_ATTACK";
const PLAYER_HEAL_EVENT = "PLAYER_HEAL";
const GAME_OVER = "GAME_OVER";

function getMaxLife() {
  let chosenMaxLife = parseInt(
    prompt("Please chose a max life for a player and a Monster ?", "100")
  );
  if (chosenMaxLife <= 0 || isNaN(chosenMaxLife)) {
    throw "Not Valid number!!!";
  }
  return chosenMaxLife;
}
let chosenMaxLife;
try {
  chosenMaxLife = getMaxLife();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
} finally {
  console.log("Continue playing>");
}
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let bonusLife = true;
let initPlayerLife;
let totalLogList = [];

function battelLogHistory(
  event,
  finalMonsterHeath,
  finalPlayerHeath,
  target,
  value
) {
  const logData = {
    event: event,
    finalMonsterHeath: finalMonsterHeath,
    finalPlayerHeath: finalPlayerHeath,
    value: value,
  };
  if (target) {
    logData.target = target;
  }
  totalLogList.push(logData);
}

adjustHealthBars(chosenMaxLife);

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function roundEnd() {
  initPlayerLife = currentPlayerHealth;
  const playerDamegeAmount = dealPlayerDamage(ATTACK_MONSTER_AMOUNT);
  currentPlayerHealth -= playerDamegeAmount;
  let whoWon;

  if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
    whoWon = "Player Won";
    alert("Player WON!");
  } else if (
    currentMonsterHealth > 0 &&
    currentPlayerHealth <= 0 &&
    !bonusLife
  ) {
    whoWon = "Monster Won!";
    alert("Monster WON!");
  } else if (
    currentMonsterHealth > 0 &&
    currentPlayerHealth <= 0 &&
    bonusLife
  ) {
    alert("You Have a Bouns Life>");
    bonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initPlayerLife;
    increasePlayerHealth(initPlayerLife);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    whoWon = "Draw No One Won!";
    alert("There is a Draw Fight Again!");
  } else {
    battelLogHistory(
      MONSTER_ATTACK_EVENT,
      currentMonsterHealth,
      currentPlayerHealth,
      "",
      playerDamegeAmount
    );
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    battelLogHistory(
      GAME_OVER,
      currentMonsterHealth,
      currentPlayerHealth,
      "",
      whoWon
    );
    reset();
  }
}

function attackAmount(mode) {
  let damageAmount =
    mode === ATTACK_MODE ? ATTACK_PLAYER_AMOUNT : STRONG_ATTACK_AMOUNT;
  let event =
    mode === ATTACK_MODE ? PLAYER_ATTACK_EVENT : PLAYER_STRONG_ATTACK_EVENT;

  const monsterDamegedAmount = dealMonsterDamage(damageAmount);
  currentMonsterHealth -= monsterDamegedAmount;
  battelLogHistory(
    event,
    currentMonsterHealth,
    currentPlayerHealth,
    "Monster",
    monsterDamegedAmount
  );
  roundEnd();
}

function attackHandler() {
  attackAmount(ATTACK_MODE);
}

function strongAttackHandler() {
  attackAmount(STRONG_ATTACK_MODE);
}

function healHandler() {
  let totalAmountHeal;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_AMOUNT) {
    alert("You can't Heal now!!");
    totalAmountHeal = chosenMaxLife - currentPlayerHealth;
  } else {
    totalAmountHeal = HEAL_AMOUNT;
  }
  currentPlayerHealth += totalAmountHeal;
  increasePlayerHealth(totalAmountHeal);
  battelLogHistory(
    PLAYER_HEAL_EVENT,
    currentMonsterHealth,
    currentPlayerHealth,
    "Player",
    totalAmountHeal
  );
  roundEnd();
  // console.log("current player health:", currentPlayerHealth);
  // console.log("Stutus progress value", playerHealthBar.value);
}

function logHandler() {
  // Classic for loop
  // for (let i = 0; i < totalLogList.length; i++) {
  //   console.log(totalLogList[i]);
  // }
  // ------------------------
  // for of working with Arraies
  let i = 1;
  let x = 1;
  for (const logEntry of totalLogList) {
    console.log(`# ${i}`);
    for (const key in logEntry) {
      console.log(`${x} - ${key} => ${logEntry[key]}`);
      x++;
    }
    x = 1;
    i++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", logHandler);
