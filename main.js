/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");


const UI = (() => {
  const loadApp = () => {
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', loadLocationWeather);
    displayWeatherInfo('Mabalacat');
  };

  const loadLocationWeather = async () => {
    const searchBarValue = document.querySelector('.search-bar').value.trim();
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchBarValue);

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
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(city, unit);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherModule = (() => {
  const apiKey = 'ccaa29ffc6e74301d0c01334f31ddd78';

  const getData = async (cityName, unit) => {
    try {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherModule);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDLDBDQUEwQyxtQkFBbUI7QUFDN0QsZ0NBQWdDLFNBQVM7QUFDekMsNkNBQTZDLFdBQVc7QUFDeEQseUNBQXlDLFVBQVU7QUFDbkQsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0MsNENBQTRDLG1CQUFtQjtBQUMvRCxrQ0FBa0MsU0FBUztBQUMzQywrQ0FBK0MsV0FBVztBQUMxRCwyQ0FBMkMsVUFBVTtBQUNyRCwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFGbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxTQUFTLFNBQVMsT0FBTztBQUNqRztBQUNBO0FBQ0Esc0VBQXNFLFNBQVMsU0FBUyxPQUFPO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTLFNBQVMsT0FBTztBQUMvRjtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDNUI3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQzlCO0FBQ0EsOENBQThDLDJEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlck1vZHVsZSBmcm9tICcuL3dlYXRoZXInO1xyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xyXG5cclxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMb2NhdGlvbldlYXRoZXIpO1xyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKCdNYWJhbGFjYXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyTW9kdWxlLmdldERhdGEoc2VhcmNoQmFyVmFsdWUpO1xyXG5cclxuICAgIGlmIChzZWFyY2hCYXJWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ0xvY2F0aW9uIGNhbnQgYmUgZW1wdHknKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLm5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhbGVydCgnQ2l0eSBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlXZWF0aGVySW5mbyhzZWFyY2hCYXJWYWx1ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheVdlYXRoZXJJbmZvID0gYXN5bmMgKGNpdHksIHVuaXQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyTW9kdWxlLmdldERhdGEoY2l0eSwgdW5pdCk7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRhdGEubmFtZTtcclxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcclxuICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGRhdGEubWFpbjtcclxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS11bml0LW1ldHJpY1wiPk1ldHJpYzwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLXVuaXQtaW1wZXJpYWxcIj5JbXBlcmlhbDwvYnV0dG9uPlxyXG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eS1uYW1lXCI+JHtjaXR5TmFtZX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmVlbHMtbGlrZVwiPkZlZWxzIGxpa2U6ICR7ZmVlbHNMaWtlfSBDPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk6ICR7aHVtaWRpdHl9ICU8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZFwiPldpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBrbS9oPC9zcGFuPlxyXG4gICAgYDtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ltcGVyaWFsJyB8fCB1bml0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLXVuaXQtbWV0cmljXCI+TWV0cmljPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS11bml0LWltcGVyaWFsXCI+SW1wZXJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPiR7d2VhdGhlckRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHktbmFtZVwiPiR7Y2l0eU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmVlbHMtbGlrZVwiPkZlZWxzIGxpa2U6ICR7ZmVlbHNMaWtlfSBGPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTogJHtodW1pZGl0eX0gJTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRcIj5XaW5kIFNwZWVkOiAke3dpbmRTcGVlZH0gbXBoPC9zcGFuPlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVbml0QnV0dG9ucygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRVbml0QnV0dG9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgbWV0cmljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11bml0LW1ldHJpYycpO1xyXG4gICAgY29uc3QgaW1wZXJpYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVuaXQtaW1wZXJpYWwnKTtcclxuXHJcbiAgICBtZXRyaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ21ldHJpYycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW1wZXJpYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ2ltcGVyaWFsJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBnZXREYXRlID0gYXN5bmMgKGNpdHksIHVuaXQpID0+IHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyTW9kdWxlLmdldERhdGEoY2l0eSwgdW5pdCk7XHJcblxyXG4gIC8vICAgY29uc3QgZHQgPSBkYXRhLlxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIHsgbG9hZEFwcCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsImNvbnN0IHdlYXRoZXJNb2R1bGUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFwaUtleSA9ICdjY2FhMjlmZmM2ZTc0MzAxZDBjMDEzMzRmMzFkZGQ3OCc7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eU5hbWUsIHVuaXQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX1gO1xyXG5cclxuICAgICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPWltcGVyaWFsYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdldERhdGEgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJNb2R1bGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEFwcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==