//What syntax is used for asynchronous programming in JavaScript?
/*
async/await - allows for asynchronous code to be written in a synchronous-like manner, making it easier to read and understand.

Promises - a pattern for handling async operations, represent a value that may be available now, in the future, or never.

Callbacks - a function that is passed as an argument to another function and is executed when a certain event occurs.
*/

// async/await example
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

// Promise example
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Callback example
function fetchData(callback) {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => callback(error));
}

//What is a unit test in JavaScript?
/*
A unit test in JavaScript is a type of automated testing method where individual units or components of an application are tested in isolation from the rest of the system. The goal of unit testing is to validate that each unit or component of the application works as expected, without any defects or bugs.

Unit tests are typically written using a testing framework, such as Jest, Mocha, or Chai, and they are run using a test runner. In JavaScript, unit tests are usually written using a combination of JavaScript code and assertions, and they are run using a test runner that reports the results of the tests.

For example, using Jest:
*/

const add = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

/*
Unit tests provide several benefits, including:

Improved code quality
Faster bug detection and resolution
Easier maintenance
Increased confidence in the code base.
*/

//How do I know if a JavaScript program is asynchronous?

/*
You can determine if a JavaScript program is asynchronous by looking for the use of asynchronous functions such as setTimeout, setInterval, setImmediate, process.nextTick, or Promises. Additionally, you can look for the use of the async keyword before a function declaration, or the use of await within an async function, as this indicates asynchronous behavior.
*/

