//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Computer makes a choice
const COMPUTERSELECTION = getComputerChoice(ARRAY);

//Player makes a choice
const PLAYERSELECTION = getPlayerChoice();

const RESULT = playRound(PLAYERSELECTION, COMPUTERSELECTION);
console.log(RESULT);

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

//Function that checks player and computer choice and returns a wiiner
function playRound(PLAYERSELECTION, COMPUTERSELECTION){
    if (PLAYERSELECTION === COMPUTERSELECTION){
        return `It's a tie! You both picked ${PLAYERSELECTION}.`
    } else {
        if (PLAYERSELECTION === "Rock"){
            if (COMPUTERSELECTION === "Scissors"){
                return "You win! Rock beats Scissors."
            } else {
                return "You lose! Rock loses to Paper."
            }
        }
        if (PLAYERSELECTION === "Paper"){
            if (COMPUTERSELECTION === "Rock"){
                return "You win! Paper beats Rock."
            } else {
                return "You lose! Paper loses to Scissors."
            }
        }
        if (PLAYERSELECTION === "Scissors"){
            if (COMPUTERSELECTION === "Paper"){
                return "You win! Scissors beat Paper."
            } else {
                return "You lose! Scissors lose to Rock."
            }
        }
    }
}