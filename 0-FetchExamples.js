//Write code using examples of "fetch".

//Here's an example of how you can use the fetch API to make a GET request to an API and retrieve the data:

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));


//This code sends a GET request to the https://jsonplaceholder.typicode.com/posts API, retrieves the data as a JSON response, and logs the data to the console. If an error occurs, it logs the error message to the console.

//Here's an example of how you can use the fetch API to make a POST request and send data to an API:

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));

//This code sends a POST request to the https://jsonplaceholder.typicode.com/posts API with a JSON body containing the data to be posted. The Content-type header is set to indicate that the request body is in JSON format. The API returns the newly created resource, which is logged to the console. If an error occurs, it logs the error message to the console.
