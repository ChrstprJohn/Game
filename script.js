'use strict';
// to check if its selected

// // We can select the whole body
// console.log(document.querySelector('body'));

// // Or the specific
// console.log(document.querySelector('.message'));

// // We can try changing the textcontent of the message
// document.querySelector('.message').textContent = 'Correct Number!';

// // We can also store the value first before changing
// const message = document.querySelector('.message');
// message.textContent = 'Correct Number!!!';

// // Let's Try that again
// const secretNumber = document.querySelector('.number');
// secretNumber.textContent = 4;

// // Use Value to change the value
// const guess = document.querySelector('.guess');
// guess.value = 4;

// Let's now learn about the event listener
// First choose the element we want to add event listener
const messageContainer = document.querySelector('.message');

const messageMaker = function (message) {
  messageContainer.textContent = `${message}`;
};

const highscoreContainer = document.querySelector('.highscore');
const scoreContainer = document.querySelector('.score');

const body = document.querySelector('body');
const secretNumberContainer = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 3 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // we need to get the value inside input when we click check
  const guess = document.querySelector('.guess').value;
  const guessToNum = Number(guess);
  console.log(guessToNum);

  // we need to add validation if guess is empty
  const guessType = typeof guessToNum;

  if (!guess) {
    messageMaker('⛔️ Not number!');
  } else if (guessToNum === secretNumber) {
    // if player wins
    messageMaker('🎉Correct Number!');

    // for the highScore
    if (score > highscore) {
      highscore = score;
      highscoreContainer.textContent = `${highscore}`;
    }
    score = 20;

    // change the style of the page if correct
    body.style.backgroundColor = 'red';
    secretNumberContainer.style.width = '30rem';

    secretNumberContainer.textContent = secretNumber;
  } else if (guessToNum > secretNumber) {
    if (score > 1) {
      messageMaker(`📉 Too low!`);
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

//Let's now make a again button functional

document.querySelector('.again').addEventListener('click', function () {
  // tommorow
  secretNumber = Math.trunc(Math.random() * 3 + 1);

  highscoreContainer.textContent = highscore;
  scoreContainer.textContent = score;

  document.querySelector('.guess').value = '';
  secretNumberContainer.textContent = '?';

  body.style.backgroundColor = '#222';
  secretNumberContainer.style.width = '15rem';

  messageMaker('Start guessing...');
});
