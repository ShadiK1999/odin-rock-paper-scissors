function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function playRound(playerSelection, computerSelection){
    //makes selection input not case sensitive 
    pSelection = playerSelection.toLocaleLowerCase();
    
    switch(pSelection) {
        case "rock":
            if (computerSelection === "scissors"){
                    console.log("You Win! Rock beats Scissors");
                    return "player";
            } else if(computerSelection === "paper"){
                console.log("You Lose! Paper beats Rock");
                return "comp";
            } else {
                console.log("DRAW!");
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
                console.log("DRAW!");
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
                console.log("DRAW!");
                return "draw";
            }
        break;
        default:
            console.log("Invaid choice");
    }

}

//function game(){

//}