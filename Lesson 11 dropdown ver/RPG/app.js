let playerHealth = 3;
let enemyHealth = 3;
let offense = document.getElementById("offense-dropdown");
let target = document.getElementById("target-dropdown");
let playerHealthHtml = document.getElementById("player-health");
let enemyHealthHtml = document.getElementById("enemy-health");
playerHealthHtml.textContent += playerHealth;
enemyHealthHtml.textContent += enemyHealth;

// Offense Moves
function confirmF(){
    if(offense.value == "fireball"){
        fireballF()
    }
    else if(offense.value == "heal"){
        healF()
    }
}



function fireballF(){
    if(target.value == "player"){
        playerHealth -= 1;
        playerHealthHtml.textContent = "Player Health: "
        playerHealthHtml.textContent += playerHealth;
        }
    else if(target.value == "enemy"){
        enemyHealth -= 1;
        enemyHealthHtml.textContent = "Enemy Health: "
        enemyHealthHtml.textContent += enemyHealth;
    }
}

function healF(){
    if(target.value == "player"){
        playerHealth += 1;
        playerHealthHtml.textContent = "Player Health: "
        playerHealthHtml.textContent += playerHealth;
        }
    else if(target.value == "enemy"){
        enemyHealth += 1;
        enemyHealthHtml.textContent = "Enemy Health: "
        enemyHealthHtml.textContent += enemyHealth;
    }
}