let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = targetNumber => {
    targetNumber = Math.floor(Math.random() * 10);
    return targetNumber
  };

  
const compareGuesses = (humanguess, computerGuess, target) => {
    human = humanguess - target;
    computer = computerGuess - target;

    human = Math.abs(human);
    computer = Math.abs(computer);

    if (human < 2) {
        return true;
    } else if (computer < 2) {
        return false;
    } else if (computer === human) {
        return true;
    }

}

const updateScore = winner => {
    if('human' === winner) {
        humanScore + 1;
    } else if ('computer' === winner) {
        computerScore + 1;
    }
};

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
};

//     human = humanguess - target;
//     computer = computerGuess - target;

//     if (Math.abs(human) <= 2) {
//         return true;
//     } else if (Math.abs(computer) <= 2) {
//         return false;
//     } else if (Math.abs(computer) === Math.abs(human)) {
//         return true;
//     } else {
//         return null;
//     }
// };