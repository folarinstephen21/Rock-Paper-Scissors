
const startBtn = document.getElementById('btn')
const computerResult = document.querySelector('.computerResult')
const humanResult = document.querySelector('.humanResult')
startBtn.addEventListener('click', computerChoice)



function computerChoice() {
    const options = ["Rock","Paper","Scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    const computerSelect = options[randomNumber]
    computerResult.textContent = computerSelect

    return computerSelect
}

function getHumanChoice() {
    const humanChoice = prompt('Please enter one of the displayed option to compete with the system', 'Paper, Scissors Or Rock')
    humanResult.textContent = humanChoice;
    return humanChoice
}

function playRound(cb1, cb2){
    const computerSelect = cb1().toLowerCase;
    const humanSelect = cb2();
    if (computerSelect !== humanSelect) {
        
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), computerChoice());
        
    }
}