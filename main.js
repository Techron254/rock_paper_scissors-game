function getComputerChoice() {
  result = Math.floor(Math.random() * 100 + 1);
  if (result <= 33) {
    return "rock";
  } else if (result >= 66) {
    return"scissors";
  } else {
    return "paper";
  }
}
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
    }

}

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
        }