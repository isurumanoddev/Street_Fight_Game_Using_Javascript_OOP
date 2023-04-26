document.addEventListener("keydown", function (e) {
    if (e.key === "q") {

        console.log("punch");
    } else if (e.key === "a") {
        console.log("heal ");

    }

});

let playButton = document.getElementById("play");
let player_1 = document.getElementById("player1");
let player_2 = document.getElementById("player2");
let player_1_health = document.getElementById("player1Health");
let player_2_health = document.getElementById("player2Health");

const updateGame = (p1, p2, gameState) => {


};

class Player {
    constructor(name, health, damage) {
        this.name = name
        this.health = health
        this.damage = damage
    }

    strike(player, enemy, attackDamage) {
        let playerDamage =player.damage
        const damage = () => {
            playerDamage += Math.floor(Math.random() * 10);
        };

    }

    heal(player) {
        let playerHealth = player.health
        const health = () => {
            playerHealth += Math.floor(Math.random() * 5);
        };
    }

}
const player1 = new Player("isuru",100,0);

class Game {
    constructor(isOver) {
        this.isOver = isOver;
    }

    declareWinner(isOver, p1, p2) {

    }

    reset(p1,p2) {

    }

    play(p1,p2) {

    }

}
