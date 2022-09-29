//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Computer makes a choice
const computerSelection = getComputerChoice(ARRAY);

//Get player choice
let playerSelection = prompt("Pick Rock, Paper or Scissors")

//Gets rid of spaces
playerSelection = playerSelection.trim();
//Makes the first letter uppercase and the rest lowercase
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

//Function to get random choice for the computer
function getComputerChoice(array){
    const RANDOMINDEX = Math.floor(Math.random() * array.length);
    const CHOICE = array[RANDOMINDEX];
    return CHOICE;
}