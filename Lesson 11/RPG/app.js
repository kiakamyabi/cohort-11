let playerHealth = 3;
let enemyHealth = 3;
let playerHealthHtml = document.getElementById("player-health");
let enemyHealthHtml = document.getElementById("enemy-health");
playerHealthHtml.textContent += playerHealth;
enemyHealthHtml.textContent += enemyHealth;

// Offense Moves
function fireballF(){
    enemyHealth -= 1;
    enemyHealthHtml.textContent = "Enemy Health: "
    enemyHealthHtml.textContent += enemyHealth;
}

function healF(){
    playerHealth += 1;
    playerHealthHtml.textContent = "Player Health: "
    playerHealthHtml.textContent += playerHealth;
}