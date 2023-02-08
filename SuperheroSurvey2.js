//Add more inputs and functions to this code:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const questions = [
    "What is your name? ",
    "What is your favorite superhero? ",
    "Why do you like that superhero? ",
    "What is your favorite comic book series? ",
    "Why do you like that series? "
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
        console.log(`Favorite comic book series: ${answers[3]}`);
        console.log(`Reason: ${answers[4]}`);
        readline.close();
      }
    });
  }
  
  askQuestion(0);
