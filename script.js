
console.log("Hi");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    let num = Math.floor( Math.random() * 3) + 1;
    switch(num){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Invalid choice";
        
    }
}

function getHumanChoice(){
   
   return prompt( "Enter your choice : Rock, Paper or Scissors. ").trim().toLowerCase();
     
}

 function playRound(humanChoice , computerChoice){
    console.log("Welcome to game");
    
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

     // human choice is rock
     if(humanChoice === 'rock' && computerChoice === 'scissors'){ console.log( "You win! Rock beats scissors"); humanScore++;}
     else if (humanChoice === 'rock' && computerChoice === 'paper'){ console.log( "You lose! Paper beats Rock"); computerScore++ ; }
     else if (humanChoice === 'rock' && computerChoice === 'rock'){ console.log( "Its a Tie !!")}
     // human choice is paper
     else if(humanChoice === 'paper' && computerChoice === 'rock'){ console.log( "You win! Paper beats rock"); humanScore++;}
     else if (humanChoice === 'paper' && computerChoice === 'scissors'){ console.log( "You lose! Scissors beats Paper"); computerScore++ ; }
     else if (humanChoice === 'paper' && computerChoice === 'paper'){ console.log( "Its a Tie !!")}
     // human choice is scissor
     else if(humanChoice === 'scissors' && computerChoice === 'paper'){ console.log( "You win! Scissors beats Paper"); humanScore++;}
     else if (humanChoice === 'scissors' && computerChoice === 'rock'){ console.log( "You lose! Rock beats Scissors") ; computerScore++ ; }
     else if (humanChoice === 'scissors' && computerChoice === 'scissors'){ console.log( "Its a Tie !!")}

     console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
 }
 
for(let i =1; i<=5 ;i++){
    console.log("Round:" + i);
    const humanChoice = getHumanChoice();
 const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
}
console.log("End of the Game!!");
if(humanScore > computerScore){
    console.log("Human Win!!")
}else if(humanScore < computerScore){
    console.log("Computer Win!!")
} else {
    console.log("Its a draw!!");
}
