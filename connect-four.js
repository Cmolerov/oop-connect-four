import { Game } from './game.js';


let game = undefined;
let player1 = document.getElementById("player-1-name");
let player2 = document.getElementById("player-2-name");
let newGameBtn = document.getElementById("new-game");
let board = document.getElementById('board-holder');

function updateUI() {
    console.log('hi');
    if (game === undefined) {
        board.classList.add('is-invisible');
    } else {
        console.log('echo');
        board.classList.remove('is-invisible');
    }
}

window.document.addEventListener("DOMContentLoaded", (e) => {

    function enableNewGame() {
        if (player1.value !== '' && player2.value !== '') {
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
        game = new Game();
        player1.value = '';
        player2.value = '';
        newGameBtn.disabled = true;
        updateUI();
    });

    
});
