function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    if (randomNum == 1) {
        return "rock";
    } else if (randomNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return "It's a tie! " + player + " and " + computer;
    } else if ((player == "paper" && computer == "rock") ||
        (player == "rock" && computer == "scissors") ||
        (player == "scissors" && computer == "paper")) {
            return "You win! " + player + " beats " + computer;
    } else {
        return "You lose! " + computer + " beats " + player;
    }
}

function game() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));    
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;



//for (let i = 0; i < 5; i++) {
//    let playerChoice = prompt("Choice: ");
//    let result = playRound(playerChoice, getComputerChoice());
//    if (result.includes("win")) {
//        playerWins++;
//    } else if (result.includes("lose")) {
//        computerWins++;
//    } else ties++;
//}


//console.log("playerWins=" + playerWins);
//console.log("computerWins=" + computerWins);
//console.log("ties=" + ties);

const container = document.getElementById('container');
container.addEventListener('click', buttonClick);

function buttonClick(e) {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    console.log(e.target.innerHTML);
    let result = playRound(e.target.innerHTML, getComputerChoice());
    console.log(result);

    if (result.includes("tie")) {
        ties++;
        let tie = document.getElementById('ties');
        tie.innerHTML = "Ties " + ties;
    } else if (result.includes("win")) {
        playerWins++;
        let wins = document.getElementById('playerWins');
        wins.innerHTML = "Player wins " + playerWins;
        if (playerWins == 5) {
            alert("Player wins the game");
        }
    } else {
        computerWins++;
        let computer = document.getElementById('computerWins');
        computer.innerHTML = "Computer wins " + computerWins;
        if (computerWins == 5) {
            alert("Computer wins the game");
        }
    }

}