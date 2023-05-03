const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "" && playerSelection === null) {
    
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose Rock, Paper, or Scissors:');
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    }
    else if (result.includes("lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win!");
  }
  else {
    console.log("You lose!");
  }
}

game();


// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Enter your choice: ");
//     const computerSelection = computerPlay();
//     const result = playRound(playerSelection, computerSelection);
//     console.log(result);
//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     }
//   }
//   if (playerScore > computerScore) {
//     console.log("You win!");
//   } else if (playerScore < computerScore) {
//     console.log("You lose!");
//   } else {
//     console.log("It's a tie!");
//   }
// }

// game();