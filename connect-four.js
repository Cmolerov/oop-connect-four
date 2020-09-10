window.document.addEventListener("DOMContentLoaded", (e) => {
    let game = undefined;
    let player1 = document.getElementById("player-1-name");
    let player2 = document.getElementById("player-2-name");
    function enableNewGame() {
        if (player1 !== "" && player2 !== "") {
            document.getElementById("new-game").disable = false;
        }
    }
    player1.addEventListener("keyup", (e) => {
        enableNewGame();
    });
    player2.addEventListener("keyup", (e) => {
        enableNewGame();
    });
});
