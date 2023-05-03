const input = prompt("Enter an input");

const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playerSelection = input;
const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  }
};

console.log(playRound(playerSelection, computerSelection));

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i <= 5; i++) {
//     const result = playRound(playerSelection, computerSelection);
//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     }
//   }
//   if (playerScore > computerScore) {
//     return `You win! ${playerScore} to ${computerScore}`;
//   } else {
//     return `You lose! ${playerScore} to ${computerScore}`;
//   }
// };

// console.log(game());
