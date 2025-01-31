// Function to generate a random option for the computer
const options = ["rock", "paper", "scissors"];
const computerPlay = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  console.log(options[randomIndex]);
  return options[randomIndex];
};

function capitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  if (!options.includes(playerSelection)) {
    return "Error. Please select Rock, Paper or Scissors";
  }
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "rock" && computerSelection == "scissors")
  ) {
    return `You Win! ${capitalFirstLetter(
      playerSelection
    )}  beats  ${capitalFirstLetter(computerSelection)}`;
  } else {
    return `You Lose! ${capitalFirstLetter(
      computerSelection
    )}  beats ${capitalFirstLetter(playerSelection)}`;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
