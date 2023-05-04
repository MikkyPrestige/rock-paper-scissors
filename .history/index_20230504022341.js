const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          return "It's a tie";
        case "paper":
          return "You lose! Paper beats Rock";
        case "scissors":
          return "You win! Rock beats Scissors";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          return "You win! Paper beats Rock";
        case "paper":
          return "It's a tie";
        case "scissors":
          return "You lose! Scissors beats Paper";
      }
      break;
    case "scissors":
      switch (computer) {
        case "rock":
          return "You lose! Rock beats Scissors";
        case "paper":
          return "You win! Scissors beats Paper";
        case "scissors":
          return "It's a tie";
      }
      break;
    default:
      return;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = "";
    while (
      !playerSelection ||
      !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
    ) {
      playerSelection = prompt("Choose either Rock, Paper or Scissors");
      if (playerSelection === "") {
        alert("Selection can't be empty");
      } else if (!playerSelection) {
        alert("Game cancelled");
        return;
      } else if (
        !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
      ) {
        alert("Invalid selection! Please choose Rock, Paper, or Scissors");
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
    alert(
      `You win! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
    // console.log(
    //   `You win! Your score is ${playerScore} and the computer's score is ${computerScore}`
    // );
  } else {
    alert(
      `You lose! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
    // console.log(
    //   `You lose! Your score is ${playerScore} and the computer's score is ${computerScore}`
    // );
  }
  return;
};

game();
