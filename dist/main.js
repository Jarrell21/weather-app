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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Qsa0NBQWtDLFNBQVM7QUFDM0MsZ0RBQWdELGFBQWEsT0FBTztBQUNwRSwyQ0FBMkMsU0FBUztBQUNwRCwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CO0FBQ2pFLG9DQUFvQyxTQUFTO0FBQzdDLGtEQUFrRCxhQUFhLE9BQU87QUFDdEUsNkNBQTZDLFNBQVM7QUFDdEQsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBLGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFNBQVMsU0FBUyxPQUFPO0FBQ2pHO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUyxTQUFTLE9BQU87QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLFNBQVMsU0FBUyxPQUFPO0FBQy9GO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7VUM1QjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUI7QUFDQSw4Q0FBOEMsMkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyTW9kdWxlIGZyb20gJy4vd2VhdGhlcic7XHJcblxyXG5jb25zdCBVSSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbG9hZEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xyXG5cclxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMb2NhdGlvbldlYXRoZXIpO1xyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKCdNYWJhbGFjYXQnLCAnaW1wZXJpYWwnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEJhclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKHNlYXJjaEJhclZhbHVlKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoQmFyVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdMb2NhdGlvbiBjYW50IGJlIGVtcHR5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgYWxlcnQoJ0NpdHkgbm90IGZvdW5kJyk7XHJcbiAgICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKHNlYXJjaEJhclZhbHVlLCAnaW1wZXJpYWwnKTtcclxuICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKGNpdHksIHVuaXQpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcclxuICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGRhdGEubWFpbjtcclxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImxlZnQtcGFuZWxcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1pZC1wYW5lbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPiR7d2VhdGhlckRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHktbmFtZVwiPiR7Y2l0eU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj5GZWVscyBsaWtlOiAke3RlbXBlcmF0dXJlfSAmIzg0NTE7PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTogJHtodW1pZGl0eX0lPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZFwiPldpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBrbS9oPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS11bml0LW1ldHJpYyBhY3RpdmVcIj5NZXRyaWM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLXVuaXQtaW1wZXJpYWxcIj5JbXBlcmlhbDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdpbXBlcmlhbCcpIHtcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaWNvbnMvJHt3ZWF0aGVySWNvbn0ucG5nXCIgY2xhc3M9XCJ3ZWF0aGVyLWljb25cIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWlkLXBhbmVsXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHktbmFtZVwiPiR7Y2l0eU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPkZlZWxzIGxpa2U6ICR7dGVtcGVyYXR1cmV9ICYjODQ1Nzs8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk6ICR7aHVtaWRpdHl9JTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZFwiPldpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBtcGg8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLXVuaXQtbWV0cmljXCI+TWV0cmljPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLXVuaXQtaW1wZXJpYWwgYWN0aXZlXCI+SW1wZXJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VW5pdEJ1dHRvbnMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0VW5pdEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IG1ldHJpY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdC1tZXRyaWMnKTtcclxuICAgIGNvbnN0IGltcGVyaWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11bml0LWltcGVyaWFsJyk7XHJcblxyXG4gICAgbWV0cmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5V2VhdGhlckluZm8oY2l0eU5hbWUsICdtZXRyaWMnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGltcGVyaWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5V2VhdGhlckluZm8oY2l0eU5hbWUsICdpbXBlcmlhbCcpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbG9hZEFwcCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsImNvbnN0IHdlYXRoZXJNb2R1bGUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFwaUtleSA9ICdjY2FhMjlmZmM2ZTc0MzAxZDBjMDEzMzRmMzFkZGQ3OCc7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eU5hbWUsIHVuaXQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2FwaUtleX1gO1xyXG5cclxuICAgICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPWltcGVyaWFsYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdldERhdGEgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJNb2R1bGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEFwcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==