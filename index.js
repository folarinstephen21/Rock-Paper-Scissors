// ===== DOM ELEMENTS =====
const startBtn = document.getElementById('btn');
const computerResult = document.querySelector('.computerResult');
const humanResult = document.querySelector('.humanResult');
const btnDiv = document.querySelector('.button-div');

// Score display elements
const scoreBoard = document.createElement('div');
const humanScoreEl = document.createElement('p');
const computerScoreEl = document.createElement('p');

// Game buttons
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

// ===== GAME STATE =====
let humanScore = 0;
let computerScore = 0;

// ===== FUNCTIONS =====
function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];

    computerResult.textContent = `Computer chose: ${choice}`;
    return choice;
}

function updateScoreUI() {
    humanScoreEl.textContent = `Human Score: ${humanScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`;
}

function playRound(humanSelect) {
    const computerSelect = computerChoice();
    humanResult.textContent = `You chose: ${humanSelect}`;

    if (humanSelect === computerSelect) {
        alert("It's a tie!");
        return;
    }

    const humanWins =
        (humanSelect === "rock" && computerSelect === "scissors") ||
        (humanSelect === "paper" && computerSelect === "rock") ||
        (humanSelect === "scissors" && computerSelect === "paper");

    if (humanWins) {
        humanScore++;
        alert("Human wins this round!");
    } else {
        computerScore++;
        alert("Computer wins this round!");
    }

    updateScoreUI();
}

// ===== GAME START =====
function playGame() {
    // Reset state
    humanScore = 0;
    computerScore = 0;

    // Button labels
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    // Score UI
    updateScoreUI();
    scoreBoard.appendChild(humanScoreEl);
    scoreBoard.appendChild(computerScoreEl);

    // Clear previous content (important!)
    btnDiv.innerHTML = "";

    btnDiv.appendChild(scoreBoard);
    btnDiv.appendChild(rockBtn);
    btnDiv.appendChild(paperBtn);
    btnDiv.appendChild(scissorsBtn);

    // Event listeners (CORRECT)
    rockBtn.onclick = () => playRound("rock");
    paperBtn.onclick = () => playRound("paper");
    scissorsBtn.onclick = () => playRound("scissors");
}

// Start game
startBtn.addEventListener('click', playGame);
