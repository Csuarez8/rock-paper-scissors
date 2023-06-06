console.log("Hey");

const options= ["rock", "paper", "scissors"];

function getComputerChoice (){
    const choice = options[Math.floor(Math.random()* options.length)]; //Don't understand completely//
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }

}



function playRound (playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result =="Tie"){
        return "It's a tie"
    }
    else if (result =="Player"){
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lost ${computerSelection} beats ${playerSelection}`;
    }

}

function getPLayerChoice(){
    let validateInput= false;
    while(validateInput == false){
        const choice = prompt('Rock Paper Scissors');
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
          return choiceInLower;  
        }
    }

}

function game(){
    let scorePlayer = 0;
    let scoreComputer= 0;
    console.log("Welcome")
    for (let i=0;i<5;i++){
        const playerSelection= getPLayerChoice();
        const computerSelection= getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection)== "Player"){
            scorePlayer++;
        } 
        else if (checkWinner(playerSelection, computerSelection)== "Computer"){
            scoreComputer++;
        }
   }
   console.log("Game Over");
   if(scorePlayer > scoreComputer){
    console.log("Player was the winner");
   }else if(scorePlayer < scorePlayer){
    console.log("computer was winner")
   }
   else{
    console.log("We have a tie");
   }

}

game();