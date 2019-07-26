/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/functions/testFunc.js":
/*!**************************************!*\
  !*** ./src/js/functions/testFunc.js ***!
  \**************************************/
/*! exports provided: createElementWithClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithClass", function() { return createElementWithClass; });
function createElementWithClass(elName, className, childName, childClass) {
    let el = document.createElement(elName);
    el.classList.add(className);
    if (childName) {
        el.appendChild(createElementWithClass(childName, childClass));
    }
    return el;
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var functions_testFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! functions/testFunc */ "./src/js/functions/testFunc.js");



const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';


window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    let menu = document.getElementById('menu');
    let textRequest = getArrayFromParamRequest(URL);
    for (let i = 0; i < textRequest.length; i++) {
        let li = Object(functions_testFunc__WEBPACK_IMPORTED_MODULE_0__["createElementWithClass"])('li', 'nav-item', 'a', 'nav-link');
        let title = textRequest[i].title;
        let a = li.children[0];
        a.textContent = title;
        a.setAttribute('href', '../html/' + title.toLowerCase() + '.html');
        menu.appendChild(li);
    }
}
const createPostPage = function () {
    
}

function getArrayFromParamRequest(targetUrl) {

    let res, xhr = new XMLHttpRequest();
    xhr.open('GET', targetUrl, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            res = JSON.parse(xhr.response);
        };
    };
    xhr.send();

    return res;
}

let ob = getArrayFromParamRequest(URL);




/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/functions/testFunc.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\GitHub\baseBuildJS-master\src\js\index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! E:\GitHub\baseBuildJS-master\src\js\functions\testFunc.js */"./src/js/functions/testFunc.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map