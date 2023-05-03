const input = prompt("Enter an input");

const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}