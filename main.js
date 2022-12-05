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
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(city, unit);
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
        <img src="icons/${weatherIcon}.png" class="weather-icon">
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
          <img src="icons/${weatherIcon}.png" class="weather-icon">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Qsa0NBQWtDLFNBQVM7QUFDM0MsZ0RBQWdELGFBQWEsT0FBTztBQUNwRSwyQ0FBMkMsU0FBUztBQUNwRCwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0EsOENBQThDLG1CQUFtQjtBQUNqRSxvQ0FBb0MsU0FBUztBQUM3QyxrREFBa0QsYUFBYSxPQUFPO0FBQ3RFLDZDQUE2QyxTQUFTO0FBQ3RELGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTLFNBQVMsT0FBTztBQUMvRjtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUyxTQUFTLE9BQU87QUFDL0Y7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQzVCN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5QjtBQUNBLDhDQUE4QywyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYXRoZXJNb2R1bGUgZnJvbSAnLi93ZWF0aGVyJztcclxuXHJcbmNvbnN0IFVJID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkQXBwID0gKCkgPT4ge1xyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKCdNYWJhbGFjYXQnLCAnaW1wZXJpYWwnKTtcclxuICAgIGluaXRCdXR0b25zKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZExvY2F0aW9uV2VhdGhlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJykudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVuaXQtbWV0cmljJyk7XHJcbiAgICBjb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdC1pbXBlcmlhbCcpO1xyXG5cclxuICAgIGlmIChlLnRhcmdldCA9PT0gbWV0cmljQnRuKSB7XHJcbiAgICAgIGltcGVyaWFsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBtZXRyaWNCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ21ldHJpYycpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gaW1wZXJpYWxCdG4pIHtcclxuICAgICAgbWV0cmljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpbXBlcmlhbEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZGlzcGxheVdlYXRoZXJJbmZvKGNpdHlOYW1lLCAnaW1wZXJpYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChzZWFyY2hCYXJWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydChgTG9jYXRpb24gY2FuJ3QgYmUgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZXRyaWNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhzZWFyY2hCYXJWYWx1ZSwgJ21ldHJpYycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkaXNwbGF5V2VhdGhlckluZm8oc2VhcmNoQmFyVmFsdWUsICdpbXBlcmlhbCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKGNpdHksIHVuaXQpO1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgYWxlcnQoYENpdHkgJHtzZWFyY2hCYXIudmFsdWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNpdHlOYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcclxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF0YS5tYWluLmZlZWxzX2xpa2U7XHJcbiAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLm1haW47XHJcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkYXRhLndpbmQuc3BlZWQ7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWF0aGVyLWRlc2NyaXB0aW9uXCI+JHt3ZWF0aGVyRGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eS1uYW1lXCI+JHtjaXR5TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPkZlZWxzIGxpa2U6ICR7dGVtcGVyYXR1cmV9ICYjODQ1MTs8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJodW1pZGl0eVwiPkh1bWlkaXR5OiAke2h1bWlkaXR5fSU8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkXCI+V2luZCBTcGVlZDogJHt3aW5kU3BlZWR9IGttL2g8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ltcGVyaWFsJykge1xyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImljb25zLyR7d2VhdGhlckljb259LnBuZ1wiIGNsYXNzPVwid2VhdGhlci1pY29uXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHktbmFtZVwiPiR7Y2l0eU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPkZlZWxzIGxpa2U6ICR7dGVtcGVyYXR1cmV9ICYjODQ1Nzs8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk6ICR7aHVtaWRpdHl9JTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZFwiPldpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBtcGg8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcclxuICAgIGNvbnN0IG1ldHJpY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdC1tZXRyaWMnKTtcclxuICAgIGNvbnN0IGltcGVyaWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11bml0LWltcGVyaWFsJyk7XHJcblxyXG4gICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgc2VhcmNoQnRuLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZExvY2F0aW9uV2VhdGhlcik7XHJcblxyXG4gICAgbWV0cmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZExvY2F0aW9uV2VhdGhlcik7XHJcblxyXG4gICAgaW1wZXJpYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTG9jYXRpb25XZWF0aGVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsb2FkQXBwIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSTtcclxuIiwiY29uc3Qgd2VhdGhlck1vZHVsZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYXBpS2V5ID0gJ2NjYWEyOWZmYzZlNzQzMDFkMGMwMTMzNGYzMWRkZDc4JztcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5TmFtZSwgdW5pdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGFwaVVybCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XHJcbiAgICAgICAgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPWltcGVyaWFsYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdldERhdGEgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJNb2R1bGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEFwcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==