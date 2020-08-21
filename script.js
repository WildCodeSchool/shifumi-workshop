// Write your javaScript code here

// this function is used to handle the players decision
function handlePlayerChoice(playerChoiceValue) {

    let playerChoice = playerChoiceValue;

    // the computer choice has a function which will in the 
    // future randomise the computers choice but for now it is paper
    let computerChoice = 'paper'

    // If the playerChoice is the same as the computerChoice it is a draw
    if (playerChoice === computerChoice) {
        console.log('It is a draw')
    } else {

        // else the player or computer wins
        console.log('Player or computer wins')
    }

}

// The function is called here passing in the players choice with the value 'rock'
handlePlayerChoice('rock')