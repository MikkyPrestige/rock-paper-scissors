const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  // console.log(options[random])
  return options[random];
};

// computerPlay()

const playerSelection = prompt("Choose either Rock, Paper or Scissors").toLowerCase();
const computerSelection = computerPlay().toLowerCase();

console.log(playerSelection)
console.log(computerSelection)
