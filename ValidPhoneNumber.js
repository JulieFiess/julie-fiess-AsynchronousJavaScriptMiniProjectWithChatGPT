//Write a synchronous and an asynchronous program that checks if a number is a valid phone number.

//Here is a synchronous program to check if a number is a valid phone number in JavaScript:

function isValidPhoneNumber(number) {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(number);
  }
  
  console.log(isValidPhoneNumber('1234567890')); // Output: true
  console.log(isValidPhoneNumber('123456789')); // Output: false

//And here is an asynchronous program to check if a number is a valid phone number in JavaScript:

function isValidPhoneNumberAsync(number) {
    return new Promise((resolve, reject) => {
      const phoneNumberPattern = /^\d{10}$/;
      resolve(phoneNumberPattern.test(number));
    });
  }
  
  isValidPhoneNumberAsync('1234567890')
    .then(isValid => console.log(isValid)) // Output: true
    .catch(error => console.error(error));
  
  isValidPhoneNumberAsync('123456789')
    .then(isValid => console.log(isValid)) // Output: false
    .catch(error => console.error(error));

//In the asynchronous version, a Promise is returned, and the result of the phone number check is passed to the resolve function, which makes it available to the then method. The program uses then and catch to handle the result of the Promise.

