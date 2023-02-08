//Write a Roman Numeral converter using asynchronous JavaScript.

//Here's an implementation of a Roman numeral converter in asynchronous JavaScript (using async/await syntax):

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
  
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  function fromRoman(str) {
    let result = 0;
    for (const [numeral, value] of Object.entries(romanNumerals)) {
      while (str.startsWith(numeral)) {
        result += value;
        str = str.slice(numeral.length);
      }
    }
    return result;
  }
  
  function toRoman(num) {
    let result = '';
    for (const [numeral, value] of Object.entries(romanNumerals)) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }
  
  async function romanNumeralConverter() {
    console.log('Enter 1 to convert from Roman to Decimal, 2 to convert from Decimal to Roman:');
    let choice = parseInt(await askQuestion(''));
  
    if (choice === 1) {
      console.log('Enter the Roman numeral:');
      let roman = await askQuestion('');
      let decimal = fromRoman(roman);
      console.log('Decimal: ' + decimal);
    } else if (choice === 2) {
      console.log('Enter the decimal number:');
      let decimal = parseInt(await askQuestion(''));
      let roman = toRoman(decimal);
      console.log('Roman numeral: ' + roman);
    } else {
      console.log('Invalid choice');
    }
    readline.close();
  }
  
  romanNumeralConverter();

//This code uses the readline module to get the choice and input from the user, and returns a promise that resolves to the user's answer. It then converts the input from either Roman numerals to decimal or decimal to Roman numerals using the fromRoman and toRoman functions, and displays the result to the user.

