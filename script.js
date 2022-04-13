const city = document.querySelector(".city");
const description = document.querySelector(".description");

function kelvinToCelsius(kelvin) {
  return parseInt(kelvin - 273.15);
}

const getForecast = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0982e2845899ef11e0c7aebc11449571`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      city.textContent = response.name;
      actualTemperature = kelvinToCelsius(response.main.temp);
      feltTemperature = kelvinToCelsius(response.main.feels_like);
      description.textContent = `At the present time the weather is ${response.weather[0].main.toLowerCase()}! The temperature is ${actualTemperature} °C but it feels ${feltTemperature} °C. The humidity is ${response.main.humidity}.`;
    });
}


getForecast('Paris');

