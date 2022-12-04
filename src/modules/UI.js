import weatherModule from './weather';

const UI = (() => {
  const loadApp = () => {
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.search-btn');

    searchBar.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
    searchBtn.addEventListener('click', loadLocationWeather);
    displayWeatherInfo('Mabalacat', 'imperial');
  };

  const loadLocationWeather = async () => {
    const searchBar = document.querySelector('.search-bar');
    const searchBarValue = document.querySelector('.search-bar').value.trim();
    const data = await weatherModule.getData(searchBarValue);

    if (searchBarValue === '') {
      alert('Location cant be empty');
      return;
    }

    if (data.name === undefined) {
      alert('City not found');
      searchBar.value = '';
      return;
    }

    displayWeatherInfo(searchBarValue, 'imperial');
    searchBar.value = '';
  };

  const displayWeatherInfo = async (city, unit) => {
    const data = await weatherModule.getData(city, unit);
    const cityName = data.name;
    const weatherIcon = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.feels_like;
    const { humidity } = data.main;
    const windSpeed = data.wind.speed;

    const container = document.querySelector('.info-container');

    if (unit === 'metric') {
      container.innerHTML = `
      <div class="left-panel">
        <img src="../src/icons/${weatherIcon}.png" class="weather-icon">
      </div>
      <div class="mid-panel">
        <span class="weather-description">${weatherDescription}</span>
        <span class="city-name">${cityName}</span>
        <span class="temperature">Feels like: ${temperature} &#8451;</span>
        <span class="humidity">Humidity: ${humidity}%</span>
        <span class="wind-speed">Wind Speed: ${windSpeed} km/h</span>
      </div>
      <div class="right-panel">
        <button class="change-unit-metric active">Metric</button>
        <button class="change-unit-imperial">Imperial</button>
      </div>
    `;
    } else if (unit === 'imperial') {
      container.innerHTML = `
        <div class="left-panel">
          <img src="../src/icons/${weatherIcon}.png" class="weather-icon">
        </div>
        <div class="mid-panel">
          <span class="weather-description">${weatherDescription}</span>
          <span class="city-name">${cityName}</span>
          <span class="temperature">Feels like: ${temperature} &#8457;</span>
          <span class="humidity">Humidity: ${humidity}%</span>
          <span class="wind-speed">Wind Speed: ${windSpeed} mph</span>
        </div>
        <div class="right-panel">
          <button class="change-unit-metric">Metric</button>
          <button class="change-unit-imperial active">Imperial</button>
        </div>
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

  return { loadApp };
})();

export default UI;
