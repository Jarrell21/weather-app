const weatherModule = (() => {
  const apiKey = 'ccaa29ffc6e74301d0c01334f31ddd78';

  const getData = async (cityName, unit) => {
    try {
      let apiUrl = '';

      if (unit === 'metric') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      }

      if (unit === 'imperial') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
      }

      const response = await fetch(apiUrl, { mode: 'cors' });

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  };

  return { getData };
})();

export default weatherModule;
