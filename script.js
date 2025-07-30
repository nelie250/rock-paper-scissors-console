console.log('Hello, World!');

const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');




function getComputerChoice(){
  const randomNum = Math.random();
  if(randomNum<=1/3) return 'rock';
  else if (randomNum<=2/3) return 'paper';
  else return 'scissors';
}

function playerSelection (){
  buttons.forEach((btn)=>btn.addEventListener('click',()=>{
    const playerSelection = btn.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection); //calling playRound function
  }))  
  
}

  let humanScore = 0;
  let computerScore = 0;
//backbone of a game

function playRound(playerSelection,computerChoice){

  if(playerSelection === computerChoice){
    resultDiv.textContent = (`It's a tie! Human: ${playerSelection}, Computer: ${computerChoice}`)
  }
  else if(
          playerSelection==='paper' && computerChoice === 'rock' || 
          playerSelection === 'rock' && computerChoice === 'scissors' || 
          playerSelection === 'scissors' && computerChoice === 'paper'
        ) {
           humanScore++;
           resultDiv.textContent = ( `You win! ${playerSelection} beats ${computerChoice}`);
        }  

  else{
      computerScore++;
      resultDiv.textContent = (`You lose! ${computerChoice} beats ${playerSelection}`);}

      scoreDiv.textContent = (`Your Score: ${humanScore}, Computer Score: ${computerScore}`)


      if(humanScore>=5||computerScore>=5){
        winner();//calling winner function inorder to announcer winner
        humanScore = 0;
        computerScore = 0;
        resultDiv.textContent = '';
        scoreDiv.textContent = '';
       
      }

}

//function for declaring winner of a game

  function winner(){
    if(humanScore > computerScore) 
      winnerDiv.textContent = `You won!`;
    else 
      winnerDiv.textContent = `Computer won!`; 

  }

  playerSelection();