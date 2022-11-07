const computerChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possiblChoices = document.querySelectorAll('button');
let userChoice
let computerChoiceGenerete
let result

possiblChoices.forEach(possiblChoice => possiblChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
    generateComputerChoice() 
    getResult()
}
) )

function generateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * possiblChoices.length);
    if (randomNumber === 1) {
        computerChoiceGenerete = 'rock';
    } if (randomNumber === 2){
        computerChoiceGenerete = 'paper';
    } if (randomNumber === 3) {
        computerChoiceGenerete = 'scissors'
    }
    computerChoice.innerHTML = computerChoiceGenerete
}
function getResult() {
    if (computerChoiceGenerete === userChoice) {
        result = 'Its a draw!'
    }if (computerChoiceGenerete === 'rock' && userChoice === 'paper'){
        result = 'You win!'
    }if (computerChoiceGenerete === 'rock' && userChoice === 'scissors'){
        result = 'you lost'
    }if (computerChoiceGenerete === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }if (computerChoiceGenerete === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }if (computerChoiceGenerete === 'scissors' && userChoice === 'paper'){
        result = 'you lost'
    }if (computerChoiceGenerete === 'scissors' && userChoice === 'rock'){
        result = 'you win'
    }
    resultDisplay.innerHTML = result
}