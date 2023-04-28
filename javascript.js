let playerSelection;
let computerSelection;
let playerScore = 0,
    computerScore = 0,
    drawScore = 0;

const rockButton = document.querySelector("#option_rock");
rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    let winner = whoWins(playerSelection, computerSelection);
    updateHTML(playerSelection, computerSelection, winner);
});
const paperButton = document.querySelector("#option_paper");
paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    let winner = whoWins(playerSelection, computerSelection);
    updateHTML(playerSelection, computerSelection, winner);
});
const scissorsButton = document.querySelector("#option_scissor");
scissorsButton.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    let winner = whoWins(playerSelection, computerSelection);
    updateHTML(playerSelection, computerSelection, winner);
});

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

function whoWins(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function updateHTML(playerSelection, computerSelection, result) {
    const computerImage = document.querySelector("#computer_choose img");
    if (computerSelection === "Rock") {
        computerImage.setAttribute("src", "img/rock.png");
    } else if (computerSelection === "Paper") {
        computerImage.setAttribute("src", "img/paper.png");
    } else if (computerSelection === "Scissors") {
        computerImage.setAttribute("src", "img/scissor.png");
    }

    const playerImage = document.querySelector("#player_choose img");
    if (playerSelection === "Rock") {
        playerImage.setAttribute("src", "img/rock.png");
    } else if (playerSelection === "Paper") {
        playerImage.setAttribute("src", "img/paper.png");
    } else if (playerSelection === "Scissors") {
        playerImage.setAttribute("src", "img/scissor.png");
    }

    if (result === "player") {
        document.querySelector(
            "#player"
        ).textContent = `Player: ${++playerScore}`;
    } else if (result === "computer") {
        document.querySelector(
            "#computer"
        ).textContent = `Computer: ${++computerScore}`;
    } else if (result === "draw") {
        document.querySelector("#draw").textContent = `Draw: ${++drawScore}`;
    }
}
