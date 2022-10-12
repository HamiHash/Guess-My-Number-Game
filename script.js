"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Refactoring the document.queryselector..... for message to make the code cleaner.
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // NO INPUT
  if (!guess) {
    displayMessage("No Number!");

    // When Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

// this is the first code wich was not cool becouse its too long:

// When Guess is too HIGH
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too high!";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lost the game!";
//     document.querySelector(".score").textContent = 0;
//   }

//   // When Guess is too LOW
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too low!";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lost the game!";
//     document.querySelector(".score").textContent = 0;
//   }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
});
