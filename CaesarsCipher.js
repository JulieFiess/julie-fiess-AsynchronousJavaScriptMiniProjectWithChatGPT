//Write a solution to Caesar's Cipher using asynchronous JavaScript.

//Here's an implementation of Caesar's Cipher in asynchronous JavaScript (using async/await syntax):

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
  
  async function caesarCipher() {
    console.log('Enter the text to encode:');
    let text = await askQuestion('');
    console.log('Enter the shift number:');
    let shift = parseInt(await askQuestion(''));
  
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shift) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    console.log('Encoded text: ' + result);
    readline.close();
  }
  
  caesarCipher();

//This code uses the readline module to get the text and the shift number from the user, and returns a promise that resolves to the user's answer. The text is then encoded using Caesar's Cipher by shifting each letter by the specified number of places.
