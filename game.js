import { Column } from "./column.js";

export class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name;
        this.player2name = player2name;
        this.currentPlayer = 1;
        this.column = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
    }

    getName() {
        return `${this.player1name} vs ${this.player2name}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        const column = this.column[columnIndex];
        return column.getTokenAt(rowIndex);
    }

    playInColumn() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}
