//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Player and computer score
let playerScore = 0;
let computerScore = 0;

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
        playerScore += 1;
        computerScore += 1; 
        console.log(`It's a tie! You both picked ${PLAYERSELECTION}.`);
    } else {
        if (PLAYERSELECTION === "Rock"){
            if (COMPUTERSELECTION === "Scissors"){
                playerScore += 1;
                console.log("You win! Rock beats Scissors.");
            } else {
                computerScore += 1;
                console.log("You lose! Rock loses to Paper.");
            }
        }
        if (PLAYERSELECTION === "Paper"){
            if (COMPUTERSELECTION === "Rock"){
                playerScore += 1;
                console.log("You win! Paper beats Rock.");
            } else {
                computerScore += 1;
                console.log("You lose! Paper loses to Scissors.");
            }
        }
        if (PLAYERSELECTION === "Scissors"){
            if (COMPUTERSELECTION === "Paper"){
                playerScore += 1;
                console.log("You win! Scissors beat Paper.");
            } else {
                computerScore += 1;
                console.log("You lose! Scissors lose to Rock.");
            }
        }
    }
}