const playerdisplay = document.getElementById("player-choice");
const compdisplay = document.getElementById("Comp-choice");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["rock", "paper", "scissors"];

const getResult = (playerchoice, compchoice) => 
    playerchoice === compchoice ? "IT'S A TIE 😅" :
    (playerchoice === "rock" && compchoice === "scissors") ||
    (playerchoice === "paper" && compchoice === "rock") ||
    (playerchoice === "scissors" && compchoice === "paper") ?
    "YOU WIN! 🎉" : "YOU LOSE! 😭";

function Game(playerchoice) {
    const compchoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerchoice, compchoice);

    playerdisplay.textContent = `👤PLAYER: ${playerchoice}`;
    compdisplay.textContent = `💻COMPUTER: ${compchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.style.backgroundColor = result === "IT'S A TIE 😅" ? "blue" : 
                                         result === "YOU WIN! 🎉" ? "green" : "red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
}


