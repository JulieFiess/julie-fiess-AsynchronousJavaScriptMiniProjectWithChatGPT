//Write a JavaScript app that asks superhero survey questions.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const questions = [
    "What is your name? ",
    "What is your favorite superhero? ",
    "Why do you like that superhero? "
  ];
  
  const answers = [];
  
  function askQuestion(i) {
    readline.question(questions[i], (answer) => {
      answers.push(answer);
      if (i < questions.length - 1) {
        askQuestion(i + 1);
      } else {
        console.log("Thank you for taking the survey!");
        console.log("Your answers: ");
        console.log(`Name: ${answers[0]}`);
        console.log(`Favorite superhero: ${answers[1]}`);
        console.log(`Reason: ${answers[2]}`);
        readline.close();
      }
    });
  }
  
  askQuestion(0);
  
  //Is (the above code) asynchronous?
  
  //Yes, the code is asynchronous. The readline.question() method makes an asynchronous call and waits for the user's input before proceeding to the next question.
  
  