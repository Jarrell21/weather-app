const weatherModule = (() => {
  const apiKey = 'ccaa29ffc6e74301d0c01334f31ddd78';

  const getData = async (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl, { mode: 'cors' });

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getWeather = () => getData().weather;

  return { getData, getWeather };
})();

export default weatherModule;
