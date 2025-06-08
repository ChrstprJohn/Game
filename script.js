'use strict';

const messageContainer = document.querySelector('.message');

const messageMaker = function (message) {
  messageContainer.textContent = `${message}`;
};

const highscoreContainer = document.querySelector('.highscore');
const scoreContainer = document.querySelector('.score');

const body = document.querySelector('body');
const secretNumberContainer = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20 + 1); // Changed from * 3 + 1 to * 20 + 1

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  const guessToNum = Number(guess);
  console.log(guessToNum);

  if (!guess) {
    messageMaker('⛔️ Not number!');
  } else if (guessToNum === secretNumber) {
    // if player wins
    messageMaker('🎉Correct Number!');
    if (score > highscore) {
      highscore = score;
      highscoreContainer.textContent = `${highscore}`;
    }

    // change the style of the page if correct
    body.style.backgroundColor = 'red';
    secretNumberContainer.style.width = '30rem';
    secretNumberContainer.textContent = secretNumber;
  } else if (guessToNum > secretNumber) {
    if (score > 1) {
      messageMaker(`📈 Too high!`);
      score--;
      scoreContainer.textContent = score;
    } else {
      messageMaker('💥 You lost the game!');
      scoreContainer.textContent = 0;
    }
  } else if (guessToNum < secretNumber) {
    if (score > 1) {
      messageMaker(`📉 Too low!`);
      score--;
      scoreContainer.textContent = score;
    } else {
      messageMaker('💥 You lost the game!');
      scoreContainer.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  secretNumber = Math.trunc(Math.random() * 20 + 1); // Changed from * 3 + 1 to * 20 + 1
  score = 20;

  scoreContainer.textContent = score;
  document.querySelector('.guess').value = '';
  secretNumberContainer.textContent = '?';

  body.style.backgroundColor = '#222';
  secretNumberContainer.style.width = '15rem';

  messageMaker('Start guessing...');
});
