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
                    console.log("You Win! Rock beats Scissors");
                    return "player";
            } else if(computerSelection === "paper"){
                console.log("You Lose! Paper beats Rock");
                return "comp";
            } else {
                return "draw";
            }
        break;
        case "paper":
            if (computerSelection === "scissors"){
                    console.log("You Lose! Scissors beats Paper");
                    return "comp";
            } else if(computerSelection === "rock"){
                console.log("You Win! Paper beats Rock");
                return "player";
            } else {
                return "draw";
            }
        break;
        case "scissors":
            if (computerSelection === "rock"){
                    console.log("You Lose! Rock beats Scissors");
                    return "comp";
            } else if(computerSelection === "paper"){
                console.log("You Win! Scissors beats Paper");
                return "player";
            } else {            
                return "draw";
            }
        break;
        default:
            console.log("Invaid choice");
    }

}

function game(){
    
    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors:");
        let winner = playRound(playerSelection, getComputerChoice())
        
        if (winner === "player"){
            pScore += 1;
        } else if (winner === "comp"){
            cScore += 1;
        } else {
            console.log("DRAW!");
        }
    }

    if (pScore > cScore){
        console.log("Congratulations! You win the game")
    } else if (pScore < cScore){
        console.log("Loser! You were beat by the Computer")
    } else {
        console.log("Tie Game!!")
    }
}

game();