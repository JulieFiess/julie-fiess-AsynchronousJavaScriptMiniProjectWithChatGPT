//Write examples of JavaScript using promises.

//Using Promise.resolve to create a resolved promise:

const promise = Promise.resolve('Resolved');

promise.then(value => console.log(value));
// Output: Resolved


//Using Promise.reject to create a rejected promise:

const promise = Promise.reject('Rejected');

promise.catch(error => console.error(error));
// Output: Rejected


//Creating a promise that performs an asynchronous operation:

const fetchData = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };
  
  fetchData('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error(error));

//In this example, the fetchData function returns a new Promise that performs a fetch operation and returns the data as JSON. The promise is resolved with the data, or rejected with the error if an error occurs during the fetch.

//Chaining multiple promises together:

const fetchData = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };
  
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(post => {
      console.log(post);
      return fetchData(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    })
    .then(comments => console.log(comments))
    .catch(error => console.error(error));

//In this example, two fetch operations are performed in sequence, with the second fetch operation being performed only after the first one has completed. The then method is used to chain the promises together, and the resolved values are passed from one promise to the next.
