'use strict';

document.querySelector('.game-guess').value = null;
const secretNumber = Math.trunc(Math.random() * 21); // Math.trunc: removes decimals.
// *21: makes the number generted between 0 and 20.
let score = 20; // Initial score
let highscore = 0; // Initial Highscore
let enableReset = false;

document.querySelector('.game-check').addEventListener('click', function () {
    // Button needs 2 classes. If one class is used in CSS, EventListener wont work.
    const guess = Number(document.querySelector('.game-guess').value);
    console.log('Secret Number: ' + secretNumber);

    if (enableReset) {
        score = 20;
        document.querySelector('.game-message').textContent = 'Game Start';
        document.querySelector('.game-button').textContent = 'Check!';
        document.querySelector('.game-guess').value = null;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.answer').style.width = '10rem';
        enableReset = false;
    }
    else {
        if (!guess)
            document.querySelector('.game-message').textContent = 'No number!';
        else if (guess === secretNumber) {
            document.querySelector('.game-message').textContent = '🎉 Correct!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.answer').style.width = '20rem';
            document.querySelector('.game-button').textContent = 'Try Again!';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.game-highscore').textContent = '🥇 Highscore: ' + highscore;
            }

            enableReset = true;
        }
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.game-message').textContent = 'Too High!';
                score--;
            }
            else {
                document.querySelector('.game-message').textContent = 'You lost...';
                document.querySelector('.game-button').textContent = 'Try Again!';
                score = 0;
                enableReset = true;
            }
        }
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.game-message').textContent = 'Too Low!';
                score--;
            }
            else {
                document.querySelector('.game-message').textContent = 'You lost...';
                document.querySelector('.game-button').textContent = 'Try Again!';
                score = 0;
                enableReset = true;
            }
        }
    }

    document.querySelector('.game-score').textContent = '💯 Score: ' + score;
})