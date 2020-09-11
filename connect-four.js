import { Game } from "./game.js";

let game = undefined;
let player1 = document.getElementById("player-1-name");
let player2 = document.getElementById("player-2-name");
let newGameBtn = document.getElementById("new-game");
let board = document.getElementById("board-holder");

function updateUI() {
    if (game === undefined) {
        board.classList.add("is-invisible");
    } else {
        board.classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
    }

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            let square = document.querySelector(
                `#square-${rowIndex}-${columnIndex}`
            );
            square.innerHTML = "";
            let value = game.getTokenAt(rowIndex, columnIndex);
            let token = document.createElement("div");
            if (value === 1) {
                token.classList.add("token");
                token.classList.add("red");
                square.appendChild(token);
            } else if (value === 2) {
                token.classList.add("token");
                token.classList.add("black");
                square.appendChild(token);
            }
        }
    }
    let currentPlayer = game.currentPlayer;
    let clickTarget = document.getElementById("click-targets");
    if (currentPlayer === 1) {
        clickTarget.classList.add("red");
        clickTarget.classList.remove("black");
    } else {
        clickTarget.classList.add("black");
        clickTarget.classList.remove("red");
    }
}

window.document.addEventListener("DOMContentLoaded", (e) => {
    // let currentPlayer;
    function enableNewGame() {
        if (player1.value !== "" && player2.value !== "") {
            newGameBtn.disabled = false;
        }
    }

    player1.addEventListener("keyup", (e) => {
        enableNewGame();
    });
    player2.addEventListener("keyup", (e) => {
        enableNewGame();
    });

    newGameBtn.addEventListener("click", (e) => {
        game = new Game(player1.value, player2.value);
        console.log(game);
        // currentPlayer = game.currentPlayer;
        player1.value = "";
        player2.value = "";

        newGameBtn.disabled = true;
        updateUI();
    });

    document.getElementById("click-targets").addEventListener("click", (e) => {
        let targetId = e.target.id;
        if (!targetId.startsWith("column-")) {
            return;
        } else {
            let columnIndex = Number.parseInt(targetId[targetId.length - 1]);
            game.playInColumn(columnIndex);
            updateUI();
        }
    });
});
