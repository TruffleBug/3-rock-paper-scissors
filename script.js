// Declare a function called getComputerChoice
getComputerChoice = () => {
    // Declare a variable, randomNum, that has a value of a random number between 0 and 0.99
    let randomNum = Math.random();
    // Declare a variable, compChoice, with a value of an empty string
    let compChoice = '';
    // If randomNum is between 0 and 0.33
    if (randomNum >=0 && randomNum<0.34) {
        // Set compChoice equal to 'Rock'
        compChoice = 'Rock';
        // Else if randomNum is between 0.34 and 0.66
    } else if (randomNum >= 0.34 && randomNum <0.67) {
        // Set compChoice equal to 'Paper'
        compChoice = 'Paper';        
        // Else 
    } else {
        // Set compChoice equal to 'Scissors'
        compChoice = 'Scissors';
    }
    // Return compChoice
    return console.log(compChoice) 
}

// Declare a function called getHumanChoice
function getHumanChoice() {
    // Declare a variable, humanChoice, to be result of use prompt enter one of three choices: 'Rock', 'Paper', or 'Scissors'
    let humanChoice = prompt('Choose wisely.', 'Enter Rock, Paper, or Scissors')
    // Declare a variable, humanChoiceEdited, to be humanChoice but in lowercase
    let humanChoiceEdited = humanChoice.toLowerCase()
}

