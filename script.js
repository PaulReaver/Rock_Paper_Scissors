//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Player and computer score
let playerScore = 0;
let computerScore = 0;
let playerSelection;

//Player chooses Rock
document.querySelector(".rock").addEventListener("click", choiceRock);
function choiceRock() {
    playerSelection = "Rock";
    const RESULT = playRound(playerSelection);
    console.log(RESULT);
}

//Player chooses Paper
document.querySelector(".paper").addEventListener("click", choicePaper);
function choicePaper() {
    playerSelection = "Paper";
    const RESULT = playRound(playerSelection);
    console.log(RESULT);
}

//Player chooses Scissors
document.querySelector(".scissors").addEventListener("click", choiceScissors);
function choiceScissors() {
    playerSelection = "Scissors";
    const RESULT = playRound(playerSelection);
    console.log(RESULT);
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
        playerScore += 1;
        computerScore += 1; 
        return `It's a tie! You both picked ${PLAYERSELECTION}.`
    } else {
        if (PLAYERSELECTION === "Rock"){
            if (COMPUTERSELECTION === "Scissors"){
                playerScore += 1;
                return "You win! Rock beats Scissors."
            } else {
                computerScore += 1;
                return "You lose! Rock loses to Paper."
            }
        }
        if (PLAYERSELECTION === "Paper"){
            if (COMPUTERSELECTION === "Rock"){
                playerScore += 1;
                return "You win! Paper beats Rock."
            } else {
                computerScore += 1;
                return "You lose! Paper loses to Scissors."
            }
        }
        if (PLAYERSELECTION === "Scissors"){
            if (COMPUTERSELECTION === "Paper"){
                playerScore += 1;
                return "You win! Scissors beat Paper."
            } else {
                computerScore += 1;
                return "You lose! Scissors lose to Rock."
            }
        }
    }
}