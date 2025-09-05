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
            console.log("It's a draw! The computer chose rock!") ;
        }
        else if (computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors!");            
        }
        else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock!")
            computerScore++;
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock!") ;
        }
        else if (computerChoice == "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper!");            
        }
        else if (computerChoice == "paper") {
            console.log("It's a draw! The computer chose paper!");
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors!");
        }
        else if (computerChoice == "scissors") {
            console.log("It's a draw! The computer chose scissors!");            
        }
        else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log(`You win with a score of ${humanScore}!`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lose with a score of ${humanScore}!`);
    }
    else {
        console.log(`It's a draw! You and the computer had a score of ${humanScore} each!`)
    }
}

playGame();

