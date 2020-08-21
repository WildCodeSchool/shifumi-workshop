// Write your javaScript code here

function computerChoiceGenerator() {
    // An array containing all of the possible game options
    const gameOptions = ['rock', 'paper', 'scissors']

    // Generates a random number either being 0,1,2
    let randomNumberGenerator = Math.floor(Math.random() * 3)

    // The randomNumberGenerator variable is used to access a random value
    // from the game options array
    const randomComputerChoice = gameOptions[randomNumberGenerator]

    return randomComputerChoice;
}


function handleRoundPoints(computerChoice, losingOption) {
    if (computerChoice === losingOption) {
        console.log('Player Wins')
    } else {
        console.log('Computer Wins')
    }
}


// this function is used to handle the players decision
function handlePlayerChoice(playerChoiceValue) {

    let playerChoice = playerChoiceValue;

    // the computer choice has a called computerChoiceGenerator 
    // which returns randomly either rock, paper or scissors
    let computerChoice = computerChoiceGenerator()

    console.log(computerChoice)

    // If the playerChoice is the same as the computerChoice it is a draw
    if (playerChoice === computerChoice) {
        console.log('It is a draw')
    } else {

        // We then check the playerChoice, then calling handleRoundPoints
        // passing the computerChoice with the option it can lose to
        if (playerChoice === 'rock') handleRoundPoints(computerChoice, 'scissors')
        if (playerChoice === 'paper') handleRoundPoints(computerChoice, 'rock')
        if (playerChoice === 'scissors') handleRoundPoints(computerChoice, 'paper')
    }

}

// The function is called here passing in the players choice with the value 'rock'
handlePlayerChoice('rock')