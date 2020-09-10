import { Game } from "./game.js";

let game = undefined;
let player1 = document.getElementById("player-1-name");
let player2 = document.getElementById("player-2-name");
let newGameBtn = document.getElementById("new-game");
let board = document.getElementById("board-holder");

function updateUI() {
    console.log("hi");
    if (game === undefined) {
        board.classList.add("is-invisible");
    } else {
        console.log("echo");
        board.classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
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
            let columnIndex = Number.parseInt(targetId);
        }
        game.playInColumn();
        updateUI();
    });
});
