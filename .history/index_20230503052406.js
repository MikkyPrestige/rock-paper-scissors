const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch
  (playerSelection) {