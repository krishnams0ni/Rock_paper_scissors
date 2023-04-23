function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playerSelection() {
    let input = prompt(
        "Enter your choice (Rock, Paper, Scissors)"
    ).toLowerCase();
    switch (input) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "Invalid input";
    }
}

let playerScore = 0,
    computerScore = 0,
    drawScore = 0,
    invalidInput = 0;

function round(computerSelection, playerSelection) {
    console.log(
        `Your choice: ${playerSelection}. \nComputer's choice: ${computerSelection}.`
    );
    if (playerSelection === "Invalid input") {
        invalidInput++;
        return "Invalid input.";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        drawScore++;
        return "Draw!";
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(round(getComputerChoice(), playerSelection()));
    }
    console.log(
        `Computer score: ${computerScore}. \nYour score: ${playerScore}. \nDraws: ${drawScore}. \nInvalid inputs: ${invalidInput}.`
    );
}

game();
