console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playerSelection() {
    let input = prompt("Enter your choice").toLowerCase();
    switch (input) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "Invalid input";
    }
}

function round(computerSelection, playerSelection) {
    console.log(
        `Your choice: ${playerSelection}. Computer's choice: ${computerSelection}`
    );
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("You Win!");
    } else if (playerSelection === computerSelection) {
        console.log("Draw!");
    } else {
        console.log("You Lose!");
    }
}

round(getComputerChoice(), playerSelection());
