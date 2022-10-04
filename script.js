//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Player and computer score
let playerScore = 0;
let computerScore = 0;

//Call function to play 5 games
game();

//Function to get random choice for the computer
function getComputerChoice(array){
    const RANDOMINDEX = Math.floor(Math.random() * array.length);
    const CHOICE = array[RANDOMINDEX];
    return CHOICE;
}

//Function for the player to make a choice
function getPlayerChoice(){
    let playerSelection = prompt("Pick Rock, Paper or Scissors");  
    //Gets rid of spaces
    playerSelection = playerSelection.trim();
    //Makes the first letter uppercase and the rest lowercase
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();  
    return playerSelection;
}

//Function that checks player and computer choice and returns a winner
function playRound(PLAYERSELECTION, COMPUTERSELECTION){
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

//Function to play a game
function game(){
    //Player makes a choice
    let playerSelection = getPlayerChoice();
    //Computer makes a choice
    let computerSelection = getComputerChoice(ARRAY);
    let result = playRound(playerSelection, computerSelection);
    console.log (result);
    
    console.log(`Final score: ${playerScore} - ${computerScore}.`)
}