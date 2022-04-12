const getForecast = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0982e2845899ef11e0c7aebc11449571`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(`At the present time the weather in ${response.name} is ${response.weather[0].main.toLowerCase()}! The temperature is ${response.main.temp} °F but it feels ${response.main.feels_like} °F. The humidity is ${response.main.humidity}.`);
    });
}

getForecast('Paris');