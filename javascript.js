let roundsValue = document.querySelector("#rounds").value,
    playerScore = 0,
    computerScore = 0,
    drawScore = 0,
    count = 0;

roundsInput = document.querySelector("#rounds");
roundsInput.addEventListener("change", () => {
    if (document.querySelector("#pannel h2").textContent != "Score") {
        reset();
    } else if (count > 0) {
        let choice = confirm(
            "You can't change the number of rounds after the game has started. Do you want to quit?"
        );
        if (choice == true) {
            reset();
        }
    }
});

const rockButton = document.querySelector("#option_rock");
rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    updateHTML(playerSelection, computerSelection);
    checkGameOver(++count);
});

const paperButton = document.querySelector("#option_paper");
paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    updateHTML(playerSelection, computerSelection);
    checkGameOver(++count);
});
const scissorButton = document.querySelector("#option_scissor");
scissorButton.addEventListener("click", () => {
    playerSelection = "Scissor";
    computerSelection = getComputerChoice();
    updateHTML(playerSelection, computerSelection);
    checkGameOver(++count);
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

function updateHTML(playerSelection, computerSelection) {
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

function checkGameOver(i) {
    roundsValue = document.querySelector("#rounds").value;
    if (i >= roundsValue) {
        showResults();
    }
}

const result = document.querySelector("#pannel h2");
function showResults() {
    if (playerScore > computerScore) {
        result.textContent = "You win!";
    } else if (playerScore < computerScore) {
        result.textContent = "Computer wins!";
    } else {
        result.textContent = "It's a draw!";
    }

    if (playerScore + computerScore + drawScore > roundsValue) {
        reset();
    }
}

function reset() {
    roundsValue = document.querySelector("#rounds").value;
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
    result.textContent = "Score";
}
