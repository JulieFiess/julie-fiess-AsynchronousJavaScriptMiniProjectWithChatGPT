//Add more inputs and functions to this code

//Here is the updated code with more inputs and functions:

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const questions = [
    "What is your name? ",
    "What is your job title? ",
    "What is your email address? ",
    "What is your phone number? ",
    "What is your website? ",
    "What is your company name? ",
    "What is your company address? ",
    "What is your company phone number?"
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
        console.log(`Company Name: ${answers[5]}`);
        console.log(`Company Address: ${answers[6]}`);
        console.log(`Company Phone: ${answers[7]}`);
        readline.close();
      }
    });
  }
  
  askQuestion(0);
