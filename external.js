function isDevToolsOpen() {
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  return widthThreshold || heightThreshold;
}
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

function game() {
  if (!isDevToolsOpen()) {
    alert("Please open console tab in dev tools to play the game");
  }

  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Press cancel to forfet the game\nEnter your choice: ");
    if (playerSelection === null) {
      console.log("you have forfeted the game");
      return;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result == "You Win!") {
      playerScore++;
    } else if (result == "You Lose!") {
      computerScore++;
    }
    console.log(result);
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}
game();
