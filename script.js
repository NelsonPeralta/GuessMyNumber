'use strict';

document.querySelector('.game-guess').value = null;
const secretNumber = Math.trunc(Math.random() * 21); // Math.trunc: removes decimals.
// *21: makes the number generted between 0 and 20.
let score = 20; // Initial score

document.querySelector('.game-check').addEventListener('click', function () {
    // Button needs 2 classes. If one class is used in CSS, EventListener wont work.
    const guess = Number(document.querySelector('.game-guess').value);
    console.log('Secret Number: ' + secretNumber);

    if (score === 0) {
        console.log('reloading page');
        location.reload();
    }

    if (!guess)
        document.querySelector('.game-message').textContent = "No number!";
    else if (guess === secretNumber) {
        document.querySelector('.game-message').textContent = "Correct!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.answer').style.width = '15rem';
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.game-message').textContent = "Too High!";
            score--;
        }
        else {
            document.querySelector('.game-message').textContent = "You lost...";
            document.querySelector('.game-button').textContent = 'Try Again!';
            score = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.game-message').textContent = "Too Low!";
            score--;
        }
        else {
            document.querySelector('.game-message').textContent = "You lost...";
            document.querySelector('.game-button').textContent = 'Try Again!';
            score = 0;
        }
    }

    document.querySelector('.game-score').textContent = '💯 Score: ' + score;
})