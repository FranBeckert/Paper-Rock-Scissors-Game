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
function userPlay() {
  let playerSelection = prompt(
    "Enter your choice: Rock, Paper or Scissors"
  );
  if (playerSelection === null) {
    return null;
  }
  playerSelection = playerSelection.toLowerCase().trim();
  if (!options.includes(playerSelection)) {
    alert("Error. Please select Rock, Paper or Scissors")
    return userPlay();
  }
  return playerSelection;

}



function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  if (!isDevToolsOpen()) {
    alert("Please open console tab in dev tools to play the game, you can open the dev tools by pressing (Ctrl + Shift + i) or right click on the page and select inspect element then click on console tab. Ensure console is attached to the browser. Close this alert and the page will refresh");
    location.reload();
    return;
  }
  alert(
    "Welcome to RockHow to Play Rock, Paper, Scissors👆 Choose Your Move!\n Rock 🪨 \nPaper 📜 \nScissors ✂️ \n 🤝 The Battle Begins! \n You and your opponent will reveal your choices. \n 🥇 Who Wins? \nGood luck!"

  for (let i = 0; i < 5; i++) {
    const playerSelection = userPlay();
    if (playerSelection === null) {
      console.log("You have exited the game!");
      break;
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

  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    game();
  } else {
    console.log("Thanks for playing! Have a great day!");
  }
}
game();
