let options = ["rock", "paper", "scissors"];
let playerSelectionScore = 0;
let computerSelectionScore = 0;

const computerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    
    if (options.includes(playerSelection)) {
      if (playerSelection === computerSelection) {
        return "It's a draw! Both played " + playerSelection;
      } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
      ) {
        playerSelectionScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        computerSelectionScore++;
        return (
          "Computer wins! " + computerSelection + " beats " + playerSelection
        );
      }
    } else {
      return "Incorrect choice! Please try again...";
    }
  } else {
    return "See you soon!";
  }
};

const selectWinner = () => {
  if (playerSelectionScore > computerSelectionScore) {
    console.log(
      `Congratulations. 🎈🎈🎈 You won ${playerSelectionScore} rounds`
    );
  } else if (
    playerSelectionScore === computerSelectionScore &&
    playerSelectionScore != 0
  ) {
    console.log("The game ended in a draw.");
  } else if (computerSelectionScore) {
    console.log(
      `Congratulations.🎈🎈🎈 Computer won ${computerSelectionScore} rounds`
    );
  }
};

const game = () => {
  const shouldPlay = confirm("Do you want to play ✊,✋ or✌?");

  if (!shouldPlay) {
    console.log("Maybe next time!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`
    );

    if (playerSelection === null) {
      console.log("Game stopped.");
      break;
    }

    while (!options.includes(playerSelection)) {
      console.log("Invalid choice. Please try again...");
      playerSelection = prompt(
        `Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`
      );
    }

    const computerSelection = computerPlay();
    console.log(`Round ${i + 1}:`);
    console.log(playRound(playerSelection, computerSelection));
  }
  selectWinner();
};
game();
