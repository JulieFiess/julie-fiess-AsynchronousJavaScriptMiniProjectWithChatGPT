//Write a digital business card with asynchronous JavaScript.

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const questions = [
    "What is your name? ",
    "What is your job title? ",
    "What is your email address? ",
    "What is your phone number? ",
    "What is your website? "
  ];
  
  const answers = [];
  
  function askQuestion(i) {
    readline.question(questions[i], (answer) => {
      answers.push(answer);
      if (i < questions.length - 1) {
        askQuestion(i + 1);
      } else {
        console.log("Your digital business card: ");
        console.log(`Name: ${answers[0]}`);
        console.log(`Job Title: ${answers[1]}`);
        console.log(`Email: ${answers[2]}`);
        console.log(`Phone: ${answers[3]}`);
        console.log(`Website: ${answers[4]}`);
        readline.close();
      }
    });
  }
  
  askQuestion(0);
  
  /*
  This code uses the readline module to create an interface for accepting input from the user and display output to the console. The askQuestion function makes asynchronous calls using readline.question and waits for the user's input before proceeding to the next question. Once all the questions have been answered, the answers are displayed as the digital business card.
  */
  
  