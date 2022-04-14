const city = document.querySelector(".city");
const general = document.querySelector(".general");
const description = document.querySelector(".description");
const submitCity = document.getElementById("submit-city");

function meterPerSecondToKilometerPerHour(mps) {
  return mps * 3.495;
}

const getForecast = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0982e2845899ef11e0c7aebc11449571&units=metric`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      city.textContent = response.name;
      general.textContent = response.weather[0].main;
      actualTemperature = parseInt(response.main.temp);
      feltTemperature = parseInt(response.main.feels_like);
      windSpeed = parseInt(meterPerSecondToKilometerPerHour(response.wind.speed));
      description.textContent = `
      Temperature: ${actualTemperature} °C |
      Feels like: ${feltTemperature} °C |
      Humidity: ${response.main.humidity} % |
      Wind speed: ${windSpeed} km/h`;
    });
}

getForecast('Paris');

