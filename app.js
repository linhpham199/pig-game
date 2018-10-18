/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, dice, gamePlaying, diceDOM;

diceDOM = document.querySelector('.dice');

gameInit();

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
        //Roll the dice
        dice = Math.floor(Math.random() * 6 + 1);

        //Display the dice
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Add to round score
        if (dice !== 6) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;      
        } else {
            //Change player if dice is 6
            changePlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        //Add score to global score
        score[activePlayer] += roundScore
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        console.log(score[activePlayer]);
        
        //Check winner
        if (score[activePlayer] >= 20) {
            diceDOM.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = "WINNER";
            gamePlaying = false;
        } else {
            //Change player 
            changePlayer();
        }
    }
      

})

document.querySelector('.btn-new').addEventListener('click', gameInit);

function changePlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    console.log(activePlayer);
}
  
function gameInit() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    diceDOM.style.display = 'none';

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

}



 