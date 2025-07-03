<<<<<<< HEAD
function getComputerChoice() {
  result = Math.floor(Math.random() * 100 + 1);
=======

let humanScore = 0;
let computerScore = 0;
 let i = 1;
function getHumanChoice() {
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');

  // const result = function (){
    rockButton.addEventListener("click", (e) => {
      alert("rock");
      i++;
    });
    paperButton.addEventListener("click", (e) =>{
      return "paper";
    });
    scissorsButton.addEventListener("click", (e) =>{
      return "scissors";
    });
  }
function getComputerChoice() {
  result = Math.floor(Math.random() * (100 + 1));
>>>>>>> 77efcd6 (modify the game from being played on the console to being played on the DOM. Still misbehaves but I am working on it)
  if (result <= 33) {
    return "rock";
  } else if (result >= 66) {
    return"scissors";
  } else {
    return "paper";
  }
}
<<<<<<< HEAD
let humanScore =0;
let computerScore = 0;

function getHumanChoice() {
   
  const result = prompt("rock, paper or scissors?").toLowerCase();

  if (result != "rock" && result != "paper" && result != "scissors"){
    getHumanChoice();
  }
  else {
    return result}
}
function playRound(humanChoice, ComputerChoice) {
    if (humanChoice == "rock" && ComputerChoice == "scissors" ||
        humanChoice == "paper" && ComputerChoice == "rock" ||
        humanChoice == "scissors" && ComputerChoice == "paper") {
        console.log("You win");
        ++humanScore;
    }
    else if (
        ComputerChoice == "rock" && humanChoice == "scissors" ||
        ComputerChoice == "paper" && humanChoice == "rock" ||
        ComputerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose");
        ++computerScore;
    }
    else {
        console.log("it's a tie");
=======
function playRound(humanChoice, ComputerChoice) {

  let yourScore = document.querySelector('#your-score');
   let computerScore = document.querySelector('#computer-score');

  //scenario 1: Human wins;
    if (humanChoice == "rock" && ComputerChoice == "scissors"){
        alert("You win. rock beats scissors.");
        ++humanScore;
    }
    else if  (humanChoice == "paper" && ComputerChoice == "rock"){
        alert("You window. Paper beats RemotePlayback.");
        ++humanScore;
    }
    else if (humanChoice == "scissors" && ComputerChoice == "paper") {
        alert("You win. Scissors beats paper.");
        ++humanScore;
    }

    //scenario 2: Computer wins;
    else if (ComputerChoice == "rock" && humanChoice == "scissors"){
        console.log("You lose, rock beats scissors.");
        ++computerScore;
    }
    else if (ComputerChoice == "paper" && humanChoice == "rock"){
        console.log("You lose. paper beats rock");
        computerScore++;
    }
    else if (ComputerChoice == "scissors" && humanChoice == "paper"){
        console.log("You lose. Paper beats rock.");
        computerScore++;
    }

    //scenario 3: It's a tie;
    else {
        console.log("It's a tie. You selected the same choice as the computer");
>>>>>>> 77efcd6 (modify the game from being played on the console to being played on the DOM. Still misbehaves but I am working on it)
    }

}

<<<<<<< HEAD
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
        
}
 for (let i = 1; i <= 5; i++){
playGame();

}
if (humanScore > computerScore){
        console.log("congrats! you are the winner");
        }
        else if (computerScore > humanScore){
        console.log("Game over! You lost!");
        
        }
        else {
            console.log("it was a tie");
=======

function playGame(){
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice;

    playRound(humanSelection, computerSelection);

}
 if(i <= 5){
  playGame();
}
if (humanScore > computerScore){
       alert("congrats! You won.");
        }
        else if (computerScore > humanScore){
        alert("Game over! You lost");

        }
        else {
            alert("it was a tie");
>>>>>>> 77efcd6 (modify the game from being played on the console to being played on the DOM. Still misbehaves but I am working on it)
        }