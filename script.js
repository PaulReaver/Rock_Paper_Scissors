//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Player and computer score
let playerScore = 0;
let computerScore = 0;

//Gets the div for displaying results
const results = document.querySelector(".results")

//Player chooses Rock
document.querySelector(".rock").addEventListener("click", choiceRock);
function choiceRock() {
    playRound("Rock");
}

//Player chooses Paper
document.querySelector(".paper").addEventListener("click", choicePaper);
function choicePaper() {
    playRound("Paper");
}

//Player chooses Scissors
document.querySelector(".scissors").addEventListener("click", choiceScissors);
function choiceScissors() {
    playRound("Scissors");
}

//Function to get random choice for the computer
function getComputerChoice(array){
    const RANDOMINDEX = Math.floor(Math.random() * array.length);
    const CHOICE = array[RANDOMINDEX];
    return CHOICE;
}

//Function that checks player and computer choice and returns a winner
function playRound(PLAYERSELECTION){
    const COMPUTERSELECTION = getComputerChoice(ARRAY);
    if (PLAYERSELECTION === COMPUTERSELECTION){ 
        results.textContent = `It's a tie! You both picked ${PLAYERSELECTION}. Score: ${playerScore} - ${computerScore}.`;
    } else {
        if (PLAYERSELECTION === "Rock"){
            if (COMPUTERSELECTION === "Scissors"){
                playerScore += 1;
                results.textContent = `You win! Rock beats Scissors. Score: ${playerScore} - ${computerScore}.`;
            } else {
                computerScore += 1;
                results.textContent = `You lose! Rock loses to Paper. Score: ${playerScore} - ${computerScore}.`;
            }
        }
        if (PLAYERSELECTION === "Paper"){
            if (COMPUTERSELECTION === "Rock"){
                playerScore += 1;
                results.textContent = `You win! Paper beats Rock. Score: ${playerScore} - ${computerScore}.`;
            } else {
                computerScore += 1;
                results.textContent = `You lose! Paper loses to Scissors. Score: ${playerScore} - ${computerScore}.`;
            }
        }
        if (PLAYERSELECTION === "Scissors"){
            if (COMPUTERSELECTION === "Paper"){
                playerScore += 1;
                results.textContent = `You win! Scissors beat Paper. Score: ${playerScore} - ${computerScore}.`;
            } else {
                computerScore += 1;
                results.textContent = `You lose! Scissors lose to Rock. Score: ${playerScore} - ${computerScore}.`;
            }
        }
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            results.textContent = results.textContent + " Congratulations! You won!";
        } else {
            results.textContent = results.textContent + " Sorry... You lost...";
        }
        playerScore = 0;
        computerScore = 0;
    }
}