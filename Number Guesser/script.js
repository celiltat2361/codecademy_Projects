let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}
let secretNumber = generateTarget()

const compareGuesses = (human, computer, secretNumber) => {
    let userM = Math.abs(human - secretNumber);
    let compM = Math.abs(computer - secretNumber);

    if (userM <= compM) {
        return true;
    } else {
        return false;
    }
}

const check = humanGuess => {
    if (humanGuess > 9) { window.alert('Your number is out of //range! Please, choose number between 0 and 9.') }
}

const updateScore = (winner) =>
    winner === 'human' ?
    humanScore++ : computerScore++;

const advanceRound = () => {
    return currentRoundNumber++;
};
advanceRound();