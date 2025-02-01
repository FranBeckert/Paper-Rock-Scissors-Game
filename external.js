function isDevToolsOpen() {
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  return widthThreshold || heightThreshold;
}

const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

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
  alert(
    "Welcome to Rock, Paper, Scissors!\nDefeat the Evil AI by winning at least 3 out of 5 rounds.\nGood luck!"
  );

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Press cancel to give up the game\nEnter your choice: Rock, Paper or Scissors"
    );
    if (playerSelection === null) {
      console.log("you have given up the game");
      return;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("You Win!")) {
      playerScore++;
    } else if (result.includes("You Lose!")) {
      computerScore++;
    }
    console.log(result);
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}
game();
