const card = document.querySelector(".card");
const city = document.querySelector(".city");
const mainForecast = document.getElementById("main-forecast");
const windForecast = document.getElementById("wind");
const humidityForecast = document.getElementById("humidity");
const feltTemperatureForecast = document.getElementById("felt-temperature");
const temperatureForecast = document.querySelector(".temperature");
const locationInput = document.getElementById("location-input");
const locationSubmit = document.getElementById("location-submit");
const forecast = Array.from(document.querySelectorAll(".forecast"));

function meterPerSecondToKilometerPerHour(mps) {
  return mps * 3.495;
}
function getLocationInput() {
  return locationInput.value;
}
function displayErrorMessage() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const div = document.createElement("div");
  div.setAttribute("id", "error-message");
  h1.textContent = "Uh-oh";
  p.textContent = `We couldn't find a location named "${locationInput.value}". Please check your spelling and try again. 🌞`;
  div.appendChild(h1);
  div.appendChild(p);
  card.appendChild(div);
}
function clearErrorMessage() {
  const errorMessage = document.querySelector("#error-message");
  if (errorMessage) {
    card.removeChild(errorMessage);
  }
}
function fetchForecast(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0982e2845899ef11e0c7aebc11449571&units=metric`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      clearErrorMessage();
      city.textContent = response.name;
      mainForecast.textContent = response.weather[0].main;
      actualTemperature = parseInt(response.main.temp);
      feltTemperature = parseInt(response.main.feels_like);
      windSpeed = parseInt(meterPerSecondToKilometerPerHour(response.wind.speed));
      temperatureForecast.textContent = `${actualTemperature} °C`;
      feltTemperatureForecast.textContent = `${feltTemperature} °C`;
      humidityForecast.textContent = `${response.main.humidity} %`;
      windForecast.textContent = `${windSpeed} km/h`;
    })
    .catch((error) => {
      forecast.map((element) => {element.textContent = ""});
      displayErrorMessage();
    });
}

locationSubmit.addEventListener("click", () => {
  const location = getLocationInput();
  fetchForecast(location);
});

fetchForecast('Paris');