const ATTACK_AMOUNT = 10;
let playerHealth = 100;
let currentHealt = playerHealth;
let monsterHealth = playerHealth;

function attackHandler() {
  dealMonsterDamage(ATTACK_AMOUNT);
}
attackBtn.addEventListener("click", attackHandler);
