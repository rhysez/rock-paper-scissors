// html references
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const scoreTally = document.createElement('div');
const winnerLoser = document.createElement('div');
scoreTally.classList.add('scoretally');
scoreTally.textContent = "You will see your scores here.";
scoreTally.style.fontSize = "xx-large";
scoreTally.style.fontWeight = "bold";
scoreTally.style.color = "white";
winnerLoser.classList.add('winnerloser');
winnerLoser.textContent = ""

// Selects player choice and alerts outcome
buttonRock.addEventListener('click', function(){
    playRound("rock", getComputerChoice())
});

buttonPaper.addEventListener('click', function(){
    playRound("paper", getComputerChoice())
});

buttonScissors.addEventListener('click', function(){
    playRound("scissors", getComputerChoice())
});

// Adds color to buttons on mouse over, removes color on mouse out
buttonRock.addEventListener('mouseover', () => {
    buttonRock.style.background = "gold";
})

buttonRock.addEventListener('mouseout', () => {
    buttonRock.style.background = "white";
})

buttonPaper.addEventListener('mouseover', () => {
    buttonPaper.style.background = "gold";
})

buttonPaper.addEventListener('mouseout', () => {
    buttonPaper.style.background = "white";
})

buttonScissors.addEventListener('mouseover', () => {
    buttonScissors.style.background = "gold";
})

buttonScissors.addEventListener('mouseout', () => {
    buttonScissors.style.background = "white";
})

// Variables for player choice and computer choice
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let overallScore = playerScore + computerScore;


// Randomly returns either "rock" "paper" or "scissors" from the computer 
function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"]
    return pick[Math.floor(Math.random() * pick.length)]
}  

// Starts a round and decides a win, loss or tie
// playerScore++ and computerScore++ will keep tally of scores
function playRound(playerSelection, computerSelection){ 
    if (playerSelection === computerSelection) {
        scoreTally.textContent = "Oof, you both picked the same!"
        scoreTally.style.color = "white"
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            overallScore++;
            scoreTally.textContent = `You win! Your score: ${playerScore}, Computer score: ${computerScore}`
            scoreTally.style.color = "gold"
        } else if (playerSelection === "scissors" && computerSelection === "rock" ||
                    playerSelection === "paper" && computerSelection === "scissors" ||
                    playerSelection === "rock" && computerSelection === "paper") {
                        computerScore++;
                        overallScore++;
                        scoreTally.textContent = `Computer wins! Your score: ${playerScore}, Computer score: ${computerScore}`
                        scoreTally.style.color = "red"
                    } 
}

container.appendChild(scoreTally);
container.appendChild(winnerLoser);






