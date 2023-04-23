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

function round(computerSelection, playerSelection) {
    console.log(
        `Your choice: ${playerSelection}. \nComputer's choice: ${computerSelection}.`
    );
    if (playerSelection === "Invalid input") {
        console.log("Invalid input.");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === computerSelection) {
        console.log("Draw!");
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }
}

round(getComputerChoice(), playerSelection());
