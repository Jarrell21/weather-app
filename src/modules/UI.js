import weatherModule from './weather';

const UI = (() => {
  const loadApp = () => {
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', loadLocationWeather);
    displayWeatherInfo('Mabalacat');
  };

  const loadLocationWeather = async () => {
    const searchBarValue = document.querySelector('.search-bar').value.trim();
    const data = await weatherModule.getData(searchBarValue);

    if (searchBarValue === '') {
      alert('Location cant be empty');
      return;
    }

    if (data.name === undefined) {
      alert('City not found');
      return;
    }

    displayWeatherInfo(searchBarValue);

    console.log(data);
  };

  const displayWeatherInfo = async (city, unit) => {
    const data = await weatherModule.getData(city, unit);
    const cityName = data.name;
    const weatherIcon = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;
    const feelsLike = data.main.feels_like;
    const { humidity } = data.main;
    const windSpeed = data.wind.speed;

    const container = document.querySelector('.info-container');

    if (unit === 'metric') {
      container.innerHTML = `
      <button class="change-unit-metric">Metric</button>
      <button class="change-unit-imperial">Imperial</button>
      <img src="../src/icons/${weatherIcon}.png" class="weather-icon">
      <span class="weather-description">${weatherDescription}</span>
      <span class="city-name">${cityName}</span>
      <span class="feels-like">Feels like: ${feelsLike} C</span>
      <span class="humidity">Humidity: ${humidity} %</span>
      <span class="wind-speed">Wind Speed: ${windSpeed} km/h</span>
    `;
    } else if (unit === 'imperial' || unit === undefined) {
      container.innerHTML = `
        <button class="change-unit-metric">Metric</button>
        <button class="change-unit-imperial">Imperial</button>
        <img src="../src/icons/${weatherIcon}.png" class="weather-icon">
        <span class="weather-description">${weatherDescription}</span>
        <span class="city-name">${cityName}</span>
        <span class="feels-like">Feels like: ${feelsLike} F</span>
        <span class="humidity">Humidity: ${humidity} %</span>
        <span class="wind-speed">Wind Speed: ${windSpeed} mph</span>
      `;
    }

    initUnitButtons();
  };

  const initUnitButtons = () => {
    const cityName = document.querySelector('.city-name').textContent;
    const metricBtn = document.querySelector('.change-unit-metric');
    const imperialBtn = document.querySelector('.change-unit-imperial');

    metricBtn.addEventListener('click', () => {
      displayWeatherInfo(cityName, 'metric');
    });

    imperialBtn.addEventListener('click', () => {
      displayWeatherInfo(cityName, 'imperial');
    });
  };

  // const getDate = async (city, unit) => {
  //   const data = await weatherModule.getData(city, unit);

  //   const dt = data.
  // }

  return { loadApp };
})();

export default UI;
