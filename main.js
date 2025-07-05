
let humanScore = 0;
let computerScore = 0;
 let i = 0;
  let humanChoice, ComputerChoice;
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener("click", e => {
      humanChoice = "rock";
      getComputerChoice();
      playRound(humanChoice, ComputerChoice);
      ++i;
      updateRound();
    });
    paperButton.addEventListener("click", e =>{
      humanVhoice = "paper";
      getComputerChoice();
      playRound(humanChoice, ComputerChoice);
      ++i;
      updateRound();
    });
    scissorsButton.addEventListener("click", e =>{
      humanChoice = "scissors";
      getComputerChoice();
      playRound(humanChoice, ComputerChoice);
      ++i;
      updateRound();
    });

function updateRound (){
  const buttons = document.querySelector('.buttons');
  buttons.addEventListener('click', e => {
  let round = document.querySelector('#roundspan');
  round.innerText = i;

  let compScore = document.querySelector('#computer-score');
  let yourScore = document.querySelector('#your-score');
  yourScore.innerText = humanScore;
  compScore.innerText = computerScore;

  if (yourScore.innerText == 5){
    alert("Congrats! You won the game.");
    restartGame();
  }
  else if (compScore.innerText == 5){
    alert("Game over! you lost terribly to the computer.")
    restartGame();
  }

  });
}

function getComputerChoice() {
  result = Math.floor(Math.random() * (100 + 1));
  if (result <= 33) {
    ComputerChoice = "rock";
  } else if (result >= 66) {
    ComputerChoice = "scissors";
  } else {
    ComputerChoice = "paper";
  }
   console.log(ComputerChoice)
  return ComputerChoice;
}

function playRound(humanChoice, ComputerChoice) {
  let msg = document.querySelector('#msg');

  //scenario 1: Human wins;
    if (humanChoice == "rock" && ComputerChoice == "scissors"){
        msg.innerText = "You win. rock beats scissors.";
        ++humanScore;

    }
    else if  (humanChoice == "paper" && ComputerChoice == "rock"){
        msg.innerText = "You window. Paper beats RemotePlayback.";
        ++humanScore;
    }
    else if (humanChoice == "scissors" && ComputerChoice == "paper") {
      msg.innerText = "You win. Scissors beats paper.";
        ++humanScore;
    }

    //scenario 2: Computer wins;
    else if (ComputerChoice == "rock" && humanChoice == "scissors"){
        msg.innerText = "You lose, rock beats scissors.";
        ++computerScore;
    }
    else if (ComputerChoice == "paper" && humanChoice == "rock"){
        msg.innerText = "You lose. paper beats rock";
        computerScore++;
    }
    else if (ComputerChoice == "scissors" && humanChoice == "paper"){
        msg.innerText = "You lose. Paper beats rock.";
        computerScore++;
    }

    //scenario 3: It's a tie;
    else if (humanChoice === ComputerChoice) {
        msg.innerText = "It's a tie. You selected the same choice as the computer";
    }

}
function restartGame(){
  i = 0;
  computerScore = 0;
  humanScore = 0;
}