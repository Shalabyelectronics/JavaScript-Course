const ATTACK_PLAYER_AMOUNT = 10;
const ATTACK_MONSTER_AMOUNT = 14;
const STRONG_ATTACK_AMOUNT = 17;
const HEAL_AMOUNT = 20;
const chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function roundEnd() {
  currentPlayerHealth -= dealPlayerDamage(ATTACK_MONSTER_AMOUNT);
  if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
    alert("Player WON!");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("Monster WON!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("There is a Draw Fight Again!");
  }
}

function attackAmount(mode) {
  let damageAmount;
  if (mode === "ATTACK") {
    damageAmount = ATTACK_PLAYER_AMOUNT;
  } else if (mode === "STRONG_ATTACK") {
    damageAmount = STRONG_ATTACK_AMOUNT;
  } else {
    return;
  }
  currentMonsterHealth -= dealMonsterDamage(damageAmount);
  roundEnd();
}

function attackHandler() {
  attackAmount("ATTACK");
}

function strongAttackHandler() {
  attackAmount("STRONG_ATTACK");
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
  roundEnd();
  // console.log("current player health:", currentPlayerHealth);
  // console.log("Stutus progress value", playerHealthBar.value);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
