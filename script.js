

let winner = document.getElementById("result");
let playButton = document.getElementById("play");
let player_1_name = document.getElementById("player1");
let player_2_name = document.getElementById("player2");
let player_1_health = document.getElementById("player1Health");
let player_2_health = document.getElementById("player2Health");

const updateGame = (p1, p2, gameState) => {
    player_1_name.innerText = p1.name
    player_2_name.innerText = p2.name
    player_1_health.innerText = p1.health
    player_2_health.innerText = p2.health
    if (p1.health <= 0 || p2.health <= 0) {
        game.isOver = true
        gameState = game.isOver
        winner.innerText = game.declareWinner(game.isOver, p1, p2) + " Win the game !"
    }

    console.log("gameState ", gameState);

};

class Player {
    constructor(name, health, damage) {
        this.name = name
        this.health = health
        this.damage = damage;
    }

    strike(player, enemy, attack) {
        let attack_damage = Math.floor(Math.random() * attack);
        enemy.health -= attack_damage
        updateGame(player, enemy, game.isOver)

        return `${player.name} attack ${enemy.name} for ${attack_damage} damage . `


    }

    heal(player) {
        let health = Math.floor(Math.random() * 10);
        player.health +=  health
        updateGame(player,player2,game.isOver)
        return `${player.name}'s health increase by ${health}`
    }

}


class Game {
    constructor() {
        this.isOver = false;
    }

    declareWinner(isOver, p1, p2) {
        if (p1.health > 0 && p2.health <= 0) {

            return p1.name;

        }
        if (p2.health > 0 && p1.health <= 0) {

            return p2.name;
        }

    }

    reset(p1, p2) {

    }

    play(p1, p2) {

    }

}

let player1 = new Player("isuru", 100, 15);
let player2 = new Player("shashi", 100, 15);

const game = new Game();


// document.addEventListener("keydown", function (e) {
//     if (e.key === "q") {
//        
//     }else if (e.key === "a") {
//         player2.strike(player2,player1,game.isOver)
//     }
//
// });
// console.log(player1.strike(player1,player2,player1.damage))
console.log(player1.heal(player1))
console.log(player2.heal(player2))
