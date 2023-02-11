function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function playRound(playerSelection, computerSelection){
    //makes selection input not case sensitive 
   let pSelection = playerSelection.toLocaleLowerCase();
    
    switch(pSelection) {
        case "rock":
            if (computerSelection === "scissors"){
                result.textContent = "You Win! Rock beats Scissors";
                pScore += 1
                
            } else if(computerSelection === "paper"){
                result.textContent = "You Lose! Paper beats Rock";
                cScore += 1
                
            } else {
                result.textContent = "DRAW!"
                
               
            }
        break;
        case "paper":
            if (computerSelection === "scissors"){
                result.textContent = "You Lose! Scissors beats Paper";
                cScore += 1  
                
            } else if(computerSelection === "rock"){
                result.textContent = "You Win! Paper beats Rock";
                pScore += 1
               
            } else {
                result.textContent = "DRAW!"
                
            }
        break;
        case "scissors":
            if (computerSelection === "rock"){
                result.textContent = "You Lose! Rock beats Scissors";
                cScore += 1
                
            } else if(computerSelection === "paper"){
                result.textContent = "You Win! Scissors beats Paper";
                pScore += 1
                
            } else {            
                result.textContent = "DRAW!"
                
            }
        break;
        default:
            console.log("Invalid choice");
    }

    playerScore.textContent = pScore;
    compScore.textContent = cScore;

    if (pScore == 5){result.textContent = "Congratulations! Your beat the Computer!!"} 
    if (cScore == 5){result.textContent = "Loser! You couldn't even beat a computer at a child's game"}


}
//creating and selecting elements
const body = document.querySelector('body');
const result = document.createElement('div');
const playerScore = document.createElement('p');
const compScore = document.createElement('p');

//setting score
let pScore = 0;
let cScore = 0;

//appending elements to body of the DOM
body.appendChild(result);
body.appendChild(playerScore);
body.appendChild(compScore);

//selecting and adding event listeners to buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', function(){playRound(button.textContent, getComputerChoice())}));




// function game(){
    
//     let pScore = 0;
//     let cScore = 0;

//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("Rock, Paper or Scissors:");
//         let winner = playRound(playerSelection, getComputerChoice())
        
//         if (winner === "player"){
//             pScore += 1;
//         } else if (winner === "comp"){
//             cScore += 1;
//         } else {
//             console.log("DRAW!");
//         }
//     }

//     if (pScore > cScore){
//         console.log("Congratulations! You win the game")
//     } else if (pScore < cScore){
//         console.log("Loser! You were beat by the Computer")
//     } else {
//         console.log("Tie Game!!")
//     }
// }

// game();