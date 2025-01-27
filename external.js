// Function to generate a random option for the computer
const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  console.log(options[randomIndex]);
  return options[randomIndex];
};
