const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "It's a tie!";
      }
      if (computerSelection === "paper") {
        return "You lose! Paper beats Rock";
      }
      if (computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        return "You win! Paper beats Rock";
      }
      if (computerSelection === "paper") {
        return "It's a tie!";
      }