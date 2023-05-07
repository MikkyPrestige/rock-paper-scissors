const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const playerInput = () => {
  const input = prompt("Enter 'rock', 'paper', or 'scissors' to play");
  if (input === null) {
    return
  }
  return input.trim().toLowerCase();
};

const quitGame = () => {
 const quit = prompt("Are you sure you want to quit? (y/n)");
  if (quit === "y") {
    alert("Thanks for playing!");
    return;
  } else if (quit === "n") {
    alert("Great! Let's keep playing!");
    game()
  } else {
    alert("Please enter 'y' or 'n'");
    quitGame();
  }
  return;
};

const playerSelection = () => {
  const inputFromPlayer = playerInput();
  if (inputFromPlayer === "") {
    alert("Selection can't be empty");

  } else if (!inputFromPlayer) {
    quitGame();
  } else if (inputFromPlayer === "rock" || inputFromPlayer === "paper" || inputFromPlayer === "scissors") {
    return inputFromPlayer;
  } else {
    alert("Please enter 'rock', 'paper', or 'scissors'");
    playerSelection();
  }
};


const playRound = (playerSelection, computerSelection) => {
  let playerValue, computerValue;

  switch (playerSelection) {
    case "paper":
      playerValue = 1;
      break;
    case "rock":
      playerValue = 2;
      break;
    case "scissors":
      playerValue = 3;
      break;
    default:
      return;
  }

  switch (computerSelection) {
    case "paper":
      computerValue = 1;
      break;
    case "rock":
      computerValue = 2;
      break;
    case "scissors":
      computerValue = 3;
      break;
    default:
      return;
  }

  if (playerValue === computerValue) {
    console.log(`It's a tie! You both chose ${playerSelection}.`);
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if ((playerValue - computerValue + 3) % 3 === 1) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

let playerScore = 0;
let computerScore = 0;
let tie = 0;

  const winner = () => {
    return playerScore > computerScore
      ? "You win!"
      : playerScore < computerScore
      ? "You lose!"
      : "It's a tie!";
  };

const game = () => {
  for (let i = 0; i < 5; i++) {
    const result = playRound(playerSelection(), computerPlay());
    if (!result) {
      return;
    } else if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else {
      tie++;
    }
  }

  console.log(`Player: ${playerScore} | Computer: ${computerScore} | Tie: ${tie}`);
  console.log(winner());

  return;
};

game();