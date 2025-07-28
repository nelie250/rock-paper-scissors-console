console.log('Hello, World!');

function getComputerChoice(){

  const randomNum = Math.random();
  let compChoice = "";
  if(randomNum<=1/3) compChoice ='rock';
  else if (randomNum<=2/3) compChoice = 'paper';
  else compChoice = 'scissors';
return compChoice
}


function  getHumanChoice(){
  const input = prompt('Enter your choice: Rock, Paper, Scissors');
return input.toLowerCase()
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === computerChoice){
    console.log(`It's a tie! Human: ${humanChoice}, Computer: ${computerChoice}`)
  }
  else if(
          humanChoice==='paper' && computerChoice === 'rock' || 
          humanChoice === 'rock' && computerChoice === 'scissors' || 
          humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
           humanScore++;
           console.log( `You win! ${humanChoice} beats ${computerChoice}`);
        }  

  else{
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);}

      console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)

}

function playGame(){

  humanScore = 0;
  computerScore = 0;

  for(let i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection  = getComputerChoice();
    console.log(`\nRound: ${i + 1} `);
    playRound( humanSelection, computerSelection);
  }    
  

  if(humanScore>computerScore){
    return `You won! Score: ${humanScore}`
  }
  else if (humanScore<computerScore){
    return `Computer won! Score: ${computerScore}`
  }
  else return `The game ended in a tie! Human Score: ${humanScore}, Computer Score: ${computerScore}`

}


console.log(playGame());
