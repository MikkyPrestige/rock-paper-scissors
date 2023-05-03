// const input = prompt("Enter an input");

const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    console.log(options)
    return options[random];
}

computerPlay();