// | rock | paper | scissors
// --------|------|-------|---------
// rock    | tie  | lose  | win
// paper   | win  | tie   | lose
// scissors| lose | win   | tie


const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};


const playRound = (playerSelection, computerSelection) => {
  let playerValue, computerValue;

  switch (playerSelection.toLowerCase()) {
    case "rock":
      playerValue = 2;
      break;
    case "paper":
      playerValue = 1;
      break;
    case "scissors":
      playerValue = 0;
      break;
    default:
      return;
  }

  switch (computerSelection.toLowerCase()) {
    case "rock":
      computerValue = 2;
      break;
    case "paper":
      computerValue = 1;
      break;
    case "scissors":
      computerValue = 0;
      break;
    default:
      return;
  }

  if (playerValue === computerValue) {
    return "It's a tie";
  } else if(
    (playerValue === 2 && computerValue === 1) ||
    (playerValue === 1 && computerValue === 0) ||
    (playerValue === 0 && computerValue === 2)
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};
// const playRound = (playerSelection, computerSelection) => {
//   const player = playerSelection.toLowerCase();
//   const computer = computerSelection.toLowerCase();

//   switch (player) {
//     case "rock":
//       switch (computer) {
//         case "rock":
//           return "It's a tie";
//         case "paper":
//           return "You lose! Paper beats Rock";
//         case "scissors":
//           return "You win! Rock beats Scissors";
//       }
//       break;
//     case "paper":
//       switch (computer) {
//         case "rock":
//           return "You win! Paper beats Rock";
//         case "paper":
//           return "It's a tie";
//         case "scissors":
//           return "You lose! Scissors beats Paper";
//       }
//       break;
//     case "scissors":
//       switch (computer) {
//         case "rock":
//           return "You lose! Rock beats Scissors";
//         case "paper":
//           return "You win! Scissors beats Paper";
//         case "scissors":
//           return "It's a tie";
//       }
//       break;
//     default:
//       return;
//   }
// };

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
    console.log(
      `You win! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  } else {
    console.log(
      `You lose! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  }
  return;
};

game();
