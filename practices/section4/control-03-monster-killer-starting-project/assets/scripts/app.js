const ATTACK_PLAYER_AMOUNT = 10;
const ATTACK_MONSTER_AMOUNT = 14;
const STRONG_ATTACK_AMOUNT = 17;
let playerHealth = 100;
let currentPlayerHealth = playerHealth;
let currentMonsterHealth = playerHealth;

function attackAmount(mode) {
  let damageAmount;
  if (mode === "ATTACK") {
    damageAmount = ATTACK_PLAYER_AMOUNT;
  } else if (mode === "STRONG_ATTACK") {
    damageAmount = STRONG_ATTACK_AMOUNT;
  } else {
    return;
  }
  currentPlayerHealth -= dealPlayerDamage(ATTACK_MONSTER_AMOUNT);
  currentMonsterHealth -= dealMonsterDamage(damageAmount);

  if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
    alert("Player WON!");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("Monster WON!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("There is a Draw Fight Again!");
  }
}

function attackHandler() {
  attackAmount("ATTACK");
}

function strongAttackHandler() {
  attackAmount("STRONG_ATTACK");
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
