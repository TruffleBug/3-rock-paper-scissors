// Declare a function called getComputerChoice
function getComputerChoice () {
    // Declare a variable, randomNum, that has a value of a random number between 0 and 0.99
    let randomNum = Math.random();
    // Declare a variable, compChoice, with a value of an empty string
    let compChoice = '';
    // If randomNum is between 0 and 0.33
    if (randomNum >=0 && randomNum<0.34) {
        // Set compChoice equal to 'Rock'
        compChoice = 'rock';
        // Else if randomNum is between 0.34 and 0.66
    } else if (randomNum >= 0.34 && randomNum <0.67) {
        // Set compChoice equal to 'Paper'
        compChoice = 'paper';        
        // Else 
    } else {
        // Set compChoice equal to 'Scissors'
        compChoice = 'scissors';
    }
    // Return compChoice
    console.log(compChoice)
    return compChoice 
}

// Declare a function called getHumanChoice
function getHumanChoice() {
    // Declare a variable, humanChoice, to be result of use prompt enter one of three choices: 'Rock', 'Paper', or 'Scissors'
    let humanChoice = prompt('Choose wisely.', 'Enter Rock, Paper, or Scissors')
    // return humanChoice in all lowercase
    return humanChoice.toLowerCase()
}

// Declare a function, playRound
function playRound() {
    compChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    // if humanChoice = rock & compChoice = scissors  
    if (humanChoice === 'rock' && compChoice === 'scissors' ||
        // or humanChoice = paper & compChoice = rock
        humanChoice === 'paper' && compChoice === 'rock' ||
        // or humanChoice = scissors & compChoice = paper
        humanChoice === 'scissors' && compChoice === 'paper') {
            // increment humanScore by 1
            ++humanScore
            // return 'You win! [humanChoice] beats [compChoice]'
            return console.log(`You win :D ${humanChoice} beats ${compChoice}`)
    // else if humanChoice = compChoice
    } else if (humanChoice === compChoice) {
        // return 'It's a tie!'
        return console.log('It\'s a tie!')
        // else
    } else {
        // increment computerScore by 1
        ++computerScore
        // return 'You lose! [compChoice] beats [humanChoice]'
        return console.log(`You lose :( ${compChoice} beats ${humanChoice}`)
    }
}

let humanScore = 0;
let computerScore = 0;

// Declare a function, playGame
function playGame() {
    for (let i=0; i<6; i++) {
        playRound()    
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        return console.log('YOU\'RE A WINNER!')
    } else if (humanScore < computerScore) {
        return console.log('YOU LOST')
    } else {
        return console.log ('IT\'S A TIE')
    }
}

playGame();