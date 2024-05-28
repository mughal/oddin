let humanScore = computerScore = 0;
let humanSelection='';
let computerSelection='';
let gameRound=0;
let remarks = '';

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
        remarks = "No One win this round";
        console.log("No One win this round");
    }

    if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase()==="SCISSORS") {
        humanScore++;
        remarks = `Human choice ${humanChoice} beats Computer choice ${computerChoice}`;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`);
    } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase()==="SCISSORS") {
        computerScore++;
        remarks = `Computer choice ${computerChoice} beats Human choice ${humanChoice}`;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`);
    } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase()==="ROCK"){
        humanScore++;
        remarks = `Human choice ${humanChoice} beats Computer choice ${computerChoice}`;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`);
    } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase()==="PAPER"){
        humanScore++;
        remarks = `Human choice ${humanChoice} beats Computer choice ${computerChoice}`;
        console.log(`Human choice ${humanChoice} beats Computer choice ${computerChoice}`);
    } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase()==="ROCK"){
        computerScore++;
        remarks = `Computer choice ${computerChoice} beats Human choice ${humanChoice}`;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`);
    } else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase()==="PAPER"){
        computerScore++;
        remarks = `Computer choice ${computerChoice} beats Human choice ${humanChoice}`;
        console.log(`Computer choice ${computerChoice} beats Human choice ${humanChoice}`);
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
    humanSelection='';
    computerSelection='';
    for (let i=1; i<=5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Score is Human: ${humanScore} Computer: ${computerScore}`);
}

// Select all buttons
const buttons = document.querySelectorAll('button');
const hScore = document.querySelector('.hScore');
const cScore = document.querySelector('.cScore');

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.textContent; // Get the text of the button
    computerSelection = getComputerChoice();
    gameRound = gameRound + 1;
    humanSelection='';
    // Use a switch statement to handle different cases
    switch (buttonText) {
        case 'Rock':
            humanSelection='Rock';
            console.log('Player selected Rock' );
            break;
        case 'Paper':
            humanSelection='Paper';
            console.log('Player selected Paper');
            break;
        case 'Scissors':
            humanSelection='Scissors';
            console.log('Player selected Scissors');
            break;
    }
    playRound(humanSelection, computerSelection);
    addGameResult();
    hScore.textContent="Human: " + humanScore;
    cScore.textContent="Computer: " + computerScore;
    if ((humanScore === 5)  || (computerScore === 5)) {
        setTimeout(() => {
            alert("Congrats to the Winner, Start Over!");
        }, 100); // Delay the alert by 100 milliseconds
    }
}

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


function addGameResult() {
    const table = document.querySelector('#resultsTable tbody'); // Selects the tbody within the table with the ID resultsTable
    const row = table.insertRow(-1); // -1 appends the row at the end of the table
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = gameRound;
    cell2.textContent = humanSelection;
    cell3.textContent = computerSelection;
    cell4.textContent = remarks;
}
