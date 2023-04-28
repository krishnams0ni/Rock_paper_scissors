let rounds = document.querySelector("#rounds").value,
    count = 0,
    drawScore = 0,
    playerScore = 0,
    computerScore = 0;

function checkGameOver(i, playerSelection, computerSelection) {
    if (i < rounds) {
        whoWins(playerSelection, computerSelection);
        updateImages(playerSelection, computerSelection);
        return false;
    } else {
        let result;
        whoWins(playerSelection, computerSelection);
        if (playerScore > computerScore) {
            result = "You win!";
        } else if (playerScore < computerScore) {
            result = "Computer wins!";
        } else {
            result = "It's a draw!";
        }
        alert(
            result +
                "\nComputer: " +
                computerScore +
                "\nPlayer: " +
                playerScore +
                "\nDraw: " +
                drawScore
        );
        reset();
    }
}

roundsInput = document.querySelector("#rounds");
roundsInput.addEventListener("change", () => {
    if (count > 0) {
        let choice = confirm(
            "You can't change the number of rounds after the game has started. Do you want to quit?"
        );
        if (choice == true) {
            reset();
        }
    } else {
        rounds = roundsInput.value;
    }
});

const rockButton = document.querySelector("#option_rock");
rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    checkGameOver(++count, playerSelection, computerSelection);
});
const paperButton = document.querySelector("#option_paper");
paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    checkGameOver(++count, playerSelection, computerSelection);
});
const scissorButton = document.querySelector("#option_scissor");
scissorButton.addEventListener("click", () => {
    playerSelection = "Scissor";
    computerSelection = getComputerChoice();
    checkGameOver(++count, playerSelection, computerSelection);
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function reset() {
    rounds = document.querySelector("#rounds").value;
    count = 0;
    drawScore = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#draw").textContent = `Draw: ${drawScore}`;
    document.querySelector("#player").textContent = `Player: ${playerScore}`;
    document.querySelector(
        "#computer"
    ).textContent = `Computer: ${computerScore}`;
    document.querySelector("#player_choose img").setAttribute("src", "");
    document.querySelector("#computer_choose img").setAttribute("src", "");
}

function whoWins(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        drawScore++;
        document.querySelector("#draw").textContent = `Draw: ${drawScore}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) {
        playerScore++;
        document.querySelector(
            "#player"
        ).textContent = `Player: ${playerScore}`;
    } else {
        computerScore++;
        document.querySelector(
            "#computer"
        ).textContent = `Computer: ${computerScore}`;
    }
}

function updateImages(playerSelection, computerSelection) {
    const computerImage = document.querySelector("#computer_choose img");
    if (computerSelection === "Rock") {
        computerImage.setAttribute("src", "img/rock.png");
    } else if (computerSelection === "Paper") {
        computerImage.setAttribute("src", "img/paper.png");
    } else if (computerSelection === "Scissor") {
        computerImage.setAttribute("src", "img/scissor.png");
    }

    const playerImage = document.querySelector("#player_choose img");
    if (playerSelection === "Rock") {
        playerImage.setAttribute("src", "img/rock.png");
    } else if (playerSelection === "Paper") {
        playerImage.setAttribute("src", "img/paper.png");
    } else if (playerSelection === "Scissor") {
        playerImage.setAttribute("src", "img/scissor.png");
    }
}
