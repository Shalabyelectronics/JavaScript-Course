const ATTACK_PLAYER_AMOUNT = 10;
const ATTACK_MONSTER_AMOUNT = 14;
let playerHealth = 100;
let currentPlayerHealth = playerHealth;
let currentMonsterHealth = playerHealth;

function attackHandler() {
  currentPlayerHealth -= dealPlayerDamage(ATTACK_MONSTER_AMOUNT);
  currentMonsterHealth -= dealMonsterDamage(ATTACK_PLAYER_AMOUNT);

  if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
    alert("Player WON!");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("Monster WON!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("There is a Draw Fight Again!");
  }
}
attackBtn.addEventListener("click", attackHandler);
