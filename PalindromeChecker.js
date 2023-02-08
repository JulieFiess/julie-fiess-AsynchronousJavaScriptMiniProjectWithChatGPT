//Write a synchronous and an asynchronous program that checks if a number is a palindrome.

//Here is a synchronous program to check if a number is a palindrome in JavaScript:

function isPalindrome(number) {
    const numberAsString = number.toString();
    const length = numberAsString.length;
    for (let i = 0; i < length / 2; i++) {
      if (numberAsString[i] !== numberAsString[length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome(121)); // Output: true
  console.log(isPalindrome(12345)); // Output: false

//And here is an asynchronous program to check if a number is a palindrome in JavaScript:

function isPalindromeAsync(number) {
    return new Promise((resolve, reject) => {
      const numberAsString = number.toString();
      const length = numberAsString.length;
      for (let i = 0; i < length / 2; i++) {
        if (numberAsString[i] !== numberAsString[length - i - 1]) {
          resolve(false);
          return;
        }
      }
      resolve(true);
    });
  }
  
  isPalindromeAsync(121)
    .then(isPalindrome => console.log(isPalindrome)) // Output: true
    .catch(error => console.error(error));
  
  isPalindromeAsync(12345)
    .then(isPalindrome => console.log(isPalindrome)) // Output: false
    .catch(error => console.error(error));

//In the asynchronous version, a Promise is returned, and the result of the palindrome check is passed to the resolve function, which makes it available to the then method. The program uses then and catch to handle the result of the Promise.
