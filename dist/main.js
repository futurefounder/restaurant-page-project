/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ (() => {

eval("(function pageLoad() {\n  function addCode() {\n    document.getElementById(\"content\").innerHTML += \n      \"<h1>Test Add Content</h1>\";\n\n    // const headerElement = document.getElementById(\"gfg\");\n\n// Create element\nconst el = document.createElement('header');\n\n// Add Tailwind class to element\nel.classList.add('text-gray-600', 'body-font');\n\n// Add text content to element\nel.textContent = 'Test-Tailwind Class';\n\n// Or set the innerHTML of the element\n// el.innerHTML = `<span>One, two, three</span>`;\n\n// add element to DOM\nconst box = document.getElementById('content');\nbox.appendChild(el);\n\n\n  }; \n  addCode();\n})();\n\n/* \n\n        <header class=\"text-gray-600 body-font\">\n            <div class=\"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center\">\n              <a class=\"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"w-10 h-10 text-white p-2 bg-yellow-500 rounded-full\" viewBox=\"0 0 24 24\">\n                  <path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"></path>\n                </svg>\n                <span class=\"ml-3 text-xl\">Fancy Restaurant</span>\n              </a>\n              <nav class=\"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center\">\n                <a class=\"mr-5 hover:text-gray-900\">Values</a>\n                <a class=\"mr-5 hover:text-gray-900\">Staff</a>\n                <a class=\"mr-5 hover:text-gray-900\">Menu</a>\n                <a class=\"mr-5 hover:text-gray-900\">Contact</a>\n              </nav>\n              <button class=\"inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0\">Button\n                <svg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"w-4 h-4 ml-1\" viewBox=\"0 0 24 24\">\n                  <path d=\"M5 12h14M12 5l7 7-7 7\"></path>\n                </svg>\n              </button>\n            </div>\n          </header>\n          <section class=\"text-gray-600 body-font\">\n            <div class=\"container mx-auto flex flex-col px-5 py-24 justify-center items-center\">\n              <img class=\"lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded\" alt=\"hero\" src=\"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070\">\n              <div class=\"w-full md:w-2/3 flex flex-col mb-16 items-center text-center\">\n                <h1 class=\"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900\">Yes, we make good food</h1>\n                <p class=\"mb-8 leading-relaxed\">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>\n              </div>\n            </div>\n          </section>\n\n*/\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;