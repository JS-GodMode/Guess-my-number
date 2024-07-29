'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent
// let scoreText = document.querySelector('.score').textContent;
let scoreNum = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 20);
// document.querySelector('.number').textContent = '?';

document.querySelector('.again').addEventListener('click', function () {
  scoreNum = 20;
  document.querySelector('.score').textContent = scoreNum;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no guesss
  if (!guess) {
    document.querySelector('.message').textContent = ' NO Number';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < scoreNum) {
      highScore = scoreNum;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    if (scoreNum > 1) {
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'too low';
    if (scoreNum > 1) {
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
