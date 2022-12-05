import weatherModule from './weather';

const UI = (() => {
  const loadApp = () => {
    displayWeatherInfo('Mabalacat', 'imperial');
    initButtons();
  };

  const loadLocationWeather = (e) => {
    const searchBarValue = document.querySelector('.search-bar').value.trim();
    const cityName = document.querySelector('.city-name').textContent;
    const metricBtn = document.querySelector('.change-unit-metric');
    const imperialBtn = document.querySelector('.change-unit-imperial');

    if (e.target === metricBtn) {
      imperialBtn.classList.remove('active');
      metricBtn.classList.add('active');
      displayWeatherInfo(cityName, 'metric');
    } else if (e.target === imperialBtn) {
      metricBtn.classList.remove('active');
      imperialBtn.classList.add('active');
      displayWeatherInfo(cityName, 'imperial');
    } else {
      if (searchBarValue === '') {
        alert(`Location can't be empty`);
        return;
      }

      if (metricBtn.classList.contains('active')) {
        displayWeatherInfo(searchBarValue, 'metric');
        return;
      }
      displayWeatherInfo(searchBarValue, 'imperial');
    }
  };

  const displayWeatherInfo = async (city, unit) => {
    const data = await weatherModule.getData(city, unit);
    const searchBar = document.querySelector('.search-bar');

    if (data.name === undefined) {
      alert(`City ${searchBar.value} not found`);
      searchBar.value = '';
      return;
    }

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
        <img src="./icons/${weatherIcon}.png" class="weather-icon">
      </div>
      <div class="right-panel">
        <span class="weather-description">${weatherDescription}</span>
        <span class="city-name">${cityName}</span>
        <span class="temperature">Feels like: ${temperature} &#8451;</span>
        <span class="humidity">Humidity: ${humidity}%</span>
        <span class="wind-speed">Wind Speed: ${windSpeed} km/h</span>
      </div>
    `;
    } else if (unit === 'imperial') {
      container.innerHTML = `
        <div class="left-panel">
          <img src="./icons/${weatherIcon}.png" class="weather-icon">
        </div>
        <div class="right-panel">
          <span class="weather-description">${weatherDescription}</span>
          <span class="city-name">${cityName}</span>
          <span class="temperature">Feels like: ${temperature} &#8457;</span>
          <span class="humidity">Humidity: ${humidity}%</span>
          <span class="wind-speed">Wind Speed: ${windSpeed} mph</span>
        </div>
      `;
    }
  };

  const initButtons = () => {
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.search-btn');
    const metricBtn = document.querySelector('.change-unit-metric');
    const imperialBtn = document.querySelector('.change-unit-imperial');

    searchBar.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
    searchBtn.addEventListener('click', loadLocationWeather);

    metricBtn.addEventListener('click', loadLocationWeather);

    imperialBtn.addEventListener('click', loadLocationWeather);
  };

  return { loadApp };
})();

export default UI;
