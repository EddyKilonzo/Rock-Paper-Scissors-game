const player1ChoiceDisplay = document.getElementById("player-1-choice");
const ComputerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const restartButton = document.getElementsByClassName('.button');
const score = document.getElementsByClassName('span');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = document.getElementsByClassName(".choices");

const getComputerChoice = () => {
    const choices = ['rock', 'paper','scissors'];
    randomChoice =  choices[Math.floor(Math.random() * 3)];
    ComputerChoiceDisplay.innerHTML = randomChoice;
    return randomChoice
    
}
let result=""
let genCount = document.getElementById('gen-count')
let playerScore = document.getElementById('player-1-score')
let computerScore = document.getElementById('computer-score')
let drawScore = document.getElementById('draw-score')
let genCounter = 0;
let drawCounter = 0;
let computerCounter = 0;
let playerCounter = 0;

function game(player1) {  
    genCounter++
    const computer = getComputerChoice();
    if(player1 === 'rock' && computer === 'scissors') {
            result = "player1 WINS"
            playerCounter++
            playerScore.textContent= playerCounter;
        } else if(player1 === 'rock' && computer === 'paper') {
            result = "computer WINS";
            computerCounter++
            computerScore.textContent=computerCounter;
        } else if(player1 === 'paper' && computer === 'scissors') {
            result = "computer WINS";
            computerCounter++
            computerScore.textContent=computerCounter;
        } else if(player1 === 'paper' && computer === 'rock') {
            result = "player1 WINS";
            playerCounter++
            playerScore.textContent =playerCounter;
        } else if(player1 === 'scissors' && computer === 'paper') {
            result = "player1 WINS";
            playerCounter++
            playerScore.textContent=playerCounter;
        } else if(player1 === 'scissors' && computer === 'rock') {
            result = "computer WINS";
            computerCounter++
            computerScore.textContent=computerCounter;
        } else {
            (player1 === computer)
             result = "DRAW";
             drawCounter++;
             drawScore.textContent=drawCounter;
           }      
           resultDisplay.textContent = result;
           genCount.textContent=genCounter            
    }  

const main = (e) => {
        
    rock.addEventListener('click', (e) => {
            player1ChoiceDisplay.innerHTML = ("rock")
            game("rock");

    })
    paper.addEventListener('click', function(){
        player1ChoiceDisplay.innerHTML = ("paper")
            game("paper");
    });
    scissors.addEventListener('click', function(){
        player1ChoiceDisplay.innerHTML = ("scissors")
        game("scissors");
    });
    


}

const restartGame = (e) => { 
    
    if (restartButton.addEventListener('click',(e) => {
        playerCounter.reset();
        computerCounter.reset();
        drawCounter.reset();
        genCounter.reset();
        
    })
        
    



    );
    restartGame();



    
     
      



}



main();







 



