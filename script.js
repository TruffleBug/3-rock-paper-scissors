let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNum = Math.random();
    let computerChoice = '';
    if (randomNum >=0 && randomNum<0.34) {
        computerChoice = 'rock';
    } else if (randomNum >= 0.34 && randomNum <0.67) {
        computerChoice = 'paper';        
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice 
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
    computerChoice = getComputerChoice();
    // humanChoice = getHumanChoice();
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
            ++humanScore;
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
            console.log(computerChoice)
            resultMsg.textContent = `You win :D ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
        console.log(computerChoice)
        resultMsg.textContent = `It\'s a tie!`
    } else {
        ++computerScore;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
        console.log(computerChoice)
        resultMsg.textContent = `You lose :( ${computerChoice} beats ${humanChoice}`
    }
    scoreTracker()
}

function scoreTracker() {
    results.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            alert('YOU WIN!');
        } else if (humanScore < computerScore) {
            alert('YOU LOSE');
        } else {
            alert ('IT\'S A TIE');
        }
        location.reload();
    }
}

// function playGame() {
//     // for (let i=1; i<6; i++) {
//         getHumanChoice()
//     // }
//         // if (humanScore > computerScore) {
//         //     return alert('YOU\'RE A WINNER!')
//         // } else if (humanScore < computerScore) {
//         //     return alert('YOU LOST')
//         // } else {
//         //     return alert ('IT\'S A TIE')
//         // }
// }

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
resultMsg.style.color = 'blue';

const results = document.createElement('p');
resultsContainer.appendChild(results);
results.style.fontWeight = 'bold'