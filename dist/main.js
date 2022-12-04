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
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchBarValue);

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
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(city, unit);
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
        <img src="../dist/icons/${weatherIcon}.png" class="weather-icon">
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
          <img src="../dist/icons/${weatherIcon}.png" class="weather-icon">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUM7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Qsa0NBQWtDLFNBQVM7QUFDM0MsZ0RBQWdELGFBQWEsT0FBTztBQUNwRSwyQ0FBMkMsU0FBUztBQUNwRCwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CO0FBQ2pFLG9DQUFvQyxTQUFTO0FBQzdDLGtEQUFrRCxhQUFhLE9BQU87QUFDdEUsNkNBQTZDLFNBQVM7QUFDdEQsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBLGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFNBQVMsU0FBUyxPQUFPO0FBQ2pHO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUyxTQUFTLE9BQU87QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLFNBQVMsU0FBUyxPQUFPO0FBQy9GO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7VUM1QjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUI7QUFDQSw4Q0FBOEMsMkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyTW9kdWxlIGZyb20gJy4vd2VhdGhlcic7XHJcblxyXG5jb25zdCBVSSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbG9hZEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xyXG5cclxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMb2NhdGlvbldlYXRoZXIpO1xyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKCdNYWJhbGFjYXQnLCAnaW1wZXJpYWwnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEJhclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKHNlYXJjaEJhclZhbHVlKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoQmFyVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdMb2NhdGlvbiBjYW50IGJlIGVtcHR5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgYWxlcnQoJ0NpdHkgbm90IGZvdW5kJyk7XHJcbiAgICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKHNlYXJjaEJhclZhbHVlLCAnaW1wZXJpYWwnKTtcclxuICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKGNpdHksIHVuaXQpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcclxuICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGRhdGEubWFpbjtcclxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImxlZnQtcGFuZWxcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Rpc3QvaWNvbnMvJHt3ZWF0aGVySWNvbn0ucG5nXCIgY2xhc3M9XCJ3ZWF0aGVyLWljb25cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtaWQtcGFuZWxcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2NpdHlOYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+RmVlbHMgbGlrZTogJHt0ZW1wZXJhdHVyZX0gJiM4NDUxOzwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk6ICR7aHVtaWRpdHl9JTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRcIj5XaW5kIFNwZWVkOiAke3dpbmRTcGVlZH0ga20vaDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1wYW5lbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtdW5pdC1tZXRyaWMgYWN0aXZlXCI+TWV0cmljPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS11bml0LWltcGVyaWFsXCI+SW1wZXJpYWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtcGFuZWxcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vZGlzdC9pY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaWQtcGFuZWxcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPiR7d2VhdGhlckRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eS1uYW1lXCI+JHtjaXR5TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+RmVlbHMgbGlrZTogJHt0ZW1wZXJhdHVyZX0gJiM4NDU3Ozwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTogJHtodW1pZGl0eX0lPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkXCI+V2luZCBTcGVlZDogJHt3aW5kU3BlZWR9IG1waDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtdW5pdC1tZXRyaWNcIj5NZXRyaWM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtdW5pdC1pbXBlcmlhbCBhY3RpdmVcIj5JbXBlcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVbml0QnV0dG9ucygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRVbml0QnV0dG9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgbWV0cmljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11bml0LW1ldHJpYycpO1xyXG4gICAgY29uc3QgaW1wZXJpYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVuaXQtaW1wZXJpYWwnKTtcclxuXHJcbiAgICBtZXRyaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ21ldHJpYycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW1wZXJpYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ2ltcGVyaWFsJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsb2FkQXBwIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSTtcclxuIiwiY29uc3Qgd2VhdGhlck1vZHVsZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYXBpS2V5ID0gJ2NjYWEyOWZmYzZlNzQzMDFkMGMwMTMzNGYzMWRkZDc4JztcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5TmFtZSwgdW5pdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7YXBpS2V5fWA7XHJcblxyXG4gICAgICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgICAgICBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9bWV0cmljYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHVuaXQgPT09ICdpbXBlcmlhbCcpIHtcclxuICAgICAgICBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9aW1wZXJpYWxgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlck1vZHVsZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkQXBwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9