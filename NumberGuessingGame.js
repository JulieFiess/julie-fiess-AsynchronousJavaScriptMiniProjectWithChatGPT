//Write a number guessing game in asynchronous JavaScript.

//Here's an implementation of a number guessing game using asynchronous JavaScript (using async/await syntax):

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  async function askQuestion(question) {
    return new Promise((resolve, reject) => {
      readline.question(question, (answer) => {
        resolve(answer);
      });
    });
  }
  
  async function numberGuessingGame() {
    console.log('Guess a number between 1 and 100');
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = await askQuestion('Your guess: ');
    while (guess != randomNumber) {
      if (guess < randomNumber) {
        console.log('Too low');
      } else {
        console.log('Too high');
      }
      guess = await askQuestion('Your guess: ');
    }
    console.log('You got it! The number was ' + randomNumber);
    readline.close();
  }
  
  numberGuessingGame();

//This code uses the readline module to get input from the user, and returns a promise that resolves to the user's answer. The game continues until the user correctly guesses the random number.

