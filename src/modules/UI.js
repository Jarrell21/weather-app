import weatherModule from './weather';

const UI = (() => {
  const loadApp = () => {
    // console.log(weatherModule.getData('London'));
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', loadLocationWeather);
  };

  const loadLocationWeather = async () => {
    const location = document.querySelector('.search-bar').value.trim();
    if (location === '') {
      alert('Location cant be empty');
      return;
    }
    const cityName = await weatherModule.getCityName(location);
    console.log(cityName);
    // displayName(cityName);
  };

  const displayName = (cityName) => {
    const main = document.querySelector('main');
    const div = document.createElement('div');

    div.textContent = cityName;
    main.appendChild(div);
  };

  return { loadApp };
})();

export default UI;
