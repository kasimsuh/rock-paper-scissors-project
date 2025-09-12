let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random();
    if (x >= 0 && x <= 1/3) {
        return "rock";
    }
    else if (x > 1/3 && x <= 2/3) {
        return "paper";
    }
    else if (x > 2/3 && x < 1) {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let choice = window.prompt("What will you play?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            results.textContent = "It's a draw! The computer chose rock!";
        }
        else if (computerChoice == "scissors") {
            humanScore++;
            results.textContent = "You win this round! Rock beats Scissors!";            
        }
        else if (computerChoice == "paper") {
            results.textContent = "You lose this round! Paper beats Rock!";
            computerScore++;
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            results.textContent = "You win this round! Paper beats Rock!";
        }
        else if (computerChoice == "scissors") {
            computerScore++;
            results.textContent = "You lose this round! Scissors beats Paper!";            
        }
        else if (computerChoice == "paper") {
            results.textContent = "It's a draw! The computer chose paper!";
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            results.textContent = "You lose this round! Rock beats Scissors!";
        }
        else if (computerChoice == "scissors") {
            results.textContent = "It's a draw! The computer chose scissors!";            
        }
        else if (computerChoice == "paper") {
            results.textContent = "You win this round! Scissors beats Paper!";
            humanScore++;
        }
    }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const score = document.createElement('div');
const winner = document.createElement('div');
document.body.appendChild(score);
document.body.appendChild(winner);
let gameOver = false;
score.textContent = `Your score - ${humanScore}\nComputer score - ${computerScore}`;



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.textContent;
        playRound(humanChoice, computerChoice);
        score.textContent = `Your score - ${humanScore}\nComputer score - ${computerScore}`;

        if (gameOver) {
            winner.textContent = "";
            gameOver = false;
        }

        if (humanScore == 5) {
            winner.textContent = "Congratulations! You win!";
            humanScore = 0;
            computerScore = 0;
            gameOver = true;
            }
        else if (computerScore == 5) {
            winner.textContent = "You lose! The computer won the game!";
            humanScore = 0;
            computerScore = 0;
            gameOver = true;
                }

    })
})
