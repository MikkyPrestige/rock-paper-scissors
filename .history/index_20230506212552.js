const computerPlay = () => {
  const words = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const playerSelection = () => {
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
  return playerSelection;
};

const playRound = (player, computerSelection) => {
  const player = player.toLowerCase();
  const computer = computerSelection.toLowerCase();
  let playerValue, computerValue;

  switch (player) {
    case "paper":
      playerValue = 0;
      break;
    case "rock":
      playerValue = 1;
      break;
    case "scissors":
      playerValue = 2;
      break;
    default:
      return;
  }

  switch (computer) {
    case "paper":
      computerValue = 0;
      break;
    case "rock":
      computerValue = 1;
      break;
    case "scissors":
      computerValue = 2;
      break;
    default:
      return;
  }

  if (playerValue === computerValue) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if ((playerValue - computerValue + 3) % 3 === 1) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  for (let i = 0; i < 5; i++) {
    const player = playerSelection();
    const computerSelection = computerPlay();
    const result = playRound(player, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else if (result.includes("tie")) {
      drawScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `You win! ${playerScore} to ${computerScore} with ${drawScore} ties`
    );
  } else {
    console.log(
      `You lose! ${computerScore} to ${playerScore} with ${drawScore} ties`
    );
  }
  return;
};

game();
