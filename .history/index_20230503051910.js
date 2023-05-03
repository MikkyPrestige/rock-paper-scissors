const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      return "You win! Rock beats scissors";
    case playerSelection === "rock" && computerSelection === "paper":
      return "You lose! Paper beats rock";
    case playerSelection === "paper" && computerSelection === "rock":
      return "You win! Paper beats rock";
    case playerSelection === "paper" && computerSelection === "scissors":
      return "You lose! Scissors beats paper";
    case playerSelection === "scissors" && computerSelection === "paper":
      return "You win! Scissors beats paper";
    case playerSelection === "scissors" && computerSelection === "rock":
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
    while (!playerSelection) {
      playerSelection = prompt("Choose rock, paper or scissors");
      playerSelection = playerSelection.toLowerCase();
      if (playerSelection === "") {
        alert("Can't be empty");
      } else if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        alert("Choose either rock, paper or scissors");
        playerSelection = "";
      }
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `You win ${playerScore} to ${computerScore}`;
  } else {
    return `You lose ${computerScore} to ${playerScore}`;
  }
};

console.log(game());
