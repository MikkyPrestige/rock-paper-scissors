const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const playerSelection = () => {
  const playerInput = prompt("Rock, Paper, or Scissors?");
  if (playerInput === null) {
    alert("You have to choose Rock, Paper, or Scissors!");
  } else if (
    playerInput.toLowerCase() === "rock" ||

  )

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
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
