'use strict';
let SecretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        // document.querySelector('.message').textContent = '⛔️ No guess';
        displayMessage('⛔️ No guess');
    }

    else if (guess === SecretNumber){
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess !== SecretNumber){
        document
        if (score > 1){
            // document.querySelector('.message').textContent = guess > SecretNumber ? '📈Too High!': '📉 Too Low!';
            displayMessage(guess > SecretNumber ? '📈Too High!': '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }

    }

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20) + 1; 
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highScore;
});
