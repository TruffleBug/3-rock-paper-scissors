let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNum = Math.random();
    let compChoice = '';
    if (randomNum >=0 && randomNum<0.34) {
        compChoice = 'rock';
    } else if (randomNum >= 0.34 && randomNum <0.67) {
        compChoice = 'paper';        
    } else {
        compChoice = 'scissors';
    }
    return compChoice 
}

// function getHumanChoice() {
    //     let humanChoice = prompt('Choose wisely.', 'Enter Rock, Paper, or Scissors')
    //     if (humanChoice.toLowerCase() === 'rock' ||
    //         humanChoice.toLowerCase() === 'paper' ||
    //         humanChoice.toLowerCase() === 'scissors') {
        //             return humanChoice.toLowerCase();
        //     } else {
            //         alert('Try again')
            //         getHumanChoice()
            //     }
            // }
            
function playRound() {
    compChoice = getComputerChoice();
    // humanChoice = getHumanChoice();
    if (humanChoice === 'rock' && compChoice === 'scissors' ||
        humanChoice === 'paper' && compChoice === 'rock' ||
        humanChoice === 'scissors' && compChoice === 'paper') {
            ++humanScore;
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
            resultMsg.textContent = `You win :D ${humanChoice} beats ${compChoice}`;
            // return console.log(`You win :D ${humanChoice} beats ${compChoice}`)
    } else if (humanChoice === compChoice) {
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
        resultMsg.textContent = `It\'s a tie!`
        // return console.log('It\'s a tie!')
    } else {
        ++computerScore;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
        resultMsg.textContent = `You lose :( ${compChoice} beats ${humanChoice}`
        // return console.log(`You lose :( ${compChoice} beats ${humanChoice}`)
    }
}

function playGame() {
    for (let i=1; i<6; i++) {
        // playRound()    
        // console.log(`
        // Human Score: ${humanScore}
        // Computer Score: ${computerScore}
        // ---------------`)
    }
    if (humanScore > computerScore) {
        return alert('YOU\'RE A WINNER!')
    } else if (humanScore < computerScore) {
        return alert('YOU LOST')
    } else {
        return alert ('IT\'S A TIE')
    }
}

const buttonRock = document.querySelector('#buttonRock');
buttonRock.addEventListener('click', () => {
    humanChoice = 'rock';
    playRound();
})

const buttonPaper = document.querySelector('#buttonPaper');
buttonPaper.addEventListener('click', () => {
    humanChoice = 'paper';
    playRound();
})

const buttonScissors = document.querySelector('#buttonScissors');
buttonScissors.addEventListener('click', () => {
    humanChoice = 'scissors';
    playRound();
})

const resultsContainer = document.querySelector('div');

const resultMsg = document.createElement('p');
resultsContainer.appendChild(resultMsg);

const results = document.createElement('p');
results.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
resultsContainer.appendChild(results);

// document.addEventListener('load', playGame);
playGame()