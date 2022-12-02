import weatherModule from './weather';

const UI = (() => {
  const loadApp = () => {
    console.log(weatherModule.getData('London'));
  };

  return { loadApp };
})();

export default UI;
