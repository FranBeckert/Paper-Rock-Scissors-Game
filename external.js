// Function to generate a random option for the computer
const options = ["rock", "paper", "scissors"];
const computerPlay = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  console.log(options[randomIndex]);
  return options[randomIndex];
};


function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  if(!options.includes(playerSelection)) {
    return "error"
  }
  if (playerSelection == computerSelection) {
      return "It's a tie!";
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "rock" && computerSelection == "scissors") 
  ) {
      return "You Win!";
  } else {
      return "You Lose!";
  }
}

const playerSelection = 'rock' ; 
const computerSelection = computerPlay() ; 
console.log(playRound(playerSelection ,computerSelection)) ; 