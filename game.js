import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js"

export class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name;
        this.player2name = player2name;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1name} ties ${this.player2name}`;
        }
        return `${this.player1name} vs ${this.player2name}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        const column = this.columns[columnIndex];
        return column.getTokenAt(rowIndex);
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkColumnForWin()
    }
    isColumnFull(columnIndex) {
        // const column = this.column[columnIndex]
        // console.log(this.column[columnIndex]);
        return this.columns[columnIndex].isFull();
    }

    checkForTie() {
        if (this.columns.every((columnIndex) => columnIndex.isFull())) {
            this.winnerNumber = 3;
            console.log("you tied");
        }
    }

    checkColumnForWin() {
        if (this.winnerNumber !== 0) {
            return
        } else {
            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];
                let inspector = new ColumnWinInspector(column);
                const winnerNumber = inspector.inspect();
                if (winnerNumber === 1 || winnerNumber === 2) {
                    this.winnerNumber = winnerNumber;
                    
                }
            }
        }
    }
}
