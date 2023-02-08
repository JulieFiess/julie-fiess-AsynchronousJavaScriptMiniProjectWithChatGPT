//Write an app in JavaScript that shows the weather in a specified city.

const API_KEY = "YOUR_API_KEY";
const city = "London";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const { main, name, weather } = data;
    const { temp, humidity } = main;
    const { description } = weather[0];
    console.log(`Temperature in ${name} is ${temp}°C with ${description} and humidity of ${humidity}%.`);
  })
  .catch(error => console.error(error));
/*
You'll need to sign up for an API key from OpenWeatherMap to replace YOUR_API_KEY in the code above. This code uses the fetch API to retrieve the weather data and then logs the temperature, humidity and description of the weather in the specified city.
*/

//Is (the above code) asynchronous?
//Yes, this code is asynchronous.

