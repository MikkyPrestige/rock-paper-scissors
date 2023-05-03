const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection + computerSelection) {
    case "rockscissors":
      return "You win! Rock beats scissors";
    case "rockpaper":
      return "You lose! Paper beats rock";
    case "paperrock":
      return "You win! Paper beats rock";
    case "paperscissors":
      return "You lose! Scissors beats paper";
    case "scissorspaper":
      return "You win! Scissors beats paper";
    case "scissorsrock":
      return "You lose! Rock beats scissors";
    default:
      return "It's a tie!";
  }
};
// console.log(playRound(playerSelection, computerSelection));

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      let playerSelection = "";
      while (!playerSelection || !["rock", "paper", "scissors"].includes(playerSelection)) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        if (!playerSelection) {
          alert("Enter either Rock, Paper or Scissors");
        } else if (
          !["rock", "paper", "scissors"].includes(playerSelection)
        ) {
          alert("Enter a valid word");
        }
      }
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      // console.log(result);
      if (result.includes("win")) {
        playerScore++;
        // console.log(playerScore);
      } else if (result.includes("lose")) {
        computerScore++;
        // console.log(computerScore);
      }
    }
    if (playerScore > computerScore) {
      return `You win ${playerScore} to ${computerScore}`;
    } else {
      return `You lose ${computerScore} to ${playerScore}`;
    }
  }

console.log(game());
