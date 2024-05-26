let humanScore = computerScore = 0;
function getComputerChoice(){
    let compChoice=Math.floor(Math.random()*3);
    if  (compChoice === 0) {
        return "Rock"
    } else if (compChoice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice(){
    while (true) {
        let humanChoice = prompt("Enter Rock, Paper of Scissors");
        let humanChoiceT = humanChoice.toUpperCase();
        if (humanChoiceT === "ROCK" || humanChoiceT === "PAPER" || humanChoiceT === "SCISSORS") {
            return humanChoice
        } else {
            alert("Please pick the right choice as per game")
        }
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human =${humanChoice} Computer = ${computerChoice}`);
    if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
        console.log("No One win this round");
    }

    if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase()==="SCISSORS") {
        humanScore++;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`)
    } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase()==="SCISSORS") {
        computerScore++;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`)
    } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase()==="ROCK"){
        humanScore++;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`)
    } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase()==="PAPER"){
        humanScore++;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`)
    } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase()==="ROCK"){
        computerScore++;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`)
    } else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase()==="PAPER"){
        computerScore++;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`)
    }
  }
  //const humanSelection = getHumanChoice();
  //const computerSelection = getComputerChoice();
  
  //playRound(humanSelection, computerSelection);
// playRound("rock", "rock");
// playRound("paper", "rock");
// playRound("scissors", "rock");
// playRound("rock", "paper");
// playRound("paper", "paper");
// playRound("scissors", "paper");
// playRound("rock", "scissors");
// playRound("paper", "scissors");
// playRound("scissors", "scissors");

function playGame(){
    let humanSelection='';
    let computerSelection='';
    for (let i=1; i<=5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Score is Human: ${humanScore} Computer: ${computerScore}`);
}
  