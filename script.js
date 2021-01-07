'use strict';

document.querySelector('.game-guess').value = null;
let secretNumber = Math.trunc(Math.random() * 21); // Math.trunc: removes decimals.
// *21: makes the number generted between 0 and 20.
let score = 20; // Initial score
let highscore = 0; // Initial Highscore
let enableReset = false;

const displayMessage = function (message) {
    document.querySelector('.game-message').textContent = message;
}

const displayButtonMessage = function (message) {
    document.querySelector('.game-button').textContent = message;
}

document.querySelector('.game-check').addEventListener('click', function () {
    // Button needs 2 classes. If one class is used in CSS, EventListener wont work.
    const guess = Number(document.querySelector('.game-guess').value);
    console.log('Secret Number: ' + secretNumber);

    if (enableReset) {
        score = 20;
        displayMessage('Game Start');
        displayButtonMessage('Check!');
        document.querySelector('.game-guess').value = null;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.answer').style.width = '10rem';
        secretNumber = Math.trunc(Math.random() * 21);
        enableReset = false;
    }
    else {
        if (!guess)
            displayMessage('No Number!');
        else if (guess === secretNumber) {
            displayMessage('🎉 Correct!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.answer').style.width = '20rem';
            displayButtonMessage('Try Again!');

            if (score > highscore) {
                highscore = score;
                document.querySelector('.game-highscore').textContent = '🥇 Highscore: ' + highscore;
            }

            enableReset = true;
        }
        else if (guess !== secretNumber) {
            if (score > 1) {
                if (guess > secretNumber)
                    displayMessage('Too High!');
                else
                    displayMessage('Too Low!');
                score--;
            }
            else {
                displayMessage('You Lost!');
                displayButtonMessage('Try Again!');
                score = 0;
                enableReset = true;
            }
        }
    }


    document.querySelector('.game-score').textContent = '💯 Score: ' + score;
})