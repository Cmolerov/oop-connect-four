export class Game {
    constructor(player1name, player2name) {
        this.player1 = player1name;
        this.player2 = player2name;
    }

    getName() {
        document.getElementById('game-name').innerHTML = `${this.player1} vs ${this.player2}`
    }
}