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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Qsa0NBQWtDLFNBQVM7QUFDM0MsZ0RBQWdELGFBQWEsT0FBTztBQUNwRSwyQ0FBMkMsU0FBUztBQUNwRCwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0EsOENBQThDLG1CQUFtQjtBQUNqRSxvQ0FBb0MsU0FBUztBQUM3QyxrREFBa0QsYUFBYSxPQUFPO0FBQ3RFLDZDQUE2QyxTQUFTO0FBQ3RELGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTLFNBQVMsT0FBTztBQUMvRjtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUyxTQUFTLE9BQU87QUFDL0Y7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQzVCN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5QjtBQUNBLDhDQUE4QywyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYXRoZXJNb2R1bGUgZnJvbSAnLi93ZWF0aGVyJztcclxuXHJcbmNvbnN0IFVJID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkQXBwID0gKCkgPT4ge1xyXG4gICAgZGlzcGxheVdlYXRoZXJJbmZvKCdNYWJhbGFjYXQnLCAnaW1wZXJpYWwnKTtcclxuICAgIGluaXRCdXR0b25zKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZExvY2F0aW9uV2VhdGhlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJykudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVuaXQtbWV0cmljJyk7XHJcbiAgICBjb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdC1pbXBlcmlhbCcpO1xyXG5cclxuICAgIGlmIChlLnRhcmdldCA9PT0gbWV0cmljQnRuKSB7XHJcbiAgICAgIGltcGVyaWFsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBtZXRyaWNCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhjaXR5TmFtZSwgJ21ldHJpYycpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gaW1wZXJpYWxCdG4pIHtcclxuICAgICAgbWV0cmljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpbXBlcmlhbEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZGlzcGxheVdlYXRoZXJJbmZvKGNpdHlOYW1lLCAnaW1wZXJpYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChzZWFyY2hCYXJWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydChgTG9jYXRpb24gY2FuJ3QgYmUgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZXRyaWNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGRpc3BsYXlXZWF0aGVySW5mbyhzZWFyY2hCYXJWYWx1ZSwgJ21ldHJpYycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkaXNwbGF5V2VhdGhlckluZm8oc2VhcmNoQmFyVmFsdWUsICdpbXBlcmlhbCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlck1vZHVsZS5nZXREYXRhKGNpdHksIHVuaXQpO1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgYWxlcnQoYENpdHkgJHtzZWFyY2hCYXIudmFsdWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNpdHlOYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcclxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF0YS5tYWluLmZlZWxzX2xpa2U7XHJcbiAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLm1haW47XHJcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkYXRhLndpbmQuc3BlZWQ7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ljb25zLyR7d2VhdGhlckljb259LnBuZ1wiIGNsYXNzPVwid2VhdGhlci1pY29uXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtcGFuZWxcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2NpdHlOYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+RmVlbHMgbGlrZTogJHt0ZW1wZXJhdHVyZX0gJiM4NDUxOzwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk6ICR7aHVtaWRpdHl9JTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRcIj5XaW5kIFNwZWVkOiAke3dpbmRTcGVlZH0ga20vaDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtcGFuZWxcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9pY29ucy8ke3dlYXRoZXJJY29ufS5wbmdcIiBjbGFzcz1cIndlYXRoZXItaWNvblwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1wYW5lbFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWF0aGVyLWRlc2NyaXB0aW9uXCI+JHt3ZWF0aGVyRGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2NpdHlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj5GZWVscyBsaWtlOiAke3RlbXBlcmF0dXJlfSAmIzg0NTc7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJodW1pZGl0eVwiPkh1bWlkaXR5OiAke2h1bWlkaXR5fSU8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRcIj5XaW5kIFNwZWVkOiAke3dpbmRTcGVlZH0gbXBoPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJyk7XHJcbiAgICBjb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVuaXQtbWV0cmljJyk7XHJcbiAgICBjb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdC1pbXBlcmlhbCcpO1xyXG5cclxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMb2NhdGlvbldlYXRoZXIpO1xyXG5cclxuICAgIG1ldHJpY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMb2NhdGlvbldlYXRoZXIpO1xyXG5cclxuICAgIGltcGVyaWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZExvY2F0aW9uV2VhdGhlcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbG9hZEFwcCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsImNvbnN0IHdlYXRoZXJNb2R1bGUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFwaUtleSA9ICdjY2FhMjlmZmM2ZTc0MzAxZDBjMDEzMzRmMzFkZGQ3OCc7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eU5hbWUsIHVuaXQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBhcGlVcmwgPSAnJztcclxuXHJcbiAgICAgIGlmICh1bml0ID09PSAnbWV0cmljJykge1xyXG4gICAgICAgIGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1tZXRyaWNgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodW5pdCA9PT0gJ2ltcGVyaWFsJykge1xyXG4gICAgICAgIGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1pbXBlcmlhbGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBnZXREYXRhIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyTW9kdWxlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRBcHApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=