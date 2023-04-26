let winner = document.getElementById("result");
let damage = document.getElementById("damage");
let reset = document.getElementById("play");
let player_1_name = document.getElementById("player1");
let player_2_name = document.getElementById("player2");
let player_1_health = document.getElementById("player1Health");
let player_2_health = document.getElementById("player2Health");

const updateGame = (p1, p2, gameState) => {

    player_1_health.innerText = p1.health
    player_2_health.innerText = p2.health

    player_1_name.innerText = player1.name
    player_2_name.innerText = player2.name
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
        updateGame(player, player2, game.isOver)

        damage.innerText = `${player.name} attack ${enemy.name} for ${attack_damage} damage . `


    }

    heal(player) {
        let health = Math.floor(Math.random() * 10);
        player.health += health
        updateGame(player, player2, game.isOver)
        damage.innerText = `${player.name}'s health increase by ${health}`
    }

}


class Game {
    constructor() {
        this.isOver = false;
    }

    declareWinner(isOver, p1, p2) {


        if (isOver === true && p2.health <= 0) {

            return p1.name;

        }
        if (isOver === true && p1.health <= 0) {

            return p2.name;
        }

    }

    reset(p1, p2) {
        p1.health = 100
        p2.health = 100
    }

    play(p1, p2) {

    }

}

let player1 = new Player("isuru", 100, 15);
let player2 = new Player("shashi", 100, 15);

const game = new Game();


document.addEventListener("keydown", function (e) {
    if (e.key === "q" && player2.health > 0 && game.isOver === false) {
        player1.strike(player1, player2, player1.damage)
    } else if (e.key === "p" && player1.health > 0 && game.isOver === false) {
        player2.strike(player2, player1, player2.damage)
    }

});
document.addEventListener("keydown", function (e) {

    if (e.key === "a" && 100 > player1.health > 0 && game.isOver === false) {
        player1.heal(player1)
    } else if (e.key === "l" && player2.health > 0 && game.isOver === false) {
        player2.heal(player2)
    }

});

// console.log(player1.strike(player1,player2,player1.damage))
// console.log(player1.heal(player1))
// console.log(player2.heal(player2))

// function newGame() {
//     console.log("Click reset")
//     game.reset(player1, player2)
//     updateGame(player1, player2, game.isOver)
//
// }