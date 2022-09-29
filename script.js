//Create array with computer options
const ARRAY = ["Rock", "Paper", "Scissors"];

//Assign to computer option a choice
let computerSelection = getComputerChoice(ARRAY);

//Function to get random choice for the computer
function getComputerChoice(array){
    const RANDOMINDEX = Math.floor(Math.random() * array.length);
    const CHOICE = array[RANDOMINDEX];
    return CHOICE;
}