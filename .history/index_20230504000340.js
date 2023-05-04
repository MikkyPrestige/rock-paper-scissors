const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  // console.log(options[random])
  return options[random];
};

// computerPlay()

const playerSelection = prompt("Choose either Rock, Paper or Scissors");
const computerSelection = computerPlay();

// console.log(playerSelection)
// console.log(computerSelection)

const playRound = (playerSelection, computerSelection) => {
  if (!playerSelection) {
    return "No player selection";
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()
    return "It's a tie";
  })

// console.log(playRound(playerSelection, computerSelection))
