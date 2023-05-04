const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You win! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You lose! Rock beats Scissors";
  }
  else if (
    playerSelection.toLowerCase() !== "rock" ||
    playerSelection.toLowerCase() !== "paper" ||
    playerSelection.toLowerCase() !== "scissors"
  ) {
    alert("Invalid input");
    playerSelection = prompt("Choose either Rock, Paper or Scissors");
  }

  return;
};


const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = "";
   while (!playerSelection) {
      playerSelection = prompt("Choose either Rock, Paper or Scissors");
      if (playerSelection) {
        break;
      }
      alert("Game cancelled by user");
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
    console.log(`You win! Your score is ${playerScore} and the computer's score is ${computerScore}`);
  } else {
    console.log(`You lose! Your score is ${playerScore} and the computer's score is ${computerScore}`);
  }
  return
};

game();

