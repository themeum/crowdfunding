<<<<<<< HEAD
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

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/style.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/lib/loader.js??ref--6-2!./src/styles/style.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ":root {\n  --wpcf-font-family: 'Roboto', sans-serif;\n  --wpcf-primary-text-color: #787993;\n  --wpcf-light-text-color: #ADAECF;\n  --wpcf-primary-color: #3060c5;\n  --wpcf-heading-color: #25265e;\n  --wpcf-border-color: #dcdce4;\n  --wpcf-success-color: #00A92F; }\n\n#wpcf-dashboard {\n  font-family: var(--wpcf-font-family);\n  color: var(--wpcf-primary-text-color);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 14px; }\n\n#wpcf-dashboard img {\n  max-width: 100%;\n  height: auto; }\n\n.wpcf-dashboard-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start; }\n\n.wpcf-dashboard-sidebar {\n  flex: 0 0 255px;\n  max-width: 255px; }\n\n.wpcf-dashboard-content {\n  flex: 1 0 calc(100% - 255px);\n  max-width: calc(100% - 255px);\n  padding-left: 30px;\n  padding-top: 30px; }\n\n.wpcf-btn-group {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -10px; }\n  .wpcf-btn-group .wpcf-btn {\n    margin-top: 10px; }\n    .wpcf-btn-group .wpcf-btn:not(:last-child) {\n      margin-right: 10px; }\n\n.wpcf-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none !important;\n  font-size: 16px;\n  position: relative;\n  transition: 300ms; }\n  .wpcf-btn:not(.wpcf-link-btn) {\n    line-height: 26px;\n    height: 40px;\n    padding: 0 25px;\n    background: var(--wpcf-primary-color);\n    border: 1px solid var(--wpcf-primary-color);\n    color: #fff; }\n  .wpcf-btn.wpcf-btn-sm {\n    font-size: 14px;\n    padding-left: 15px;\n    padding-right: 15px;\n    line-height: 17px;\n    height: 35px; }\n  .wpcf-btn.wpcf-btn-secondary {\n    background-color: var(--wpcf-primary-text-color);\n    border-color: var(--wpcf-primary-text-color);\n    color: #ffffff; }\n  .wpcf-btn.wpcf-link-btn {\n    color: var(--wpcf-primary-color);\n    padding: 0;\n    background: none;\n    border: none; }\n  .wpcf-btn.wpcf-btn-outline {\n    background: transparent;\n    border: 1px solid var(--wpcf-primary-color);\n    color: var(--wpcf-primary-color); }\n    .wpcf-btn.wpcf-btn-outline:hover {\n      background-color: var(--wpcf-primary-color);\n      color: #ffffff; }\n    .wpcf-btn.wpcf-btn-outline.wpcf-success-btn {\n      color: var(--wpcf-success-color);\n      border-color: var(--wpcf-success-color); }\n      .wpcf-btn.wpcf-btn-outline.wpcf-success-btn:hover {\n        background-color: var(--wpcf-success-color);\n        color: #ffffff; }\n    .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary {\n      border-color: var(--wpcf-border-color);\n      background: #ffffff;\n      color: var(--wpcf-primary-text-color); }\n      .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary.active, .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary:hover {\n        border-color: var(--wpcf-primary-color);\n        color: var(--wpcf-primary-color); }\n  .wpcf-btn.wpcf-btn-round {\n    border-radius: 30px; }\n  .wpcf-btn .wpcf-icon:not(.wpcf-icon-right) {\n    margin-right: 12px; }\n  .wpcf-btn .wpcf-icon-right {\n    margin-left: 12px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:first-child {\n  height: 65px;\n  width: 65px;\n  display: block;\n  border-radius: 50%;\n  margin-bottom: 14px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:nth-child(2) {\n  display: block;\n  height: 25px;\n  width: 60%;\n  margin-bottom: 8px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:nth-child(3) {\n  display: block;\n  height: 20px;\n  width: 100%; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar li {\n  margin: 10px 30px;\n  height: 30px; }\n\n.wpcf-dashboard-sidebar {\n  border: 1px solid var(--wpcf-border-color); }\n  .wpcf-dashboard-sidebar .wpcf-dashboard-profile {\n    padding: 15px 30px 30px;\n    border-bottom: 1px solid var(--wpcf-border-color); }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile img {\n      width: 65px;\n      height: 65px;\n      border-radius: 50%;\n      margin-bottom: 14px;\n      display: block; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile h4 {\n      font-size: 21px;\n      margin: 0 0 4px;\n      color: var(--wpcf-heading-color);\n      font-weight: 400; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile span {\n      font-size: 14px;\n      color: var(--wpcf-light-text-color);\n      display: block; }\n  .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks {\n    margin: 0;\n    padding: 20px 0 0;\n    list-style: none;\n    font-size: 16px;\n    flex-grow: 1;\n    min-height: 600px;\n    display: flex;\n    flex-direction: column; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:nth-last-child(2) {\n      margin-bottom: 90px; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:last-child {\n      margin-top: auto; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:last-child a {\n        color: var(--wpcf-primary-color); }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li {\n      position: relative; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a {\n        line-height: 30px;\n        padding: 10px 30px;\n        display: flex;\n        align-items: center;\n        color: var(--wpcf-primary-text-color);\n        text-decoration: none !important; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a span.wpcf-icon {\n          flex: 0 0 20px;\n          text-align: center;\n          font-size: 17px;\n          margin-right: 19px; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a span.wpcf-float-icon {\n          margin-left: auto; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a.is-active {\n          color: var(--wpcf-primary-color); }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a:hover {\n          background: #f2f6ff;\n          color: var(--wpcf-primary-color); }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        font-size: 14px;\n        display: none; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li ul li a {\n          padding-left: 63px;\n          padding-top: 5px;\n          padding-bottom: 5px; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li.wpcf-collapse > a {\n        color: var(--wpcf-primary-color); }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li.wpcf-collapse > ul {\n        display: block; }\n\n.wpcf-dashboard-info-cards {\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: -20px; }\n  .wpcf-dashboard-info-cards .wpcf-dashboard-info-card {\n    padding: 18px 25px 25px;\n    border: 1px solid var(--wpcf-border-color);\n    border-radius: 8px;\n    color: var(--wpcf-light-text-color);\n    margin-left: 20px;\n    font-weight: 400;\n    flex-grow: 1; }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card h3 {\n      font-size: 32px;\n      margin-bottom: 3px;\n      color: var(--wpcf-primary-color);\n      font-weight: 400; }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card:first-child {\n      min-width: 28%; }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card.wpcf-info-success {\n      background: var(--wpcf-success-color);\n      border-color: var(--wpcf-success-color);\n      color: #ffffff; }\n      .wpcf-dashboard-info-cards .wpcf-dashboard-info-card.wpcf-info-success h3 {\n        color: #ffffff; }\n\n.wpcf-report-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n\n.wpcf-report-filter span,\n.wpcf-report-filter input {\n  height: 45px;\n  padding: 0 20px;\n  border: 1px solid var(--wpcf-border-color);\n  border-radius: 30px;\n  margin-right: 12px;\n  color: var(--wpcf-primary-text-color); }\n  .wpcf-report-filter span::placeholder,\n  .wpcf-report-filter input::placeholder {\n    color: var(--wpcf-primary-text-color); }\n\n.wpcf-report-filter input {\n  width: 140px; }\n\n.wpcf-report-filter span {\n  display: inline-flex;\n  padding: 0;\n  position: relative; }\n  .wpcf-report-filter span select {\n    border: none;\n    background: transparent;\n    min-width: 160px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    color: var(--wpcf-primary-text-color);\n    padding: 0 20px !important;\n    line-height: 45px;\n    height: 45px; }\n  .wpcf-report-filter span::after {\n    position: absolute;\n    content: '\\f078';\n    font-weight: 900;\n    font-family: 'Font Awesome 5 Free';\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n    font-size: 14px; }\n\n.wpcf-report-line-graph {\n  border: 1px solid var(--wpcf-border-color);\n  padding: 25px;\n  margin-bottom: 30px;\n  border-radius: 4px; }\n\n.wpcf-content-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 0; }\n  .wpcf-content-header .wpcf-btn {\n    margin-left: auto; }\n\n.wpcf-content-heading {\n  font-size: 21px;\n  font-weight: 400;\n  color: var(--wpcf-heading-color);\n  line-height: 24px;\n  margin-bottom: 20px; }\n\n.wpcf-mycampaign-filter-group {\n  margin-bottom: 20px; }\n\n.wpcf-campaign-item {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  border: 1px solid var(--wpcf-border-color);\n  margin-bottom: 20px;\n  border-radius: 4px; }\n  .wpcf-campaign-item a.wpcf-campaign-thumbnail {\n    max-width: 170px;\n    flex: 1 0 170px;\n    margin-right: 30px; }\n    .wpcf-campaign-item a.wpcf-campaign-thumbnail img {\n      display: block;\n      border: 1px solid var(--wpcf-border-color); }\n  .wpcf-campaign-item .wpcf-campaign-content {\n    flex-grow: 1; }\n  .wpcf-campaign-item .wpcf-campaign-title {\n    font-size: 21px;\n    margin: 0 0 5px;\n    font-weight: 400;\n    line-height: 28px; }\n    .wpcf-campaign-item .wpcf-campaign-title a {\n      color: var(--wpcf-primary-text-color); }\n      .wpcf-campaign-item .wpcf-campaign-title a:hover {\n        color: var(--wpcf-primary-color); }\n  .wpcf-campaign-item .wpcf-campaign-heading {\n    position: relative; }\n    .wpcf-campaign-item .wpcf-campaign-heading:not(.wpcf-has-not-campaign-link) {\n      padding-right: 100px; }\n    .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links {\n      position: absolute;\n      top: 0;\n      right: 0; }\n      .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button {\n        border: none;\n        padding: 0;\n        margin: 0;\n        background: none;\n        color: var(--wpcf-light-text-color);\n        transition: 300ms; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:not(:first-child) {\n          margin-left: 12px; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:not(:last-child) {\n          margin-right: 12px; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:hover {\n          color: var(--wpcf-primary-color); }\n  .wpcf-campaign-item .wpcf-campaign-author {\n    font-size: 16px;\n    font-weight: 400;\n    margin: 0 0 5px; }\n    .wpcf-campaign-item .wpcf-campaign-author a {\n      color: var(--wpcf-primary-color); }\n\n.wpcf-campaign-infos {\n  display: flex;\n  align-items: center;\n  margin-left: -20px;\n  flex-wrap: wrap; }\n  .wpcf-campaign-infos .wpcf-campaign-info > h5 {\n    font-weight: 400;\n    margin: 0;\n    font-size: 14px;\n    color: var(--wpcf-light-text-color); }\n    .wpcf-campaign-infos .wpcf-campaign-info > h5 span:first-child {\n      font-size: 16px;\n      font-weight: 500;\n      color: var(--wpcf-success-color);\n      display: block;\n      margin-bottom: 2px; }\n  .wpcf-campaign-infos .wpcf-campaign-info {\n    margin-left: 20px;\n    margin-top: 15px; }\n  .wpcf-campaign-infos .wpcf-campaign-raised {\n    position: relative; }\n    .wpcf-campaign-infos .wpcf-campaign-raised .wpcf-raised-percent {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 14px;\n      color: var(--wpcf-success-color); }\n\n.wpcf-report-table {\n  border: 1px solid var(--wpcf-border-color);\n  margin-bottom: 30px;\n  border-radius: 4px;\n  overflow: hidden;\n  border-spacing: 0;\n  border-collapse: separate; }\n  .wpcf-report-table tr th, .wpcf-report-table tr td {\n    padding: 15px 20px;\n    line-height: 20px; }\n    .wpcf-report-table tr th:first-child, .wpcf-report-table tr td:first-child {\n      padding-left: 30px; }\n    .wpcf-report-table tr th:last-child, .wpcf-report-table tr td:last-child {\n      padding-right: 30px; }\n  .wpcf-report-table thead tr th,\n  .wpcf-report-table thead tr td {\n    color: var(--wpcf-heading-color);\n    background: #F5F5FA !important;\n    border: none !important;\n    font-size: 16px;\n    font-weight: 500; }\n  .wpcf-report-table tbody tr th, .wpcf-report-table tbody tr td {\n    background: #ffffff !important;\n    border: none !important; }\n  .wpcf-report-table tbody tr:nth-child(even) th, .wpcf-report-table tbody tr:nth-child(even) td {\n    background: #F5F5FA !important;\n    border: none !important; }\n", "",{"version":3,"sources":["/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_global.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_btn.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_sidebar.skeleton.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_sidebar.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_dashboard.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_content-header.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_my-campaign.scss","/Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/styles/_report-table.scss"],"names":[],"mappings":"AAAA;EACC,wCAAmB;EAChB,kCAA0B;EAC1B,gCAAwB;EACxB,6BAAqB;EACrB,6BAAqB;EACrB,4BAAoB;EACpB,6BAAqB,EAAA;;AAMzB;EACI,oCAAoC;EACpC,qCAAqC;EACrC,mCAAmC;EACnC,kCAAkC;EAClC,eAAe,EAAA;;AAEnB;EACI,eAAe;EACf,YAAY,EAAA;;AAGhB;EACI,aAAa;EACb,eAAe;EACf,uBAAuB,EAAA;;AAE3B;EACI,eArBiB;EAsBjB,gBAtBiB,EAAA;;AAyBrB;EACI,4BAAwC;EACxC,6BAAyC;EACzC,kBAAkB;EAClB,iBAAiB,EAAA;;ACvCrB;EACI,aAAa;EACb,eAAe;EACf,iBAAiB,EAAA;EAHrB;IAKQ,gBAAgB,EAAA;IALxB;MAOY,kBAAkB,EAAA;;AAI9B;EACI,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,iBAAiB,EAAA;EAPrB;IASQ,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,qCAAqC;IACrC,2CAA2C;IAC3C,WAAW,EAAA;EAdnB;IAiBQ,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY,EAAA;EArBpB;IAyBQ,gDAAgD;IAChD,4CAA4C;IAC5C,cAAc,EAAA;EA3BtB;IA+BQ,gCAAgC;IAChC,UAAU;IACV,gBAAgB;IAChB,YAAY,EAAA;EAlCpB;IAsCQ,uBAAuB;IACvB,2CAA2C;IAC3C,gCAAgC,EAAA;IAxCxC;MA0CY,2CAA2C;MAC3C,cAAc,EAAA;IA3C1B;MA8CY,gCAAgC;MAChC,uCAAuC,EAAA;MA/CnD;QAiDgB,2CAA2C;QAC3C,cAAc,EAAA;IAlD9B;MAsDY,sCAAsC;MACtC,mBAAmB;MACnB,qCAAqC,EAAA;MAxDjD;QA2DgB,uCAAuC;QACvC,gCAAgC,EAAA;EA5DhD;IAkEQ,mBAAmB,EAAA;EAlE3B;IAqEQ,kBAAkB,EAAA;EArE1B;IAwEQ,iBAAiB,EAAA;;ACnFzB;EAIe,YAAY;EACZ,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,mBAAmB,EAAA;;AARlC;EAWe,cAAc;EACd,YAAY;EACZ,UAAU;EACV,kBAAkB,EAAA;;AAdjC;EAiBe,cAAc;EACd,YAAY;EACZ,WAAW,EAAA;;AAnB1B;EAsBe,iBAAiB;EACjB,YAAY,EAAA;;ACpB3B;EACI,0CAA0C,EAAA;EAD9C;IAGQ,uBAAuB;IACvB,iDAAiD,EAAA;IAJzD;MAMY,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,mBAAmB;MACnB,cAAc,EAAA;IAV1B;MAaY,eAAe;MACf,eAAe;MACf,gCAAgC;MAChC,gBAAgB,EAAA;IAhB5B;MAmBY,eAAe;MACf,mCAAmC;MACnC,cAAc,EAAA;EArB1B;IAyBQ,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB,EAAA;IAhC9B;MAkCY,mBAAmB,EAAA;IAlC/B;MAqCY,gBAAgB,EAAA;MArC5B;QAuCgB,gCAAgC,EAAA;IAvChD;MA2CY,kBAAkB,EAAA;MA3C9B;QA6CgB,iBAAiB;QACjB,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,qCAAqC;QACrC,gCAAgC,EAAA;QAlDhD;UAoDoB,cAAc;UACd,kBAAkB;UAClB,eAAe;UACf,kBAAkB,EAAA;QAvDtC;UA0DoB,iBAAiB,EAAA;QA1DrC;UA6DoB,gCAAgC,EAAA;QA7DpD;UAgEoB,mBAAmB;UACnB,gCAAgC,EAAA;MAjEpD;QAqEgB,gBAAgB;QAChB,UAAU;QACV,SAAS;QACT,eAAe;QACf,aAAa,EAAA;QAzE7B;UA2EoB,kBAAkB;UAClB,gBAAgB;UAChB,mBAAmB,EAAA;MA7EvC;QAkFoB,gCAAgC,EAAA;MAlFpD;QAqFoB,cAAc,EAAA;;ACxFlC;EACI,aAAa;EACb,mBAAmB;EACnB,kBAAkB,EAAA;EAHtB;IAKQ,uBAAuB;IACvB,0CAA0C;IAC1C,kBAAkB;IAClB,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,YAAY,EAAA;IAXpB;MAaY,eAAe;MACf,kBAAkB;MAClB,gCAAgC;MAChC,gBAAgB,EAAA;IAhB5B;MAmBY,cAAc,EAAA;IAnB1B;MAsBY,qCAAqC;MACrC,uCAAuC;MACvC,cAAc,EAAA;MAxB1B;QA0BgB,cAAc,EAAA;;AAM9B;EACI,aAAa;EACb,8BAA8B;EAC9B,mBAAmB,EAAA;;AAGvB;;EAGQ,YAAY;EACZ,eAAe;EACf,0CAA0C;EAC1C,mBAAmB;EACnB,kBAAkB;EAClB,qCAAqC,EAAA;EAR7C;;IAUY,qCAAqC,EAAA;;AAVjD;EAcQ,YAAY,EAAA;;AAdpB;EAiBQ,oBAAoB;EACpB,UAAU;EACV,kBAAkB,EAAA;EAnB1B;IAqBY,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;IAChB,wBAAwB;IACxB,qBAAwB;IACxB,gBAAwB;IACxB,qCAAqC;IACrC,0BAA0B;IAC1B,iBAAiB;IACjB,YAAY,EAAA;EA9BxB;IAiCY,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,kCAAkC;IAClC,QAAQ;IACR,WAAW;IACX,2BAA2B;IAC3B,eAAe,EAAA;;AAM3B;EACI,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,kBAAkB,EAAA;;ACxFtB;EACI,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe,EAAA;EAJnB;IAMQ,iBAAiB,EAAA;;AAIzB;EACI,eAAe;EACf,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB,EAAA;;ACfvB;EACC,mBAAmB,EAAA;;AAGpB;EACC,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,0CAA0C;EAC1C,mBAAmB;EACnB,kBAAkB,EAAA;EANnB;IAQE,gBAAgB;IAChB,eAAe;IACf,kBAAkB,EAAA;IAVpB;MAYG,cAAc;MACd,0CAA0C,EAAA;EAb7C;IAkBE,YAAY,EAAA;EAlBd;IAsBE,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,iBAAiB,EAAA;IAzBnB;MA2BG,qCAAqC,EAAA;MA3BxC;QA6BI,gCAAgC,EAAA;EA7BpC;IAkCE,kBAAkB,EAAA;IAlCpB;MAoCG,oBAAoB,EAAA;IApCvB;MAuCG,kBAAkB;MAClB,MAAM;MACN,QAAQ,EAAA;MAzCX;QA2CI,YAAY;QACZ,UAAU;QACV,SAAS;QACT,gBAAgB;QAChB,mCAAmC;QACnC,iBAAiB,EAAA;QAhDrB;UAkDK,iBAAiB,EAAA;QAlDtB;UAqDK,kBAAkB,EAAA;QArDvB;UAwDK,gCAAgC,EAAA;EAxDrC;IA+DE,eAAe;IACf,gBAAgB;IAChB,eAAe,EAAA;IAjEjB;MAmEG,gCAAgC,EAAA;;AAKnC;EACC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe,EAAA;EAJhB;IAME,gBAAgB;IAChB,SAAS;IACT,eAAe;IACf,mCAAmC,EAAA;IATrC;MAWG,eAAe;MACf,gBAAgB;MAChB,gCAAgC;MAChC,cAAc;MACd,kBAAkB,EAAA;EAfrB;IAoBE,iBAAiB;IACjB,gBAAgB,EAAA;EArBlB;IAyBE,kBAAkB,EAAA;IAzBpB;MA2BG,kBAAkB;MAClB,SAAS;MACT,QAAQ;MACR,gCAAgC;MAChC,eAAe;MACf,gCAAgC,EAAA;;AC5GnC;EACC,0CAA0C;EAC1C,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB,EAAA;EAN1B;IASG,kBAAkB;IAClB,iBAAiB,EAAA;IAVpB;MAYI,kBAAkB,EAAA;IAZtB;MAeI,mBAAmB,EAAA;EAfvB;;IAuBI,gCAAgC;IAChC,8BAA8B;IAC9B,uBAAuB;IACvB,eAAe;IACf,gBAAgB,EAAA;EA3BpB;IAkCI,8BAA8B;IAC9B,uBAAuB,EAAA;EAnC3B;IAuCK,8BAA8B;IAC9B,uBAAuB,EAAA","file":"style.scss","sourcesContent":[":root{\n\t--wpcf-font-family: 'Roboto', sans-serif;\n    --wpcf-primary-text-color: #787993;\n    --wpcf-light-text-color: #ADAECF;\n    --wpcf-primary-color: #3060c5;\n    --wpcf-heading-color: #25265e;\n    --wpcf-border-color: #dcdce4;\n    --wpcf-success-color: #00A92F;\n}\n\n$sidebar_width: 255px;\n\n\n#wpcf-dashboard{\n    font-family: var(--wpcf-font-family);\n    color: var(--wpcf-primary-text-color);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 14px;\n}\n#wpcf-dashboard img{\n    max-width: 100%;\n    height: auto;\n}\n\n.wpcf-dashboard-container{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n}\n.wpcf-dashboard-sidebar{\n    flex: 0 0 $sidebar_width;\n    max-width: $sidebar_width;\n}\n\n.wpcf-dashboard-content{\n    flex: 1 0 calc(100% - #{$sidebar_width});\n    max-width: calc(100% - #{$sidebar_width});\n    padding-left: 30px;\n    padding-top: 30px;\n}\n",".wpcf-btn-group{\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: -10px;\n    .wpcf-btn{\n        margin-top: 10px;\n        &:not(:last-child){\n            margin-right: 10px;\n        }\n    }\n}\n.wpcf-btn{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none !important;\n    font-size: 16px;\n    position: relative;\n    transition: 300ms;\n    &:not(.wpcf-link-btn){\n        line-height: 26px;\n        height: 40px;\n        padding: 0 25px;\n        background: var(--wpcf-primary-color);\n        border: 1px solid var(--wpcf-primary-color);\n        color: #fff;\n    }\n    &.wpcf-btn-sm{\n        font-size: 14px;\n        padding-left: 15px;\n        padding-right: 15px;\n        line-height: 17px;\n        height: 35px;\n    }\n    \n    &.wpcf-btn-secondary{\n        background-color: var(--wpcf-primary-text-color);\n        border-color: var(--wpcf-primary-text-color);\n        color: #ffffff;\n    }\n    \n    &.wpcf-link-btn{\n        color: var(--wpcf-primary-color);\n        padding: 0;\n        background: none;\n        border: none;\n    }\n    \n    &.wpcf-btn-outline{\n        background: transparent;\n        border: 1px solid var(--wpcf-primary-color);\n        color: var(--wpcf-primary-color);\n        &:hover{\n            background-color: var(--wpcf-primary-color);\n            color: #ffffff;\n        }\n        &.wpcf-success-btn{\n            color: var(--wpcf-success-color);\n            border-color: var(--wpcf-success-color);\n            &:hover{\n                background-color: var(--wpcf-success-color);\n                color: #ffffff;\n            }\n        }\n        &.wpcf-btn-secondary{\n            border-color: var(--wpcf-border-color);\n            background: #ffffff;\n            color: var(--wpcf-primary-text-color);\n            &.active,\n            &:hover{\n                border-color: var(--wpcf-primary-color);\n                color: var(--wpcf-primary-color);\n            }\n        }\n    }\n    \n    &.wpcf-btn-round{\n        border-radius: 30px;\n    }\n    .wpcf-icon:not(.wpcf-icon-right){\n        margin-right: 12px;\n    }\n    .wpcf-icon-right{\n        margin-left: 12px;\n    }\n}\n",".wpcf-dashboard-container{\n    &.is-skeleton{\n\t   .wpcf-dashboard-sidebar{\n           span:first-child{\n               height: 65px;\n               width: 65px;\n               display: block;\n               border-radius: 50%;\n               margin-bottom: 14px;\n           }\n           span:nth-child(2){\n               display: block;\n               height: 25px;\n               width: 60%;\n               margin-bottom: 8px;\n           }\n           span:nth-child(3){\n               display: block;\n               height: 20px;\n               width: 100%;\n           }\n           li{\n               margin: 10px 30px;\n               height: 30px;\n           }\n\n       }\n    }\n}\n","\n@import \"sidebar.skeleton\";\n\n.wpcf-dashboard-sidebar{\n    border: 1px solid var(--wpcf-border-color);\n    .wpcf-dashboard-profile{\n        padding: 15px 30px 30px;\n        border-bottom: 1px solid var(--wpcf-border-color);\n        img{\n            width: 65px;\n            height: 65px;\n            border-radius: 50%;\n            margin-bottom: 14px;\n            display: block;\n        }\n        h4{\n            font-size: 21px;\n            margin: 0 0 4px;\n            color: var(--wpcf-heading-color);\n            font-weight: 400;\n        }\n        span{\n            font-size: 14px;\n            color: var(--wpcf-light-text-color);\n            display: block;\n        }\n    }\n    .wpcf-dashboard-permalinks{\n        margin: 0;\n        padding: 20px 0 0;\n        list-style: none;\n        font-size: 16px;\n        flex-grow: 1;\n        min-height: 600px;\n        display: flex;\n        flex-direction: column;\n        > li:nth-last-child(2){\n            margin-bottom: 90px;\n        }\n        > li:last-child{\n            margin-top: auto;\n            a{\n                color: var(--wpcf-primary-color);\n            }\n        }\n        li{\n            position: relative;\n            a{\n                line-height: 30px;\n                padding: 10px 30px;\n                display: flex;\n                align-items: center;\n                color: var(--wpcf-primary-text-color);\n                text-decoration: none !important;\n                span.wpcf-icon{\n                    flex: 0 0 20px;\n                    text-align: center;\n                    font-size: 17px;\n                    margin-right: 19px;\n                }\n                span.wpcf-float-icon{\n                    margin-left: auto;\n                }\n                &.is-active{\n                    color: var(--wpcf-primary-color);\n                }\n                &:hover{\n                    background: #f2f6ff;\n                    color: var(--wpcf-primary-color);\n                }\n            }\n            ul{\n                list-style: none;\n                padding: 0;\n                margin: 0;\n                font-size: 14px;\n                display: none;\n                li a{\n                    padding-left: 63px;\n                    padding-top: 5px;\n                    padding-bottom: 5px;\n                }\n            }\n            &.wpcf-collapse {\n                > a{\n                    color: var(--wpcf-primary-color);\n                }\n                > ul{\n                    display: block;\n                }\n            }\n        }\n    }\n  }\n",".wpcf-dashboard-info-cards{\n    display: flex;\n    margin-bottom: 20px;\n    margin-left: -20px;\n    .wpcf-dashboard-info-card{\n        padding: 18px 25px 25px;\n        border: 1px solid var(--wpcf-border-color);\n        border-radius: 8px;\n        color: var(--wpcf-light-text-color);\n        margin-left: 20px;\n        font-weight: 400;\n        flex-grow: 1;\n        h3{\n            font-size: 32px;\n            margin-bottom: 3px;\n            color: var(--wpcf-primary-color);\n            font-weight: 400;\n        }\n        &:first-child{\n            min-width: 28%;\n        }\n        &.wpcf-info-success{\n            background: var(--wpcf-success-color);\n            border-color: var(--wpcf-success-color);\n            color: #ffffff;\n            h3{\n                color: #ffffff;\n            }\n        }\n    }\n}\n\n.wpcf-report-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n}\n\n.wpcf-report-filter{\n    span,\n    input{\n        height: 45px;\n        padding: 0 20px;\n        border: 1px solid var(--wpcf-border-color);\n        border-radius: 30px;\n        margin-right: 12px;\n        color: var(--wpcf-primary-text-color);\n        &::placeholder{\n            color: var(--wpcf-primary-text-color);\n        }\n    }\n    input{\n        width: 140px;\n    }\n    span{\n        display: inline-flex;\n        padding: 0;\n        position: relative;\n        select{\n            border: none;\n            background: transparent;\n            min-width: 160px;\n            -webkit-appearance: none;\n            -moz-appearance:    none;\n            appearance:         none;\n            color: var(--wpcf-primary-text-color);\n            padding: 0 20px !important;\n            line-height: 45px;\n            height: 45px;\n        }\n        &::after{\n            position: absolute;\n            content: '\\f078';\n            font-weight: 900;\n            font-family: 'Font Awesome 5 Free';\n            top: 50%;\n            right: 20px;\n            transform: translateY(-50%);\n            font-size: 14px;\n        }\n    }\n    \n}\n\n.wpcf-report-line-graph{\n    border: 1px solid var(--wpcf-border-color);\n    padding: 25px;\n    margin-bottom: 30px;\n    border-radius: 4px;\n}\n",".wpcf-content-header{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 0;\n    .wpcf-btn{\n        margin-left: auto;\n    }\n}\n\n.wpcf-content-heading{\n    font-size: 21px;\n    font-weight: 400;\n    color: var(--wpcf-heading-color);\n    line-height: 24px;\n    margin-bottom: 20px;\n}\n",".wpcf-mycampaign-filter-group{\n\tmargin-bottom: 20px;\n}\n\n.wpcf-campaign-item{\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 30px;\n\tborder: 1px solid var(--wpcf-border-color);\n\tmargin-bottom: 20px;\n\tborder-radius: 4px;\n\ta.wpcf-campaign-thumbnail{\n\t\tmax-width: 170px;\n\t\tflex: 1 0 170px;\n\t\tmargin-right: 30px;\n\t\timg{\n\t\t\tdisplay: block;\n\t\t\tborder: 1px solid var(--wpcf-border-color)\n\t\t}\n\t}\n\t\n\t.wpcf-campaign-content{\n\t\tflex-grow: 1;\n\t}\n\t\n\t.wpcf-campaign-title{\n\t\tfont-size: 21px;\n\t\tmargin: 0 0 5px;\n\t\tfont-weight: 400;\n\t\tline-height: 28px;\n\t\ta{\n\t\t\tcolor: var(--wpcf-primary-text-color);\n\t\t\t&:hover{\n\t\t\t\tcolor: var(--wpcf-primary-color);\n\t\t\t}\n\t\t}\n\t}\n\t.wpcf-campaign-heading{\n\t\tposition: relative;\n\t\t&:not(.wpcf-has-not-campaign-link){\n\t\t\tpadding-right: 100px;\n\t\t}\n\t\t.wpcf-campaign-links{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbutton{\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tbackground: none;\n\t\t\t\tcolor: var(--wpcf-light-text-color);\n\t\t\t\ttransition: 300ms;\n\t\t\t\t&:not(:first-child){\n\t\t\t\t\tmargin-left: 12px;\n\t\t\t\t}\n\t\t\t\t&:not(:last-child){\n\t\t\t\t\tmargin-right: 12px;\n\t\t\t\t}\n\t\t\t\t&:hover{\n\t\t\t\t\tcolor: var(--wpcf-primary-color);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t\n\t.wpcf-campaign-author{\n\t\tfont-size: 16px;\n\t\tfont-weight: 400;\n\t\tmargin: 0 0 5px;\n\t\ta{\n\t\t\tcolor: var(--wpcf-primary-color)\n\t\t}\n\t}\n}\n\n.wpcf-campaign-infos{\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-left: -20px;\n\tflex-wrap: wrap;\n\t.wpcf-campaign-info > h5{\n\t\tfont-weight: 400;\n\t\tmargin: 0;\n\t\tfont-size: 14px;\n\t\tcolor: var(--wpcf-light-text-color);\n\t\tspan:first-child{\n\t\t\tfont-size: 16px;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: var(--wpcf-success-color);\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 2px;\n\t\t}\n\t}\n\t\n\t.wpcf-campaign-info{\n\t\tmargin-left: 20px;\n\t\tmargin-top: 15px;\n\t}\n\t\n\t.wpcf-campaign-raised{\n\t\tposition: relative;\n\t\t.wpcf-raised-percent{\n\t\t\tposition: absolute;\n\t\t\tleft: 50%;\n\t\t\ttop: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\tfont-size: 14px;\n\t\t\tcolor: var(--wpcf-success-color);\n\t\t}\n\t}\n}\n",".wpcf-report-table{\n\tborder: 1px solid var(--wpcf-border-color);\n\tmargin-bottom: 30px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tborder-spacing: 0;\n\tborder-collapse: separate;\n\ttr{\n\t\tth, td{\n\t\t\tpadding: 15px 20px;\n\t\t\tline-height: 20px;\n\t\t\t&:first-child{\n\t\t\t\tpadding-left: 30px;\n\t\t\t}\n\t\t\t&:last-child{\n\t\t\t\tpadding-right: 30px;\n\t\t\t}\n\t\t}\n\t}\n\tthead{\n\t\ttr{\n\t\t\tth,\n\t\t\ttd{\n\t\t\t\tcolor: var(--wpcf-heading-color);\n\t\t\t\tbackground: #F5F5FA !important;\n\t\t\t\tborder: none !important;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\t\t}\n\t}\n\ttbody{\n\t\ttr{\n\t\t\tth, td{\n\t\t\t\tbackground: #ffffff !important;\n\t\t\t\tborder: none !important;\n\t\t\t}\n\t\t\t&:nth-child(even){\n\t\t\t\tth, td{\n\t\t\t\t\tbackground: #F5F5FA !important;\n\t\t\t\t\tborder: none !important;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gud__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud__WEBPACK_IMPORTED_MODULE_3___default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
=======
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t,n){"use strict";e.exports=n(14)},function(e,t,n){e.exports=n(18)()},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,l){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],s=0;(c=new Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(5),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function c(e){return r.isMemo(e)?i:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var a=d(n);a&&a!==m&&e(t,a,r)}var i=s(n);f&&(i=i.concat(f(n)));for(var l=c(t),h=c(n),y=0;y<i.length;++y){var v=i[y];if(!(o[v]||r&&r[v]||h&&h[v]||l&&l[v])){var b=p(n,v);try{u(t,v,b)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(15)},function(e,t,n){"use strict";e.exports=n(20)},,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e,r){var a,o=n(12);a="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var i=Object(o.a)(a);t.a=i}).call(this,n(7),n(21)(e))},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},function(e,t,n){var r=n(22);e.exports=d,e.exports.parse=o,e.exports.compile=function(e,t){return l(o(e,t))},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=p;var a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function o(e,t){for(var n,r=[],o=0,i=0,l="",s=t&&t.delimiter||"/";null!=(n=a.exec(e));){var f=n[0],p=n[1],d=n.index;if(l+=e.slice(i,d),i=d+f.length,p)l+=p[1];else{var m=e[i],h=n[2],y=n[3],v=n[4],b=n[5],g=n[6],w=n[7];l&&(r.push(l),l="");var E=null!=h&&null!=m&&m!==h,_="+"===g||"*"===g,k="?"===g||"*"===g,C=n[2]||s,x=v||b;r.push({name:y||o++,prefix:h||"",delimiter:C,optional:k,repeat:_,partial:E,asterisk:!!w,pattern:x?u(x):w?".*":"[^"+c(C)+"]+?"})}}return i<e.length&&(l+=e.substr(i)),l&&r.push(l),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function l(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,a){for(var o="",l=n||{},c=(a||{}).pretty?i:encodeURIComponent,u=0;u<e.length;u++){var s=e[u];if("string"!=typeof s){var f,p=l[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=c(p[d]),!t[u].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===d?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?encodeURI(p).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):c(p),!t[u].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var a=(n=n||{}).strict,o=!1!==n.end,i="",l=0;l<e.length;l++){var u=e[l];if("string"==typeof u)i+=c(u);else{var p=c(u.prefix),d="(?:"+u.pattern+")";t.push(u),u.repeat&&(d+="(?:"+p+d+")*"),i+=d=u.optional?u.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var m=c(n.delimiter||"/"),h=i.slice(-m.length)===m;return a||(i=(h?i.slice(0,-m.length):i)+"(?:"+m+"(?=$))?"),i+=o?"$":a&&h?"":"(?="+m+"|$)",s(new RegExp("^"+i,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(d(e[a],t,n).source);return s(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(o(e,n),t,n)}(e,t,n)}},function(e,t,n){"use strict";
>>>>>>> 9a925d5b606efa95a1a6d5a5d6b6888eac999c2a
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var f=0;f<l.length;f++)o.call(n,l[f])&&(c[l[f]]=n[l[f]])}}return c}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(7))},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(11),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.concurrent_mode"):60111,d=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,l],u=0;(e=Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}function _(){}function k(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=E.prototype;var C=k.prototype=new _;C.constructor=k,r(C,E.prototype),C.isPureReactComponent=!0;var x={current:null},O={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:O.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g,D=[];function R(e,t,n,r){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+F(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+F(l=t[u],u);c+=e(l,s,r,a)}else if(s=null===t||"object"!=typeof t?null:"function"==typeof(s=v&&t[v]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+F(l,u++),r,a);else"object"===l&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,function(e){return e}):null!=e&&(j(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(N,"$&/")+"/"),M(e,U,t=R(t,o,r,a)),I(t)}function z(){var e=x.current;return null===e&&b("321"),e}var W={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,A,t=R(null,null,t,n)),I(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return j(e)||b("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,n){return z().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,n){return z().useReducer(e,t,n)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:l,StrictMode:c,Suspense:m,createElement:T,cloneElement:function(e,t,n){null==e&&b("267",e);var a=void 0,i=r({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=O.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)S.call(t,a)&&!P.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:u}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:j,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentOwner:O,assign:r}},V={default:W},q=V&&W||V;e.exports=q.default||q},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),a=n(11),o=n(16);function i(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,l],u=0;(e=Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}r||i("227");var l=!1,c=null,u=!1,s=null,f={onError:function(e){l=!0,c=e}};function p(e,t,n,r,a,o,i,u,s){l=!1,c=null,function(e,t,n,r,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}.apply(f,arguments)}var d=null,m={};function h(){if(d)for(var e in m){var t=m[e],n=d.indexOf(e);if(-1<n||i("96",e),!v[n])for(var r in t.extractEvents||i("97",e),v[n]=t,n=t.eventTypes){var a=void 0,o=n[r],l=t,c=r;b.hasOwnProperty(c)&&i("99",c),b[c]=o;var u=o.phasedRegistrationNames;if(u){for(a in u)u.hasOwnProperty(a)&&y(u[a],l,c);a=!0}else o.registrationName?(y(o.registrationName,l,c),a=!0):a=!1;a||i("98",r,e)}}}function y(e,t,n){g[e]&&i("100",e),g[e]=t,w[e]=t.eventTypes[n].dependencies}var v=[],b={},g={},w={},E=null,_=null,k=null;function C(e,t,n){var r=e.type||"unknown-event";e.currentTarget=k(n),function(e,t,n,r,a,o,f,d,m){if(p.apply(this,arguments),l){if(l){var h=c;l=!1,c=null}else i("198"),h=void 0;u||(u=!0,s=h)}}(r,t,void 0,e),e.currentTarget=null}function x(e,t){return null==t&&i("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function O(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var S=null;function P(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)C(e,t[r],n[r]);else t&&C(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var T={injectEventPluginOrder:function(e){d&&i("101"),d=Array.prototype.slice.call(e),h()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];m.hasOwnProperty(t)&&m[t]===r||(m[t]&&i("102",t),m[t]=r,n=!0)}n&&h()}};function j(e,t){var n=e.stateNode;if(!n)return null;var r=E(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&i("231",t,typeof n),n)}function N(e){if(null!==e&&(S=x(S,e)),e=S,S=null,e&&(O(e,P),S&&i("95"),u))throw e=s,u=!1,s=null,e}var D=Math.random().toString(36).slice(2),R="__reactInternalInstance$"+D,I="__reactEventHandlers$"+D;function M(e){if(e[R])return e[R];for(;!e[R];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[R]).tag||6===e.tag?e:null}function F(e){return!(e=e[R])||5!==e.tag&&6!==e.tag?null:e}function A(e){if(5===e.tag||6===e.tag)return e.stateNode;i("33")}function U(e){return e[I]||null}function L(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function z(e,t,n){(t=j(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=x(n._dispatchListeners,t),n._dispatchInstances=x(n._dispatchInstances,e))}function W(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=L(t);for(t=n.length;0<t--;)z(n[t],"captured",e);for(t=0;t<n.length;t++)z(n[t],"bubbled",e)}}function V(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=j(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=x(n._dispatchListeners,t),n._dispatchInstances=x(n._dispatchInstances,e))}function q(e){e&&e.dispatchConfig.registrationName&&V(e._targetInst,null,e)}function B(e){O(e,W)}var H=!("undefined"==typeof window||!window.document||!window.document.createElement);function $(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Q={animationend:$("Animation","AnimationEnd"),animationiteration:$("Animation","AnimationIteration"),animationstart:$("Animation","AnimationStart"),transitionend:$("Transition","TransitionEnd")},K={},Y={};function G(e){if(K[e])return K[e];if(!Q[e])return e;var t,n=Q[e];for(t in n)if(n.hasOwnProperty(t)&&t in Y)return K[e]=n[t];return e}H&&(Y=document.createElement("div").style,"AnimationEvent"in window||(delete Q.animationend.animation,delete Q.animationiteration.animation,delete Q.animationstart.animation),"TransitionEvent"in window||delete Q.transitionend.transition);var X=G("animationend"),J=G("animationiteration"),Z=G("animationstart"),ee=G("transitionend"),te="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ne=null,re=null,ae=null;function oe(){if(ae)return ae;var e,t,n=re,r=n.length,a="value"in ne?ne.value:ne.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return ae=a.slice(e,1<t?1-t:void 0)}function ie(){return!0}function le(){return!1}function ce(e,t,n,r){for(var a in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(a)&&((t=e[a])?this[a]=t(n):"target"===a?this.target=r:this[a]=n[a]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ie:le,this.isPropagationStopped=le,this}function ue(e,t,n,r){if(this.eventPool.length){var a=this.eventPool.pop();return this.call(a,e,t,n,r),a}return new this(e,t,n,r)}function se(e){e instanceof this||i("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function fe(e){e.eventPool=[],e.getPooled=ue,e.release=se}a(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ie)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ie)},persist:function(){this.isPersistent=ie},isPersistent:le,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=le,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return a(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=a({},r.Interface,e),n.extend=r.extend,fe(n),n},fe(ce);var pe=ce.extend({data:null}),de=ce.extend({data:null}),me=[9,13,27,32],he=H&&"CompositionEvent"in window,ye=null;H&&"documentMode"in document&&(ye=document.documentMode);var ve=H&&"TextEvent"in window&&!ye,be=H&&(!he||ye&&8<ye&&11>=ye),ge=String.fromCharCode(32),we={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Ee=!1;function _e(e,t){switch(e){case"keyup":return-1!==me.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ke(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Ce=!1;var xe={eventTypes:we,extractEvents:function(e,t,n,r){var a=void 0,o=void 0;if(he)e:{switch(e){case"compositionstart":a=we.compositionStart;break e;case"compositionend":a=we.compositionEnd;break e;case"compositionupdate":a=we.compositionUpdate;break e}a=void 0}else Ce?_e(e,n)&&(a=we.compositionEnd):"keydown"===e&&229===n.keyCode&&(a=we.compositionStart);return a?(be&&"ko"!==n.locale&&(Ce||a!==we.compositionStart?a===we.compositionEnd&&Ce&&(o=oe()):(re="value"in(ne=r)?ne.value:ne.textContent,Ce=!0)),a=pe.getPooled(a,t,n,r),o?a.data=o:null!==(o=ke(n))&&(a.data=o),B(a),o=a):o=null,(e=ve?function(e,t){switch(e){case"compositionend":return ke(t);case"keypress":return 32!==t.which?null:(Ee=!0,ge);case"textInput":return(e=t.data)===ge&&Ee?null:e;default:return null}}(e,n):function(e,t){if(Ce)return"compositionend"===e||!he&&_e(e,t)?(e=oe(),ae=re=ne=null,Ce=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return be&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=de.getPooled(we.beforeInput,t,n,r)).data=e,B(t)):t=null,null===o?t:null===t?o:[o,t]}},Oe=null,Se=null,Pe=null;function Te(e){if(e=_(e)){"function"!=typeof Oe&&i("280");var t=E(e.stateNode);Oe(e.stateNode,e.type,t)}}function je(e){Se?Pe?Pe.push(e):Pe=[e]:Se=e}function Ne(){if(Se){var e=Se,t=Pe;if(Pe=Se=null,Te(e),t)for(e=0;e<t.length;e++)Te(t[e])}}function De(e,t){return e(t)}function Re(e,t,n){return e(t,n)}function Ie(){}var Me=!1;function Fe(e,t){if(Me)return e(t);Me=!0;try{return De(e,t)}finally{Me=!1,(null!==Se||null!==Pe)&&(Ie(),Ne())}}var Ae={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ae[e.type]:"textarea"===t}function Le(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ze(e){if(!H)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function We(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ve(e){e._valueTracker||(e._valueTracker=function(e){var t=We(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function qe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=We(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Be=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null});var He=/^(.*)[\\\/]/,$e="function"==typeof Symbol&&Symbol.for,Qe=$e?Symbol.for("react.element"):60103,Ke=$e?Symbol.for("react.portal"):60106,Ye=$e?Symbol.for("react.fragment"):60107,Ge=$e?Symbol.for("react.strict_mode"):60108,Xe=$e?Symbol.for("react.profiler"):60114,Je=$e?Symbol.for("react.provider"):60109,Ze=$e?Symbol.for("react.context"):60110,et=$e?Symbol.for("react.concurrent_mode"):60111,tt=$e?Symbol.for("react.forward_ref"):60112,nt=$e?Symbol.for("react.suspense"):60113,rt=$e?Symbol.for("react.memo"):60115,at=$e?Symbol.for("react.lazy"):60116,ot="function"==typeof Symbol&&Symbol.iterator;function it(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=ot&&e[ot]||e["@@iterator"])?e:null}function lt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case et:return"ConcurrentMode";case Ye:return"Fragment";case Ke:return"Portal";case Xe:return"Profiler";case Ge:return"StrictMode";case nt:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case Ze:return"Context.Consumer";case Je:return"Context.Provider";case tt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case rt:return lt(e.type);case at:if(e=1===e._status?e._result:null)return lt(e)}return null}function ct(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,a=e._debugSource,o=lt(e.type);n=null,r&&(n=lt(r.type)),r=o,o="",a?o=" (at "+a.fileName.replace(He,"")+":"+a.lineNumber+")":n&&(o=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}var ut=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,st=Object.prototype.hasOwnProperty,ft={},pt={};function dt(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){mt[e]=new dt(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];mt[t]=new dt(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){mt[e]=new dt(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){mt[e]=new dt(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){mt[e]=new dt(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){mt[e]=new dt(e,3,!0,e,null)}),["capture","download"].forEach(function(e){mt[e]=new dt(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){mt[e]=new dt(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){mt[e]=new dt(e,5,!1,e.toLowerCase(),null)});var ht=/[\-:]([a-z])/g;function yt(e){return e[1].toUpperCase()}function vt(e,t,n,r){var a=mt.hasOwnProperty(t)?mt[t]:null;(null!==a?0===a.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!st.call(pt,e)||!st.call(ft,e)&&(ut.test(e)?pt[e]=!0:(ft[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function bt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function gt(e,t){var n=t.checked;return a({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function wt(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=bt(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Et(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function _t(e,t){Et(e,t);var n=bt(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ct(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ct(e,t.type,bt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function kt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ct(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ht,yt);mt[t]=new dt(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ht,yt);mt[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ht,yt);mt[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){mt[e]=new dt(e,1,!1,e.toLowerCase(),null)});var xt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ot(e,t,n){return(e=ce.getPooled(xt.change,e,t,n)).type="change",je(n),B(e),e}var St=null,Pt=null;function Tt(e){N(e)}function jt(e){if(qe(A(e)))return e}function Nt(e,t){if("change"===e)return t}var Dt=!1;function Rt(){St&&(St.detachEvent("onpropertychange",It),Pt=St=null)}function It(e){"value"===e.propertyName&&jt(Pt)&&Fe(Tt,e=Ot(Pt,e,Le(e)))}function Mt(e,t,n){"focus"===e?(Rt(),Pt=n,(St=t).attachEvent("onpropertychange",It)):"blur"===e&&Rt()}function Ft(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return jt(Pt)}function At(e,t){if("click"===e)return jt(t)}function Ut(e,t){if("input"===e||"change"===e)return jt(t)}H&&(Dt=ze("input")&&(!document.documentMode||9<document.documentMode));var Lt={eventTypes:xt,_isInputEventSupported:Dt,extractEvents:function(e,t,n,r){var a=t?A(t):window,o=void 0,i=void 0,l=a.nodeName&&a.nodeName.toLowerCase();if("select"===l||"input"===l&&"file"===a.type?o=Nt:Ue(a)?Dt?o=Ut:(o=Ft,i=Mt):(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(o=At),o&&(o=o(e,t)))return Ot(o,n,r);i&&i(e,a,t),"blur"===e&&(e=a._wrapperState)&&e.controlled&&"number"===a.type&&Ct(a,"number",a.value)}},zt=ce.extend({view:null,detail:null}),Wt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Wt[e])&&!!t[e]}function qt(){return Vt}var Bt=0,Ht=0,$t=!1,Qt=!1,Kt=zt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:qt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Bt;return Bt=e.screenX,$t?"mousemove"===e.type?e.screenX-t:0:($t=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Ht;return Ht=e.screenY,Qt?"mousemove"===e.type?e.screenY-t:0:(Qt=!0,0)}}),Yt=Kt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Gt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Xt={eventTypes:Gt,extractEvents:function(e,t,n,r){var a="mouseover"===e||"pointerover"===e,o="mouseout"===e||"pointerout"===e;if(a&&(n.relatedTarget||n.fromElement)||!o&&!a)return null;if(a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window,o?(o=t,t=(t=n.relatedTarget||n.toElement)?M(t):null):o=null,o===t)return null;var i=void 0,l=void 0,c=void 0,u=void 0;"mouseout"===e||"mouseover"===e?(i=Kt,l=Gt.mouseLeave,c=Gt.mouseEnter,u="mouse"):"pointerout"!==e&&"pointerover"!==e||(i=Yt,l=Gt.pointerLeave,c=Gt.pointerEnter,u="pointer");var s=null==o?a:A(o);if(a=null==t?a:A(t),(e=i.getPooled(l,o,n,r)).type=u+"leave",e.target=s,e.relatedTarget=a,(n=i.getPooled(c,t,n,r)).type=u+"enter",n.target=a,n.relatedTarget=s,r=t,o&&r)e:{for(a=r,u=0,i=t=o;i;i=L(i))u++;for(i=0,c=a;c;c=L(c))i++;for(;0<u-i;)t=L(t),u--;for(;0<i-u;)a=L(a),i--;for(;u--;){if(t===a||t===a.alternate)break e;t=L(t),a=L(a)}t=null}else t=null;for(a=t,t=[];o&&o!==a&&(null===(u=o.alternate)||u!==a);)t.push(o),o=L(o);for(o=[];r&&r!==a&&(null===(u=r.alternate)||u!==a);)o.push(r),r=L(r);for(r=0;r<t.length;r++)V(t[r],"bubbled",e);for(r=o.length;0<r--;)V(o[r],"captured",n);return[e,n]}};function Jt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var Zt=Object.prototype.hasOwnProperty;function en(e,t){if(Jt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Zt.call(t,n[r])||!Jt(e[n[r]],t[n[r]]))return!1;return!0}function tn(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function nn(e){2!==tn(e)&&i("188")}function rn(e){if(!(e=function(e){var t=e.alternate;if(!t)return 3===(t=tn(e))&&i("188"),1===t?null:e;for(var n=e,r=t;;){var a=n.return,o=a?a.alternate:null;if(!a||!o)break;if(a.child===o.child){for(var l=a.child;l;){if(l===n)return nn(a),e;if(l===r)return nn(a),t;l=l.sibling}i("188")}if(n.return!==r.return)n=a,r=o;else{l=!1;for(var c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}l||i("189")}}n.alternate!==r&&i("190")}return 3!==n.tag&&i("188"),n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var an=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),on=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ln=zt.extend({relatedTarget:null});function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn=zt.extend({key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?sn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:qt,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),pn=Kt.extend({dataTransfer:null}),dn=zt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:qt}),mn=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),hn=Kt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),yn=[["abort","abort"],[X,"animationEnd"],[J,"animationIteration"],[Z,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ee,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vn={},bn={};function gn(e,t){var n=e[0],r="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:t},vn[e]=t,bn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){gn(e,!0)}),yn.forEach(function(e){gn(e,!1)});var wn={eventTypes:vn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=bn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var a=bn[e];if(!a)return null;switch(e){case"keypress":if(0===cn(n))return null;case"keydown":case"keyup":e=fn;break;case"blur":case"focus":e=ln;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=pn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=dn;break;case X:case J:case Z:e=an;break;case ee:e=mn;break;case"scroll":e=zt;break;case"wheel":e=hn;break;case"copy":case"cut":case"paste":e=on;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Yt;break;default:e=ce}return B(t=e.getPooled(a,t,n,r)),t}},En=wn.isInteractiveTopLevelEventType,_n=[];function kn(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r;for(r=n;r.return;)r=r.return;if(!(r=3!==r.tag?null:r.stateNode.containerInfo))break;e.ancestors.push(n),n=M(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var a=Le(e.nativeEvent);r=e.topLevelType;for(var o=e.nativeEvent,i=null,l=0;l<v.length;l++){var c=v[l];c&&(c=c.extractEvents(r,t,o,a))&&(i=x(i,c))}N(i)}}var Cn=!0;function xn(e,t){if(!t)return null;var n=(En(e)?Sn:Pn).bind(null,e);t.addEventListener(e,n,!1)}function On(e,t){if(!t)return null;var n=(En(e)?Sn:Pn).bind(null,e);t.addEventListener(e,n,!0)}function Sn(e,t){Re(Pn,e,t)}function Pn(e,t){if(Cn){var n=Le(t);if(null===(n=M(n))||"number"!=typeof n.tag||2===tn(n)||(n=null),_n.length){var r=_n.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Fe(kn,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>_n.length&&_n.push(e)}}}var Tn={},jn=0,Nn="_reactListenersID"+(""+Math.random()).slice(2);function Dn(e){return Object.prototype.hasOwnProperty.call(e,Nn)||(e[Nn]=jn++,Tn[e[Nn]]={}),Tn[e[Nn]]}function Rn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function In(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mn(e,t){var n,r=In(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=In(r)}}function Fn(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=Rn((e=t.contentWindow).document)}return t}function An(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Un(e){var t=Fn(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&An(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Mn(n,o);var i=Mn(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ln=H&&"documentMode"in document&&11>=document.documentMode,zn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wn=null,Vn=null,qn=null,Bn=!1;function Hn(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Bn||null==Wn||Wn!==Rn(n)?null:("selectionStart"in(n=Wn)&&An(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},qn&&en(qn,n)?null:(qn=n,(e=ce.getPooled(zn.select,Vn,e,t)).type="select",e.target=Wn,B(e),e))}var $n={eventTypes:zn,extractEvents:function(e,t,n,r){var a,o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(a=!o)){e:{o=Dn(o),a=w.onSelect;for(var i=0;i<a.length;i++){var l=a[i];if(!o.hasOwnProperty(l)||!o[l]){o=!1;break e}}o=!0}a=!o}if(a)return null;switch(o=t?A(t):window,e){case"focus":(Ue(o)||"true"===o.contentEditable)&&(Wn=o,Vn=t,qn=null);break;case"blur":qn=Vn=Wn=null;break;case"mousedown":Bn=!0;break;case"contextmenu":case"mouseup":case"dragend":return Bn=!1,Hn(n,r);case"selectionchange":if(Ln)break;case"keydown":case"keyup":return Hn(n,r)}return null}};function Qn(e,t){return e=a({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(t.children))&&(e.children=t),e}function Kn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function Yn(e,t){return null!=t.dangerouslySetInnerHTML&&i("91"),a({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gn(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&i("92"),Array.isArray(t)&&(1>=t.length||i("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:bt(n)}}function Xn(e,t){var n=bt(t.value),r=bt(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Jn(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}T.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),E=U,_=F,k=A,T.injectEventPluginsByName({SimpleEventPlugin:wn,EnterLeaveEventPlugin:Xt,ChangeEventPlugin:Lt,SelectEventPlugin:$n,BeforeInputEventPlugin:xe});var Zn={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function er(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tr(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?er(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var nr=void 0,rr=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if(e.namespaceURI!==Zn.svg||"innerHTML"in e)e.innerHTML=t;else{for((nr=nr||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var or={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ir=["Webkit","ms","Moz","O"];function lr(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||or.hasOwnProperty(e)&&or[e]?(""+t).trim():t+"px"}function cr(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=lr(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(or).forEach(function(e){ir.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),or[t]=or[e]})});var ur=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sr(e,t){t&&(ur[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&i("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&i("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||i("61")),null!=t.style&&"object"!=typeof t.style&&i("62",""))}function fr(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function pr(e,t){var n=Dn(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=w[t];for(var r=0;r<t.length;r++){var a=t[r];if(!n.hasOwnProperty(a)||!n[a]){switch(a){case"scroll":On("scroll",e);break;case"focus":case"blur":On("focus",e),On("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":ze(a)&&On(a,e);break;case"invalid":case"submit":case"reset":break;default:-1===te.indexOf(a)&&xn(a,e)}n[a]=!0}}}function dr(){}var mr=null,hr=null;function yr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function vr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var br="function"==typeof setTimeout?setTimeout:void 0,gr="function"==typeof clearTimeout?clearTimeout:void 0,wr=o.unstable_scheduleCallback,Er=o.unstable_cancelCallback;function _r(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function kr(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var Cr=[],xr=-1;function Or(e){0>xr||(e.current=Cr[xr],Cr[xr]=null,xr--)}function Sr(e,t){Cr[++xr]=e.current,e.current=t}var Pr={},Tr={current:Pr},jr={current:!1},Nr=Pr;function Dr(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Rr(e){return null!=(e=e.childContextTypes)}function Ir(e){Or(jr),Or(Tr)}function Mr(e){Or(jr),Or(Tr)}function Fr(e,t,n){Tr.current!==Pr&&i("168"),Sr(Tr,t),Sr(jr,n)}function Ar(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())o in e||i("108",lt(t)||"Unknown",o);return a({},n,r)}function Ur(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Pr,Nr=Tr.current,Sr(Tr,t),Sr(jr,jr.current),!0}function Lr(e,t,n){var r=e.stateNode;r||i("169"),n?(t=Ar(e,t,Nr),r.__reactInternalMemoizedMergedChildContext=t,Or(jr),Or(Tr),Sr(Tr,t)):Or(jr),Sr(jr,n)}var zr=null,Wr=null;function Vr(e){return function(t){try{return e(t)}catch(e){}}}function qr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Br(e,t,n,r){return new qr(e,t,n,r)}function Hr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $r(e,t){var n=e.alternate;return null===n?((n=Br(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.contextDependencies=e.contextDependencies,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,a,o){var l=2;if(r=e,"function"==typeof e)Hr(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case Ye:return Kr(n.children,a,o,t);case et:return Yr(n,3|a,o,t);case Ge:return Yr(n,2|a,o,t);case Xe:return(e=Br(12,n,t,4|a)).elementType=Xe,e.type=Xe,e.expirationTime=o,e;case nt:return(e=Br(13,n,t,a)).elementType=nt,e.type=nt,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Je:l=10;break e;case Ze:l=9;break e;case tt:l=11;break e;case rt:l=14;break e;case at:l=16,r=null;break e}i("130",null==e?e:typeof e,"")}return(t=Br(l,n,t,a)).elementType=e,t.type=r,t.expirationTime=o,t}function Kr(e,t,n,r){return(e=Br(7,e,r,t)).expirationTime=n,e}function Yr(e,t,n,r){return e=Br(8,e,r,t),t=0==(1&t)?Ge:et,e.elementType=t,e.type=t,e.expirationTime=n,e}function Gr(e,t,n){return(e=Br(6,e,null,t)).expirationTime=n,e}function Xr(e,t,n){return(t=Br(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jr(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),ta(t,e)}function Zr(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var n=e.earliestPendingTime,r=e.latestPendingTime;n===t?e.earliestPendingTime=r===t?e.latestPendingTime=0:r:r===t&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,r=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:r>t&&(e.latestSuspendedTime=t),ta(t,e)}function ea(e,t){var n=e.earliestPendingTime;return n>t&&(t=n),(e=e.earliestSuspendedTime)>t&&(t=e),t}function ta(e,t){var n=t.earliestSuspendedTime,r=t.latestSuspendedTime,a=t.earliestPendingTime,o=t.latestPingedTime;0===(a=0!==a?a:o)&&(0===e||r<e)&&(a=r),0!==(e=a)&&n>e&&(e=n),t.nextExpirationTimeToWorkOn=a,t.expirationTime=e}function na(e,t){if(e&&e.defaultProps)for(var n in t=a({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var ra=(new r.Component).refs;function aa(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:a({},t,n),e.memoizedState=n,null!==(r=e.updateQueue)&&0===e.expirationTime&&(r.baseState=n)}var oa={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===tn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=El(),a=Yo(r=Ki(r,e));a.payload=t,null!=n&&(a.callback=n),Vi(),Xo(e,a),Xi(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=El(),a=Yo(r=Ki(r,e));a.tag=qo,a.payload=t,null!=n&&(a.callback=n),Vi(),Xo(e,a),Xi(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=El(),r=Yo(n=Ki(n,e));r.tag=Bo,null!=t&&(r.callback=t),Vi(),Xo(e,r),Xi(e,n)}};function ia(e,t,n,r,a,o,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!en(n,r)||!en(a,o))}function la(e,t,n){var r=!1,a=Pr,o=t.contextType;return"object"==typeof o&&null!==o?o=Wo(o):(a=Rr(t)?Nr:Tr.current,o=(r=null!=(r=t.contextTypes))?Dr(e,a):Pr),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ca(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=ra;var o=t.contextType;"object"==typeof o&&null!==o?a.context=Wo(o):(o=Rr(t)?Nr:Tr.current,a.context=Dr(e,o)),null!==(o=e.updateQueue)&&(ti(e,o,n,a,r),a.state=e.memoizedState),"function"==typeof(o=t.getDerivedStateFromProps)&&(aa(e,t,o,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&oa.enqueueReplaceState(a,a.state,null),null!==(o=e.updateQueue)&&(ti(e,o,n,a,r),a.state=e.memoizedState)),"function"==typeof a.componentDidMount&&(e.effectTag|=4)}var sa=Array.isArray;function fa(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){n=n._owner;var r=void 0;n&&(1!==n.tag&&i("309"),r=n.stateNode),r||i("147",e);var a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=r.refs;t===ra&&(t=r.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}"string"!=typeof e&&i("284"),n._owner||i("290",e)}return e}function pa(e,t){"textarea"!==e.type&&i("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function da(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t,n){return(e=$r(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function l(t){return e&&null===t.alternate&&(t.effectTag=2),t}function c(e,t,n,r){return null===t||6!==t.tag?((t=Gr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=a(t,n.props)).ref=fa(e,t,n),r.return=e,r):((r=Qr(n.type,n.key,n.props,null,e.mode,r)).ref=fa(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Kr(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Gr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case Qe:return(n=Qr(t.type,t.key,t.props,null,e.mode,n)).ref=fa(e,null,t),n.return=e,n;case Ke:return(t=Xr(t,e.mode,n)).return=e,t}if(sa(t)||it(t))return(t=Kr(t,e.mode,n,null)).return=e,t;pa(e,t)}return null}function d(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==a?null:c(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Qe:return n.key===a?n.type===Ye?f(e,t,n.props.children,r,a):u(e,t,n,r):null;case Ke:return n.key===a?s(e,t,n,r):null}if(sa(n)||it(n))return null!==a?null:f(e,t,n,r,null);pa(e,n)}return null}function m(e,t,n,r,a){if("string"==typeof r||"number"==typeof r)return c(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case Qe:return e=e.get(null===r.key?n:r.key)||null,r.type===Ye?f(t,e,r.props.children,a,r.key):u(t,e,r,a);case Ke:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a)}if(sa(r)||it(r))return f(t,e=e.get(n)||null,r,a,null);pa(t,r)}return null}function h(a,i,l,c){for(var u=null,s=null,f=i,h=i=0,y=null;null!==f&&h<l.length;h++){f.index>h?(y=f,f=null):y=f.sibling;var v=d(a,f,l[h],c);if(null===v){null===f&&(f=y);break}e&&f&&null===v.alternate&&t(a,f),i=o(v,i,h),null===s?u=v:s.sibling=v,s=v,f=y}if(h===l.length)return n(a,f),u;if(null===f){for(;h<l.length;h++)(f=p(a,l[h],c))&&(i=o(f,i,h),null===s?u=f:s.sibling=f,s=f);return u}for(f=r(a,f);h<l.length;h++)(y=m(f,a,h,l[h],c))&&(e&&null!==y.alternate&&f.delete(null===y.key?h:y.key),i=o(y,i,h),null===s?u=y:s.sibling=y,s=y);return e&&f.forEach(function(e){return t(a,e)}),u}function y(a,l,c,u){var s=it(c);"function"!=typeof s&&i("150"),null==(c=s.call(c))&&i("151");for(var f=s=null,h=l,y=l=0,v=null,b=c.next();null!==h&&!b.done;y++,b=c.next()){h.index>y?(v=h,h=null):v=h.sibling;var g=d(a,h,b.value,u);if(null===g){h||(h=v);break}e&&h&&null===g.alternate&&t(a,h),l=o(g,l,y),null===f?s=g:f.sibling=g,f=g,h=v}if(b.done)return n(a,h),s;if(null===h){for(;!b.done;y++,b=c.next())null!==(b=p(a,b.value,u))&&(l=o(b,l,y),null===f?s=b:f.sibling=b,f=b);return s}for(h=r(a,h);!b.done;y++,b=c.next())null!==(b=m(h,a,y,b.value,u))&&(e&&null!==b.alternate&&h.delete(null===b.key?y:b.key),l=o(b,l,y),null===f?s=b:f.sibling=b,f=b);return e&&h.forEach(function(e){return t(a,e)}),s}return function(e,r,o,c){var u="object"==typeof o&&null!==o&&o.type===Ye&&null===o.key;u&&(o=o.props.children);var s="object"==typeof o&&null!==o;if(s)switch(o.$$typeof){case Qe:e:{for(s=o.key,u=r;null!==u;){if(u.key===s){if(7===u.tag?o.type===Ye:u.elementType===o.type){n(e,u.sibling),(r=a(u,o.type===Ye?o.props.children:o.props)).ref=fa(e,u,o),r.return=e,e=r;break e}n(e,u);break}t(e,u),u=u.sibling}o.type===Ye?((r=Kr(o.props.children,e.mode,c,o.key)).return=e,e=r):((c=Qr(o.type,o.key,o.props,null,e.mode,c)).ref=fa(e,r,o),c.return=e,e=c)}return l(e);case Ke:e:{for(u=o.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=a(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Xr(o,e.mode,c)).return=e,e=r}return l(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=a(r,o)).return=e,e=r):(n(e,r),(r=Gr(o,e.mode,c)).return=e,e=r),l(e);if(sa(o))return h(e,r,o,c);if(it(o))return y(e,r,o,c);if(s&&pa(e,o),void 0===o&&!u)switch(e.tag){case 1:case 0:i("152",(c=e.type).displayName||c.name||"Component")}return n(e,r)}}var ma=da(!0),ha=da(!1),ya={},va={current:ya},ba={current:ya},ga={current:ya};function wa(e){return e===ya&&i("174"),e}function Ea(e,t){Sr(ga,t),Sr(ba,e),Sr(va,ya);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tr(null,"");break;default:t=tr(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}Or(va),Sr(va,t)}function _a(e){Or(va),Or(ba),Or(ga)}function ka(e){wa(ga.current);var t=wa(va.current),n=tr(t,e.type);t!==n&&(Sr(ba,e),Sr(va,n))}function Ca(e){ba.current===e&&(Or(va),Or(ba))}var xa=0,Oa=2,Sa=4,Pa=8,Ta=16,ja=32,Na=64,Da=128,Ra=Be.ReactCurrentDispatcher,Ia=0,Ma=null,Fa=null,Aa=null,Ua=null,La=null,za=null,Wa=0,Va=null,qa=0,Ba=!1,Ha=null,$a=0;function Qa(){i("321")}function Ka(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Ya(e,t,n,r,a,o){if(Ia=o,Ma=t,Aa=null!==e?e.memoizedState:null,Ra.current=null===Aa?co:uo,t=n(r,a),Ba){do{Ba=!1,$a+=1,Aa=null!==e?e.memoizedState:null,za=Ua,Va=La=Fa=null,Ra.current=uo,t=n(r,a)}while(Ba);Ha=null,$a=0}return Ra.current=lo,(e=Ma).memoizedState=Ua,e.expirationTime=Wa,e.updateQueue=Va,e.effectTag|=qa,e=null!==Fa&&null!==Fa.next,Ia=0,za=La=Ua=Aa=Fa=Ma=null,Wa=0,Va=null,qa=0,e&&i("300"),t}function Ga(){Ra.current=lo,Ia=0,za=La=Ua=Aa=Fa=Ma=null,Wa=0,Va=null,qa=0,Ba=!1,Ha=null,$a=0}function Xa(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===La?Ua=La=e:La=La.next=e,La}function Ja(){if(null!==za)za=(La=za).next,Aa=null!==(Fa=Aa)?Fa.next:null;else{null===Aa&&i("310");var e={memoizedState:(Fa=Aa).memoizedState,baseState:Fa.baseState,queue:Fa.queue,baseUpdate:Fa.baseUpdate,next:null};La=null===La?Ua=e:La.next=e,Aa=Fa.next}return La}function Za(e,t){return"function"==typeof t?t(e):t}function eo(e){var t=Ja(),n=t.queue;if(null===n&&i("311"),n.lastRenderedReducer=e,0<$a){var r=n.dispatch;if(null!==Ha){var a=Ha.get(n);if(void 0!==a){Ha.delete(n);var o=t.memoizedState;do{o=e(o,a.action),a=a.next}while(null!==a);return Jt(o,t.memoizedState)||(Eo=!0),t.memoizedState=o,t.baseUpdate===n.last&&(t.baseState=o),n.lastRenderedState=o,[o,r]}}return[t.memoizedState,r]}r=n.last;var l=t.baseUpdate;if(o=t.baseState,null!==l?(null!==r&&(r.next=null),r=l.next):r=null!==r?r.next:null,null!==r){var c=a=null,u=r,s=!1;do{var f=u.expirationTime;f<Ia?(s||(s=!0,c=l,a=o),f>Wa&&(Wa=f)):o=u.eagerReducer===e?u.eagerState:e(o,u.action),l=u,u=u.next}while(null!==u&&u!==r);s||(c=l,a=o),Jt(o,t.memoizedState)||(Eo=!0),t.memoizedState=o,t.baseUpdate=c,t.baseState=a,n.lastRenderedState=o}return[t.memoizedState,n.dispatch]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===Va?(Va={lastEffect:null}).lastEffect=e.next=e:null===(t=Va.lastEffect)?Va.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,Va.lastEffect=e),e}function no(e,t,n,r){var a=Xa();qa|=e,a.memoizedState=to(t,n,void 0,void 0===r?null:r)}function ro(e,t,n,r){var a=Ja();r=void 0===r?null:r;var o=void 0;if(null!==Fa){var i=Fa.memoizedState;if(o=i.destroy,null!==r&&Ka(r,i.deps))return void to(xa,n,o,r)}qa|=e,a.memoizedState=to(t,n,o,r)}function ao(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function oo(){}function io(e,t,n){25>$a||i("301");var r=e.alternate;if(e===Ma||null!==r&&r===Ma)if(Ba=!0,e={expirationTime:Ia,action:n,eagerReducer:null,eagerState:null,next:null},null===Ha&&(Ha=new Map),void 0===(n=Ha.get(t)))Ha.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{Vi();var a=El(),o={expirationTime:a=Ki(a,e),action:n,eagerReducer:null,eagerState:null,next:null},l=t.last;if(null===l)o.next=o;else{var c=l.next;null!==c&&(o.next=c),l.next=o}if(t.last=o,0===e.expirationTime&&(null===r||0===r.expirationTime)&&null!==(r=t.lastRenderedReducer))try{var u=t.lastRenderedState,s=r(u,n);if(o.eagerReducer=r,o.eagerState=s,Jt(s,u))return}catch(e){}Xi(e,a)}}var lo={readContext:Wo,useCallback:Qa,useContext:Qa,useEffect:Qa,useImperativeHandle:Qa,useLayoutEffect:Qa,useMemo:Qa,useReducer:Qa,useRef:Qa,useState:Qa,useDebugValue:Qa},co={readContext:Wo,useCallback:function(e,t){return Xa().memoizedState=[e,void 0===t?null:t],e},useContext:Wo,useEffect:function(e,t){return no(516,Da|Na,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,no(4,Sa|ja,ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4,Sa|ja,e,t)},useMemo:function(e,t){var n=Xa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=io.bind(null,Ma,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Xa().memoizedState=e},useState:function(e){var t=Xa();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e}).dispatch=io.bind(null,Ma,e),[t.memoizedState,e]},useDebugValue:oo},uo={readContext:Wo,useCallback:function(e,t){var n=Ja();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)},useContext:Wo,useEffect:function(e,t){return ro(516,Da|Na,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ro(4,Sa|ja,ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4,Sa|ja,e,t)},useMemo:function(e,t){var n=Ja();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:eo,useRef:function(){return Ja().memoizedState},useState:function(e){return eo(Za)},useDebugValue:oo},so=null,fo=null,po=!1;function mo(e,t){var n=Br(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ho(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function yo(e){if(po){var t=fo;if(t){var n=t;if(!ho(e,t)){if(!(t=_r(n))||!ho(e,t))return e.effectTag|=2,po=!1,void(so=e);mo(so,n)}so=e,fo=kr(t)}else e.effectTag|=2,po=!1,so=e}}function vo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;so=e}function bo(e){if(e!==so)return!1;if(!po)return vo(e),po=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!vr(t,e.memoizedProps))for(t=fo;t;)mo(e,t),t=_r(t);return vo(e),fo=so?_r(e.stateNode):null,!0}function go(){fo=so=null,po=!1}var wo=Be.ReactCurrentOwner,Eo=!1;function _o(e,t,n,r){t.child=null===e?ha(t,null,n,r):ma(t,e.child,n,r)}function ko(e,t,n,r,a){n=n.render;var o=t.ref;return zo(t,a),r=Ya(e,t,n,r,o,a),null===e||Eo?(t.effectTag|=1,_o(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=a&&(e.expirationTime=0),Do(e,t,a))}function Co(e,t,n,r,a,o){if(null===e){var i=n.type;return"function"!=typeof i||Hr(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Qr(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,xo(e,t,i,r,a,o))}return i=e.child,a<o&&(a=i.memoizedProps,(n=null!==(n=n.compare)?n:en)(a,r)&&e.ref===t.ref)?Do(e,t,o):(t.effectTag|=1,(e=$r(i,r)).ref=t.ref,e.return=t,t.child=e)}function xo(e,t,n,r,a,o){return null!==e&&en(e.memoizedProps,r)&&e.ref===t.ref&&(Eo=!1,a<o)?Do(e,t,o):So(e,t,n,r,o)}function Oo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function So(e,t,n,r,a){var o=Rr(n)?Nr:Tr.current;return o=Dr(t,o),zo(t,a),n=Ya(e,t,n,r,o,a),null===e||Eo?(t.effectTag|=1,_o(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=a&&(e.expirationTime=0),Do(e,t,a))}function Po(e,t,n,r,a){if(Rr(n)){var o=!0;Ur(t)}else o=!1;if(zo(t,a),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),la(t,n,r),ua(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=n.contextType;"object"==typeof u&&null!==u?u=Wo(u):u=Dr(t,u=Rr(n)?Nr:Tr.current);var s=n.getDerivedStateFromProps,f="function"==typeof s||"function"==typeof i.getSnapshotBeforeUpdate;f||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||c!==u)&&ca(t,i,r,u),$o=!1;var p=t.memoizedState;c=i.state=p;var d=t.updateQueue;null!==d&&(ti(t,d,r,i,a),c=t.memoizedState),l!==r||p!==c||jr.current||$o?("function"==typeof s&&(aa(t,n,s,r),c=t.memoizedState),(l=$o||ia(t,n,l,r,p,c,u))?(f||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.effectTag|=4)):("function"==typeof i.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=l):("function"==typeof i.componentDidMount&&(t.effectTag|=4),r=!1)}else i=t.stateNode,l=t.memoizedProps,i.props=t.type===t.elementType?l:na(t.type,l),c=i.context,"object"==typeof(u=n.contextType)&&null!==u?u=Wo(u):u=Dr(t,u=Rr(n)?Nr:Tr.current),(f="function"==typeof(s=n.getDerivedStateFromProps)||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||c!==u)&&ca(t,i,r,u),$o=!1,c=t.memoizedState,p=i.state=c,null!==(d=t.updateQueue)&&(ti(t,d,r,i,a),p=t.memoizedState),l!==r||c!==p||jr.current||$o?("function"==typeof s&&(aa(t,n,s,r),p=t.memoizedState),(s=$o||ia(t,n,l,r,c,p,u))?(f||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,u),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof i.componentDidUpdate&&(t.effectTag|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=u,r=s):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),r=!1);return To(e,t,n,r,o,a)}function To(e,t,n,r,a,o){Oo(e,t);var i=0!=(64&t.effectTag);if(!r&&!i)return a&&Lr(t,n,!1),Do(e,t,o);r=t.stateNode,wo.current=t;var l=i&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&i?(t.child=ma(t,e.child,null,o),t.child=ma(t,null,l,o)):_o(e,t,l,o),t.memoizedState=r.state,a&&Lr(t,n,!0),t.child}function jo(e){var t=e.stateNode;t.pendingContext?Fr(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fr(0,t.context,!1),Ea(e,t.containerInfo)}function No(e,t,n){var r=t.mode,a=t.pendingProps,o=t.memoizedState;if(0==(64&t.effectTag)){o=null;var i=!1}else o={timedOutAt:null!==o?o.timedOutAt:0},i=!0,t.effectTag&=-65;if(null===e)if(i){var l=a.fallback;e=Kr(null,r,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),r=Kr(l,r,n,null),e.sibling=r,(n=e).return=r.return=t}else n=r=ha(t,null,a.children,n);else null!==e.memoizedState?(l=(r=e.child).sibling,i?(n=a.fallback,a=$r(r,r.pendingProps),0==(1&t.mode)&&((i=null!==t.memoizedState?t.child.child:t.child)!==r.child&&(a.child=i)),r=a.sibling=$r(l,n,l.expirationTime),n=a,a.childExpirationTime=0,n.return=r.return=t):n=r=ma(t,r.child,a.children,n)):(l=e.child,i?(i=a.fallback,(a=Kr(null,r,0,null)).child=l,0==(1&t.mode)&&(a.child=null!==t.memoizedState?t.child.child:t.child),(r=a.sibling=Kr(i,r,n,null)).effectTag|=2,n=a,a.childExpirationTime=0,n.return=r.return=t):r=n=ma(t,l,a.children,n)),t.stateNode=e.stateNode;return t.memoizedState=o,t.child=n,r}function Do(e,t,n){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child&&i("153"),null!==t.child){for(n=$r(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$r(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Ro(e,t,n){var r=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||jr.current)Eo=!0;else if(r<n){switch(Eo=!1,t.tag){case 3:jo(t),go();break;case 5:ka(t);break;case 1:Rr(t.type)&&Ur(t);break;case 4:Ea(t,t.stateNode.containerInfo);break;case 10:Uo(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?No(e,t,n):null!==(t=Do(e,t,n))?t.sibling:null}return Do(e,t,n)}}else Eo=!1;switch(t.expirationTime=0,t.tag){case 2:r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var a=Dr(t,Tr.current);if(zo(t,n),a=Ya(null,t,r,e,a,n),t.effectTag|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof){if(t.tag=1,Ga(),Rr(r)){var o=!0;Ur(t)}else o=!1;t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null;var l=r.getDerivedStateFromProps;"function"==typeof l&&aa(t,r,l,e),a.updater=oa,t.stateNode=a,a._reactInternalFiber=t,ua(t,r,e,n),t=To(null,t,r,!0,o,n)}else t.tag=0,_o(null,t,a,n),t=t.child;return t;case 16:switch(a=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),o=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)}),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(a),t.type=e,a=t.tag=function(e){if("function"==typeof e)return Hr(e)?1:0;if(null!=e){if((e=e.$$typeof)===tt)return 11;if(e===rt)return 14}return 2}(e),o=na(e,o),l=void 0,a){case 0:l=So(null,t,e,o,n);break;case 1:l=Po(null,t,e,o,n);break;case 11:l=ko(null,t,e,o,n);break;case 14:l=Co(null,t,e,na(e.type,o),r,n);break;default:i("306",e,"")}return l;case 0:return r=t.type,a=t.pendingProps,So(e,t,r,a=t.elementType===r?a:na(r,a),n);case 1:return r=t.type,a=t.pendingProps,Po(e,t,r,a=t.elementType===r?a:na(r,a),n);case 3:return jo(t),null===(r=t.updateQueue)&&i("282"),a=null!==(a=t.memoizedState)?a.element:null,ti(t,r,t.pendingProps,null,n),(r=t.memoizedState.element)===a?(go(),t=Do(e,t,n)):(a=t.stateNode,(a=(null===e||null===e.child)&&a.hydrate)&&(fo=kr(t.stateNode.containerInfo),so=t,a=po=!0),a?(t.effectTag|=2,t.child=ha(t,null,r,n)):(_o(e,t,r,n),go()),t=t.child),t;case 5:return ka(t),null===e&&yo(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,vr(r,a)?l=null:null!==o&&vr(r,o)&&(t.effectTag|=16),Oo(e,t),1!==n&&1&t.mode&&a.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(_o(e,t,l,n),t=t.child),t;case 6:return null===e&&yo(t),null;case 13:return No(e,t,n);case 4:return Ea(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ma(t,null,r,n):_o(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,ko(e,t,r,a=t.elementType===r?a:na(r,a),n);case 7:return _o(e,t,t.pendingProps,n),t.child;case 8:case 12:return _o(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,Uo(t,o=a.value),null!==l){var c=l.value;if(0===(o=Jt(c,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(c,o):1073741823))){if(l.children===a.children&&!jr.current){t=Do(e,t,n);break e}}else for(null!==(c=t.child)&&(c.return=t);null!==c;){var u=c.contextDependencies;if(null!==u){l=c.child;for(var s=u.first;null!==s;){if(s.context===r&&0!=(s.observedBits&o)){1===c.tag&&((s=Yo(n)).tag=Bo,Xo(c,s)),c.expirationTime<n&&(c.expirationTime=n),null!==(s=c.alternate)&&s.expirationTime<n&&(s.expirationTime=n),s=n;for(var f=c.return;null!==f;){var p=f.alternate;if(f.childExpirationTime<s)f.childExpirationTime=s,null!==p&&p.childExpirationTime<s&&(p.childExpirationTime=s);else{if(!(null!==p&&p.childExpirationTime<s))break;p.childExpirationTime=s}f=f.return}u.expirationTime<n&&(u.expirationTime=n);break}s=s.next}}else l=10===c.tag&&c.type===t.type?null:c.child;if(null!==l)l.return=c;else for(l=c;null!==l;){if(l===t){l=null;break}if(null!==(c=l.sibling)){c.return=l.return,l=c;break}l=l.return}c=l}}_o(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=(o=t.pendingProps).children,zo(t,n),r=r(a=Wo(a,o.unstable_observedBits)),t.effectTag|=1,_o(e,t,r,n),t.child;case 14:return o=na(a=t.type,t.pendingProps),Co(e,t,a,o=na(a.type,o),r,n);case 15:return xo(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:na(r,a),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,Rr(r)?(e=!0,Ur(t)):e=!1,zo(t,n),la(t,r,a),ua(t,r,a,n),To(null,t,r,!0,e,n)}i("156")}var Io={current:null},Mo=null,Fo=null,Ao=null;function Uo(e,t){var n=e.type._context;Sr(Io,n._currentValue),n._currentValue=t}function Lo(e){var t=Io.current;Or(Io),e.type._context._currentValue=t}function zo(e,t){Mo=e,Ao=Fo=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&(Eo=!0),e.contextDependencies=null}function Wo(e,t){return Ao!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Ao=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Fo?(null===Mo&&i("308"),Fo=t,Mo.contextDependencies={first:t,expirationTime:0}):Fo=Fo.next=t),e._currentValue}var Vo=0,qo=1,Bo=2,Ho=3,$o=!1;function Qo(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ko(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Yo(e){return{expirationTime:e,tag:Vo,payload:null,callback:null,next:null,nextEffect:null}}function Go(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function Xo(e,t){var n=e.alternate;if(null===n){var r=e.updateQueue,a=null;null===r&&(r=e.updateQueue=Qo(e.memoizedState))}else r=e.updateQueue,a=n.updateQueue,null===r?null===a?(r=e.updateQueue=Qo(e.memoizedState),a=n.updateQueue=Qo(n.memoizedState)):r=e.updateQueue=Ko(a):null===a&&(a=n.updateQueue=Ko(r));null===a||r===a?Go(r,t):null===r.lastUpdate||null===a.lastUpdate?(Go(r,t),Go(a,t)):(Go(r,t),a.lastUpdate=t)}function Jo(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=Qo(e.memoizedState):Zo(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function Zo(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Ko(t)),t}function ei(e,t,n,r,o,i){switch(n.tag){case qo:return"function"==typeof(e=n.payload)?e.call(i,r,o):e;case Ho:e.effectTag=-2049&e.effectTag|64;case Vo:if(null==(o="function"==typeof(e=n.payload)?e.call(i,r,o):e))break;return a({},r,o);case Bo:$o=!0}return r}function ti(e,t,n,r,a){$o=!1;for(var o=(t=Zo(e,t)).baseState,i=null,l=0,c=t.firstUpdate,u=o;null!==c;){var s=c.expirationTime;s<a?(null===i&&(i=c,o=u),l<s&&(l=s)):(u=ei(e,0,c,u,n,r),null!==c.callback&&(e.effectTag|=32,c.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=c:(t.lastEffect.nextEffect=c,t.lastEffect=c))),c=c.next}for(s=null,c=t.firstCapturedUpdate;null!==c;){var f=c.expirationTime;f<a?(null===s&&(s=c,null===i&&(o=u)),l<f&&(l=f)):(u=ei(e,0,c,u,n,r),null!==c.callback&&(e.effectTag|=32,c.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=c:(t.lastCapturedEffect.nextEffect=c,t.lastCapturedEffect=c))),c=c.next}null===i&&(t.lastUpdate=null),null===s?t.lastCapturedUpdate=null:e.effectTag|=32,null===i&&null===s&&(o=u),t.baseState=o,t.firstUpdate=i,t.firstCapturedUpdate=s,e.expirationTime=l,e.memoizedState=u}function ni(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ri(t.firstEffect,n),t.firstEffect=t.lastEffect=null,ri(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function ri(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var r=t;"function"!=typeof n&&i("191",n),n.call(r)}e=e.nextEffect}}function ai(e,t){return{value:e,source:t,stack:ct(t)}}function oi(e){e.effectTag|=4}var ii=void 0,li=void 0,ci=void 0,ui=void 0;ii=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},li=function(){},ci=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var l=t.stateNode;switch(wa(va.current),e=null,n){case"input":i=gt(l,i),r=gt(l,r),e=[];break;case"option":i=Qn(l,i),r=Qn(l,r),e=[];break;case"select":i=a({},i,{value:void 0}),r=a({},r,{value:void 0}),e=[];break;case"textarea":i=Yn(l,i),r=Yn(l,r),e=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(l.onclick=dr)}sr(n,r),l=n=void 0;var c=null;for(n in i)if(!r.hasOwnProperty(n)&&i.hasOwnProperty(n)&&null!=i[n])if("style"===n){var u=i[n];for(l in u)u.hasOwnProperty(l)&&(c||(c={}),c[l]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(g.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in r){var s=r[n];if(u=null!=i?i[n]:void 0,r.hasOwnProperty(n)&&s!==u&&(null!=s||null!=u))if("style"===n)if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(c||(c={}),c[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(c||(c={}),c[l]=s[l])}else c||(e||(e=[]),e.push(n,c)),c=s;else"dangerouslySetInnerHTML"===n?(s=s?s.__html:void 0,u=u?u.__html:void 0,null!=s&&u!==s&&(e=e||[]).push(n,""+s)):"children"===n?u===s||"string"!=typeof s&&"number"!=typeof s||(e=e||[]).push(n,""+s):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(g.hasOwnProperty(n)?(null!=s&&pr(o,n),e||u===s||(e=[])):(e=e||[]).push(n,s))}c&&(e=e||[]).push("style",c),o=e,(t.updateQueue=o)&&oi(t)}},ui=function(e,t,n,r){n!==r&&oi(t)};var si="function"==typeof WeakSet?WeakSet:Set;function fi(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ct(n)),null!==n&&lt(n.type),t=t.value,null!==e&&1===e.tag&&lt(e.type);try{console.error(t)}catch(e){setTimeout(function(){throw e})}}function pi(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Qi(e,t)}else t.current=null}function di(e,t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var r=n=n.next;do{if((r.tag&e)!==xa){var a=r.destroy;r.destroy=void 0,void 0!==a&&a()}(r.tag&t)!==xa&&(a=r.create,r.destroy=a()),r=r.next}while(r!==n)}}function mi(e){switch("function"==typeof Wr&&Wr(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var n=t=t.next;do{var r=n.destroy;if(void 0!==r){var a=e;try{r()}catch(e){Qi(a,e)}}n=n.next}while(n!==t)}break;case 1:if(pi(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Qi(e,t)}break;case 5:pi(e);break;case 4:vi(e)}}function hi(e){return 5===e.tag||3===e.tag||4===e.tag}function yi(e){e:{for(var t=e.return;null!==t;){if(hi(t)){var n=t;break e}t=t.return}i("160"),n=void 0}var r=t=void 0;switch(n.tag){case 5:t=n.stateNode,r=!1;break;case 3:case 4:t=n.stateNode.containerInfo,r=!0;break;default:i("161")}16&n.effectTag&&(ar(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||hi(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var a=e;;){if(5===a.tag||6===a.tag)if(n)if(r){var o=t,l=a.stateNode,c=n;8===o.nodeType?o.parentNode.insertBefore(l,c):o.insertBefore(l,c)}else t.insertBefore(a.stateNode,n);else r?(l=t,c=a.stateNode,8===l.nodeType?(o=l.parentNode).insertBefore(c,l):(o=l).appendChild(c),null!=(l=l._reactRootContainer)||null!==o.onclick||(o.onclick=dr)):t.appendChild(a.stateNode);else if(4!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function vi(e){for(var t=e,n=!1,r=void 0,a=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&i("160"),n.tag){case 5:r=n.stateNode,a=!1;break e;case 3:case 4:r=n.stateNode.containerInfo,a=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var o=t,l=o;;)if(mi(l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===o)break;for(;null===l.sibling;){if(null===l.return||l.return===o)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a?(o=r,l=t.stateNode,8===o.nodeType?o.parentNode.removeChild(l):o.removeChild(l)):r.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){r=t.stateNode.containerInfo,a=!0,t.child.return=t,t=t.child;continue}}else if(mi(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function bi(e,t){switch(t.tag){case 0:case 11:case 14:case 15:di(Sa,Pa,t);break;case 1:break;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps;e=null!==e?e.memoizedProps:r;var a=t.type,o=t.updateQueue;t.updateQueue=null,null!==o&&function(e,t,n,r,a){e[I]=a,"input"===n&&"radio"===a.type&&null!=a.name&&Et(e,a),fr(n,r),r=fr(n,a);for(var o=0;o<t.length;o+=2){var i=t[o],l=t[o+1];"style"===i?cr(e,l):"dangerouslySetInnerHTML"===i?rr(e,l):"children"===i?ar(e,l):vt(e,i,l,r)}switch(n){case"input":_t(e,a);break;case"textarea":Xn(e,a);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!a.multiple,null!=(n=a.value)?Kn(e,!!a.multiple,n,!1):t!==!!a.multiple&&(null!=a.defaultValue?Kn(e,!!a.multiple,a.defaultValue,!0):Kn(e,!!a.multiple,a.multiple?[]:"",!1))}}(n,o,a,e,r)}break;case 6:null===t.stateNode&&i("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 3:case 12:break;case 13:if(n=t.memoizedState,r=void 0,e=t,null===n?r=!1:(r=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=El())),null!==e&&function(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)r.style.display="none";else{r=n.stateNode;var a=n.memoizedProps.style;a=null!=a&&a.hasOwnProperty("display")?a.display:null,r.style.display=lr("display",a)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else{if(13===n.tag&&null!==n.memoizedState){(r=n.child.sibling).return=n,n=r;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}(e,r),null!==(n=t.updateQueue)){t.updateQueue=null;var l=t.stateNode;null===l&&(l=t.stateNode=new si),n.forEach(function(e){var n=function(e,t){var n=e.stateNode;null!==n&&n.delete(t),t=Ki(t=El(),e),null!==(e=Gi(e,t))&&(Jr(e,t),0!==(t=e.expirationTime)&&_l(e,t))}.bind(null,t,e);l.has(e)||(l.add(e),e.then(n,n))})}break;case 17:break;default:i("163")}}var gi="function"==typeof WeakMap?WeakMap:Map;function wi(e,t,n){(n=Yo(n)).tag=Ho,n.payload={element:null};var r=t.value;return n.callback=function(){Nl(r),fi(e,t)},n}function Ei(e,t,n){(n=Yo(n)).tag=Ho;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Ai?Ai=new Set([this]):Ai.add(this));var n=t.value,a=t.stack;fi(e,t),this.componentDidCatch(n,{componentStack:null!==a?a:""})}),n}function _i(e){switch(e.tag){case 1:Rr(e.type)&&Ir();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return _a(),Mr(),0!=(64&(t=e.effectTag))&&i("285"),e.effectTag=-2049&t|64,e;case 5:return Ca(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:return null;case 4:return _a(),null;case 10:return Lo(e),null;default:return null}}var ki=Be.ReactCurrentDispatcher,Ci=Be.ReactCurrentOwner,xi=1073741822,Oi=!1,Si=null,Pi=null,Ti=0,ji=-1,Ni=!1,Di=null,Ri=!1,Ii=null,Mi=null,Fi=null,Ai=null;function Ui(){if(null!==Si)for(var e=Si.return;null!==e;){var t=e;switch(t.tag){case 1:var n=t.type.childContextTypes;null!=n&&Ir();break;case 3:_a(),Mr();break;case 5:Ca(t);break;case 4:_a();break;case 10:Lo(t)}e=e.return}Pi=null,Ti=0,ji=-1,Ni=!1,Si=null}function Li(){for(;null!==Di;){var e=Di.effectTag;if(16&e&&ar(Di.stateNode,""),128&e){var t=Di.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:yi(Di),Di.effectTag&=-3;break;case 6:yi(Di),Di.effectTag&=-3,bi(Di.alternate,Di);break;case 4:bi(Di.alternate,Di);break;case 8:vi(e=Di),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}Di=Di.nextEffect}}function zi(){for(;null!==Di;){if(256&Di.effectTag)e:{var e=Di.alternate,t=Di;switch(t.tag){case 0:case 11:case 15:di(Oa,xa,t);break e;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:na(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:i("163")}}Di=Di.nextEffect}}function Wi(e,t){for(;null!==Di;){var n=Di.effectTag;if(36&n){var r=Di.alternate,a=Di,o=t;switch(a.tag){case 0:case 11:case 15:di(Ta,ja,a);break;case 1:var l=a.stateNode;if(4&a.effectTag)if(null===r)l.componentDidMount();else{var c=a.elementType===a.type?r.memoizedProps:na(a.type,r.memoizedProps);l.componentDidUpdate(c,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}null!==(r=a.updateQueue)&&ni(0,r,l);break;case 3:if(null!==(r=a.updateQueue)){if(l=null,null!==a.child)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}ni(0,r,l)}break;case 5:o=a.stateNode,null===r&&4&a.effectTag&&yr(a.type,a.memoizedProps)&&o.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:i("163")}}128&n&&(null!==(a=Di.ref)&&(o=Di.stateNode,"function"==typeof a?a(o):a.current=o)),512&n&&(Ii=e),Di=Di.nextEffect}}function Vi(){null!==Mi&&Er(Mi),null!==Fi&&Fi()}function qi(e,t){Ri=Oi=!0,e.current===t&&i("177");var n=e.pendingCommitExpirationTime;0===n&&i("261"),e.pendingCommitExpirationTime=0;var r=t.expirationTime,a=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var n=e.latestPendingTime;0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(n=e.earliestSuspendedTime)?Jr(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,Jr(e,t)):t>n&&Jr(e,t)}ta(0,e)}(e,a>r?a:r),Ci.current=null,r=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,mr=Cn,hr=function(){var e=Fn();if(An(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var r=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{t.nodeType,a.nodeType}catch(e){t=null;break e}var o=0,i=-1,l=-1,c=0,u=0,s=e,f=null;t:for(;;){for(var p;s!==t||0!==r&&3!==s.nodeType||(i=o+r),s!==a||0!==n&&3!==s.nodeType||(l=o+n),3===s.nodeType&&(o+=s.nodeValue.length),null!==(p=s.firstChild);)f=s,s=p;for(;;){if(s===e)break t;if(f===t&&++c===r&&(i=o),f===a&&++u===n&&(l=o),null!==(p=s.nextSibling))break;f=(s=f).parentNode}s=p}t=-1===i||-1===l?null:{start:i,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),Cn=!1,Di=r;null!==Di;){a=!1;var l=void 0;try{zi()}catch(e){a=!0,l=e}a&&(null===Di&&i("178"),Qi(Di,l),null!==Di&&(Di=Di.nextEffect))}for(Di=r;null!==Di;){a=!1,l=void 0;try{Li()}catch(e){a=!0,l=e}a&&(null===Di&&i("178"),Qi(Di,l),null!==Di&&(Di=Di.nextEffect))}for(Un(hr),hr=null,Cn=!!mr,mr=null,e.current=t,Di=r;null!==Di;){a=!1,l=void 0;try{Wi(e,n)}catch(e){a=!0,l=e}a&&(null===Di&&i("178"),Qi(Di,l),null!==Di&&(Di=Di.nextEffect))}if(null!==r&&null!==Ii){var c=function(e,t){Fi=Mi=Ii=null;var n=rl;rl=!0;do{if(512&t.effectTag){var r=!1,a=void 0;try{var o=t;di(Da,xa,o),di(xa,Na,o)}catch(e){r=!0,a=e}r&&Qi(t,a)}t=t.nextEffect}while(null!==t);rl=n,0!==(n=e.expirationTime)&&_l(e,n),ul||rl||Sl(1073741823,!1)}.bind(null,e,r);Mi=o.unstable_runWithPriority(o.unstable_NormalPriority,function(){return wr(c)}),Fi=c}Oi=Ri=!1,"function"==typeof zr&&zr(t.stateNode),n=t.expirationTime,0===(t=(t=t.childExpirationTime)>n?t:n)&&(Ai=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function Bi(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling;if(0==(1024&e.effectTag)){Si=e;e:{var o=t,l=Ti,c=(t=e).pendingProps;switch(t.tag){case 2:case 16:break;case 15:case 0:break;case 1:Rr(t.type)&&Ir();break;case 3:_a(),Mr(),(c=t.stateNode).pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==o&&null!==o.child||(bo(t),t.effectTag&=-3),li(t);break;case 5:Ca(t);var u=wa(ga.current);if(l=t.type,null!==o&&null!=t.stateNode)ci(o,t,l,c,u),o.ref!==t.ref&&(t.effectTag|=128);else if(c){var s=wa(va.current);if(bo(t)){o=(c=t).stateNode;var f=c.type,p=c.memoizedProps,d=u;switch(o[R]=c,o[I]=p,l=void 0,u=f){case"iframe":case"object":xn("load",o);break;case"video":case"audio":for(f=0;f<te.length;f++)xn(te[f],o);break;case"source":xn("error",o);break;case"img":case"image":case"link":xn("error",o),xn("load",o);break;case"form":xn("reset",o),xn("submit",o);break;case"details":xn("toggle",o);break;case"input":wt(o,p),xn("invalid",o),pr(d,"onChange");break;case"select":o._wrapperState={wasMultiple:!!p.multiple},xn("invalid",o),pr(d,"onChange");break;case"textarea":Gn(o,p),xn("invalid",o),pr(d,"onChange")}for(l in sr(u,p),f=null,p)p.hasOwnProperty(l)&&(s=p[l],"children"===l?"string"==typeof s?o.textContent!==s&&(f=["children",s]):"number"==typeof s&&o.textContent!==""+s&&(f=["children",""+s]):g.hasOwnProperty(l)&&null!=s&&pr(d,l));switch(u){case"input":Ve(o),kt(o,p,!0);break;case"textarea":Ve(o),Jn(o);break;case"select":case"option":break;default:"function"==typeof p.onClick&&(o.onclick=dr)}l=f,c.updateQueue=l,(c=null!==l)&&oi(t)}else{p=t,d=l,o=c,f=9===u.nodeType?u:u.ownerDocument,s===Zn.html&&(s=er(d)),s===Zn.html?"script"===d?((o=f.createElement("div")).innerHTML="<script><\/script>",f=o.removeChild(o.firstChild)):"string"==typeof o.is?f=f.createElement(d,{is:o.is}):(f=f.createElement(d),"select"===d&&(d=f,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):f=f.createElementNS(s,d),(o=f)[R]=p,o[I]=c,ii(o,t,!1,!1),d=o;var m=u,h=fr(f=l,p=c);switch(f){case"iframe":case"object":xn("load",d),u=p;break;case"video":case"audio":for(u=0;u<te.length;u++)xn(te[u],d);u=p;break;case"source":xn("error",d),u=p;break;case"img":case"image":case"link":xn("error",d),xn("load",d),u=p;break;case"form":xn("reset",d),xn("submit",d),u=p;break;case"details":xn("toggle",d),u=p;break;case"input":wt(d,p),u=gt(d,p),xn("invalid",d),pr(m,"onChange");break;case"option":u=Qn(d,p);break;case"select":d._wrapperState={wasMultiple:!!p.multiple},u=a({},p,{value:void 0}),xn("invalid",d),pr(m,"onChange");break;case"textarea":Gn(d,p),u=Yn(d,p),xn("invalid",d),pr(m,"onChange");break;default:u=p}sr(f,u),s=void 0;var y=f,v=d,b=u;for(s in b)if(b.hasOwnProperty(s)){var w=b[s];"style"===s?cr(v,w):"dangerouslySetInnerHTML"===s?null!=(w=w?w.__html:void 0)&&rr(v,w):"children"===s?"string"==typeof w?("textarea"!==y||""!==w)&&ar(v,w):"number"==typeof w&&ar(v,""+w):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(g.hasOwnProperty(s)?null!=w&&pr(m,s):null!=w&&vt(v,s,w,h))}switch(f){case"input":Ve(d),kt(d,p,!1);break;case"textarea":Ve(d),Jn(d);break;case"option":null!=p.value&&d.setAttribute("value",""+bt(p.value));break;case"select":(u=d).multiple=!!p.multiple,null!=(d=p.value)?Kn(u,!!p.multiple,d,!1):null!=p.defaultValue&&Kn(u,!!p.multiple,p.defaultValue,!0);break;default:"function"==typeof u.onClick&&(d.onclick=dr)}(c=yr(l,c))&&oi(t),t.stateNode=o}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&i("166");break;case 6:o&&null!=t.stateNode?ui(o,t,o.memoizedProps,c):("string"!=typeof c&&(null===t.stateNode&&i("166")),o=wa(ga.current),wa(va.current),bo(t)?(l=(c=t).stateNode,o=c.memoizedProps,l[R]=c,(c=l.nodeValue!==o)&&oi(t)):(l=t,(c=(9===o.nodeType?o:o.ownerDocument).createTextNode(c))[R]=t,l.stateNode=c));break;case 11:break;case 13:if(c=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=l,Si=t;break e}c=null!==c,l=null!==o&&null!==o.memoizedState,null!==o&&!c&&l&&(null!==(o=o.child.sibling)&&(null!==(u=t.firstEffect)?(t.firstEffect=o,o.nextEffect=u):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),(c||l)&&(t.effectTag|=4);break;case 7:case 8:case 12:break;case 4:_a(),li(t);break;case 10:Lo(t);break;case 9:case 14:break;case 17:Rr(t.type)&&Ir();break;case 18:break;default:i("156")}Si=null}if(t=e,1===Ti||1!==t.childExpirationTime){for(c=0,l=t.child;null!==l;)(o=l.expirationTime)>c&&(c=o),(u=l.childExpirationTime)>c&&(c=u),l=l.sibling;t.childExpirationTime=c}if(null!==Si)return Si;null!==n&&0==(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=_i(e)))return e.effectTag&=1023,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==r)return r;if(null===n)break;e=n}return null}function Hi(e){var t=Ro(e.alternate,e,Ti);return e.memoizedProps=e.pendingProps,null===t&&(t=Bi(e)),Ci.current=null,t}function $i(e,t){Oi&&i("243"),Vi(),Oi=!0;var n=ki.current;ki.current=lo;var r=e.nextExpirationTimeToWorkOn;r===Ti&&e===Pi&&null!==Si||(Ui(),Ti=r,Si=$r((Pi=e).current,null),e.pendingCommitExpirationTime=0);for(var a=!1;;){try{if(t)for(;null!==Si&&!xl();)Si=Hi(Si);else for(;null!==Si;)Si=Hi(Si)}catch(t){if(Ao=Fo=Mo=null,Ga(),null===Si)a=!0,Nl(t);else{null===Si&&i("271");var o=Si,l=o.return;if(null!==l){e:{var c=e,u=l,s=o,f=t;if(l=Ti,s.effectTag|=1024,s.firstEffect=s.lastEffect=null,null!==f&&"object"==typeof f&&"function"==typeof f.then){var p=f;f=u;var d=-1,m=-1;do{if(13===f.tag){var h=f.alternate;if(null!==h&&null!==(h=h.memoizedState)){m=10*(1073741822-h.timedOutAt);break}"number"==typeof(h=f.pendingProps.maxDuration)&&(0>=h?d=0:(-1===d||h<d)&&(d=h))}f=f.return}while(null!==f);f=u;do{if((h=13===f.tag)&&(h=void 0!==f.memoizedProps.fallback&&null===f.memoizedState),h){if(null===(u=f.updateQueue)?((u=new Set).add(p),f.updateQueue=u):u.add(p),0==(1&f.mode)){f.effectTag|=64,s.effectTag&=-1957,1===s.tag&&(null===s.alternate?s.tag=17:((l=Yo(1073741823)).tag=Bo,Xo(s,l))),s.expirationTime=1073741823;break e}u=l;var y=(s=c).pingCache;null===y?(y=s.pingCache=new gi,h=new Set,y.set(p,h)):void 0===(h=y.get(p))&&(h=new Set,y.set(p,h)),h.has(u)||(h.add(u),s=Yi.bind(null,s,p,u),p.then(s,s)),-1===d?c=1073741823:(-1===m&&(m=10*(1073741822-ea(c,l))-5e3),c=m+d),0<=c&&ji<c&&(ji=c),f.effectTag|=2048,f.expirationTime=l;break e}f=f.return}while(null!==f);f=Error((lt(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ct(s))}Ni=!0,f=ai(f,s),c=u;do{switch(c.tag){case 3:c.effectTag|=2048,c.expirationTime=l,Jo(c,l=wi(c,f,l));break e;case 1:if(d=f,m=c.type,s=c.stateNode,0==(64&c.effectTag)&&("function"==typeof m.getDerivedStateFromError||null!==s&&"function"==typeof s.componentDidCatch&&(null===Ai||!Ai.has(s)))){c.effectTag|=2048,c.expirationTime=l,Jo(c,l=Ei(c,d,l));break e}}c=c.return}while(null!==c)}Si=Bi(o);continue}a=!0,Nl(t)}}break}if(Oi=!1,ki.current=n,Ao=Fo=Mo=null,Ga(),a)Pi=null,e.finishedWork=null;else if(null!==Si)e.finishedWork=null;else{if(null===(n=e.current.alternate)&&i("281"),Pi=null,Ni){if(a=e.latestPendingTime,o=e.latestSuspendedTime,l=e.latestPingedTime,0!==a&&a<r||0!==o&&o<r||0!==l&&l<r)return Zr(e,r),void wl(e,n,r,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,r=e.nextExpirationTimeToWorkOn=r,t=e.expirationTime=1073741823,void wl(e,n,r,t,-1)}t&&-1!==ji?(Zr(e,r),(t=10*(1073741822-ea(e,r)))<ji&&(ji=t),t=10*(1073741822-El()),t=ji-t,wl(e,n,r,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=r,e.finishedWork=n)}}function Qi(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ai||!Ai.has(r)))return Xo(n,e=Ei(n,e=ai(t,e),1073741823)),void Xi(n,1073741823);break;case 3:return Xo(n,e=wi(n,e=ai(t,e),1073741823)),void Xi(n,1073741823)}n=n.return}3===e.tag&&(Xo(e,n=wi(e,n=ai(t,e),1073741823)),Xi(e,1073741823))}function Ki(e,t){var n=o.unstable_getCurrentPriorityLevel(),r=void 0;if(0==(1&t.mode))r=1073741823;else if(Oi&&!Ri)r=Ti;else{switch(n){case o.unstable_ImmediatePriority:r=1073741823;break;case o.unstable_UserBlockingPriority:r=1073741822-10*(1+((1073741822-e+15)/10|0));break;case o.unstable_NormalPriority:r=1073741822-25*(1+((1073741822-e+500)/25|0));break;case o.unstable_LowPriority:case o.unstable_IdlePriority:r=1;break;default:i("313")}null!==Pi&&r===Ti&&--r}return n===o.unstable_UserBlockingPriority&&(0===il||r<il)&&(il=r),r}function Yi(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),null!==Pi&&Ti===n?Pi=null:(t=e.earliestSuspendedTime,r=e.latestSuspendedTime,0!==t&&n<=t&&n>=r&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>n)&&(e.latestPingedTime=n),ta(n,e),0!==(n=e.expirationTime)&&_l(e,n)))}function Gi(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,a=null;if(null===r&&3===e.tag)a=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){a=r.stateNode;break}r=r.return}return a}function Xi(e,t){null!==(e=Gi(e,t))&&(!Oi&&0!==Ti&&t>Ti&&Ui(),Jr(e,t),Oi&&!Ri&&Pi===e||_l(e,e.expirationTime),yl>hl&&(yl=0,i("185")))}function Ji(e,t,n,r,a){return o.unstable_runWithPriority(o.unstable_ImmediatePriority,function(){return e(t,n,r,a)})}var Zi=null,el=null,tl=0,nl=void 0,rl=!1,al=null,ol=0,il=0,ll=!1,cl=null,ul=!1,sl=!1,fl=null,pl=o.unstable_now(),dl=1073741822-(pl/10|0),ml=dl,hl=50,yl=0,vl=null;function bl(){dl=1073741822-((o.unstable_now()-pl)/10|0)}function gl(e,t){if(0!==tl){if(t<tl)return;null!==nl&&o.unstable_cancelCallback(nl)}tl=t,e=o.unstable_now()-pl,nl=o.unstable_scheduleCallback(Ol,{timeout:10*(1073741822-t)-e})}function wl(e,t,n,r,a){e.expirationTime=r,0!==a||xl()?0<a&&(e.timeoutHandle=br(function(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t,bl(),ml=dl,Pl(e,n)}.bind(null,e,t,n),a)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function El(){return rl?ml:(kl(),0!==ol&&1!==ol||(bl(),ml=dl),ml)}function _l(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===el?(Zi=el=e,e.nextScheduledRoot=e):(el=el.nextScheduledRoot=e).nextScheduledRoot=Zi):t>e.expirationTime&&(e.expirationTime=t),rl||(ul?sl&&(al=e,ol=1073741823,Tl(e,1073741823,!1)):1073741823===t?Sl(1073741823,!1):gl(e,t))}function kl(){var e=0,t=null;if(null!==el)for(var n=el,r=Zi;null!==r;){var a=r.expirationTime;if(0===a){if((null===n||null===el)&&i("244"),r===r.nextScheduledRoot){Zi=el=r.nextScheduledRoot=null;break}if(r===Zi)Zi=a=r.nextScheduledRoot,el.nextScheduledRoot=a,r.nextScheduledRoot=null;else{if(r===el){(el=n).nextScheduledRoot=Zi,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if(a>e&&(e=a,t=r),r===el)break;if(1073741823===e)break;n=r,r=r.nextScheduledRoot}}al=t,ol=e}var Cl=!1;function xl(){return!!Cl||!!o.unstable_shouldYield()&&(Cl=!0)}function Ol(){try{if(!xl()&&null!==Zi){bl();var e=Zi;do{var t=e.expirationTime;0!==t&&dl<=t&&(e.nextExpirationTimeToWorkOn=dl),e=e.nextScheduledRoot}while(e!==Zi)}Sl(0,!0)}finally{Cl=!1}}function Sl(e,t){if(kl(),t)for(bl(),ml=dl;null!==al&&0!==ol&&e<=ol&&!(Cl&&dl>ol);)Tl(al,ol,dl>ol),kl(),bl(),ml=dl;else for(;null!==al&&0!==ol&&e<=ol;)Tl(al,ol,!1),kl();if(t&&(tl=0,nl=null),0!==ol&&gl(al,ol),yl=0,vl=null,null!==fl)for(e=fl,fl=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ll||(ll=!0,cl=e)}}if(ll)throw e=cl,cl=null,ll=!1,e}function Pl(e,t){rl&&i("253"),al=e,ol=t,Tl(e,t,!1),Sl(1073741823,!1)}function Tl(e,t,n){if(rl&&i("245"),rl=!0,n){var r=e.finishedWork;null!==r?jl(e,r,t):(e.finishedWork=null,-1!==(r=e.timeoutHandle)&&(e.timeoutHandle=-1,gr(r)),$i(e,n),null!==(r=e.finishedWork)&&(xl()?e.finishedWork=r:jl(e,r,t)))}else null!==(r=e.finishedWork)?jl(e,r,t):(e.finishedWork=null,-1!==(r=e.timeoutHandle)&&(e.timeoutHandle=-1,gr(r)),$i(e,n),null!==(r=e.finishedWork)&&jl(e,r,t));rl=!1}function jl(e,t,n){var r=e.firstBatch;if(null!==r&&r._expirationTime>=n&&(null===fl?fl=[r]:fl.push(r),r._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===vl?yl++:(vl=e,yl=0),o.unstable_runWithPriority(o.unstable_ImmediatePriority,function(){qi(e,t)})}function Nl(e){null===al&&i("246"),al.expirationTime=0,ll||(ll=!0,cl=e)}function Dl(e,t){var n=ul;ul=!0;try{return e(t)}finally{(ul=n)||rl||Sl(1073741823,!1)}}function Rl(e,t){if(ul&&!sl){sl=!0;try{return e(t)}finally{sl=!1}}return e(t)}function Il(e,t,n){ul||rl||0===il||(Sl(il,!1),il=0);var r=ul;ul=!0;try{return o.unstable_runWithPriority(o.unstable_UserBlockingPriority,function(){return e(t,n)})}finally{(ul=r)||rl||Sl(1073741823,!1)}}function Ml(e,t,n,r,a){var o=t.current;e:if(n){t:{2===tn(n=n._reactInternalFiber)&&1===n.tag||i("170");var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Rr(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);i("171"),l=void 0}if(1===n.tag){var c=n.type;if(Rr(c)){n=Ar(n,c,l);break e}}n=l}else n=Pr;return null===t.context?t.context=n:t.pendingContext=n,t=a,(a=Yo(r)).payload={element:e},null!==(t=void 0===t?null:t)&&(a.callback=t),Vi(),Xo(o,a),Xi(o,r),r}function Fl(e,t,n,r){var a=t.current;return Ml(e,t,n,a=Ki(El(),a),r)}function Al(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Ul(e){var t=1073741822-25*(1+((1073741822-El()+500)/25|0));t>=xi&&(t=xi-1),this._expirationTime=xi=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function Ll(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function zl(e,t,n){e={current:t=Br(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Wl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Vl(e,t,n,r,a){var o=n._reactRootContainer;if(o){if("function"==typeof a){var i=a;a=function(){var e=Al(o._internalRoot);i.call(e)}}null!=e?o.legacy_renderSubtreeIntoContainer(e,t,a):o.render(t,a)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new zl(e,!1,t)}(n,r),"function"==typeof a){var l=a;a=function(){var e=Al(o._internalRoot);l.call(e)}}Rl(function(){null!=e?o.legacy_renderSubtreeIntoContainer(e,t,a):o.render(t,a)})}return Al(o._internalRoot)}function ql(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Wl(t)||i("200"),function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ke,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Oe=function(e,t,n){switch(t){case"input":if(_t(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=U(r);a||i("90"),qe(r),_t(r,a)}}}break;case"textarea":Xn(e,n);break;case"select":null!=(t=n.value)&&Kn(e,!!n.multiple,t,!1)}},Ul.prototype.render=function(e){this._defer||i("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,r=new Ll;return Ml(e,t,null,n,r._onCommit),r},Ul.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ul.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||i("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var r=null,a=t;a!==this;)r=a,a=a._next;null===r&&i("251"),r._next=a._next,this._next=t,e.firstBatch=this}this._defer=!1,Pl(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Ul.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},Ll.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ll.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&i("191",n),n()}}},zl.prototype.render=function(e,t){var n=this._internalRoot,r=new Ll;return null!==(t=void 0===t?null:t)&&r.then(t),Fl(e,n,null,r._onCommit),r},zl.prototype.unmount=function(e){var t=this._internalRoot,n=new Ll;return null!==(e=void 0===e?null:e)&&n.then(e),Fl(null,t,null,n._onCommit),n},zl.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,a=new Ll;return null!==(n=void 0===n?null:n)&&a.then(n),Fl(t,r,e,a._onCommit),a},zl.prototype.createBatch=function(){var e=new Ul(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(n=null;null!==r&&r._expirationTime>=t;)n=r,r=r._next;e._next=r,null!==n&&(n._next=e)}return e},De=Dl,Re=Il,Ie=function(){rl||0===il||(Sl(il,!1),il=0)};var Bl,Hl,$l={createPortal:ql,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?i("188"):i("268",Object.keys(e))),e=null===(e=rn(t))?null:e.stateNode},hydrate:function(e,t,n){return Wl(t)||i("200"),Vl(null,e,t,!0,n)},render:function(e,t,n){return Wl(t)||i("200"),Vl(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return Wl(n)||i("200"),(null==e||void 0===e._reactInternalFiber)&&i("38"),Vl(e,t,n,!1,r)},unmountComponentAtNode:function(e){return Wl(e)||i("40"),!!e._reactRootContainer&&(Rl(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return ql.apply(void 0,arguments)},unstable_batchedUpdates:Dl,unstable_interactiveUpdates:Il,flushSync:function(e,t){rl&&i("187");var n=ul;ul=!0;try{return Ji(e,t)}finally{ul=n,Sl(1073741823,!1)}},unstable_createRoot:function(e,t){return Wl(e)||i("299","unstable_createRoot"),new zl(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=ul;ul=!0;try{Ji(e)}finally{(ul=t)||rl||Sl(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[F,A,U,T.injectEventPluginsByName,b,B,function(e){O(e,q)},je,Ne,Pn,N]}};Hl=(Bl={findFiberByHostInstance:M,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);zr=Vr(function(e){return t.onCommitFiberRoot(n,e)}),Wr=Vr(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}}(a({},Bl,{overrideProps:null,currentDispatcherRef:Be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=rn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Hl?Hl(e):null}}));var Ql={default:$l},Kl=Ql&&$l||Ql;e.exports=Kl.default||Kl},function(e,t,n){"use strict";e.exports=n(17)},function(e,t,n){"use strict";(function(e){
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,a=3,o=-1,i=-1,l=!1,c=!1;function u(){if(!l){var e=n.expirationTime;c?k():c=!0,_(p,e)}}function s(){var e=n,t=n.next;if(n===t)n=null;else{var r=n.previous;n=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var o=a,l=i;a=e,i=t;try{var c=r()}finally{a=o,i=l}if("function"==typeof c)if(c={callback:c,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=c.next=c.previous=c;else{r=null,e=n;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==n);null===r?r=n:r===n&&(n=c,u()),(t=r.previous).next=r.previous=c,c.next=r,c.previous=t}}function f(){if(-1===o&&null!==n&&1===n.priorityLevel){l=!0;try{do{s()}while(null!==n&&1===n.priorityLevel)}finally{l=!1,null!==n?u():c=!1}}}function p(e){l=!0;var a=r;r=e;try{if(e)for(;null!==n;){var o=t.unstable_now();if(!(n.expirationTime<=o))break;do{s()}while(null!==n&&n.expirationTime<=o)}else if(null!==n)do{s()}while(null!==n&&!C())}finally{l=!1,r=a,null!==n?u():c=!1,f()}}var d,m,h=Date,y="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,b="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){d=b(function(t){v(m),e(t)}),m=y(function(){g(d),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var E=performance;t.unstable_now=function(){return E.now()}}else t.unstable_now=function(){return h.now()};var _,k,C,x=null;if("undefined"!=typeof window?x=window:void 0!==e&&(x=e),x&&x._schedMock){var O=x._schedMock;_=O[0],k=O[1],C=O[2],t.unstable_now=O[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var S=null,P=function(e){if(null!==S)try{S(e)}finally{S=null}};_=function(e){null!==S?setTimeout(_,0,e):(S=e,setTimeout(P,0,!1))},k=function(){S=null},C=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof b&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var T=null,j=!1,N=-1,D=!1,R=!1,I=0,M=33,F=33;C=function(){return I<=t.unstable_now()};var A=new MessageChannel,U=A.port2;A.port1.onmessage=function(){j=!1;var e=T,n=N;T=null,N=-1;var r=t.unstable_now(),a=!1;if(0>=I-r){if(!(-1!==n&&n<=r))return D||(D=!0,w(L)),T=e,void(N=n);a=!0}if(null!==e){R=!0;try{e(a)}finally{R=!1}}};var L=function(e){if(null!==T){w(L);var t=e-I+F;t<F&&M<F?(8>t&&(t=8),F=t<M?M:t):M=t,I=e+F,j||(j=!0,U.postMessage(void 0))}else D=!1};_=function(e,t){T=e,N=t,R||0>t?U.postMessage(void 0):D||(D=!0,w(L))},k=function(){T=null,j=!1,N=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=a,i=o;a=e,o=t.unstable_now();try{return n()}finally{a=r,o=i,f()}},t.unstable_next=function(e){switch(a){case 1:case 2:case 3:var n=3;break;default:n=a}var r=a,i=o;a=n,o=t.unstable_now();try{return e()}finally{a=r,o=i,f()}},t.unstable_scheduleCallback=function(e,r){var i=-1!==o?o:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=i+r.timeout;else switch(a){case 1:r=i+-1;break;case 2:r=i+250;break;case 5:r=i+1073741823;break;case 4:r=i+1e4;break;default:r=i+5e3}if(e={callback:e,priorityLevel:a,expirationTime:r,next:null,previous:null},null===n)n=e.next=e.previous=e,u();else{i=null;var l=n;do{if(l.expirationTime>r){i=l;break}l=l.next}while(l!==n);null===i?i=n:i===n&&(n=e,u()),(r=i.previous).next=i.previous=e,e.next=i,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var r=e.previous;r.next=t,t.previous=r}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=a;return function(){var r=a,i=o;a=n,o=t.unstable_now();try{return e.apply(this,arguments)}finally{a=r,o=i,f()}}},t.unstable_getCurrentPriorityLevel=function(){return a},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<i||C())},t.unstable_continueExecution=function(){null!==n&&u()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n(7))},function(e,t,n){"use strict";var r=n(19);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
<<<<<<< HEAD
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enableSchedulerDebugging = false;

/* eslint-disable no-var */

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var maxSigned31BitInt = 1073741823;

// Times out immediately
var IMMEDIATE_PRIORITY_TIMEOUT = -1;
// Eventually times out
var USER_BLOCKING_PRIORITY = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000;
// Never times out
var IDLE_PRIORITY = maxSigned31BitInt;

// Callbacks are stored as a circular, doubly linked list.
var firstCallbackNode = null;

var currentDidTimeout = false;
// Pausing the scheduler is useful for debugging.
var isSchedulerPaused = false;

var currentPriorityLevel = NormalPriority;
var currentEventStartTime = -1;
var currentExpirationTime = -1;

// This is set when a callback is being executed, to prevent re-entrancy.
var isExecutingCallback = false;

var isHostCallbackScheduled = false;

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

function ensureHostCallbackIsScheduled() {
  if (isExecutingCallback) {
    // Don't schedule work yet; wait until the next time we yield.
    return;
  }
  // Schedule the host callback using the earliest expiration in the list.
  var expirationTime = firstCallbackNode.expirationTime;
  if (!isHostCallbackScheduled) {
    isHostCallbackScheduled = true;
  } else {
    // Cancel the existing host callback.
    cancelHostCallback();
  }
  requestHostCallback(flushWork, expirationTime);
}

function flushFirstCallback() {
  var flushedNode = firstCallbackNode;

  // Remove the node from the list before calling the callback. That way the
  // list is in a consistent state even if the callback throws.
  var next = firstCallbackNode.next;
  if (firstCallbackNode === next) {
    // This is the last callback in the list.
    firstCallbackNode = null;
    next = null;
  } else {
    var lastCallbackNode = firstCallbackNode.previous;
    firstCallbackNode = lastCallbackNode.next = next;
    next.previous = lastCallbackNode;
  }

  flushedNode.next = flushedNode.previous = null;

  // Now it's safe to call the callback.
  var callback = flushedNode.callback;
  var expirationTime = flushedNode.expirationTime;
  var priorityLevel = flushedNode.priorityLevel;
  var previousPriorityLevel = currentPriorityLevel;
  var previousExpirationTime = currentExpirationTime;
  currentPriorityLevel = priorityLevel;
  currentExpirationTime = expirationTime;
  var continuationCallback;
  try {
    continuationCallback = callback();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentExpirationTime = previousExpirationTime;
  }

  // A callback may return a continuation. The continuation should be scheduled
  // with the same priority and expiration as the just-finished callback.
  if (typeof continuationCallback === 'function') {
    var continuationNode = {
      callback: continuationCallback,
      priorityLevel: priorityLevel,
      expirationTime: expirationTime,
      next: null,
      previous: null
    };

    // Insert the new callback into the list, sorted by its expiration. This is
    // almost the same as the code in `scheduleCallback`, except the callback
    // is inserted into the list *before* callbacks of equal expiration instead
    // of after.
    if (firstCallbackNode === null) {
      // This is the first callback in the list.
      firstCallbackNode = continuationNode.next = continuationNode.previous = continuationNode;
    } else {
      var nextAfterContinuation = null;
      var node = firstCallbackNode;
      do {
        if (node.expirationTime >= expirationTime) {
          // This callback expires at or after the continuation. We will insert
          // the continuation *before* this callback.
          nextAfterContinuation = node;
          break;
        }
        node = node.next;
      } while (node !== firstCallbackNode);

      if (nextAfterContinuation === null) {
        // No equal or lower priority callback was found, which means the new
        // callback is the lowest priority callback in the list.
        nextAfterContinuation = firstCallbackNode;
      } else if (nextAfterContinuation === firstCallbackNode) {
        // The new callback is the highest priority callback in the list.
        firstCallbackNode = continuationNode;
        ensureHostCallbackIsScheduled();
      }

      var previous = nextAfterContinuation.previous;
      previous.next = nextAfterContinuation.previous = continuationNode;
      continuationNode.next = nextAfterContinuation;
      continuationNode.previous = previous;
    }
  }
}

function flushImmediateWork() {
  if (
  // Confirm we've exited the outer most event handler
  currentEventStartTime === -1 && firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority) {
    isExecutingCallback = true;
    try {
      do {
        flushFirstCallback();
      } while (
      // Keep flushing until there are no more immediate callbacks
      firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority);
    } finally {
      isExecutingCallback = false;
      if (firstCallbackNode !== null) {
        // There's still work remaining. Request another callback.
        ensureHostCallbackIsScheduled();
      } else {
        isHostCallbackScheduled = false;
      }
    }
  }
}

function flushWork(didTimeout) {
  // Exit right away if we're currently paused

  if (enableSchedulerDebugging && isSchedulerPaused) {
    return;
  }

  isExecutingCallback = true;
  var previousDidTimeout = currentDidTimeout;
  currentDidTimeout = didTimeout;
  try {
    if (didTimeout) {
      // Flush all the expired callbacks without yielding.
      while (firstCallbackNode !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        // TODO Wrap in feature flag
        // Read the current time. Flush all the callbacks that expire at or
        // earlier than that time. Then read the current time again and repeat.
        // This optimizes for as few performance.now calls as possible.
        var currentTime = exports.unstable_now();
        if (firstCallbackNode.expirationTime <= currentTime) {
          do {
            flushFirstCallback();
          } while (firstCallbackNode !== null && firstCallbackNode.expirationTime <= currentTime && !(enableSchedulerDebugging && isSchedulerPaused));
          continue;
        }
        break;
      }
    } else {
      // Keep flushing callbacks until we run out of time in the frame.
      if (firstCallbackNode !== null) {
        do {
          if (enableSchedulerDebugging && isSchedulerPaused) {
            break;
          }
          flushFirstCallback();
        } while (firstCallbackNode !== null && !shouldYieldToHost());
      }
    }
  } finally {
    isExecutingCallback = false;
    currentDidTimeout = previousDidTimeout;
    if (firstCallbackNode !== null) {
      // There's still work remaining. Request another callback.
      ensureHostCallbackIsScheduled();
    } else {
      isHostCallbackScheduled = false;
    }
    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;
    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_next(eventHandler) {
  var priorityLevel = void 0;
  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;
    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    var previousEventStartTime = currentEventStartTime;
    currentPriorityLevel = parentPriorityLevel;
    currentEventStartTime = exports.unstable_now();

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
      currentEventStartTime = previousEventStartTime;
      flushImmediateWork();
    }
  };
}

function unstable_scheduleCallback(callback, deprecated_options) {
  var startTime = currentEventStartTime !== -1 ? currentEventStartTime : exports.unstable_now();

  var expirationTime;
  if (typeof deprecated_options === 'object' && deprecated_options !== null && typeof deprecated_options.timeout === 'number') {
    // FIXME: Remove this branch once we lift expiration times out of React.
    expirationTime = startTime + deprecated_options.timeout;
  } else {
    switch (currentPriorityLevel) {
      case ImmediatePriority:
        expirationTime = startTime + IMMEDIATE_PRIORITY_TIMEOUT;
        break;
      case UserBlockingPriority:
        expirationTime = startTime + USER_BLOCKING_PRIORITY;
        break;
      case IdlePriority:
        expirationTime = startTime + IDLE_PRIORITY;
        break;
      case LowPriority:
        expirationTime = startTime + LOW_PRIORITY_TIMEOUT;
        break;
      case NormalPriority:
      default:
        expirationTime = startTime + NORMAL_PRIORITY_TIMEOUT;
    }
  }

  var newNode = {
    callback: callback,
    priorityLevel: currentPriorityLevel,
    expirationTime: expirationTime,
    next: null,
    previous: null
  };

  // Insert the new callback into the list, ordered first by expiration, then
  // by insertion. So the new callback is inserted any other callback with
  // equal expiration.
  if (firstCallbackNode === null) {
    // This is the first callback in the list.
    firstCallbackNode = newNode.next = newNode.previous = newNode;
    ensureHostCallbackIsScheduled();
  } else {
    var next = null;
    var node = firstCallbackNode;
    do {
      if (node.expirationTime > expirationTime) {
        // The new callback expires before this one.
        next = node;
        break;
      }
      node = node.next;
    } while (node !== firstCallbackNode);

    if (next === null) {
      // No callback with a later expiration was found, which means the new
      // callback has the latest expiration in the list.
      next = firstCallbackNode;
    } else if (next === firstCallbackNode) {
      // The new callback has the earliest expiration in the entire list.
      firstCallbackNode = newNode;
      ensureHostCallbackIsScheduled();
    }

    var previous = next.previous;
    previous.next = next.previous = newNode;
    newNode.next = next;
    newNode.previous = previous;
  }

  return newNode;
}

function unstable_pauseExecution() {
  isSchedulerPaused = true;
}

function unstable_continueExecution() {
  isSchedulerPaused = false;
  if (firstCallbackNode !== null) {
    ensureHostCallbackIsScheduled();
  }
}

function unstable_getFirstCallbackNode() {
  return firstCallbackNode;
}

function unstable_cancelCallback(callbackNode) {
  var next = callbackNode.next;
  if (next === null) {
    // Already cancelled.
    return;
  }

  if (next === callbackNode) {
    // This is the only scheduled callback. Clear the list.
    firstCallbackNode = null;
  } else {
    // Remove the callback from its position in the list.
    if (callbackNode === firstCallbackNode) {
      firstCallbackNode = next;
    }
    var previous = callbackNode.previous;
    previous.next = next;
    next.previous = previous;
  }

  callbackNode.next = callbackNode.previous = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

function unstable_shouldYield() {
  return !currentDidTimeout && (firstCallbackNode !== null && firstCallbackNode.expirationTime < currentExpirationTime || shouldYieldToHost());
}

// The remaining code is essentially a polyfill for requestIdleCallback. It
// works by scheduling a requestAnimationFrame, storing the time for the start
// of the frame, then scheduling a postMessage which gets scheduled after paint.
// Within the postMessage handler do as much work as possible until time + frame
// rate. By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated. We want to be using a
// consistent implementation.
var localDate = Date;

// This initialization code may run even on server environments if a component
// just imports ReactDOM (e.g. for findDOMNode). Some environments might not
// have setTimeout or clearTimeout. However, we always expect them to be defined
// on the client. https://github.com/facebook/react/pull/13088
var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;

// We don't expect either of these to necessarily be defined, but we will error
// later if they are missing on the client.
var localRequestAnimationFrame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : undefined;
var localCancelAnimationFrame = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : undefined;

// requestAnimationFrame does not run when the tab is in the background. If
// we're backgrounded we prefer for that work to happen so that the page
// continues to load in the background. So we also schedule a 'setTimeout' as
// a fallback.
// TODO: Need a better heuristic for backgrounded work.
var ANIMATION_FRAME_TIMEOUT = 100;
var rAFID;
var rAFTimeoutID;
var requestAnimationFrameWithTimeout = function (callback) {
  // schedule rAF and also a setTimeout
  rAFID = localRequestAnimationFrame(function (timestamp) {
    // cancel the setTimeout
    localClearTimeout(rAFTimeoutID);
    callback(timestamp);
  });
  rAFTimeoutID = localSetTimeout(function () {
    // cancel the requestAnimationFrame
    localCancelAnimationFrame(rAFID);
    callback(exports.unstable_now());
  }, ANIMATION_FRAME_TIMEOUT);
};

if (hasNativePerformanceNow) {
  var Performance = performance;
  exports.unstable_now = function () {
    return Performance.now();
  };
} else {
  exports.unstable_now = function () {
    return localDate.now();
  };
}

var requestHostCallback;
var cancelHostCallback;
var shouldYieldToHost;

var globalValue = null;
if (typeof window !== 'undefined') {
  globalValue = window;
} else if (typeof global !== 'undefined') {
  globalValue = global;
}

if (globalValue && globalValue._schedMock) {
  // Dynamic injection, only for testing purposes.
  var globalImpl = globalValue._schedMock;
  requestHostCallback = globalImpl[0];
  cancelHostCallback = globalImpl[1];
  shouldYieldToHost = globalImpl[2];
  exports.unstable_now = globalImpl[3];
} else if (
// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' ||
// Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _flushCallback = function (didTimeout) {
    if (_callback !== null) {
      try {
        _callback(didTimeout);
      } finally {
        _callback = null;
      }
    }
  };
  requestHostCallback = function (cb, ms) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0, false);
    }
  };
  cancelHostCallback = function () {
    _callback = null;
  };
  shouldYieldToHost = function () {
    return false;
  };
} else {
  if (typeof console !== 'undefined') {
    // TODO: Remove fb.me link
    if (typeof localRequestAnimationFrame !== 'function') {
      console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
    if (typeof localCancelAnimationFrame !== 'function') {
      console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
  }

  var scheduledHostCallback = null;
  var isMessageEventScheduled = false;
  var timeoutTime = -1;

  var isAnimationFrameScheduled = false;

  var isFlushingHostCallback = false;

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  shouldYieldToHost = function () {
    return frameDeadline <= exports.unstable_now();
  };

  // We use the postMessage trick to defer idle work until after the repaint.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = function (event) {
    isMessageEventScheduled = false;

    var prevScheduledCallback = scheduledHostCallback;
    var prevTimeoutTime = timeoutTime;
    scheduledHostCallback = null;
    timeoutTime = -1;

    var currentTime = exports.unstable_now();

    var didTimeout = false;
    if (frameDeadline - currentTime <= 0) {
      // There's no time left in this idle period. Check if the callback has
      // a timeout and whether it's been exceeded.
      if (prevTimeoutTime !== -1 && prevTimeoutTime <= currentTime) {
        // Exceeded the timeout. Invoke the callback even though there's no
        // time left.
        didTimeout = true;
      } else {
        // No timeout.
        if (!isAnimationFrameScheduled) {
          // Schedule another animation callback so we retry later.
          isAnimationFrameScheduled = true;
          requestAnimationFrameWithTimeout(animationTick);
        }
        // Exit without invoking the callback.
        scheduledHostCallback = prevScheduledCallback;
        timeoutTime = prevTimeoutTime;
        return;
      }
    }

    if (prevScheduledCallback !== null) {
      isFlushingHostCallback = true;
      try {
        prevScheduledCallback(didTimeout);
      } finally {
        isFlushingHostCallback = false;
      }
    }
  };

  var animationTick = function (rafTime) {
    if (scheduledHostCallback !== null) {
      // Eagerly schedule the next animation callback at the beginning of the
      // frame. If the scheduler queue is not empty at the end of the frame, it
      // will continue flushing inside that callback. If the queue *is* empty,
      // then it will exit immediately. Posting the callback at the start of the
      // frame ensures it's fired within the earliest possible frame. If we
      // waited until the end of the frame to post the callback, we risk the
      // browser skipping a frame and not firing the callback until the frame
      // after that.
      requestAnimationFrameWithTimeout(animationTick);
    } else {
      // No pending work. Exit.
      isAnimationFrameScheduled = false;
      return;
    }

    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If the calculated frame time gets lower than 8, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isMessageEventScheduled) {
      isMessageEventScheduled = true;
      port.postMessage(undefined);
    }
  };

  requestHostCallback = function (callback, absoluteTimeout) {
    scheduledHostCallback = callback;
    timeoutTime = absoluteTimeout;
    if (isFlushingHostCallback || absoluteTimeout < 0) {
      // Don't wait for the next frame. Continue working ASAP, in a new event.
      port.postMessage(undefined);
    } else if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger rIC as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      requestAnimationFrameWithTimeout(animationTick);
    }
  };

  cancelHostCallback = function () {
    scheduledHostCallback = null;
    isMessageEventScheduled = false;
    timeoutTime = -1;
  };
}

exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_IdlePriority = IdlePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_next = unstable_next;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_shouldYield = unstable_shouldYield;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
  })();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/actions/campaignAction.js":
/*!***************************************!*\
  !*** ./src/actions/campaignAction.js ***!
  \***************************************/
/*! exports provided: FETCH_CAMPAIGNS_REPORT_PENDING, FETCH_CAMPAIGNS_REPORT_COMPLETE, FETCH_CAMPAIGNS_REPORT_ERROR, fetchCampaignsReport, FETCH_MY_CAMPAIGNS_PENDING, FETCH_MY_CAMPAIGNS_COMPLETE, FETCH_MY_CAMPAIGNS_ERROR, fetchMyCampaigns, FETCH_INVESTED_CAMPAIGNS_PENDING, FETCH_INVESTED_CAMPAIGNS_COMPLETE, FETCH_INVESTED_CAMPAIGNS_ERROR, fetchInvestedCampaigns, FETCH_PLEDGE_RECEIVED_PENDING, FETCH_PLEDGE_RECEIVED_COMPLETE, FETCH_PLEDGE_RECEIVED_ERROR, fetchPledgeReceived, FETCH_BOOKMARK_CAMPAIGNS_PENDING, FETCH_BOOKMARK_CAMPAIGNS_COMPLETE, FETCH_BOOKMARK_CAMPAIGNS_ERROR, fetchBookmarkCampaigns, FETCH_REWARDS_PENDING, FETCH_REWARDS_COMPLETE, FETCH_REWARDS_ERROR, fetchRewards, SAVE_CAMPAIGN_UPDATES_PENDING, SAVE_CAMPAIGN_UPDATES_COMPLETE, SAVE_CAMPAIGN_UPDATES_ERROR, saveCampaignUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CAMPAIGNS_REPORT_PENDING", function() { return FETCH_CAMPAIGNS_REPORT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CAMPAIGNS_REPORT_COMPLETE", function() { return FETCH_CAMPAIGNS_REPORT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CAMPAIGNS_REPORT_ERROR", function() { return FETCH_CAMPAIGNS_REPORT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCampaignsReport", function() { return fetchCampaignsReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MY_CAMPAIGNS_PENDING", function() { return FETCH_MY_CAMPAIGNS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MY_CAMPAIGNS_COMPLETE", function() { return FETCH_MY_CAMPAIGNS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MY_CAMPAIGNS_ERROR", function() { return FETCH_MY_CAMPAIGNS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMyCampaigns", function() { return fetchMyCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INVESTED_CAMPAIGNS_PENDING", function() { return FETCH_INVESTED_CAMPAIGNS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INVESTED_CAMPAIGNS_COMPLETE", function() { return FETCH_INVESTED_CAMPAIGNS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INVESTED_CAMPAIGNS_ERROR", function() { return FETCH_INVESTED_CAMPAIGNS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInvestedCampaigns", function() { return fetchInvestedCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLEDGE_RECEIVED_PENDING", function() { return FETCH_PLEDGE_RECEIVED_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLEDGE_RECEIVED_COMPLETE", function() { return FETCH_PLEDGE_RECEIVED_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLEDGE_RECEIVED_ERROR", function() { return FETCH_PLEDGE_RECEIVED_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPledgeReceived", function() { return fetchPledgeReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BOOKMARK_CAMPAIGNS_PENDING", function() { return FETCH_BOOKMARK_CAMPAIGNS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BOOKMARK_CAMPAIGNS_COMPLETE", function() { return FETCH_BOOKMARK_CAMPAIGNS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BOOKMARK_CAMPAIGNS_ERROR", function() { return FETCH_BOOKMARK_CAMPAIGNS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBookmarkCampaigns", function() { return fetchBookmarkCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REWARDS_PENDING", function() { return FETCH_REWARDS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REWARDS_COMPLETE", function() { return FETCH_REWARDS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REWARDS_ERROR", function() { return FETCH_REWARDS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRewards", function() { return fetchRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CAMPAIGN_UPDATES_PENDING", function() { return SAVE_CAMPAIGN_UPDATES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CAMPAIGN_UPDATES_COMPLETE", function() { return SAVE_CAMPAIGN_UPDATES_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CAMPAIGN_UPDATES_ERROR", function() { return SAVE_CAMPAIGN_UPDATES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCampaignUpdates", function() { return saveCampaignUpdates; });
var headers = {
  'Content-Type': 'application/json',
  'WP-Nonce': WPCF.nonce //CAMPAINGS REPORTS

};
var FETCH_CAMPAIGNS_REPORT_PENDING = 'fetch_campaigns_report_pending';
var FETCH_CAMPAIGNS_REPORT_COMPLETE = 'fetch_campaigns_report_complete';
var FETCH_CAMPAIGNS_REPORT_ERROR = 'fetch_campaigns_report_error';
var fetchCampaignsReport = function fetchCampaignsReport(args) {
  return function (dispatch) {
    dispatch({
      type: FETCH_CAMPAIGNS_REPORT_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/campaigns-report?").concat(args);
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_CAMPAIGNS_REPORT_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_CAMPAIGNS_REPORT_ERROR,
        payload: payload
      });
    });
  };
}; //MY CAMPAINGS

var FETCH_MY_CAMPAIGNS_PENDING = 'fetch_my_campaigns_pending';
var FETCH_MY_CAMPAIGNS_COMPLETE = 'fetch_my_campaigns_complete';
var FETCH_MY_CAMPAIGNS_ERROR = 'fetch_my_campaigns_error';
var fetchMyCampaigns = function fetchMyCampaigns() {
  return function (dispatch) {
    dispatch({
      type: FETCH_MY_CAMPAIGNS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/my-campaigns");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_MY_CAMPAIGNS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_MY_CAMPAIGNS_ERROR,
        payload: payload
      });
    });
  };
}; //INVESTED CAMPAIGNS

var FETCH_INVESTED_CAMPAIGNS_PENDING = 'fetch_invested_campaigns_pending';
var FETCH_INVESTED_CAMPAIGNS_COMPLETE = 'fetch_invested_campaigns_complete';
var FETCH_INVESTED_CAMPAIGNS_ERROR = 'fetch_invested_campaigns_error';
var fetchInvestedCampaigns = function fetchInvestedCampaigns() {
  return function (dispatch) {
    dispatch({
      type: FETCH_INVESTED_CAMPAIGNS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/invested-campaigns");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_INVESTED_CAMPAIGNS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_INVESTED_CAMPAIGNS_ERROR,
        payload: payload
      });
    });
  };
}; //PLEDGE RECEIVED

var FETCH_PLEDGE_RECEIVED_PENDING = 'fetch_pledge_received_pending';
var FETCH_PLEDGE_RECEIVED_COMPLETE = 'fetch_pledge_received_complete';
var FETCH_PLEDGE_RECEIVED_ERROR = 'fetch_pledge_received_error';
var fetchPledgeReceived = function fetchPledgeReceived() {
  return function (dispatch) {
    dispatch({
      type: FETCH_PLEDGE_RECEIVED_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/pledge-received");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_PLEDGE_RECEIVED_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_PLEDGE_RECEIVED_ERROR,
        payload: payload
      });
    });
  };
}; //BOOKMARK CAMPAIGNS

var FETCH_BOOKMARK_CAMPAIGNS_PENDING = 'fetch_bookmark_campaigns_pending';
var FETCH_BOOKMARK_CAMPAIGNS_COMPLETE = 'fetch_bookmark_campaigns_complete';
var FETCH_BOOKMARK_CAMPAIGNS_ERROR = 'fetch_bookmark_campaigns_error';
var fetchBookmarkCampaigns = function fetchBookmarkCampaigns() {
  return function (dispatch) {
    dispatch({
      type: FETCH_BOOKMARK_CAMPAIGNS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/bookmark-campaigns");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_BOOKMARK_CAMPAIGNS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_BOOKMARK_CAMPAIGNS_ERROR,
        payload: payload
      });
    });
  };
}; //CAMPAIGN REWARDS

var FETCH_REWARDS_PENDING = 'fetch_rewards_pending';
var FETCH_REWARDS_COMPLETE = 'fetch_rewards_complete';
var FETCH_REWARDS_ERROR = 'fetch_rewards_error';
var fetchRewards = function fetchRewards() {
  return function (dispatch) {
    dispatch({
      type: FETCH_REWARDS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/rewards");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_REWARDS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_REWARDS_ERROR,
        payload: payload
      });
    });
  };
}; //SAVE USER DATA

var SAVE_CAMPAIGN_UPDATES_PENDING = 'save_campaign_updates_pending';
var SAVE_CAMPAIGN_UPDATES_COMPLETE = 'save_campaign_updates_complete';
var SAVE_CAMPAIGN_UPDATES_ERROR = 'save_campaign_updates_error';
var saveCampaignUpdates = function saveCampaignUpdates(data) {
  return function (dispatch) {
    dispatch({
      type: SAVE_CAMPAIGN_UPDATES_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/save-campaign-updates");
    var option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: SAVE_CAMPAIGN_UPDATES_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: SAVE_CAMPAIGN_UPDATES_ERROR,
        payload: payload
      });
    });
  };
};

/***/ }),

/***/ "./src/actions/orderAction.js":
/*!************************************!*\
  !*** ./src/actions/orderAction.js ***!
  \************************************/
/*! exports provided: FETCH_ORDERS_PENDING, FETCH_ORDERS_COMPLETE, FETCH_ORDERS_ERROR, fetchOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_PENDING", function() { return FETCH_ORDERS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_COMPLETE", function() { return FETCH_ORDERS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_ERROR", function() { return FETCH_ORDERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return fetchOrders; });
var headers = {
  'Content-Type': 'application/json',
  'WP-Nonce': WPCF.nonce //ORDERS LIST

};
var FETCH_ORDERS_PENDING = 'fetch_orders_pending';
var FETCH_ORDERS_COMPLETE = 'fetch_orders_complete';
var FETCH_ORDERS_ERROR = 'fetch_orders_error';
var fetchOrders = function fetchOrders() {
  return function (dispatch) {
    dispatch({
      type: FETCH_ORDERS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/orders");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_ORDERS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_ORDERS_ERROR,
        payload: payload
      });
    });
  };
};

/***/ }),

/***/ "./src/actions/userAction.js":
/*!***********************************!*\
  !*** ./src/actions/userAction.js ***!
  \***********************************/
/*! exports provided: FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_COMPLETE, FETCH_COUNTRIES_ERROR, fetchCountries, FETCH_USER_PENDING, FETCH_USER_COMPLETE, FETCH_USER_ERROR, fetchUser, SAVE_USER_DATA_PENDING, SAVE_USER_DATA_COMPLETE, SAVE_USER_DATA_ERROR, saveUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COUNTRIES_PENDING", function() { return FETCH_COUNTRIES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COUNTRIES_COMPLETE", function() { return FETCH_COUNTRIES_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COUNTRIES_ERROR", function() { return FETCH_COUNTRIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCountries", function() { return fetchCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_PENDING", function() { return FETCH_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_COMPLETE", function() { return FETCH_USER_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_ERROR", function() { return FETCH_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_DATA_PENDING", function() { return SAVE_USER_DATA_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_DATA_COMPLETE", function() { return SAVE_USER_DATA_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_DATA_ERROR", function() { return SAVE_USER_DATA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserData", function() { return saveUserData; });
var headers = {
  'Content-Type': 'application/json',
  'WP-Nonce': WPCF.nonce //FETCH COUNTRIES

};
var FETCH_COUNTRIES_PENDING = 'fetch_countries_pending';
var FETCH_COUNTRIES_COMPLETE = 'fetch_countries_complete';
var FETCH_COUNTRIES_ERROR = 'fetch_countries_error';
var fetchCountries = function fetchCountries() {
  return function (dispatch) {
    dispatch({
      type: FETCH_COUNTRIES_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/wc-countries");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_COUNTRIES_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_COUNTRIES_ERROR,
        payload: payload
      });
    });
  };
}; //FETCH USER DATA

var FETCH_USER_PENDING = 'fetch_user_pending';
var FETCH_USER_COMPLETE = 'fetch_user_complete';
var FETCH_USER_ERROR = 'fetch_user_error';
var fetchUser = function fetchUser() {
  return function (dispatch) {
    dispatch({
      type: FETCH_USER_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/user-profile");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_USER_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_USER_ERROR,
        payload: payload
      });
    });
  };
}; //SAVE USER DATA

var SAVE_USER_DATA_PENDING = 'save_user_data_pending';
var SAVE_USER_DATA_COMPLETE = 'save_user_data_complete';
var SAVE_USER_DATA_ERROR = 'save_user_data_error';
var saveUserData = function saveUserData(data) {
  return function (dispatch) {
    dispatch({
      type: SAVE_USER_DATA_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/save-userdata");
    var option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: SAVE_USER_DATA_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: SAVE_USER_DATA_ERROR,
        payload: payload
      });
    });
  };
};

/***/ }),

/***/ "./src/actions/withdrawAction.js":
/*!***************************************!*\
  !*** ./src/actions/withdrawAction.js ***!
  \***************************************/
/*! exports provided: FETCH_WITHDRAWS_PENDING, FETCH_WITHDRAWS_COMPLETE, FETCH_WITHDRAWS_ERROR, fetchWithdraws, POST_WITHDRAW_REQUEST_PENDING, POST_WITHDRAW_REQUEST_COMPLETE, POST_WITHDRAW_REQUEST_ERROR, postWithdrawRequest, FETCH_WITHDRAW_METHODS_PENDING, FETCH_WITHDRAW_METHODS_COMPLETE, FETCH_WITHDRAW_METHODS_ERROR, fetchWithdrawMethods, SAVE_WITHDRAW_ACCOUNT_PENDING, SAVE_WITHDRAW_ACCOUNT_COMPLETE, SAVE_WITHDRAW_ACCOUNT_ERROR, saveWithdrawAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAWS_PENDING", function() { return FETCH_WITHDRAWS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAWS_COMPLETE", function() { return FETCH_WITHDRAWS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAWS_ERROR", function() { return FETCH_WITHDRAWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWithdraws", function() { return fetchWithdraws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_WITHDRAW_REQUEST_PENDING", function() { return POST_WITHDRAW_REQUEST_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_WITHDRAW_REQUEST_COMPLETE", function() { return POST_WITHDRAW_REQUEST_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_WITHDRAW_REQUEST_ERROR", function() { return POST_WITHDRAW_REQUEST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postWithdrawRequest", function() { return postWithdrawRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAW_METHODS_PENDING", function() { return FETCH_WITHDRAW_METHODS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAW_METHODS_COMPLETE", function() { return FETCH_WITHDRAW_METHODS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHDRAW_METHODS_ERROR", function() { return FETCH_WITHDRAW_METHODS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWithdrawMethods", function() { return fetchWithdrawMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_WITHDRAW_ACCOUNT_PENDING", function() { return SAVE_WITHDRAW_ACCOUNT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_WITHDRAW_ACCOUNT_COMPLETE", function() { return SAVE_WITHDRAW_ACCOUNT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_WITHDRAW_ACCOUNT_ERROR", function() { return SAVE_WITHDRAW_ACCOUNT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWithdrawAccount", function() { return saveWithdrawAccount; });
var headers = {
  'Content-Type': 'application/json',
  'WP-Nonce': WPCF.nonce //FETCH USER WITHDRAWS

};
var FETCH_WITHDRAWS_PENDING = 'fetch_withdraws_pending';
var FETCH_WITHDRAWS_COMPLETE = 'fetch_withdraws_complete';
var FETCH_WITHDRAWS_ERROR = 'fetch_withdraws_error';
var fetchWithdraws = function fetchWithdraws() {
  return function (dispatch) {
    dispatch({
      type: FETCH_WITHDRAWS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/withdraws");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_WITHDRAWS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_WITHDRAWS_ERROR,
        payload: payload
      });
    });
  };
}; //POST WITHDRAW REQUEST

var POST_WITHDRAW_REQUEST_PENDING = 'post_withdraw_request_pending';
var POST_WITHDRAW_REQUEST_COMPLETE = 'post_withdraw_request_complete';
var POST_WITHDRAW_REQUEST_ERROR = 'post_withdraw_request_error';
var postWithdrawRequest = function postWithdrawRequest(data) {
  return function (dispatch) {
    dispatch({
      type: POST_WITHDRAW_REQUEST_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/withdraw-request");
    var option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: POST_WITHDRAW_REQUEST_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: POST_WITHDRAW_REQUEST_ERROR,
        payload: payload
      });
    });
  };
}; //FETCH WITHDRAW METHODS

var FETCH_WITHDRAW_METHODS_PENDING = 'fetch_withdraw_methods_pending';
var FETCH_WITHDRAW_METHODS_COMPLETE = 'fetch_withdraw_methods_complete';
var FETCH_WITHDRAW_METHODS_ERROR = 'fetch_withdraw_methods_error';
var fetchWithdrawMethods = function fetchWithdrawMethods() {
  return function (dispatch) {
    dispatch({
      type: FETCH_WITHDRAW_METHODS_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/withdraw-methods");
    var option = {
      method: 'GET',
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: FETCH_WITHDRAW_METHODS_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: FETCH_WITHDRAW_METHODS_ERROR,
        payload: payload
      });
    });
  };
}; //SAVE WITHDRAW ACCOUNT

var SAVE_WITHDRAW_ACCOUNT_PENDING = 'save_withdraw_account_pending';
var SAVE_WITHDRAW_ACCOUNT_COMPLETE = 'save_withdraw_account_complete';
var SAVE_WITHDRAW_ACCOUNT_ERROR = 'save_withdraw_account_error';
var saveWithdrawAccount = function saveWithdrawAccount(data) {
  return function (dispatch) {
    dispatch({
      type: SAVE_WITHDRAW_ACCOUNT_PENDING
    });
    var fetchURL = "".concat(WPCF.rest_url, "/save-withdraw-account");
    var option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    };
    fetch(fetchURL, option).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return dispatch({
        type: SAVE_WITHDRAW_ACCOUNT_COMPLETE,
        payload: payload
      });
    })["catch"](function (payload) {
      return dispatch({
        type: SAVE_WITHDRAW_ACCOUNT_ERROR,
        payload: payload
      });
    });
  };
};

/***/ }),

/***/ "./src/components/campaignUpdate.js":
/*!******************************************!*\
  !*** ./src/components/campaignUpdate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_datePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/datePicker */ "./src/components/datePicker.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CampaignUpdate =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignUpdate, _Component);

  function CampaignUpdate(props) {
    var _this;

    _classCallCheck(this, CampaignUpdate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CampaignUpdate).call(this, props));
    _this.state = {
      campaignId: _this.props.campaignId,
      updates: _this.props.updates
    };
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.removeItem = _this.removeItem.bind(_assertThisInitialized(_this));
    _this.onChangeInput = _this.onChangeInput.bind(_assertThisInitialized(_this));
    _this.onSubmitUpates = _this.onSubmitUpates.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CampaignUpdate, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props$campaign = this.props.campaign,
          saveReq = _this$props$campaign.saveReq,
          error = _this$props$campaign.error;

      if (saveReq !== prevProps.campaign.saveReq) {
        if (saveReq == 'complete') {
          alert('data saved');
        }

        if (saveReq == 'error') {
          alert(error);
        }
      }
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var updates = [].concat(_toConsumableArray(this.state.updates), [{
        date: '',
        title: '',
        details: ''
      }]);
      this.setState({
        updates: updates
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      var updates = _toConsumableArray(this.state.updates);

      updates.splice(index, 1);
      this.setState({
        updates: updates
      });
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput(e, index) {
      var updates = _toConsumableArray(this.state.updates);

      updates[index][e.target.name] = e.target.value;
      this.setState(updates);
    }
  }, {
    key: "onSubmitUpates",
    value: function onSubmitUpates(e) {
      e.preventDefault();

      var postData = _objectSpread({}, this.state);

      this.props.saveCampaignUpdates(postData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var updates = this.state.updates;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-forms-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "withdraw-method-form",
        onSubmit: this.onSubmitUpates
      }, updates.length > 0 && updates.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: ""
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_datePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "date",
          value: item.date,
          onChange: function onChange(e) {
            return _this2.onChangeInput(e, index);
          },
          format: "yy-mm-dd"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: ""
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Update Title:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "title",
          value: item.title,
          onChange: function onChange(e) {
            return _this2.onChangeInput(e, index);
          },
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: ""
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Update Details:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "textarea",
          name: "details",
          value: item.details,
          onChange: function onChange(e) {
            return _this2.onChangeInput(e, index);
          },
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          onClick: function onClick() {
            return _this2.removeItem(index);
          }
        }, "Remove"));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.addItem
      }, "Add Update"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-account-save-btn-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "wpcf-btn"
      }, "Save Updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.props.onClickUpdates('', '');
        }
      }, " Back "))))));
    }
  }]);

  return CampaignUpdate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    campaign: state.myCampaign
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  saveCampaignUpdates: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["saveCampaignUpdates"]
})(CampaignUpdate));

/***/ }),

/***/ "./src/components/circleProgress.js":
/*!******************************************!*\
  !*** ./src/components/circleProgress.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CircleProgress = function CircleProgress(props) {
  var fill = props.fill,
      emptyFill = props.emptyFill,
      size = props.size;
  var thickness = Number(props.thickness);
  var percent = props.percent > 100 ? 100 : props.percent;
  var ratio = 44;
  var circumference = 2 * Math.PI * ((ratio - thickness) / 2);
  var progress = circumference - circumference / 100 * percent;
  var style = {
    display: 'block',
    width: size.toString().replace('px', '') + 'px',
    height: size.toString().replace('px', '') + 'px',
    transform: "rotate(-90deg)"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "".concat(ratio / 2, " ").concat(ratio / 2, " ").concat(ratio, " ").concat(ratio),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: ratio,
    cy: ratio,
    r: (ratio - thickness) / 2,
    fill: "none",
    stroke: emptyFill,
    strokeWidth: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: ratio,
    cy: ratio,
    r: (ratio - thickness) / 2,
    fill: "none",
    stroke: fill,
    strokeWidth: thickness,
    strokeDasharray: circumference,
    strokeDashoffset: progress,
    strokeLinecap: "round"
  }));
};

CircleProgress.defaultProps = {
  fill: "#00A92F",
  emptyFill: "#ADAECF",
  size: 16,
  thickness: 6,
  percent: 0
};
/* harmony default export */ __webpack_exports__["default"] = (CircleProgress);

/***/ }),

/***/ "./src/components/contentHeader.js":
/*!*****************************************!*\
  !*** ./src/components/contentHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contentHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_decodeEntities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/decodeEntities */ "./src/helpers/decodeEntities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var contentHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(contentHeader, _Component);

  function contentHeader() {
    _classCallCheck(this, contentHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(contentHeader).apply(this, arguments));
  }

  _createClass(contentHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-content-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-content-header-left"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "wpcf-btn wpcf-btn-round",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-icon fas fa-plus"
      }), "Create Campaign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "wpcf-content-heading"
      }, Object(_helpers_decodeEntities__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.title)));
    }
  }]);

  return contentHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/datePicker.js":
/*!**************************************!*\
  !*** ./src/components/datePicker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          name = _this$props.name,
          onChange = _this$props.onChange,
          format = _this$props.format;
      var inputRef = this.inputRef.current;
      jQuery(inputRef).datepicker({
        dateFormat: format,
        onSelect: function onSelect(value) {
          var obj = {
            target: {
              name: name,
              value: value
            }
          };
          onChange(obj);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.inputRef,
        name: name,
        defaultValue: value,
        placeholder: placeholder || ''
      });
    }
  }]);

  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./src/components/exportCSV.js":
/*!*************************************!*\
  !*** ./src/components/exportCSV.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function exportToCsv(data, file_name) {
  var csv = '';
  data.forEach(function (row) {
    csv += row.join(',');
    csv += "\n";
  });
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = file_name + '.csv';
  hiddenElement.click();
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data,
      file_name = props.file_name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "wpcf-btn wpcf-btn-round wpcf-btn-outline wpcf-success-btn",
    onClick: function onClick(e) {
      return exportToCsv(data, file_name);
    }
  }, "Download CSV");
});

/***/ }),

/***/ "./src/components/itemCampaign.js":
/*!****************************************!*\
  !*** ./src/components/itemCampaign.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circleProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circleProgress */ "./src/components/circleProgress.js");
/* harmony import */ var _helpers_decodeEntities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/decodeEntities */ "./src/helpers/decodeEntities.js");




var ItemCampaign = function ItemCampaign(props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "wpcf-campaign-thumbnail",
    title: Object(_helpers_decodeEntities__WEBPACK_IMPORTED_MODULE_2__["default"])(data.title),
    href: data.permalink,
    dangerouslySetInnerHTML: {
      __html: data.thumbnail
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-heading" + (props.invested !== true ? "" : "wpcf-has-not-campaign-link")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "wpcf-campaign-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.permalink
  }, Object(_helpers_decodeEntities__WEBPACK_IMPORTED_MODULE_2__["default"])(data.title))), props.invested !== true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Report",
    title: "Report",
    onClick: function onClick() {
      return props.onClickReport({
        id: data.id,
        name: data.title
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-chart-bar"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Edit",
    title: "Edit",
    onClick: function onClick() {
      return props.onClickUpdates(data.id, data.updates);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-edit"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Delete",
    title: "Delete"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-trash-alt"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "wpcf-campaign-author"
  }, "by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0)"
  }, data.author_name), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-infos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-raised"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_circleProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 50,
    thickness: 3,
    percent: Math.round(data.raised_percent)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wpcf-raised-percent"
  }, Math.round(data.raised_percent), "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, WPCF.wc_currency_symbol + data.total_raised), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Fund Raised"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, WPCF.wc_currency_symbol + data.funding_goal), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Funding Goal"))), data.end_method !== 'never_end' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.is_started ? data.days_remaining : data.days_until_launch), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Days ", data.is_started ? "to go" : "Until Launch"))), props.pledge && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-campaign-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "wpcf-btn wpcf-btn-round wpcf-btn-outline wpcf-btn-sm",
    href: data.permalink
  }, "Pledge More")))));
};

ItemCampaign.defaultProps = {
  invested: false
};
/* harmony default export */ __webpack_exports__["default"] = (ItemCampaign);

/***/ }),

/***/ "./src/components/itemOrder.js":
/*!*************************************!*\
  !*** ./src/components/itemOrder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getStatusColor(status) {
  switch (status) {
    case 'cancelled':
    case 'failed':
      return '#c91818';

    case 'completed':
    case 'Done':
      return '#00a92f';

    default:
      return '#2b51a1';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$data = props.data,
      details = _props$data.details,
      billing = _props$data.details.billing;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "#", details.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, billing.first_name + ' ' + billing.last_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: details.total
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, details.formatted_c_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      color: getStatusColor(details.status)
    }
  }, details.status_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      color: getStatusColor(details.fulfillment)
    }
  }, details.fulfillment), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      return props.onClickDetails(details);
    }
  }, " Details ")));
});

/***/ }),

/***/ "./src/components/itemPledgeReceived.js":
/*!**********************************************!*\
  !*** ./src/components/itemPledgeReceived.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getStatusColor(status) {
  switch (status) {
    case 'cancelled':
    case 'failed':
      return '#c91818';

    case 'completed':
      return '#00a92f';

    default:
      return '#2b51a1';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$data = props.data,
      details = _props$data.details,
      _props$data$details = _props$data.details,
      billing = _props$data$details.billing,
      raised = _props$data$details.raised,
      receivable = _props$data$details.receivable,
      marketplace = _props$data$details.marketplace,
      status = _props$data$details.status,
      status_name = _props$data$details.status_name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, billing.first_name + ' ' + billing.last_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: raised
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: receivable
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: marketplace
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      color: getStatusColor(status)
    }
  }, status_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      return props.onClickDetails(details);
    }
  }, " Details ")));
});

/***/ }),

/***/ "./src/components/itemReward.js":
/*!**************************************!*\
  !*** ./src/components/itemReward.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnail"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.image,
    alt: data.title
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.endmonth + ' ' + data.endyear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Estimate Delivery Date")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "perks"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Perks about to end"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.interval.d), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Days")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.interval.h), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hrs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.interval.i), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Min")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.interval.s), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sec"))));
});

/***/ }),

/***/ "./src/components/itemWithdraw.js":
/*!****************************************!*\
  !*** ./src/components/itemWithdraw.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.campaign_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.raised_percentage, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: data.total_raised
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: data.total_receivable
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      return props.onClickWithdrawDetails(data);
    }
  }, " Withdraw ")));
});

/***/ }),

/***/ "./src/components/lineGraph.js":
/*!*************************************!*\
  !*** ./src/components/lineGraph.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LineGraph =
/*#__PURE__*/
function (_Component) {
  _inherits(LineGraph, _Component);

  function LineGraph(props) {
    var _this;

    _classCallCheck(this, LineGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineGraph).call(this, props));
    _this.chartRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(LineGraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartRef = this.chartRef.current.getContext("2d");
      new Chart(chartRef, {
        type: "line",
        data: {
          labels: _toConsumableArray(this.props.label),
          datasets: [{
            label: new Date().getFullYear(),
            fill: false,
            data: _toConsumableArray(this.props.format),
            pointRadius: 5,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#3060c5',
            pointHoverBorderColor: '#fff',
            backgroundColor: '#3060c5',
            borderColor: '#dcdce4',
            borderWidth: 3,
            pointStyle: 'circle'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              stacked: true
            }]
          },
          elements: {
            line: {
              tension: 0
            }
          },
          legend: {
            display: false
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-report-line-graph"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
        id: "lineChart",
        ref: this.chartRef
      }));
    }
  }]);

  return LineGraph;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LineGraph);

/***/ }),

/***/ "./src/components/orderDetails.js":
/*!****************************************!*\
  !*** ./src/components/orderDetails.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data,
      _props$data = props.data,
      billing = _props$data.billing,
      line_items = _props$data.line_items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-dashboard-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0)",
    onClick: function onClick() {
      return props.onClickBack('');
    }
  }, "Go Back Order List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Order #", data.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Created ", data.formatted_c_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpcf-dashboard-content-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Order Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.first_name + ' ' + billing.last_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, line_items.length ? line_items[0].product_name : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: 'Pledged ' + data.total
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Payment Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.status_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.formatted_oc_date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Fulfillment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.fulfillment))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Billing Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.first_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.last_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.company)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.country_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.formatted_b_addr)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Zip Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, billing.postcode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Note"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.customer_note)))));
});

/***/ }),

/***/ "./src/components/pagination.js":
/*!**************************************!*\
  !*** ./src/components/pagination.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var defaultProps = {
  initialPage: 1,
  filterValue: ""
};

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    _this.state = {
      pager: {}
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.items && this.props.items.length) {
        this.setPage(this.props.initialPage);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var changeItem = this.props.items.length !== prevProps.items.length;
      var changefilter = this.props.filterValue !== prevProps.filterValue;

      if (changeItem || changefilter) {
        this.setPage(this.props.initialPage);
      }
    }
  }, {
    key: "setPage",
    value: function setPage(currentPage) {
      var items = this.props.items;
      var pager = this.state.pager;

      if (currentPage < 1 || currentPage > pager.totalPages) {
        return;
      }

      pager = this.getPager(items.length, currentPage);
      var pageItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.setState({
        pager: pager
      });
      this.props.onChangePage(pageItems);
    }
  }, {
    key: "getPager",
    value: function getPager(totalItems, currentPage) {
      currentPage = currentPage || 1;
      var pageSize = this.props.pageSize || 10;
      var totalPages = Math.ceil(totalItems / pageSize);
      var startPage, endPage;

      if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
        } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
        }
      }

      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      var pages = _toConsumableArray(Array(endPage + 1 - startPage).keys()).map(function (i) {
        return startPage + i;
      });

      return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pager = this.state.pager;

      if (!pager.pages || pager.pages.length <= 1) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpneo-pagination"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "page-numbers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: pager.currentPage === 1 ? 'disabled' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascrpt:void(0)",
        onClick: function onClick() {
          return _this2.setPage(1);
        }
      }, "First")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: pager.currentPage === 1 ? 'disabled' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascrpt:void(0)",
        onClick: function onClick() {
          return _this2.setPage(pager.currentPage - 1);
        }
      }, "Previous")), pager.pages.map(function (page, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index
        }, pager.currentPage === page ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "aria-current": "page",
          className: "page-numbers current"
        }, page) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "page-link",
          href: "javascrpt:void(0)",
          onClick: function onClick(e) {
            return _this2.setPage(page);
          }
        }, page));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: pager.currentPage === pager.totalPages ? 'disabled' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascrpt:void(0)",
        onClick: function onClick() {
          return _this2.setPage(pager.currentPage + 1);
        }
      }, "Next")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: pager.currentPage === pager.totalPages ? 'disabled' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascrpt:void(0)",
        onClick: function onClick() {
          return _this2.setPage(pager.totalPages);
        }
      }, "Last"))));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Pagination.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/pledgeDetails.js":
/*!*****************************************!*\
  !*** ./src/components/pledgeDetails.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data,
      _props$data = props.data,
      billing = _props$data.billing,
      line_items = _props$data.line_items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpneo-modal-wrapper",
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpneo-modal-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpneo-modal-wrapper-head"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "wpcf_modal_title"
  }, "Pledge Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    onClick: function onClick() {
      return props.onClickModalClose();
    },
    className: "wpneo-modal-close"
  }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wpcf-print-button button"
  }, "print"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wpneo-modal-content-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "wpcf_modal_message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Order ID:"), " ", data.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Order Date:"), " ", data.formatted_c_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Order Status:"), " ", data.status_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, line_items[0].product_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "woocommerce-table__product-total product-total",
    dangerouslySetInnerHTML: {
      __html: data.raised
    }
  })), data.selected_reward && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2",
    dangerouslySetInnerHTML: {
      __html: data.selected_reward
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Subtotal:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: data.subtotal
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Payments Method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.payment_method_title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    dangerouslySetInnerHTML: {
      __html: data.raised
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Customer details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Note:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, data.customer_note)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, billing.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Phone:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, billing.phone)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Billing Address:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", {
    dangerouslySetInnerHTML: {
      __html: data.formatted_b_addr
    }
  }))))));
});

/***/ }),

/***/ "./src/components/pledgeReports.js":
/*!*****************************************!*\
  !*** ./src/components/pledgeReports.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getStatusColor(status) {
  switch (status) {
    case 'cancelled':
    case 'failed':
      return '#c91818';

    case 'completed':
      return 'var(--wpcf-success-color)';

    default:
      return 'var(--wpcf-primary-color)';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var pledges = props.pledges;

  if (typeof pledges == "undefined" || pledges.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Data not found");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "wpcf-report-table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pledged"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pledged (%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, pledges.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.country), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: item.pledge
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.percent, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: {
        color: getStatusColor(item.status),
        textTransform: 'uppercase'
      }
    }, item.status__), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope"
    })));
  })));
});

/***/ }),

/***/ "./src/components/profileEditForm.js":
/*!*******************************************!*\
  !*** ./src/components/profileEditForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProfileEditForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileEditForm, _Component);

  function ProfileEditForm(props) {
    var _this;

    _classCallCheck(this, ProfileEditForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileEditForm).call(this, props));
    _this.state = _objectSpread({}, _this.props.data, {
      new_pass: '',
      retype_pass: '',
      error: ''
    });
    _this.changeImage = _this.changeImage.bind(_assertThisInitialized(_this));
    _this.onChangeValue = _this.onChangeValue.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProfileEditForm, [{
    key: "changeImage",
    value: function changeImage() {
      var _this2 = this;

      wp.media.editor.send.attachment = function (props, attachment) {
        _this2.setState({
          profile_image: attachment.url,
          profile_image_id: attachment.id
        });
      };

      wp.media.editor.open();
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var _this$state = this.state,
          new_pass = _this$state.new_pass,
          retype_pass = _this$state.retype_pass;
      var postData = this.state;
      delete postData.new_pass;
      delete postData.retype_pass;
      delete postData.error;

      if (new_pass) {
        if (new_pass !== retype_pass) {
          this.setState({
            error: "Password doesn't match"
          });
          return false;
        }

        postData['password'] = new_pass;
      }

      this.props.onClickSaveData(postData);
      this.setState({
        error: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var countries = this.props.countries;
      var _this$state2 = this.state,
          profile_image = _this$state2.profile_image,
          username = _this$state2.username,
          first_name = _this$state2.first_name,
          last_name = _this$state2.last_name,
          profile_email1 = _this$state2.profile_email1,
          profile_country = _this$state2.profile_country,
          profile_city = _this$state2.profile_city,
          profile_address = _this$state2.profile_address,
          profile_post_code = _this$state2.profile_post_code,
          new_pass = _this$state2.new_pass,
          retype_pass = _this$state2.retype_pass,
          error = _this$state2.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      }, error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Profile Picture"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "",
        src: profile_image,
        style: {
          maxWidth: "200px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.changeImage
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_username"
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_username",
        name: "username",
        value: username,
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_first_name"
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_first_name",
        name: "first_name",
        value: first_name,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_last_name"
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_last_name",
        name: "last_name",
        value: last_name,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_email"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_email",
        name: "profile_email1",
        value: profile_email1,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_email"
      }, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "profile_country",
        value: profile_country,
        onChange: this.onChangeValue
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Select Country"), Object.keys(countries).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: key,
          value: key
        }, countries[key]);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_city"
      }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_city",
        name: "profile_city",
        value: profile_city,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_address"
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_address",
        name: "profile_address",
        value: profile_address,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_post_code"
      }, "Postal Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcfp_post_code",
        name: "profile_post_code",
        value: profile_post_code,
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_new_pass"
      }, "New Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "wpcfp_new_pass",
        name: "new_pass",
        value: new_pass || '',
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcfp_retype_pass"
      }, "Retype Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "wpcfp_retype_pass",
        name: "retype_pass",
        value: retype_pass || '',
        onChange: this.onChangeValue
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.props.toggleEdit
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Save"));
    }
  }]);

  return ProfileEditForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileEditForm);

/***/ }),

/***/ "./src/components/socialForm.js":
/*!**************************************!*\
  !*** ./src/components/socialForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SocialForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SocialForm, _Component);

  function SocialForm(props) {
    var _this;

    _classCallCheck(this, SocialForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocialForm).call(this, props));
    _this.state = _objectSpread({}, _this.props.data);
    _this.onChangeInput = _this.onChangeInput.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SocialForm, [{
    key: "onChangeInput",
    value: function onChangeInput(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      this.props.onClickSaveData(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          profile_facebook = _this$state.profile_facebook,
          profile_twitter = _this$state.profile_twitter,
          profile_instagram = _this$state.profile_instagram,
          profile_youtube = _this$state.profile_youtube,
          profile_linkedin = _this$state.profile_linkedin,
          profile_pinterest = _this$state.profile_pinterest;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profile_facebook"
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_facebook",
        name: "profile_facebook",
        value: profile_facebook,
        placeholder: "www.facebook.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profilefile_twitter"
      }, "Twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_twitter",
        name: "profile_twitter",
        value: profile_twitter,
        placeholder: "www.twitter.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profile_instagram"
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_instagram",
        name: "profile_instagram",
        value: profile_instagram,
        placeholder: "www.instagram.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profile_youtube"
      }, "Youtube"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_youtube",
        name: "profile_youtube",
        value: profile_youtube,
        placeholder: "www.youtube.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profile_linkedin"
      }, "Linkedin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_linkedin",
        name: "profile_linkedin",
        value: profile_linkedin,
        placeholder: "www.linkedin.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_profile_pinterest"
      }, "Pinterest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "wpcf_profile_pinterest",
        name: "profile_pinterest",
        value: profile_pinterest,
        placeholder: "www.pinterest.com/wp-crowdfunding",
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Save"));
    }
  }]);

  return SocialForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SocialForm);

/***/ }),

/***/ "./src/components/withdrawDetails.js":
/*!*******************************************!*\
  !*** ./src/components/withdrawDetails.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/withdrawAction */ "./src/actions/withdrawAction.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WithdrawDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(WithdrawDetails, _Component);

  function WithdrawDetails(props) {
    var _this;

    _classCallCheck(this, WithdrawDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WithdrawDetails).call(this, props));
    _this.state = {
      withdraw_amount: '',
      withdraw_message: '',
      withdraw_method: '',
      errorMsg: ''
    };
    _this.onChangeInput = _this.onChangeInput.bind(_assertThisInitialized(_this));
    _this.onSubmitWithdrawReq = _this.onSubmitWithdrawReq.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WithdrawDetails, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          withdraw = _this$props.withdraw,
          reqStatus = _this$props.withdraw.reqStatus;

      if (reqStatus !== prevProps.withdraw.reqStatus) {
        if (reqStatus == 'complete') {
          this.setState({
            withdraw_amount: '',
            withdraw_message: '',
            withdraw_method: '',
            errorMsg: ''
          });
        }

        if (reqStatus == 'error') {
          this.setState({
            errorMsg: withdraw.error
          });
        }
      }
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmitWithdrawReq",
    value: function onSubmitWithdrawReq(e) {
      e.preventDefault();
      var campaign_id = this.props.data.campaign_id;
      var withdraw_amount = this.state.withdraw_amount;

      if (withdraw_amount <= 0) {
        this.setState({
          errorMsg: "Please enter valid amount"
        });
        return false;
      }

      var postData = _objectSpread({}, this.state, {
        campaign_id: campaign_id
      });

      delete postData.errorMsg; //remove error msg from postData
      //Send withdraw request

      this.props.postWithdrawRequest(postData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          withdraw = _this$props2.data.withdraw,
          methods = _this$props2.methods,
          onClickBack = _this$props2.onClickBack;
      var _this$state = this.state,
          withdraw_amount = _this$state.withdraw_amount,
          withdraw_message = _this$state.withdraw_message,
          withdraw_method = _this$state.withdraw_method,
          errorMsg = _this$state.errorMsg;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, data.campaign_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, withdraw.request_items.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-table-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "wpcf-dashboard-info-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#Amount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#Method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#Status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, withdraw.request_items.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          dangerouslySetInnerHTML: {
            __html: item.title
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          dangerouslySetInnerHTML: {
            __html: item.amount
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", item.method, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.status == 'paid' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "label-success"
        }, "Paid") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "label-warning"
        }, "Not Paid")));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Receivable")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: data.total_receivable
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Total Withdraw "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: withdraw.total_withdraw
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Balance "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: withdraw.balance
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-forms-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "withdraw-method-form",
        onSubmit: this.onSubmitWithdrawReq
      }, errorMsg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      }, errorMsg), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-field-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_withdraw_amount"
      }, "Amount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "wpcf_withdraw_amount",
        type: "number",
        name: "withdraw_amount",
        value: withdraw_amount,
        onChange: this.onChangeInput,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "withdraw-field-desc"
      }, "Remain Amount ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: withdraw.balance
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-field-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "wpcf_withdraw_message"
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "wpcf_withdraw_message",
        type: "textarea",
        name: "withdraw_message",
        value: withdraw_message,
        onChange: this.onChangeInput
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-select-wrap"
      }, methods == null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/settings/withdraw"
      }, "Setup withdraw methods") : Object.keys(methods.data).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "withdraw-method-select"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          id: "wpcf_withdraw_method_".concat(key),
          className: "withdraw-method-select-input",
          name: "withdraw_method",
          value: key,
          onChange: _this2.onChangeInput,
          required: true,
          checked: withdraw_method == key ? true : false
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "wpcf_withdraw_method_".concat(key),
          className: withdraw_method == key ? 'active' : ''
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, methods.data[key].method_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: data.min_withdraw
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/settings/withdraw"
        }, "Change info")));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-account-save-btn-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "wpcf-btn",
        disabled: methods == null
      }, "Confirm Withdrawal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return onClickBack('');
        }
      }, " Back "))))));
    }
  }]);

  return WithdrawDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    withdraw: state.withdraw
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  postWithdrawRequest: _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_3__["postWithdrawRequest"]
})(WithdrawDetails));

/***/ }),

/***/ "./src/components/withdrawMethodForm.js":
/*!**********************************************!*\
  !*** ./src/components/withdrawMethodForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WithdrawMethodForm =
/*#__PURE__*/
function (_Component) {
  _inherits(WithdrawMethodForm, _Component);

  function WithdrawMethodForm(props) {
    var _this;

    _classCallCheck(this, WithdrawMethodForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WithdrawMethodForm).call(this, props));
    _this.state = _this.getDefaultState();
    _this.onClickMethod = _this.onClickMethod.bind(_assertThisInitialized(_this));
    _this.onChangeInput = _this.onChangeInput.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WithdrawMethodForm, [{
    key: "getDefaultState",
    value: function getDefaultState() {
      var _this$props$data = this.props.data,
          methods = _this$props$data.methods,
          selected_method = _this$props$data.selected_method;
      var first_method = Object.keys(methods)[0];

      if (selected_method == null) {
        var method_name = methods[first_method].method_name;
        selected_method = {
          key: first_method,
          data: _defineProperty({}, first_method, {
            method_name: method_name
          })
        }; // Default data
      } else if (!methods.hasOwnProperty(selected_method.key)) {
        //if Method disable from admin
        selected_method.key = first_method;
      }

      return {
        methods: methods,
        selected_method: selected_method
      };
    }
  }, {
    key: "getDataValue",
    value: function getDataValue(item_name) {
      var _this$state$selected_ = this.state.selected_method,
          key = _this$state$selected_.key,
          data = _this$state$selected_.data;
      var itemValue = "";

      if (data.hasOwnProperty(key)) {
        itemValue = data[key][item_name] || "";
      }

      return itemValue;
    }
  }, {
    key: "setDataValue",
    value: function setDataValue(name, val) {
      var _this$state = this.state,
          selected_method = _this$state.selected_method,
          _this$state$selected_2 = _this$state.selected_method,
          key = _this$state$selected_2.key,
          data = _this$state$selected_2.data;
      selected_method.data = Object.assign({}, data, _defineProperty({}, key, Object.assign({}, data[key], _defineProperty({}, name, val))));
      this.setState({
        selected_method: selected_method
      });
    }
  }, {
    key: "onClickMethod",
    value: function onClickMethod(key) {
      var _this$state2 = this.state,
          methods = _this$state2.methods,
          selected_method = _this$state2.selected_method;
      selected_method.key = key;
      this.setState({
        selected_method: selected_method
      });
      this.setDataValue('method_name', methods[key].method_name);
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput(e) {
      this.setDataValue(e.target.name, e.target.value);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      this.props.onClickSaveData(this.state.selected_method);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          methods = _this$state3.methods,
          selected_method = _this$state3.selected_method,
          key = _this$state3.selected_method.key;
      var formFields = methods[key].form_fields;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "wpcf-withdraw-account-set-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-select-wrap"
      }, Object.keys(methods).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "withdraw-method-select",
          onClick: function onClick() {
            return _this2.onClickMethod(key);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: selected_method.key == key ? 'active' : ''
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, methods[key].method_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: methods[key].desc
          }
        })));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-method-forms-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "withdraw-method-form",
        onSubmit: this.onSubmit,
        style: {
          display: 'flex'
        }
      }, formFields.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "withdraw-method-field-wrap"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "field_".concat(key, "_").concat(index)
        }, item.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "field_".concat(key, "_").concat(index),
          type: item.type,
          name: item.name,
          value: _this2.getDataValue(item.name),
          onChange: _this2.onChangeInput,
          required: true
        }), item.desc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "withdraw-field-desc"
        }, item.desc));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "withdraw-account-save-btn-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "wpcf-btn"
      }, "Save Withdraw Account")))));
    }
  }]);

  return WithdrawMethodForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WithdrawMethodForm);
/**
Selected method data format
selected_method = {
    key: 'echeck',
    data: {
        echeck: {
            method_name: 'E-Check'
        ),
        bank_transfer: {
            method_name: 'Bank Transfer'
        )
    )
)
 */

/***/ }),

/***/ "./src/containers/app.js":
/*!*******************************!*\
  !*** ./src/containers/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");
/* harmony import */ var _campaignReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaignReport */ "./src/containers/campaignReport.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile */ "./src/containers/profile.js");
/* harmony import */ var _myCampaigns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myCampaigns */ "./src/containers/myCampaigns.js");
/* harmony import */ var _investedCampaigns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./investedCampaigns */ "./src/containers/investedCampaigns.js");
/* harmony import */ var _pledgeReceived__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pledgeReceived */ "./src/containers/pledgeReceived.js");
/* harmony import */ var _bookmarkCampaigns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmarkCampaigns */ "./src/containers/bookmarkCampaigns.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order */ "./src/containers/order.js");
/* harmony import */ var _withdraw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withdraw */ "./src/containers/withdraw.js");
/* harmony import */ var _profileSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profileSettings */ "./src/containers/profileSettings.js");
/* harmony import */ var _withdrawMethodSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withdrawMethodSettings */ "./src/containers/withdrawMethodSettings.js");
/* harmony import */ var _rewards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rewards */ "./src/containers/rewards.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var basePath = WPCF.dashboard_url.replace(window.location.origin, '');
    _this.state = {
      basePath: basePath,
      myCampainsCollapse: false,
      userSettingsCollapse: false
    };
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.user.loaded;

      if (!loaded) {
        this.props.fetchUser();
      }
    }
  }, {
    key: "logout",
    value: function logout(e) {
      e.preventDefault();
      fetch("".concat(WPCF.rest_url, "/logout")).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.success) {
          location.href = res.redirect;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var basePath = this.state.basePath;
      var _this$props$user = this.props.user,
          loading = _this$props$user.loading,
          data = _this$props$user.data;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wpcf-dashboard-container is-skeleton"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wpcf-dashboard-sidebar"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wpcf-dashboard-profile skeleton-parent"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "wpcf-dashboard-permalinks skeleton-parent"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wpcf-dashboard-content"
        }));
      }

      ;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-wrap wpcf-dashboard-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "profile-form-img",
        src: data.profile_image,
        alt: "Profile Image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, data.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.user_email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "wpcf-dashboard-permalinks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        exact: true,
        activeClassName: "is-active",
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-home wpcf-icon"
      }), "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "far fa-user wpcf-icon"
      }), "My Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.state.myCampainsCollapse ? 'wpcf-collapse' : 'wpcf-collapsed'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: function onClick() {
          _this2.setState({
            myCampainsCollapse: !_this2.state.myCampainsCollapse
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "far fa-paper-plane wpcf-icon"
      }), "Campaigns", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-float-icon fas fa-angle-" + (this.state.myCampainsCollapse ? 'up' : 'down')
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: " wpcf-dashboard-sub-permalinks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/my-campaigns"
      }, "My Campaigns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/invested-campaigns"
      }, "Invested Campaigns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/pledge-received"
      }, "Pledge Received")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/bookmark-campaigns"
      }, "Bookmarks")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/order"
      }, "Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/withdraw"
      }, "Withdraw")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/rewards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-gift wpcf-icon"
      }), "Rewards")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.state.userSettingsCollapse ? 'wpcf-collapse' : 'wpcf-collapsed'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: function onClick() {
          _this2.setState({
            userSettingsCollapse: !_this2.state.userSettingsCollapse
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-icon fas fa-sliders-h"
      }), "User Settings", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-float-icon fas fa-angle-" + (this.state.userSettingsCollapse ? 'up' : 'down')
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: " wpcf-dashboard-sub-permalinks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/settings/profile"
      }, "Profile Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "is-active",
        to: "/settings/withdraw"
      }, "Withdraw Method")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: this.logout
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-icon fas fa-sign-out-alt"
      }), "Logout")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        exact: true,
        component: _campaignReport__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/profile",
        component: _profile__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/my-campaigns",
        component: _myCampaigns__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/invested-campaigns",
        component: _investedCampaigns__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/pledge-received",
        component: _pledgeReceived__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/bookmark-campaigns",
        component: _bookmarkCampaigns__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/order",
        component: _order__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/withdraw",
        component: _withdraw__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/rewards",
        component: _rewards__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/settings/profile",
        component: _profileSettings__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/settings/withdraw",
        component: _withdrawMethodSettings__WEBPACK_IMPORTED_MODULE_13__["default"]
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchUser: _actions_userAction__WEBPACK_IMPORTED_MODULE_3__["fetchUser"]
})(App));

/***/ }),

/***/ "./src/containers/bookmarkCampaigns.js":
/*!*********************************************!*\
  !*** ./src/containers/bookmarkCampaigns.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_itemCampaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/itemCampaign */ "./src/components/itemCampaign.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var BookmarkCampaigns =
/*#__PURE__*/
function (_Component) {
  _inherits(BookmarkCampaigns, _Component);

  function BookmarkCampaigns(props) {
    var _this;

    _classCallCheck(this, BookmarkCampaigns);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookmarkCampaigns).call(this, props));
    _this.state = {
      pageOfItems: []
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BookmarkCampaigns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.campaign.loaded;

      if (!loaded) {
        this.props.fetchBookmarkCampaigns();
      }
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(pageOfItems) {
      this.setState({
        pageOfItems: pageOfItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var campaign = this.props.campaign;

      if (campaign.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var pageOfItems = this.state.pageOfItems;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Bookmarks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, campaign.data.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemCampaign__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          data: item
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: campaign.data,
        pageSize: 5,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Campaign not found")));
    }
  }]);

  return BookmarkCampaigns;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    campaign: state.bookmarkCampaign
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchBookmarkCampaigns: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchBookmarkCampaigns"]
})(BookmarkCampaigns));

/***/ }),

/***/ "./src/containers/campaignReport.js":
/*!******************************************!*\
  !*** ./src/containers/campaignReport.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_datePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/datePicker */ "./src/components/datePicker.js");
/* harmony import */ var _components_lineGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/lineGraph */ "./src/components/lineGraph.js");
/* harmony import */ var _components_pledgeReports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pledgeReports */ "./src/components/pledgeReports.js");
/* harmony import */ var _components_exportCSV__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/exportCSV */ "./src/components/exportCSV.js");
/* harmony import */ var _components_contentHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contentHeader */ "./src/components/contentHeader.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var CampaignReport =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignReport, _Component);

  function CampaignReport(props) {
    var _this;

    _classCallCheck(this, CampaignReport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CampaignReport).call(this, props));
    _this.state = {
      query_args: {
        date_range: 'last_7_days',
        campaign_id: _this.props.campaign.id ? _this.props.campaign.id : ''
      },
      option_params: {
        last_7_days: 'Last Week',
        last_14_days: 'Last 14 Days',
        this_month: 'This Month',
        last_3_months: 'Last 3 Months',
        last_6_months: 'Last 6 Months',
        this_year: 'This Year'
      }
    };
    _this._onChange = _this._onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CampaignReport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query_args = this.state.query_args;
      this.props.fetchCampaignsReport(this.encodeQueryArgs(query_args));
    }
  }, {
    key: "encodeQueryArgs",
    value: function encodeQueryArgs(data) {
      var args = [];

      for (var key in data) {
        args.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }

      return args.join('&');
    }
  }, {
    key: "_onChange",
    value: function _onChange(e) {
      var _this$state = this.state,
          query_args = _this$state.query_args,
          campaign_id = _this$state.query_args.campaign_id;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      query_args = name == "date_range" ? {
        date_range: value,
        campaign_id: campaign_id
      } : Object.assign(query_args, _defineProperty({}, name, value));
      this.props.fetchCampaignsReport(this.encodeQueryArgs(query_args));
      this.setState({
        query_args: query_args
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          query_args = _this$state2.query_args,
          option_params = _this$state2.option_params;
      var _this$props$report = this.props.report,
          loading = _this$props$report.loading,
          _this$props$report$da = _this$props$report.data,
          csv = _this$props$report$da.csv,
          format = _this$props$report$da.format,
          label = _this$props$report$da.label,
          fundRaised = _this$props$report$da.fundRaised,
          raisedPercent = _this$props$report$da.raisedPercent,
          totalBacked = _this$props$report$da.totalBacked,
          pledges = _this$props$report$da.pledges,
          campaign = _this$props$report$da.campaign;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contentHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: this.props.campaign.name ? "Showing Report for " + this.props.campaign.name : "Dashboard"
      }, this.props.campaign.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-link-btn",
        onClick: function onClick() {
          return _this2.props.onClickBack({
            id: '',
            name: ''
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-icon fas fa-long-arrow-alt-left"
      }), "Go Back My Campaigns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-cards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card wpcf-info-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "wpcf-dashboard-info-val"
      }, WPCF.wc_currency_symbol + fundRaised.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Fund Raised")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "wpcf-dashboard-info-val"
      }, raisedPercent, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Funded")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "wpcf-dashboard-info-val"
      }, totalBacked), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total Backed")), Object.keys(campaign).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "wpcf-dashboard-info-val"
      }, campaign.is_started ? campaign.days_remaining : campaign.days_until_launch), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Days ", campaign.is_started ? "to go" : "Until Launch"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-report-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-report-filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_datePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "date_range_from",
        value: query_args.date_range_from,
        onChange: function onChange(e) {
          return _this2._onChange(e);
        },
        placeholder: "From",
        format: "yy-mm-dd"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_datePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "date_range_to",
        value: query_args.date_range_to,
        onChange: function onChange(e) {
          return _this2._onChange(e);
        },
        placeholder: "To",
        format: "yy-mm-dd"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        id: "date_range",
        name: "date_range",
        value: query_args.date_range,
        onChange: this._onChange
      }, Object.keys(option_params).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: key,
          value: key
        }, " ", option_params[key], " ");
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-report-export-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_exportCSV__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: csv,
        file_name: "campaigns-report"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_lineGraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
        format: format,
        label: label
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pledgeReports__WEBPACK_IMPORTED_MODULE_5__["default"], {
        pledges: pledges
      })));
    }
  }]);

  return CampaignReport;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    report: state.campaignsReport
  };
};

CampaignReport.defaultProps = {
  campaign: {
    id: '',
    name: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchCampaignsReport: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchCampaignsReport"]
})(CampaignReport));

/***/ }),

/***/ "./src/containers/investedCampaigns.js":
/*!*********************************************!*\
  !*** ./src/containers/investedCampaigns.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_itemCampaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/itemCampaign */ "./src/components/itemCampaign.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
/* harmony import */ var _components_contentHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/contentHeader */ "./src/components/contentHeader.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var InvestedCampaigns =
/*#__PURE__*/
function (_Component) {
  _inherits(InvestedCampaigns, _Component);

  function InvestedCampaigns() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, InvestedCampaigns);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvestedCampaigns)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      pageOfItems: [],
      filterValue: 'running',
      campaignReport: {
        id: '',
        name: ''
      }
    }, _this.onChangePage = function (pageOfItems) {
      _this.setState({
        pageOfItems: pageOfItems
      });
    }, _this.onClickReport = function (campaignReport) {
      _this.setState({
        campaignReport: campaignReport
      });
    }, _this.onClickFilter = function (e) {
      e.preventDefault();
      var filterValue = e.target.innerText.toLowerCase();

      _this.setState({
        filterValue: filterValue
      });
    }, _this.getCampaignData = function () {
      var filterValue = _this.state.filterValue;
      var campaign = _this.props.campaign;
      var filterData = campaign.data.filter(function (item) {
        return item.status == filterValue;
      });
      return filterData;
    }, _temp));
  }

  _createClass(InvestedCampaigns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.campaign.loaded;

      if (!loaded) {
        this.props.fetchInvestedCampaigns();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var campaign = this.props.campaign;

      if (campaign.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var _this$state = this.state,
          pageOfItems = _this$state.pageOfItems,
          filterValue = _this$state.filterValue;
      var campaignData = this.getCampaignData();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contentHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Invested Campaigns"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-mycampaign-filter-group wpcf-btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'running' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Running"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'completed' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Completed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inners"
      }, campaignData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemCampaign__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          data: item,
          pledge: true,
          invested: true
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: campaignData,
        pageSize: 5,
        filterValue: filterValue,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Campaign not found")));
    }
  }]);

  return InvestedCampaigns;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    campaign: state.investedCampaign
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchInvestedCampaigns: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchInvestedCampaigns"]
})(InvestedCampaigns));

/***/ }),

/***/ "./src/containers/myCampaigns.js":
/*!***************************************!*\
  !*** ./src/containers/myCampaigns.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _containers_campaignReport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/campaignReport */ "./src/containers/campaignReport.js");
/* harmony import */ var _components_itemCampaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/itemCampaign */ "./src/components/itemCampaign.js");
/* harmony import */ var _components_campaignUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/campaignUpdate */ "./src/components/campaignUpdate.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
/* harmony import */ var _components_contentHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contentHeader */ "./src/components/contentHeader.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var MyCampaigns =
/*#__PURE__*/
function (_Component) {
  _inherits(MyCampaigns, _Component);

  function MyCampaigns() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, MyCampaigns);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyCampaigns)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      pageOfItems: [],
      filterValue: 'running',
      campaignReport: {
        id: '',
        name: ''
      },
      campaignId: '',
      updates: []
    }, _this.onChangePage = function (pageOfItems) {
      _this.setState({
        pageOfItems: pageOfItems
      });
    }, _this.onClickFilter = function (e) {
      e.preventDefault();
      var filterValue = e.target.innerText.toLowerCase();

      _this.setState({
        filterValue: filterValue
      });
    }, _this.onClickReport = function (campaignReport) {
      _this.setState({
        campaignReport: campaignReport
      });
    }, _this.onClickUpdates = function (campaignId, updates) {
      _this.setState({
        campaignId: campaignId,
        updates: updates
      });
    }, _this.getCampaignData = function () {
      var filterValue = _this.state.filterValue;
      var campaign = _this.props.campaign;
      var filterData = campaign.data.filter(function (item) {
        return item.status == filterValue;
      });
      return filterData;
    }, _temp));
  }

  _createClass(MyCampaigns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.campaign.loaded;

      if (!loaded) {
        this.props.fetchMyCampaigns();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var campaign = this.props.campaign;
      var _this$state = this.state,
          pageOfItems = _this$state.pageOfItems,
          filterValue = _this$state.filterValue,
          campaignReport = _this$state.campaignReport,
          campaignId = _this$state.campaignId,
          updates = _this$state.updates;

      if (campaign.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;

      if (campaignReport.id) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_campaignReport__WEBPACK_IMPORTED_MODULE_3__["default"], {
          campaign: campaignReport,
          onClickBack: this.onClickReport
        });
      }

      if (campaignId) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_campaignUpdate__WEBPACK_IMPORTED_MODULE_5__["default"], {
          updates: updates,
          campaignId: campaignId,
          onClickUpdates: this.onClickUpdates
        });
      }

      var campaignData = this.getCampaignData();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contentHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "My Campaigns"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-mycampaign-filter-group wpcf-btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'running' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Running"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'pending' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Pending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'draft' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Draft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue == 'completed' ? 'active' : ''),
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Completed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, campaignData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemCampaign__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          data: item,
          onClickReport: _this2.onClickReport,
          onClickUpdates: _this2.onClickUpdates
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
        items: campaignData,
        pageSize: 5,
        filterValue: filterValue,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Campaign not found")));
    }
  }]);

  return MyCampaigns;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    campaign: state.myCampaign
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchMyCampaigns: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchMyCampaigns"]
})(MyCampaigns));

/***/ }),

/***/ "./src/containers/order.js":
/*!*********************************!*\
  !*** ./src/containers/order.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_orderAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderAction */ "./src/actions/orderAction.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
/* harmony import */ var _components_itemOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/itemOrder */ "./src/components/itemOrder.js");
/* harmony import */ var _components_orderDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/orderDetails */ "./src/components/orderDetails.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Order =
/*#__PURE__*/
function (_Component) {
  _inherits(Order, _Component);

  function Order(props) {
    var _this;

    _classCallCheck(this, Order);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this, props));
    _this.state = {
      pageOfItems: [],
      filterValue: '',
      searchText: '',
      orderDetails: ''
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    _this.onClickDetails = _this.onClickDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Order, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.order.loaded;

      if (!loaded) {
        this.props.fetchOrders();
      }
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(pageOfItems) {
      this.setState({
        pageOfItems: pageOfItems
      });
    }
  }, {
    key: "onClickDetails",
    value: function onClickDetails(orderDetails) {
      this.setState({
        orderDetails: orderDetails
      });
    }
  }, {
    key: "onClickFilter",
    value: function onClickFilter(e) {
      e.preventDefault();
      var filterValue = e.target.innerText.toLowerCase();
      this.setState({
        filterValue: filterValue
      });
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput(key, value) {
      this.setState(_defineProperty({}, key, value));
    }
  }, {
    key: "geOrderLength",
    value: function geOrderLength(key) {
      var data = this.props.order.data;
      var orderLength = data.length;

      if (key) {
        orderLength = data.filter(function (item) {
          return item.details.status == key;
        }).length;
      }

      return orderLength;
    }
  }, {
    key: "getOrderData",
    value: function getOrderData() {
      var _this$state = this.state,
          filterValue = _this$state.filterValue,
          searchText = _this$state.searchText;
      var order = this.props.order;
      var filterData = order.data;

      if (filterValue) {
        filterData = order.data.filter(function (item) {
          return item.details.status == filterValue;
        });
      }

      if (searchText) {
        filterData = order.data.filter(function (item) {
          return item.details.billing.first_name.toLowerCase().search(searchText.toLowerCase()) !== -1 || item.details.billing.last_name.toLowerCase().search(searchText.toLowerCase()) !== -1;
        });
      }

      return filterData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var order = this.props.order;

      if (order.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var _this$state2 = this.state,
          pageOfItems = _this$state2.pageOfItems,
          filterValue = _this$state2.filterValue,
          searchText = _this$state2.searchText,
          orderDetails = _this$state2.orderDetails;
      var orderData = this.getOrderData();

      if (orderDetails) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_orderDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
          data: orderDetails,
          onClickBack: this.onClickDetails
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Order"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-cards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val"
      }, this.geOrderLength()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total Order"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val"
      }, this.geOrderLength('pending')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pending Order"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val"
      }, this.geOrderLength('completed')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Completed Order")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-search"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "searchText",
        onChange: function onChange(e) {
          return _this2.onChangeInput('searchText', e.target.value);
        },
        value: searchText
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'pending' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Pending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'processing' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Processing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'cancelled' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Cancelled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'completed' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter(e);
        }
      }, "Completed"))), orderData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-table-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "wpcf-dashboard-info-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Order"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pledge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Payment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Fulfillment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemOrder__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          data: item,
          onClickDetails: _this2.onClickDetails
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: orderData,
        pageSize: 5,
        filterValue: filterValue,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Data not found")));
    }
  }]);

  return Order;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    order: state.order
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchOrders: _actions_orderAction__WEBPACK_IMPORTED_MODULE_2__["fetchOrders"]
})(Order));

/***/ }),

/***/ "./src/containers/pledgeReceived.js":
/*!******************************************!*\
  !*** ./src/containers/pledgeReceived.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
/* harmony import */ var _components_itemPledgeReceived__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/itemPledgeReceived */ "./src/components/itemPledgeReceived.js");
/* harmony import */ var _components_pledgeDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pledgeDetails */ "./src/components/pledgeDetails.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var PledgeReceived =
/*#__PURE__*/
function (_Component) {
  _inherits(PledgeReceived, _Component);

  function PledgeReceived(props) {
    var _this;

    _classCallCheck(this, PledgeReceived);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PledgeReceived).call(this, props));
    _this.state = {
      pageOfItems: [],
      openModal: false,
      modalData: ''
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    _this.onClickDetails = _this.onClickDetails.bind(_assertThisInitialized(_this));
    _this.onClickModalClose = _this.onClickModalClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PledgeReceived, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.pledge.loaded;

      if (!loaded) {
        this.props.fetchPledgeReceived();
      }
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(pageOfItems) {
      this.setState({
        pageOfItems: pageOfItems
      });
    }
  }, {
    key: "onClickDetails",
    value: function onClickDetails(data) {
      this.setState({
        openModal: true,
        modalData: data
      });
    }
  }, {
    key: "onClickModalClose",
    value: function onClickModalClose() {
      this.setState({
        openModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pledge = this.props.pledge;

      if (pledge.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var _this$state = this.state,
          pageOfItems = _this$state.pageOfItems,
          openModal = _this$state.openModal,
          modalData = _this$state.modalData;
      var _pledge$data = pledge.data,
          total_goal = _pledge$data.total_goal,
          total_raised = _pledge$data.total_raised,
          total_available = _pledge$data.total_available,
          receiver_percent = _pledge$data.receiver_percent,
          orders = _pledge$data.orders;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Pledge Recieved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-cards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val",
        dangerouslySetInnerHTML: {
          __html: total_raised
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Fund Raised"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val",
        dangerouslySetInnerHTML: {
          __html: total_goal
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Goal"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "wpcf-dashboard-info-val",
        dangerouslySetInnerHTML: {
          __html: total_available
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Available")))), orders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-table-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "wpcf-dashboard-info-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Raised"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Receivable ", receiver_percent && "(".concat(receiver_percent, "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Marketplace ", receiver_percent && "(".concat(100 - receiver_percent, "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemPledgeReceived__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          data: item,
          onClickDetails: _this2.onClickDetails
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: orders,
        pageSize: 5,
        onChangePage: this.onChangePage
      }), openModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pledgeDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: modalData,
        onClickModalClose: this.onClickModalClose
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Data not found")));
    }
  }]);

  return PledgeReceived;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pledge: state.pledgeReceived
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchPledgeReceived: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchPledgeReceived"]
})(PledgeReceived));

/***/ }),

/***/ "./src/containers/profile.js":
/*!***********************************!*\
  !*** ./src/containers/profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");
/* harmony import */ var _components_contentHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contentHeader */ "./src/components/contentHeader.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this, props));
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.user.loaded;

      if (!loaded) {
        this.props.fetchUser();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          loading = _this$props$user.loading,
          data = _this$props$user.data;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contentHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "My Profile"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-myprofile-primary-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-myprofile-avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "profile-form-img",
        src: data.profile_image,
        alt: "Profile Image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-myprofile-name-email"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, data.profile_email1), data.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-myprofile-country"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Country"), data.profile_country)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-myprofile-additional-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Username: "), " ", data.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Address: "), " ", data.profile_address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "City: "), " ", data.profile_city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Postal Code: "), " ", data.profile_post_code))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "profile-form-img",
        src: data.profile_image,
        alt: "Profile Image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_email1, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_country, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_city)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Postal Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_post_code)))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchUser: _actions_userAction__WEBPACK_IMPORTED_MODULE_2__["fetchUser"]
})(Profile));

/***/ }),

/***/ "./src/containers/profileSettings.js":
/*!*******************************************!*\
  !*** ./src/containers/profileSettings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");
/* harmony import */ var _components_profileEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profileEditForm */ "./src/components/profileEditForm.js");
/* harmony import */ var _components_socialForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/socialForm */ "./src/components/socialForm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ProfileSettings =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileSettings, _Component);

  function ProfileSettings(props) {
    var _this;

    _classCallCheck(this, ProfileSettings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileSettings).call(this, props));
    _this.state = {
      profileEdit: false
    };
    _this.toggleEdit = _this.toggleEdit.bind(_assertThisInitialized(_this));
    _this.onClickSaveData = _this.onClickSaveData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProfileSettings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          user = _this$props.user,
          countries = _this$props.countries;

      if (!user.loaded) {
        this.props.fetchUser();
      }

      if (!countries.loaded) {
        this.props.fetchCountries();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props$user = this.props.user,
          saveReq = _this$props$user.saveReq,
          error = _this$props$user.error;

      if (saveReq !== prevProps.user.saveReq) {
        if (saveReq == 'complete') {
          alert('data saved');
        }

        if (saveReq == 'error') {
          alert(error);
        }
      }
    }
  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      this.setState({
        profileEdit: !this.state.profileEdit
      });
    }
  }, {
    key: "onClickSaveData",
    value: function onClickSaveData(data) {
      this.props.saveUserData(data);
    }
  }, {
    key: "render",
    value: function render() {
      var profileEdit = this.state.profileEdit;
      var _this$props$user2 = this.props.user,
          loading = _this$props$user2.loading,
          data = _this$props$user2.data;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;

      if (profileEdit) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profileEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: data,
          countries: this.props.countries.data,
          toggleEdit: this.toggleEdit,
          onClickSaveData: this.onClickSaveData
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "profile-form-img",
        src: data.profile_image,
        alt: "Profile Image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.first_name + ' ' + data.last_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.profile_email1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Country "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.country_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.toggleEdit
      }, "Edit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Deactivated your Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data.country_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Yes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Connected Social Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_socialForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: data,
        onClickSaveData: this.onClickSaveData
      }))));
    }
  }]);

  return ProfileSettings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    countries: state.countries
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchUser: _actions_userAction__WEBPACK_IMPORTED_MODULE_2__["fetchUser"],
  saveUserData: _actions_userAction__WEBPACK_IMPORTED_MODULE_2__["saveUserData"],
  fetchCountries: _actions_userAction__WEBPACK_IMPORTED_MODULE_2__["fetchCountries"]
})(ProfileSettings));

/***/ }),

/***/ "./src/containers/rewards.js":
/*!***********************************!*\
  !*** ./src/containers/rewards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
/* harmony import */ var _components_itemReward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/itemReward */ "./src/components/itemReward.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Rewards =
/*#__PURE__*/
function (_Component) {
  _inherits(Rewards, _Component);

  function Rewards(props) {
    var _this;

    _classCallCheck(this, Rewards);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rewards).call(this, props));
    _this.state = {
      pageOfItems: [],
      filterValue: ''
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Rewards, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loaded = this.props.reward.loaded;

      if (!loaded) {
        this.props.fetchRewards();
      }
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(pageOfItems) {
      this.setState({
        pageOfItems: pageOfItems
      });
    }
  }, {
    key: "onClickFilter",
    value: function onClickFilter(filterValue) {
      this.setState({
        filterValue: filterValue
      });
    }
  }, {
    key: "getRewardsData",
    value: function getRewardsData() {
      var filterValue = this.state.filterValue;
      var reward = this.props.reward;
      var filterData = reward.data;

      if (filterValue) {
        filterData = reward.data.filter(function (item) {
          return item.status == filterValue;
        });
      }

      return filterData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var reward = this.props.reward;

      if (reward.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var _this$state = this.state,
          pageOfItems = _this$state.pageOfItems,
          filterValue = _this$state.filterValue;
      var rewardsData = this.getRewardsData();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Rewards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == '' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter('');
        }
      }, "All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'completed' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter('completed');
        }
      }, "Completed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'remain' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter('remain');
        }
      }, "Remain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: filterValue == 'about_to_end' ? 'active' : '',
        onClick: function onClick(e) {
          return _this2.onClickFilter('about_to_end');
        }
      }, "About To End")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, rewardsData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemReward__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          data: item
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: rewardsData,
        pageSize: 5,
        filterValue: filterValue,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Reward not found")));
    }
  }]);

  return Rewards;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    reward: state.reward
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchRewards: _actions_campaignAction__WEBPACK_IMPORTED_MODULE_2__["fetchRewards"]
})(Rewards));

/***/ }),

/***/ "./src/containers/withdraw.js":
/*!************************************!*\
  !*** ./src/containers/withdraw.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/withdrawAction */ "./src/actions/withdrawAction.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./src/components/pagination.js");
/* harmony import */ var _components_itemWithdraw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/itemWithdraw */ "./src/components/itemWithdraw.js");
/* harmony import */ var _components_withdrawDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/withdrawDetails */ "./src/components/withdrawDetails.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Withdraw =
/*#__PURE__*/
function (_Component) {
  _inherits(Withdraw, _Component);

  function Withdraw(props) {
    var _this;

    _classCallCheck(this, Withdraw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Withdraw).call(this, props));
    _this.state = {
      pageOfItems: [],
      withdrawDetails: ''
    };
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    _this.onClickWithdrawDetails = _this.onClickWithdrawDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Withdraw, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          withdraw = _this$props.withdraw,
          methods = _this$props.methods;

      if (!withdraw.loaded) {
        this.props.fetchWithdraws();
      }

      if (!methods.loaded) {
        this.props.fetchWithdrawMethods();
      }
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(pageOfItems) {
      this.setState({
        pageOfItems: pageOfItems
      });
    }
  }, {
    key: "onClickWithdrawDetails",
    value: function onClickWithdrawDetails(data) {
      this.setState({
        withdrawDetails: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          withdraw = _this$props2.withdraw,
          methods = _this$props2.methods;

      if (withdraw.loading || methods.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      var _this$state = this.state,
          pageOfItems = _this$state.pageOfItems,
          withdrawDetails = _this$state.withdrawDetails;

      if (withdrawDetails) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_withdrawDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
          data: withdrawDetails,
          methods: methods.data.selected_method,
          onClickBack: this.onClickWithdrawDetails
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Withdraw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, withdraw.data.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-info-table-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "wpcf-dashboard-info-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Goal Complete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Available Currency"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Available to Withdraw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, pageOfItems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_itemWithdraw__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          data: item,
          onClickWithdrawDetails: _this2.onClickWithdrawDetails
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: withdraw.data,
        pageSize: 5,
        onChangePage: this.onChangePage
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Data not found")));
    }
  }]);

  return Withdraw;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    withdraw: state.withdraw,
    methods: state.withdrawMethod
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchWithdraws: _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__["fetchWithdraws"],
  fetchWithdrawMethods: _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__["fetchWithdrawMethods"]
})(Withdraw));

/***/ }),

/***/ "./src/containers/withdrawMethodSettings.js":
/*!**************************************************!*\
  !*** ./src/containers/withdrawMethodSettings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/withdrawAction */ "./src/actions/withdrawAction.js");
/* harmony import */ var _components_withdrawMethodForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/withdrawMethodForm */ "./src/components/withdrawMethodForm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WithdrawMethodSettings =
/*#__PURE__*/
function (_Component) {
  _inherits(WithdrawMethodSettings, _Component);

  function WithdrawMethodSettings(props) {
    var _this;

    _classCallCheck(this, WithdrawMethodSettings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WithdrawMethodSettings).call(this, props));
    _this.onClickSaveData = _this.onClickSaveData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WithdrawMethodSettings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var withdrawMethod = this.props.withdrawMethod;

      if (!withdrawMethod.loaded) {
        this.props.fetchWithdrawMethods();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props$withdrawM = this.props.withdrawMethod,
          saveReq = _this$props$withdrawM.saveReq,
          error = _this$props$withdrawM.error;

      if (saveReq !== prevProps.withdrawMethod.saveReq) {
        if (saveReq == 'complete') {
          alert('data saved');
        }

        if (saveReq == 'error') {
          alert(error);
        }
      }
    }
  }, {
    key: "onClickSaveData",
    value: function onClickSaveData(selected_method) {
      this.props.saveWithdrawAccount(selected_method);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$withdrawM2 = this.props.withdrawMethod,
          loading = _this$props$withdrawM2.loading,
          data = _this$props$withdrawM2.data;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      ;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Select a withdraw method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wpcf-dashboard-content-inner"
      }, Object.keys(data.methods).length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "wpcf-withdraw-account-set-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_withdrawMethodForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data,
        onChangeData: this.onChangeData,
        onClickSaveData: this.onClickSaveData
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Data not found")));
    }
  }]);

  return WithdrawMethodSettings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    withdrawMethod: state.withdrawMethod
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchWithdrawMethods: _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__["fetchWithdrawMethods"],
  saveWithdrawAccount: _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_2__["saveWithdrawAccount"]
})(WithdrawMethodSettings));

/***/ }),

/***/ "./src/helpers/decodeEntities.js":
/*!***************************************!*\
  !*** ./src/helpers/decodeEntities.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var decodeEntities = function () {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities(str) {
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
}();

/* harmony default export */ __webpack_exports__["default"] = (decodeEntities);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _containers_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/app */ "./src/containers/app.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");







var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_app__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById('wpcf-dashboard'));

/***/ }),

/***/ "./src/reducers/bookmarkCampaign.js":
/*!******************************************!*\
  !*** ./src/reducers/bookmarkCampaign.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_BOOKMARK_CAMPAIGNS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_BOOKMARK_CAMPAIGNS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_BOOKMARK_CAMPAIGNS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/campaignsReport.js":
/*!*****************************************!*\
  !*** ./src/reducers/campaignsReport.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_CAMPAIGNS_REPORT_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_CAMPAIGNS_REPORT_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_CAMPAIGNS_REPORT_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/countries.js":
/*!***********************************!*\
  !*** ./src/reducers/countries.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_COUNTRIES_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_COUNTRIES_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_COUNTRIES_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");
/* harmony import */ var _myCampaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myCampaign */ "./src/reducers/myCampaign.js");
/* harmony import */ var _campaignsReport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaignsReport */ "./src/reducers/campaignsReport.js");
/* harmony import */ var _investedCampaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investedCampaign */ "./src/reducers/investedCampaign.js");
/* harmony import */ var _bookmarkCampaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmarkCampaign */ "./src/reducers/bookmarkCampaign.js");
/* harmony import */ var _pledgeReceived__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pledgeReceived */ "./src/reducers/pledgeReceived.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order */ "./src/reducers/order.js");
/* harmony import */ var _withdraw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withdraw */ "./src/reducers/withdraw.js");
/* harmony import */ var _withdrawMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withdrawMethod */ "./src/reducers/withdrawMethod.js");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countries */ "./src/reducers/countries.js");
/* harmony import */ var _reward__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reward */ "./src/reducers/reward.js");












var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  myCampaign: _myCampaign__WEBPACK_IMPORTED_MODULE_2__["default"],
  campaignsReport: _campaignsReport__WEBPACK_IMPORTED_MODULE_3__["default"],
  investedCampaign: _investedCampaign__WEBPACK_IMPORTED_MODULE_4__["default"],
  bookmarkCampaign: _bookmarkCampaign__WEBPACK_IMPORTED_MODULE_5__["default"],
  pledgeReceived: _pledgeReceived__WEBPACK_IMPORTED_MODULE_6__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_7__["default"],
  withdraw: _withdraw__WEBPACK_IMPORTED_MODULE_8__["default"],
  withdrawMethod: _withdrawMethod__WEBPACK_IMPORTED_MODULE_9__["default"],
  countries: _countries__WEBPACK_IMPORTED_MODULE_10__["default"],
  reward: _reward__WEBPACK_IMPORTED_MODULE_11__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/investedCampaign.js":
/*!******************************************!*\
  !*** ./src/reducers/investedCampaign.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_INVESTED_CAMPAIGNS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_INVESTED_CAMPAIGNS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_INVESTED_CAMPAIGNS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/myCampaign.js":
/*!************************************!*\
  !*** ./src/reducers/myCampaign.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    saveReq: 'pending',
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_MY_CAMPAIGNS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_MY_CAMPAIGNS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_MY_CAMPAIGNS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_CAMPAIGN_UPDATES_PENDING"]:
      return _objectSpread({}, state, {
        saveReq: 'pending'
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_CAMPAIGN_UPDATES_COMPLETE"]:
      var res = action.payload;

      var data = _toConsumableArray(state.data);

      if (res.success) {
        var index = data.findIndex(function (item) {
          return item.id == res.id;
        });
        data[index]['updates'] = res.updates;
        return _objectSpread({}, state, {
          saveReq: 'complete',
          data: data
        });
      } else {
        return _objectSpread({}, state, {
          saveReq: 'error',
          error: res.msg
        });
      }

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_CAMPAIGN_UPDATES_ERROR"]:
      return _objectSpread({}, state, {
        saveReq: 'error',
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/order.js":
/*!*******************************!*\
  !*** ./src/reducers/order.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_orderAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/orderAction */ "./src/actions/orderAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_orderAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_orderAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_orderAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/pledgeReceived.js":
/*!****************************************!*\
  !*** ./src/reducers/pledgeReceived.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_PLEDGE_RECEIVED_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_PLEDGE_RECEIVED_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_PLEDGE_RECEIVED_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reward.js":
/*!********************************!*\
  !*** ./src/reducers/reward.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/campaignAction */ "./src/actions/campaignAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_REWARDS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_REWARDS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_campaignAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_REWARDS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    saveReq: 'pending',
    data: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_DATA_PENDING"]:
      return _objectSpread({}, state, {
        saveReq: 'pending'
      });

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_DATA_COMPLETE"]:
      var res = action.payload;

      if (res.success) {
        var data = Object.assign({}, state.data, res.data);
        return _objectSpread({}, state, {
          saveReq: 'complete',
          data: data
        });
      } else {
        return _objectSpread({}, state, {
          saveReq: 'error',
          error: res.msg
        });
      }

    case _actions_userAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_DATA_ERROR"]:
      return _objectSpread({}, state, {
        saveReq: 'error',
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/withdraw.js":
/*!**********************************!*\
  !*** ./src/reducers/withdraw.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/withdrawAction */ "./src/actions/withdrawAction.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    reqStatus: 'pending',
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAWS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAWS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAWS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["POST_WITHDRAW_REQUEST_PENDING"]:
      return _objectSpread({}, state, {
        reqStatus: 'pending'
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["POST_WITHDRAW_REQUEST_COMPLETE"]:
      var res = action.payload;

      var data = _toConsumableArray(state.data);

      if (res.success) {
        var index = data.findIndex(function (item) {
          return item.campaign_id == res.data.campaign_id;
        });
        data[index]['withdraw'] = res.data.withdraw;
        return _objectSpread({}, state, {
          reqStatus: 'complete',
          data: data
        });
      } else {
        return _objectSpread({}, state, {
          reqStatus: 'error',
          error: res.msg
        });
      }

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["POST_WITHDRAW_REQUEST_ERROR"]:
      return _objectSpread({}, state, {
        reqStatus: 'error',
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/withdrawMethod.js":
/*!****************************************!*\
  !*** ./src/reducers/withdrawMethod.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/withdrawAction */ "./src/actions/withdrawAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    loaded: false,
    saveReq: 'pending',
    data: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAW_METHODS_PENDING"]:
      return _objectSpread({}, state, {
        loading: true,
        loaded: false
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAW_METHODS_COMPLETE"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        data: action.payload
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["FETCH_WITHDRAW_METHODS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.payload
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_WITHDRAW_ACCOUNT_PENDING"]:
      return _objectSpread({}, state, {
        saveReq: 'pending'
      });

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_WITHDRAW_ACCOUNT_COMPLETE"]:
      var res = action.payload;

      var data = _objectSpread({}, state.data);

      if (res.success) {
        data['selected_method'] = res.data;
        return _objectSpread({}, state, {
          saveReq: 'complete',
          data: data
        });
      } else {
        return _objectSpread({}, state, {
          saveReq: 'error',
          error: res.msg
        });
      }

    case _actions_withdrawAction__WEBPACK_IMPORTED_MODULE_0__["SAVE_WITHDRAW_ACCOUNT_ERROR"]:
      return _objectSpread({}, state, {
        saveReq: 'error',
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/lib/loader.js??ref--6-2!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/plugins/crowdfunding/wp-content/plugins/wp-crowdfunding/assets/react-dashboard/src/index.js */"./src/index.js");


/***/ })

/******/ });
=======
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case p:case i:case c:case l:case m:return e;default:switch(e=e&&e.$$typeof){case s:case d:case u:return e;default:return t}}case y:case h:case o:return t}}}function b(e){return v(e)===p}t.typeOf=v,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=u,t.Element=a,t.ForwardRef=d,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===c||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===s||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||v(e)===f},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===s},t.isContextProvider=function(e){return v(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===c},t.isStrictMode=function(e){return v(e)===l},t.isSuspense=function(e){return v(e)===m}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(26)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(25)(!1)).push([e.i,":root {\n  --wpcf-font-family: 'Roboto', sans-serif;\n  --wpcf-primary-text-color: #787993;\n  --wpcf-light-text-color: #ADAECF;\n  --wpcf-primary-color: #3060c5;\n  --wpcf-heading-color: #25265e;\n  --wpcf-border-color: #dcdce4;\n  --wpcf-success-color: #00A92F; }\n\n#wpcf-dashboard {\n  font-family: var(--wpcf-font-family);\n  color: var(--wpcf-primary-text-color);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 14px; }\n\n#wpcf-dashboard img {\n  max-width: 100%;\n  height: auto; }\n\n.wpcf-dashboard-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start; }\n\n.wpcf-dashboard-sidebar {\n  flex: 0 0 255px;\n  max-width: 255px; }\n\n.wpcf-dashboard-content {\n  flex: 1 0 calc(100% - 255px);\n  max-width: calc(100% - 255px);\n  padding-left: 30px;\n  padding-top: 30px; }\n\n.wpcf-btn-group {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -10px; }\n  .wpcf-btn-group .wpcf-btn {\n    margin-top: 10px; }\n    .wpcf-btn-group .wpcf-btn:not(:last-child) {\n      margin-right: 10px; }\n\n.wpcf-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none !important;\n  font-size: 16px;\n  position: relative;\n  transition: 300ms; }\n  .wpcf-btn:not(.wpcf-link-btn) {\n    line-height: 26px;\n    height: 40px;\n    padding: 0 25px;\n    background: var(--wpcf-primary-color);\n    border: 1px solid var(--wpcf-primary-color);\n    color: #fff; }\n  .wpcf-btn.wpcf-btn-sm {\n    font-size: 14px;\n    padding-left: 15px;\n    padding-right: 15px;\n    line-height: 17px;\n    height: 35px; }\n  .wpcf-btn.wpcf-btn-secondary {\n    background-color: var(--wpcf-primary-text-color);\n    border-color: var(--wpcf-primary-text-color);\n    color: #ffffff; }\n  .wpcf-btn.wpcf-link-btn {\n    color: var(--wpcf-primary-color);\n    padding: 0;\n    background: none;\n    border: none; }\n  .wpcf-btn.wpcf-btn-outline {\n    background: transparent;\n    border: 1px solid var(--wpcf-primary-color);\n    color: var(--wpcf-primary-color); }\n    .wpcf-btn.wpcf-btn-outline:hover {\n      background-color: var(--wpcf-primary-color);\n      color: #ffffff; }\n    .wpcf-btn.wpcf-btn-outline.wpcf-success-btn {\n      color: var(--wpcf-success-color);\n      border-color: var(--wpcf-success-color); }\n      .wpcf-btn.wpcf-btn-outline.wpcf-success-btn:hover {\n        background-color: var(--wpcf-success-color);\n        color: #ffffff; }\n    .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary {\n      border-color: var(--wpcf-border-color);\n      background: #ffffff;\n      color: var(--wpcf-primary-text-color); }\n      .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary.active, .wpcf-btn.wpcf-btn-outline.wpcf-btn-secondary:hover {\n        border-color: var(--wpcf-primary-color);\n        color: var(--wpcf-primary-color); }\n  .wpcf-btn.wpcf-btn-round {\n    border-radius: 30px; }\n  .wpcf-btn .wpcf-icon:not(.wpcf-icon-right) {\n    margin-right: 12px; }\n  .wpcf-btn .wpcf-icon-right {\n    margin-left: 12px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:first-child {\n  height: 65px;\n  width: 65px;\n  display: block;\n  border-radius: 50%;\n  margin-bottom: 14px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:nth-child(2) {\n  display: block;\n  height: 25px;\n  width: 60%;\n  margin-bottom: 8px; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar span:nth-child(3) {\n  display: block;\n  height: 20px;\n  width: 100%; }\n\n.wpcf-dashboard-container.is-skeleton .wpcf-dashboard-sidebar li {\n  margin: 10px 30px;\n  height: 30px; }\n\n.wpcf-dashboard-sidebar {\n  border: 1px solid var(--wpcf-border-color); }\n  .wpcf-dashboard-sidebar .wpcf-dashboard-profile {\n    padding: 15px 30px 30px;\n    border-bottom: 1px solid var(--wpcf-border-color); }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile img {\n      width: 65px;\n      height: 65px;\n      border-radius: 50%;\n      margin-bottom: 14px;\n      display: block; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile h4 {\n      font-size: 21px;\n      margin: 0 0 4px;\n      color: var(--wpcf-heading-color);\n      font-weight: 400; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-profile span {\n      font-size: 14px;\n      color: var(--wpcf-light-text-color);\n      display: block; }\n  .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks {\n    margin: 0;\n    padding: 20px 0 0;\n    list-style: none;\n    font-size: 16px;\n    flex-grow: 1;\n    min-height: 600px;\n    display: flex;\n    flex-direction: column; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:nth-last-child(2) {\n      margin-bottom: 90px; }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:last-child {\n      margin-top: auto; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks > li:last-child a {\n        color: var(--wpcf-primary-color); }\n    .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li {\n      position: relative; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a {\n        line-height: 30px;\n        padding: 10px 30px;\n        display: flex;\n        align-items: center;\n        color: var(--wpcf-primary-text-color);\n        text-decoration: none !important; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a span.wpcf-icon {\n          flex: 0 0 20px;\n          text-align: center;\n          font-size: 17px;\n          margin-right: 19px; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a span.wpcf-float-icon {\n          margin-left: auto; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a.is-active {\n          color: var(--wpcf-primary-color); }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li a:hover {\n          background: #f2f6ff;\n          color: var(--wpcf-primary-color); }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        font-size: 14px;\n        display: none; }\n        .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li ul li a {\n          padding-left: 63px;\n          padding-top: 5px;\n          padding-bottom: 5px; }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li.wpcf-collapse > a {\n        color: var(--wpcf-primary-color); }\n      .wpcf-dashboard-sidebar .wpcf-dashboard-permalinks li.wpcf-collapse > ul {\n        display: block; }\n\n.wpcf-dashboard-info-cards {\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: -20px; }\n  .wpcf-dashboard-info-cards .wpcf-dashboard-info-card {\n    padding: 18px 25px 25px;\n    border: 1px solid var(--wpcf-border-color);\n    border-radius: 8px;\n    color: var(--wpcf-light-text-color);\n    flex: 1 0 calc(24% - 20px);\n    max-width: calc(24% - 20px);\n    margin-left: 20px;\n    font-weight: 400; }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card h3 {\n      font-size: 32px;\n      margin-bottom: 3px;\n      color: var(--wpcf-primary-color);\n      font-weight: 400; }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card:first-child {\n      flex: 1 0 calc(28% - 20px);\n      max-width: calc(28% - 20px); }\n    .wpcf-dashboard-info-cards .wpcf-dashboard-info-card.wpcf-info-success {\n      background: var(--wpcf-success-color);\n      border-color: var(--wpcf-success-color);\n      color: #ffffff; }\n      .wpcf-dashboard-info-cards .wpcf-dashboard-info-card.wpcf-info-success h3 {\n        color: #ffffff; }\n\n.wpcf-report-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n\n.wpcf-report-filter span,\n.wpcf-report-filter input {\n  height: 45px;\n  padding: 0 20px;\n  border: 1px solid var(--wpcf-border-color);\n  border-radius: 30px;\n  margin-right: 12px;\n  color: var(--wpcf-primary-text-color); }\n  .wpcf-report-filter span::placeholder,\n  .wpcf-report-filter input::placeholder {\n    color: var(--wpcf-primary-text-color); }\n\n.wpcf-report-filter input {\n  width: 140px; }\n\n.wpcf-report-filter span {\n  display: inline-flex;\n  padding: 0;\n  position: relative; }\n  .wpcf-report-filter span select {\n    border: none;\n    background: transparent;\n    min-width: 160px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    color: var(--wpcf-primary-text-color);\n    padding: 0 20px !important;\n    line-height: 45px;\n    height: 45px; }\n  .wpcf-report-filter span::after {\n    position: absolute;\n    content: '\\f078';\n    font-weight: 900;\n    font-family: 'Font Awesome 5 Free';\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n    font-size: 14px; }\n\n.wpcf-report-line-graph {\n  border: 1px solid var(--wpcf-border-color);\n  padding: 25px;\n  margin-bottom: 30px;\n  border-radius: 4px; }\n\n.wpcf-content-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 0; }\n  .wpcf-content-header .wpcf-btn {\n    margin-left: auto; }\n\n.wpcf-content-heading {\n  font-size: 21px;\n  font-weight: 400;\n  color: var(--wpcf-heading-color);\n  line-height: 24px;\n  margin-bottom: 20px; }\n\n.wpcf-mycampaign-filter-group {\n  margin-bottom: 20px; }\n\n.wpcf-campaign-item {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  border: 1px solid var(--wpcf-border-color);\n  margin-bottom: 20px;\n  border-radius: 4px; }\n  .wpcf-campaign-item a.wpcf-campaign-thumbnail {\n    max-width: 170px;\n    flex: 1 0 170px;\n    margin-right: 30px; }\n    .wpcf-campaign-item a.wpcf-campaign-thumbnail img {\n      display: block;\n      border: 1px solid var(--wpcf-border-color); }\n  .wpcf-campaign-item .wpcf-campaign-content {\n    flex-grow: 1; }\n  .wpcf-campaign-item .wpcf-campaign-title {\n    font-size: 21px;\n    margin: 0 0 5px;\n    font-weight: 400;\n    line-height: 28px; }\n    .wpcf-campaign-item .wpcf-campaign-title a {\n      color: var(--wpcf-primary-text-color); }\n      .wpcf-campaign-item .wpcf-campaign-title a:hover {\n        color: var(--wpcf-primary-color); }\n  .wpcf-campaign-item .wpcf-campaign-heading {\n    position: relative; }\n    .wpcf-campaign-item .wpcf-campaign-heading:not(.wpcf-has-not-campaign-link) {\n      padding-right: 100px; }\n    .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links {\n      position: absolute;\n      top: 0;\n      right: 0; }\n      .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button {\n        border: none;\n        padding: 0;\n        margin: 0;\n        background: none;\n        color: var(--wpcf-light-text-color);\n        transition: 300ms; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:not(:first-child) {\n          margin-left: 12px; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:not(:last-child) {\n          margin-right: 12px; }\n        .wpcf-campaign-item .wpcf-campaign-heading .wpcf-campaign-links button:hover {\n          color: var(--wpcf-primary-color); }\n  .wpcf-campaign-item .wpcf-campaign-author {\n    font-size: 16px;\n    font-weight: 400;\n    margin: 0 0 5px; }\n    .wpcf-campaign-item .wpcf-campaign-author a {\n      color: var(--wpcf-primary-color); }\n\n.wpcf-campaign-infos {\n  display: flex;\n  align-items: center;\n  margin-left: -20px;\n  flex-wrap: wrap; }\n  .wpcf-campaign-infos .wpcf-campaign-info > h5 {\n    font-weight: 400;\n    margin: 0;\n    font-size: 14px;\n    color: var(--wpcf-light-text-color); }\n    .wpcf-campaign-infos .wpcf-campaign-info > h5 span:first-child {\n      font-size: 16px;\n      font-weight: 500;\n      color: var(--wpcf-success-color);\n      display: block;\n      margin-bottom: 2px; }\n  .wpcf-campaign-infos .wpcf-campaign-info {\n    margin-left: 20px;\n    margin-top: 15px; }\n  .wpcf-campaign-infos .wpcf-campaign-raised {\n    position: relative; }\n    .wpcf-campaign-infos .wpcf-campaign-raised .wpcf-raised-percent {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 14px;\n      color: var(--wpcf-success-color); }\n\n.wpcf-report-table {\n  border: 1px solid var(--wpcf-border-color);\n  margin-bottom: 30px;\n  border-radius: 4px;\n  overflow: hidden;\n  border-spacing: 0;\n  border-collapse: separate; }\n  .wpcf-report-table thead tr th,\n  .wpcf-report-table thead tr td {\n    background: #F5F5FA !important;\n    border: none !important; }\n  .wpcf-report-table tbody tr th, .wpcf-report-table tbody tr td {\n    background: #ffffff !important;\n    border: none !important; }\n  .wpcf-report-table tbody tr:nth-child(even) th, .wpcf-report-table tbody tr:nth-child(even) td {\n    background: #F5F5FA !important;\n    border: none !important; }\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(o).concat([a]).join("\n")}var i,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var i=0;i<e.length;i++){var l=e[i];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,s=[],f=n(27);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(b(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(b(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function d(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function m(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=l(e.insertAt.before,n);n.insertBefore(t,a)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var i=u++;n=c||(c=y(t)),r=E.bind(null,n,i,!1),a=E.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=f(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,n,t),a=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(l=o[i.id]).refs--,r.push(l)}e&&p(d(e,t),t);for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function E(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o);function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c=n(1),u=n.n(c),s=a.a.createContext(null);var f=function(e){e()},p=function(){return f},d=null,m={notify:function(){}};var h=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=m,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=p(),t=[],n=[],{clear:function(){n=d,t=d},notify:function(){var r=t=n;e(function(){for(var e=0;e<r.length;e++)r[e]()})},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==d&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=m)},e}(),y=function(e){function t(t){var n;n=e.call(this,t)||this;var r=t.store;n.notifySubscribers=n.notifySubscribers.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));var a=new h(r);return a.onStateChange=n.notifySubscribers,n.state={store:r,subscription:a},n.previousState=r.getState(),n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.state.subscription.trySubscribe(),this.previousState!==this.props.store.getState()&&this.state.subscription.notifyNestedSubs()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this.state.subscription.tryUnsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(e){if(this.props.store!==e.store){this.state.subscription.tryUnsubscribe();var t=new h(this.props.store);t.onStateChange=this.notifySubscribers,this.setState({store:this.props.store,subscription:t})}},n.notifySubscribers=function(){this.state.subscription.notifyNestedSubs()},n.render=function(){var e=this.props.context||s;return a.a.createElement(e.Provider,{value:this.state},this.props.children)},t}(r.Component);y.propTypes={store:u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired}),context:u.a.object,children:u.a.any};var v=y;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var w=n(3),E=n.n(w),_=n(2),k=n.n(_),C=n(5),x=[],O=[null,null];function S(e,t){var n=e[1];return[t.payload,n+1]}var P=function(){return[null,0]},T="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function j(e,t){void 0===t&&(t={});var n=t,o=n.getDisplayName,i=void 0===o?function(e){return"ConnectAdvanced("+e+")"}:o,l=n.methodName,c=void 0===l?"connectAdvanced":l,u=n.renderCountProp,f=void 0===u?void 0:u,p=n.shouldHandleStateChanges,d=void 0===p||p,m=n.storeKey,y=void 0===m?"store":m,v=n.withRef,w=void 0!==v&&v,_=n.forwardRef,j=void 0!==_&&_,N=n.context,D=void 0===N?s:N,R=g(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);k()(void 0===f,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),k()(!w,"withRef is removed. To access the wrapped instance, use a ref on the connected component");k()("store"===y,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var I=D;return function(t){var n=t.displayName||t.name||"Component",o=i(n),l=b({},R,{getDisplayName:i,methodName:c,renderCountProp:f,shouldHandleStateChanges:d,storeKey:y,displayName:o,wrappedComponentName:n,WrappedComponent:t}),u=R.pure;var s=u?r.useMemo:function(e){return e()};function p(n){var i=Object(r.useMemo)(function(){var e=n.forwardedRef,t=g(n,["forwardedRef"]);return[n.context,e,t]},[n]),c=i[0],u=i[1],f=i[2],p=Object(r.useMemo)(function(){return c&&c.Consumer&&Object(C.isContextConsumer)(a.a.createElement(c.Consumer,null))?c:I},[c,I]),m=Object(r.useContext)(p),y=Boolean(n.store),v=Boolean(m)&&Boolean(m.store);k()(y||v,'Could not find "store" in the context of "'+o+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+o+" in connect options.");var w=n.store||m.store,E=Object(r.useMemo)(function(){return function(t){return e(t.dispatch,l)}(w)},[w]),_=Object(r.useMemo)(function(){if(!d)return O;var e=new h(w,y?null:m.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[w,y,m]),j=_[0],N=_[1],D=Object(r.useMemo)(function(){return y?m:b({},m,{subscription:j})},[y,m,j]),R=Object(r.useReducer)(S,x,P),M=R[0][0],F=R[1];if(M&&M.error)throw M.error;var A=Object(r.useRef)(),U=Object(r.useRef)(f),L=Object(r.useRef)(),z=Object(r.useRef)(!1),W=s(function(){return L.current&&f===U.current?L.current:E(w.getState(),f)},[w,M,f]);T(function(){U.current=f,A.current=W,z.current=!1,L.current&&(L.current=null,N())}),T(function(){if(d){var e=!1,t=null,n=function(){if(!e){var n,r,a=w.getState();try{n=E(a,U.current)}catch(e){r=e,t=e}r||(t=null),n===A.current?z.current||N():(A.current=n,L.current=n,z.current=!0,F({type:"STORE_UPDATED",payload:{latestStoreState:a,error:r}}))}};j.onStateChange=n,j.trySubscribe(),n();return function(){if(e=!0,j.tryUnsubscribe(),t)throw t}}},[w,j,E]);var V=Object(r.useMemo)(function(){return a.a.createElement(t,b({},W,{ref:u}))},[u,t,W]);return Object(r.useMemo)(function(){return d?a.a.createElement(p.Provider,{value:D},V):V},[p,V,D])}var m=u?a.a.memo(p):p;if(m.WrappedComponent=t,m.displayName=o,j){var v=a.a.forwardRef(function(e,t){return a.a.createElement(m,b({},e,{forwardedRef:t}))});return v.displayName=o,v.WrappedComponent=t,E()(v,t)}return E()(m,t)}}var N=Object.prototype.hasOwnProperty;function D(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function R(e,t){if(D(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!N.call(t,n[a])||!D(e[n[a]],t[n[a]]))return!1;return!0}var I=n(8),M=function(){return Math.random().toString(36).substring(7).split("").join(".")},F={INIT:"@@redux/INIT"+M(),REPLACE:"@@redux/REPLACE"+M(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+M()}};function A(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function U(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function L(e,t){return function(){return t(e.apply(this,arguments))}}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach(function(t){z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function B(e){return function(t,n){var r=e(t,n);function a(){return r}return a.dependsOnOwnProps=!1,a}}function H(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function $(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=H(e);var a=r(t,n);return"function"==typeof a&&(r.mapToProps=a,r.dependsOnOwnProps=H(a),a=r(t,n)),a},r}}var Q=[function(e){return"function"==typeof e?$(e):void 0},function(e){return e?void 0:B(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?B(function(t){return function(e,t){if("function"==typeof e)return L(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var a=e[r];"function"==typeof a&&(n[r]=L(a,t))}return n}(e,t)}):void 0}];var K=[function(e){return"function"==typeof e?$(e):void 0},function(e){return e?void 0:B(function(){return{}})}];function Y(e,t,n){return b({},n,e,t)}var G=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,a=n.pure,o=n.areMergedPropsEqual,i=!1;return function(t,n,l){var c=e(t,n,l);return i?a&&o(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return Y}}];function X(e,t,n,r){return function(a,o){return n(e(a,o),t(r,o),o)}}function J(e,t,n,r,a){var o,i,l,c,u,s=a.areStatesEqual,f=a.areOwnPropsEqual,p=a.areStatePropsEqual,d=!1;function m(a,d){var m,h,y=!f(d,i),v=!s(a,o);return o=a,i=d,y&&v?(l=e(o,i),t.dependsOnOwnProps&&(c=t(r,i)),u=n(l,c,i)):y?(e.dependsOnOwnProps&&(l=e(o,i)),t.dependsOnOwnProps&&(c=t(r,i)),u=n(l,c,i)):v?(m=e(o,i),h=!p(m,l),l=m,h&&(u=n(l,c,i)),u):u}return function(a,s){return d?m(a,s):(l=e(o=a,i=s),c=t(r,i),u=n(l,c,i),d=!0,u)}}function Z(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,a=t.initMergeProps,o=g(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,o),l=r(e,o),c=a(e,o);return(o.pure?J:X)(i,l,c,e,o)}function ee(e,t,n){for(var r=t.length-1;r>=0;r--){var a=t[r](e);if(a)return a}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function te(e,t){return e===t}var ne,re,ae,oe,ie,le,ce,ue,se,fe,pe,de,me=(ae=(re=void 0===ne?{}:ne).connectHOC,oe=void 0===ae?j:ae,ie=re.mapStateToPropsFactories,le=void 0===ie?K:ie,ce=re.mapDispatchToPropsFactories,ue=void 0===ce?Q:ce,se=re.mergePropsFactories,fe=void 0===se?G:se,pe=re.selectorFactory,de=void 0===pe?Z:pe,function(e,t,n,r){void 0===r&&(r={});var a=r,o=a.pure,i=void 0===o||o,l=a.areStatesEqual,c=void 0===l?te:l,u=a.areOwnPropsEqual,s=void 0===u?R:u,f=a.areStatePropsEqual,p=void 0===f?R:f,d=a.areMergedPropsEqual,m=void 0===d?R:d,h=g(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),y=ee(e,le,"mapStateToProps"),v=ee(t,ue,"mapDispatchToProps"),w=ee(n,fe,"mergeProps");return oe(de,b({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:y,initMapDispatchToProps:v,initMergeProps:w,pure:i,areStatesEqual:c,areOwnPropsEqual:s,areStatePropsEqual:p,areMergedPropsEqual:m},h))});var he;"undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function ye(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(a){return"function"==typeof a?a(n,r,e):t(a)}}}}he=o.unstable_batchedUpdates,f=he;var ve=ye();ve.withExtraArgument=ye;var be=ve,ge=n(9),we=n.n(ge),Ee=n(13),_e=n.n(Ee),ke=1073741823;var Ce=a.a.createContext||function(e,t){var n,a,o="__create-react-context-"+_e()()+"__",i=function(e){function n(){var t,n,r;return(t=e.apply(this,arguments)||this).emitter=(n=t.props.value,r=[],{on:function(e){r.push(e)},off:function(e){r=r.filter(function(t){return t!==e})},get:function(){return n},set:function(e,t){n=e,r.forEach(function(e){return e(n,t)})}}),t}we()(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[o]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,a=e.value;((o=r)===(i=a)?0!==o||1/o==1/i:o!=o&&i!=i)?n=0:(n="function"==typeof t?t(r,a):ke,0!==(n|=0)&&this.emitter.set(e.value,n))}var o,i},r.render=function(){return this.props.children},n}(r.Component);i.childContextTypes=((n={})[o]=u.a.object.isRequired,n);var l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}we()(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?ke:t},r.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?ke:e},r.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},r.getValue=function(){return this.context[o]?this.context[o].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return l.contextTypes=((a={})[o]=u.a.object,a),{Provider:i,Consumer:l}};function xe(e){return"/"===e.charAt(0)}function Oe(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}var Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],r=t&&t.split("/")||[],a=e&&xe(e),o=t&&xe(t),i=a||o;if(e&&xe(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l=void 0;if(r.length){var c=r[r.length-1];l="."===c||".."===c||""===c}else l=!1;for(var u=0,s=r.length;s>=0;s--){var f=r[s];"."===f?Oe(r,s):".."===f?(Oe(r,s),u++):u&&(Oe(r,s),u--)}if(!i)for(;u--;u)r.unshift("..");!i||""===r[0]||r[0]&&xe(r[0])||r.unshift("");var p=r.join("/");return l&&"/"!==p.substr(-1)&&(p+="/"),p},Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var Te=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,r){return e(t,n[r])});var r=void 0===t?"undefined":Pe(t);if(r!==(void 0===n?"undefined":Pe(n)))return!1;if("object"===r){var a=t.valueOf(),o=n.valueOf();if(a!==t||o!==n)return e(a,o);var i=Object.keys(t),l=Object.keys(n);return i.length===l.length&&i.every(function(r){return e(t[r],n[r])})}return!1},je=!0,Ne="Invariant failed";var De=function(e,t){if(!e)throw je?new Error(Ne):new Error(Ne+": "+(t||""))};function Re(e){return"/"===e.charAt(0)?e:"/"+e}function Ie(e){return"/"===e.charAt(0)?e.substr(1):e}function Me(e,t){return function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)}(e,t)?e.substr(t.length):e}function Fe(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function Ae(e){var t=e.pathname,n=e.search,r=e.hash,a=t||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:"#"+r),a}function Ue(e,t,n,r){var a;"string"==typeof e?(a=function(e){var t=e||"/",n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substr(a),t=t.substr(0,a));var o=t.indexOf("?");return-1!==o&&(n=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(a=b({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=Se(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}function Le(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&Te(e.state,t.state)}function ze(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,a){if(null!=e){var o="function"==typeof e?e(t,n):e;"string"==typeof o?"function"==typeof r?r(o,a):a(!0):a(!1!==o)}else a(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}}var We=!("undefined"==typeof window||!window.document||!window.document.createElement);function Ve(e,t){t(window.confirm(e))}var qe="popstate",Be="hashchange";function He(){try{return window.history.state||{}}catch(e){return{}}}function $e(e){void 0===e&&(e={}),We||De(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),o=e,i=o.forceRefresh,l=void 0!==i&&i,c=o.getUserConfirmation,u=void 0===c?Ve:c,s=o.keyLength,f=void 0===s?6:s,p=e.basename?Fe(Re(e.basename)):"";function d(e){var t=e||{},n=t.key,r=t.state,a=window.location,o=a.pathname+a.search+a.hash;return p&&(o=Me(o,p)),Ue(o,r,n)}function m(){return Math.random().toString(36).substr(2,f)}var h=ze();function y(e){b(T,e),T.length=n.length,h.notifyListeners(T.location,T.action)}function v(e){(function(e){void 0===e.state&&navigator.userAgent.indexOf("CriOS")})(e)||E(d(e.state))}function g(){E(d(He()))}var w=!1;function E(e){if(w)w=!1,y();else{h.confirmTransitionTo(e,"POP",u,function(t){t?y({action:"POP",location:e}):function(e){var t=T.location,n=k.indexOf(t.key);-1===n&&(n=0);var r=k.indexOf(e.key);-1===r&&(r=0);var a=n-r;a&&(w=!0,x(a))}(e)})}}var _=d(He()),k=[_.key];function C(e){return p+Ae(e)}function x(e){n.go(e)}var O=0;function S(e){1===(O+=e)&&1===e?(window.addEventListener(qe,v),a&&window.addEventListener(Be,g)):0===O&&(window.removeEventListener(qe,v),a&&window.removeEventListener(Be,g))}var P=!1;var T={length:n.length,action:"POP",location:_,createHref:C,push:function(e,t){var a=Ue(e,t,m(),T.location);h.confirmTransitionTo(a,"PUSH",u,function(e){if(e){var t=C(a),o=a.key,i=a.state;if(r)if(n.pushState({key:o,state:i},null,t),l)window.location.href=t;else{var c=k.indexOf(T.location.key),u=k.slice(0,-1===c?0:c+1);u.push(a.key),k=u,y({action:"PUSH",location:a})}else window.location.href=t}})},replace:function(e,t){var a=Ue(e,t,m(),T.location);h.confirmTransitionTo(a,"REPLACE",u,function(e){if(e){var t=C(a),o=a.key,i=a.state;if(r)if(n.replaceState({key:o,state:i},null,t),l)window.location.replace(t);else{var c=k.indexOf(T.location.key);-1!==c&&(k[c]=a.key),y({action:"REPLACE",location:a})}else window.location.replace(t)}})},go:x,goBack:function(){x(-1)},goForward:function(){x(1)},block:function(e){void 0===e&&(e=!1);var t=h.setPrompt(e);return P||(S(1),P=!0),function(){return P&&(P=!1,S(-1)),t()}},listen:function(e){var t=h.appendListener(e);return S(1),function(){S(-1),t()}}};return T}var Qe="hashchange",Ke={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+Ie(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:Ie,decodePath:Re},slash:{encodePath:Re,decodePath:Re}};function Ye(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function Ge(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)}function Xe(e){void 0===e&&(e={}),We||De(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,a=void 0===r?Ve:r,o=n.hashType,i=void 0===o?"slash":o,l=e.basename?Fe(Re(e.basename)):"",c=Ke[i],u=c.encodePath,s=c.decodePath;function f(){var e=s(Ye());return l&&(e=Me(e,l)),Ue(e)}var p=ze();function d(e){b(O,e),O.length=t.length,p.notifyListeners(O.location,O.action)}var m=!1,h=null;function y(){var e=Ye(),t=u(e);if(e!==t)Ge(t);else{var n=f(),r=O.location;if(!m&&Le(r,n))return;if(h===Ae(n))return;h=null,function(e){if(m)m=!1,d();else{p.confirmTransitionTo(e,"POP",a,function(t){t?d({action:"POP",location:e}):function(e){var t=O.location,n=E.lastIndexOf(Ae(t));-1===n&&(n=0);var r=E.lastIndexOf(Ae(e));-1===r&&(r=0);var a=n-r;a&&(m=!0,_(a))}(e)})}}(n)}}var v=Ye(),g=u(v);v!==g&&Ge(g);var w=f(),E=[Ae(w)];function _(e){t.go(e)}var k=0;function C(e){1===(k+=e)&&1===e?window.addEventListener(Qe,y):0===k&&window.removeEventListener(Qe,y)}var x=!1;var O={length:t.length,action:"POP",location:w,createHref:function(e){return"#"+u(l+Ae(e))},push:function(e,t){var n=Ue(e,void 0,void 0,O.location);p.confirmTransitionTo(n,"PUSH",a,function(e){if(e){var t=Ae(n),r=u(l+t);if(Ye()!==r){h=t,function(e){window.location.hash=e}(r);var a=E.lastIndexOf(Ae(O.location)),o=E.slice(0,-1===a?0:a+1);o.push(t),E=o,d({action:"PUSH",location:n})}else d()}})},replace:function(e,t){var n=Ue(e,void 0,void 0,O.location);p.confirmTransitionTo(n,"REPLACE",a,function(e){if(e){var t=Ae(n),r=u(l+t);Ye()!==r&&(h=t,Ge(r));var a=E.indexOf(Ae(O.location));-1!==a&&(E[a]=t),d({action:"REPLACE",location:n})}})},go:_,goBack:function(){_(-1)},goForward:function(){_(1)},block:function(e){void 0===e&&(e=!1);var t=p.setPrompt(e);return x||(C(1),x=!0),function(){return x&&(x=!1,C(-1)),t()}},listen:function(e){var t=p.appendListener(e);return C(1),function(){C(-1),t()}}};return O}function Je(e,t,n){return Math.min(Math.max(e,t),n)}var Ze=n(10),et=n.n(Ze),tt=function(e){var t=Ce();return t.displayName=e,t}("Router"),nt=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen(function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e})),n}l(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return a.a.createElement(tt.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},t}(a.a.Component);a.a.Component;a.a.Component;var rt={},at=1e4,ot=0;function it(e,t){void 0===t&&(t={}),"string"==typeof t&&(t={path:t});var n=t,r=n.path,a=n.exact,o=void 0!==a&&a,i=n.strict,l=void 0!==i&&i,c=n.sensitive,u=void 0!==c&&c;return[].concat(r).reduce(function(t,n){if(!n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=rt[n]||(rt[n]={});if(r[e])return r[e];var a=[],o={regexp:et()(e,a,t),keys:a};return ot<at&&(r[e]=o,ot++),o}(n,{end:o,strict:l,sensitive:u}),a=r.regexp,i=r.keys,c=a.exec(e);if(!c)return null;var s=c[0],f=c.slice(1),p=e===s;return o&&!p?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:p,params:i.reduce(function(e,t,n){return e[t.name]=f[n],e},{})}},null)}var lt=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(tt.Consumer,null,function(t){t||De(!1);var n=e.props.location||t.location,r=b({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?it(n.pathname,e.props):t.match}),o=e.props,i=o.children,l=o.component,c=o.render;(Array.isArray(i)&&0===i.length&&(i=null),"function"==typeof i)&&(void 0===(i=i(r))&&(i=null));return a.a.createElement(tt.Provider,{value:r},i&&!function(e){return 0===a.a.Children.count(e)}(i)?i:r.match?l?a.a.createElement(l,r):c?c(r):null:null)})},t}(a.a.Component);function ct(e){return"/"===e.charAt(0)?e:"/"+e}function ut(e,t){if(!e)return t;var n=ct(e);return 0!==t.pathname.indexOf(n)?t:b({},t,{pathname:t.pathname.substr(n.length)})}function st(e){return"string"==typeof e?e:Ae(e)}function ft(e){return function(){De(!1)}}function pt(){}a.a.Component;a.a.Component;a.a.Component;var dt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=Xe(t.props),t}return l(t,e),t.prototype.render=function(){return a.a.createElement(nt,{history:this.history,children:this.props.children})},t}(a.a.Component);var mt=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.handleClick=function(e,t){try{this.props.onClick&&this.props.onClick(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||this.props.target&&"_self"!==this.props.target||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),(this.props.replace?t.replace:t.push)(this.props.to))},n.render=function(){var e=this,t=this.props,n=t.innerRef,r=(t.replace,t.to),o=g(t,["innerRef","replace","to"]);return a.a.createElement(tt.Consumer,null,function(t){t||De(!1);var i="string"==typeof r?Ue(r,null,null,t.location):r,l=i?t.history.createHref(i):"";return a.a.createElement("a",b({},o,{onClick:function(n){return e.handleClick(n,t.history)},href:l,ref:n}))})},t}(a.a.Component);function ht(e){var t=e["aria-current"],n=void 0===t?"page":t,r=e.activeClassName,o=void 0===r?"active":r,i=e.activeStyle,l=e.className,c=e.exact,u=e.isActive,s=e.location,f=e.strict,p=e.style,d=e.to,m=g(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to"]),h="object"==typeof d?d.pathname:d,y=h&&h.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return a.a.createElement(tt.Consumer,null,function(e){e||De(!1);var t=s?s.pathname:e.location.pathname,r=y?it(t,{path:y,exact:c,strict:f}):null,h=!!(u?u(r,e.location):r),v=h?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(l,o):l,g=h?b({},p,i):p;return a.a.createElement(mt,b({"aria-current":h&&n||null,className:v,style:g,to:d},m))})}var yt={"Content-Type":"application/json","WP-Nonce":WPCF.nonce},vt=function(){return function(e){e({type:"fetch_user_pending"});var t="".concat(WPCF.rest_url,"/user-profile");fetch(t,{method:"GET",headers:yt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_user_complete",payload:t})}).catch(function(t){return e({type:"fetch_user_error",payload:t})})}},bt={"Content-Type":"application/json","WP-Nonce":WPCF.nonce};function gt(e){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Et(e,t){return!t||"object"!==gt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _t(e){return(_t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function kt(e,t){return(kt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ct=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Et(this,_t(t).call(this,e))).inputRef=a.a.createRef(),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&kt(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,n=e.onChange,r=e.format,a=this.inputRef.current;jQuery(a).datepicker({dateFormat:r,onSelect:function(e){n({target:{name:t,value:e}})}})}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.value,r=e.placeholder;return a.a.createElement("input",{ref:this.inputRef,name:t,defaultValue:n,placeholder:r||""})}}])&&wt(n.prototype,o),i&&wt(n,i),t}();function xt(e){return(xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ot(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function St(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pt(e,t){return!t||"object"!==xt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Tt(e){return(Tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function jt(e,t){return(jt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Nt=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Pt(this,Tt(t).call(this,e))).chartRef=a.a.createRef(),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jt(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d");new Chart(e,{type:"line",data:{labels:Ot(this.props.label),datasets:[{label:(new Date).getFullYear(),fill:!1,data:Ot(this.props.format),pointRadius:5,pointHoverRadius:8,pointHoverBackgroundColor:"#3060c5",pointHoverBorderColor:"#fff",backgroundColor:"#3060c5",borderColor:"#dcdce4",borderWidth:3,pointStyle:"circle"}]},options:{scales:{yAxes:[{stacked:!0}]},elements:{line:{tension:0}},legend:{display:!1}}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"wpcf-report-line-graph"},a.a.createElement("canvas",{id:"lineChart",ref:this.chartRef}))}}])&&St(n.prototype,o),i&&St(n,i),t}();function Dt(e){switch(e){case"cancelled":case"failed":return"#c91818";case"completed":return"var(--wpcf-success-color)";default:return"var(--wpcf-primary-color)"}}var Rt=function(e){var t=e.pledges;return void 0===t||0===t.length?a.a.createElement("div",null,"Data not found"):a.a.createElement("table",{className:"wpcf-report-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Country"),a.a.createElement("td",null,"Date"),a.a.createElement("td",null,"Pledged"),a.a.createElement("td",null,"(%)"),a.a.createElement("td",null,"Status"),a.a.createElement("td",null,"Email"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.country),a.a.createElement("td",null,e.date),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.pledge}}),a.a.createElement("td",null,e.percent,"%"),a.a.createElement("td",{style:{color:Dt(e.status),textTransform:"uppercase"}},e.status__),a.a.createElement("td",null,a.a.createElement("i",{className:"fa fa-envelope"})))})))};var It,Mt=function(e){var t=e.data,n=e.file_name;return a.a.createElement("button",{className:"wpcf-btn wpcf-btn-round wpcf-btn-outline wpcf-success-btn",onClick:function(e){return function(e,t){var n="";e.forEach(function(e){n+=e.join(","),n+="\n"});var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,"+encodeURI(n),r.target="_blank",r.download=t+".csv",r.click()}(t,n)}},"Download CSV")},Ft=(It=document.createElement("div"),function(e){return e&&"string"==typeof e&&(e=(e=e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),It.innerHTML=e,e=It.textContent,It.textContent=""),e});function At(e){return(At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ut(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lt(e,t){return!t||"object"!==At(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function zt(e){return(zt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Wt(e,t){return(Wt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Vt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Lt(this,zt(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Wt(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"wpcf-content-header"},a.a.createElement("div",{className:"wpcf-content-header-left"},this.props.children),a.a.createElement("a",{className:"wpcf-btn wpcf-btn-round",href:"#"},a.a.createElement("span",{className:"wpcf-icon fas fa-plus"}),"Create Campaign")),a.a.createElement("h3",{className:"wpcf-content-heading"},Ft(this.props.title)))}}])&&Ut(n.prototype,o),i&&Ut(n,i),t}();function qt(e){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Bt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ht(e){return(Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qt(e,t){return(Qt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Kt=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==qt(t)&&"function"!=typeof t?$t(e):t}(this,Ht(t).call(this,e))).state={query_args:{date_range:"last_7_days",campaign_id:n.props.campaign.id?n.props.campaign.id:""},option_params:{last_7_days:"Last Week",last_14_days:"Last 14 Days",this_month:"This Month",last_3_months:"Last 3 Months",last_6_months:"Last 6 Months",this_year:"This Year"}},n._onChange=n._onChange.bind($t(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qt(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.state.query_args;this.props.fetchCampaignsReport(this.encodeQueryArgs(e))}},{key:"encodeQueryArgs",value:function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}},{key:"_onChange",value:function(e){var t=this.state,n=t.query_args,r=t.query_args.campaign_id,a=e.target,o=a.name,i=a.value;n="date_range"==o?{date_range:i,campaign_id:r}:Object.assign(n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},o,i)),this.props.fetchCampaignsReport(this.encodeQueryArgs(n)),this.setState({query_args:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.query_args,r=t.option_params,o=this.props.report,i=o.loading,l=o.data,c=l.csv,u=l.format,s=l.label,f=l.fundRaised,p=l.raisedPercent,d=l.totalBacked,m=l.pledges,h=this.props.report.data.campaign;return i?a.a.createElement("div",null,"Loading..."):a.a.createElement("div",null,a.a.createElement(Vt,{title:this.props.campaign.name?"Showing Report for "+this.props.campaign.name:"Dashboard"},this.props.campaign.name&&a.a.createElement("button",{className:"wpcf-btn wpcf-link-btn",onClick:function(){return e.props.onClickBack({id:"",name:""})}},a.a.createElement("span",{className:"wpcf-icon fas fa-long-arrow-alt-left"}),"Go Back My Campaigns")),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",{className:"wpcf-dashboard-info-cards"},a.a.createElement("div",{className:"wpcf-dashboard-info-card wpcf-info-success"},a.a.createElement("h3",{className:"wpcf-dashboard-info-val"},WPCF.wc_currency_symbol+f.toFixed(2)),a.a.createElement("span",null,"Fund Raised")),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("h3",{className:"wpcf-dashboard-info-val"},p,"%"),a.a.createElement("span",null,"Funded")),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("h3",{className:"wpcf-dashboard-info-val"},d),a.a.createElement("span",null,"Total Backed")),Object.keys(h).length>0&&a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("h3",{className:"wpcf-dashboard-info-val"},h.is_started?h.days_remaining:h.days_until_launch),a.a.createElement("span",null,"Days ",h.is_started?"to go":"Until Launch"))),a.a.createElement("div",{className:"wpcf-report-header"},a.a.createElement("div",{className:"wpcf-report-filter"},a.a.createElement(Ct,{name:"date_range_from",value:n.date_range_from,onChange:function(t){return e._onChange(t)},placeholder:"From",format:"yy-mm-dd"}),a.a.createElement(Ct,{name:"date_range_to",value:n.date_range_to,onChange:function(t){return e._onChange(t)},placeholder:"To",format:"yy-mm-dd"}),a.a.createElement("span",null,a.a.createElement("select",{id:"date_range",name:"date_range",value:n.date_range,onChange:this._onChange},Object.keys(r).map(function(e){return a.a.createElement("option",{key:e,value:e}," ",r[e]," ")})))),a.a.createElement("div",{className:"wpcf-report-export-btn"},a.a.createElement(Mt,{data:c,file_name:"campaigns-report"}))),a.a.createElement(Nt,{format:u,label:s}),a.a.createElement(Rt,{pledges:m})))}}])&&Bt(n.prototype,o),i&&Bt(n,i),t}();Kt.defaultProps={campaign:{id:"",name:""}};var Yt=me(function(e){return{report:e.campaignsReport}},{fetchCampaignsReport:function(e){return function(t){t({type:"fetch_campaigns_report_pending"});var n="".concat(WPCF.rest_url,"/campaigns-report?").concat(e);fetch(n,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(e){return t({type:"fetch_campaigns_report_complete",payload:e})}).catch(function(e){return t({type:"fetch_campaigns_report_error",payload:e})})}}})(Kt);function Gt(e){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jt(e,t){return!t||"object"!==Gt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Zt(e){return(Zt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tn=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Jt(this,Zt(t).call(this,e))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&en(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.user.loaded||this.props.fetchUser()}},{key:"render",value:function(){var e=this.props.user,t=e.loading,n=e.data;return t?a.a.createElement("div",null,"Loading..."):a.a.createElement("div",null,a.a.createElement("h3",null,"Profile"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",null,a.a.createElement("img",{className:"profile-form-img",src:n.profile_image,alt:"Profile Image"}),a.a.createElement("p",null,n.profile_email1," "),a.a.createElement("p",null,n.profile_country," ")),a.a.createElement("div",{className:"wpcf-dashboard-profile"},a.a.createElement("div",{className:"wpcf-dashboard-profile-item"},a.a.createElement("p",null,"Username"),a.a.createElement("p",null,n.username)),a.a.createElement("div",{className:"wpcf-dashboard-profile-item"},a.a.createElement("p",null,"Address"),a.a.createElement("p",null,n.profile_address)),a.a.createElement("div",{className:"wpcf-dashboard-profile-item"},a.a.createElement("p",null,"City"),a.a.createElement("p",null,n.profile_city)),a.a.createElement("div",{className:"wpcf-dashboard-profile-item"},a.a.createElement("p",null,"Postal Code"),a.a.createElement("p",null,n.profile_post_code)))))}}])&&Xt(n.prototype,o),i&&Xt(n,i),t}(),nn=me(function(e){return{user:e.user}},{fetchUser:vt})(tn),rn=function(e){var t=e.fill,n=e.emptyFill,r=e.size,o=Number(e.thickness),i=e.percent>100?100:e.percent,l=2*Math.PI*((44-o)/2),c=l-l/100*i,u={display:"block",width:r.toString().replace("px","")+"px",height:r.toString().replace("px","")+"px",transform:"rotate(-90deg)"};return a.a.createElement("svg",{viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44),style:u},a.a.createElement("circle",{cx:44,cy:44,r:(44-o)/2,fill:"none",stroke:n,strokeWidth:"1"}),a.a.createElement("circle",{cx:44,cy:44,r:(44-o)/2,fill:"none",stroke:t,strokeWidth:o,strokeDasharray:l,strokeDashoffset:c,strokeLinecap:"round"}))};rn.defaultProps={fill:"#00A92F",emptyFill:"#ADAECF",size:16,thickness:6,percent:0};var an=rn,on=function(e){var t=e.data;return a.a.createElement("div",{className:"wpcf-campaign-item"},a.a.createElement("a",{className:"wpcf-campaign-thumbnail",title:Ft(t.title),href:t.permalink,dangerouslySetInnerHTML:{__html:t.thumbnail}}),a.a.createElement("div",{className:"wpcf-campaign-content"},a.a.createElement("div",{className:"wpcf-campaign-heading"+(!0!==e.invested?"":"wpcf-has-not-campaign-link")},a.a.createElement("h3",{className:"wpcf-campaign-title"},a.a.createElement("a",{href:t.permalink},Ft(t.title))),!0!==e.invested&&a.a.createElement("div",{className:"wpcf-campaign-links"},a.a.createElement("button",{"aria-label":"Report",title:"Report",onClick:function(){return e.onClickReport({id:t.id,name:t.title})}},a.a.createElement("span",{className:"fas fa-chart-bar"})),a.a.createElement("button",{"aria-label":"Edit",title:"Edit",onClick:function(){return e.onClickUpdates(t.id,t.updates)}},a.a.createElement("i",{className:"far fa-edit"})),a.a.createElement("button",{"aria-label":"Delete",title:"Delete"},a.a.createElement("span",{className:"fas fa-trash-alt"})))),a.a.createElement("h4",{className:"wpcf-campaign-author"},"by ",a.a.createElement("a",{href:"javascript:void(0)"},t.author_name)," "),a.a.createElement("div",{className:"wpcf-campaign-infos"},a.a.createElement("div",{className:"wpcf-campaign-info"},a.a.createElement("div",{className:"wpcf-campaign-raised"},a.a.createElement(an,{size:50,thickness:3,percent:Math.round(t.raised_percent)}),a.a.createElement("span",{className:"wpcf-raised-percent"},Math.round(t.raised_percent),"%"))),a.a.createElement("div",{className:"wpcf-campaign-info"},a.a.createElement("h5",null,a.a.createElement("span",null,WPCF.wc_currency_symbol+t.total_raised),a.a.createElement("span",null,"Fund Raised"))),a.a.createElement("div",{className:"wpcf-campaign-info"},a.a.createElement("h5",null,a.a.createElement("span",null,WPCF.wc_currency_symbol+t.funding_goal),a.a.createElement("span",null,"Funding Goal"))),"never_end"!==t.end_method&&a.a.createElement("div",{className:"wpcf-campaign-info"},a.a.createElement("h5",null,a.a.createElement("span",null,t.is_started?t.days_remaining:t.days_until_launch),a.a.createElement("span",null,"Days ",t.is_started?"to go":"Until Launch"))),e.pledge&&a.a.createElement("div",{className:"wpcf-campaign-info"},a.a.createElement("a",{className:"wpcf-btn wpcf-btn-round wpcf-btn-outline wpcf-btn-sm",href:t.permalink},"Pledge More")))))};on.defaultProps={invested:!1};var ln=on;function cn(e){return(cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fn(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function pn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dn(e){return(dn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hn(e,t){return(hn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var yn=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==cn(t)&&"function"!=typeof t?mn(e):t}(this,dn(t).call(this,e))).state={campaignId:n.props.campaignId,updates:n.props.updates},n.addItem=n.addItem.bind(mn(n)),n.removeItem=n.removeItem.bind(mn(n)),n.onChangeInput=n.onChangeInput.bind(mn(n)),n.onSubmitUpates=n.onSubmitUpates.bind(mn(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&hn(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidUpdate",value:function(e,t){var n=this.props.campaign,r=n.saveReq,a=n.error;r!==e.campaign.saveReq&&("complete"==r&&alert("data saved"),"error"==r&&alert(a))}},{key:"addItem",value:function(){var e=[].concat(fn(this.state.updates),[{date:"",title:"",details:""}]);this.setState({updates:e})}},{key:"removeItem",value:function(e){var t=fn(this.state.updates);t.splice(e,1),this.setState({updates:t})}},{key:"onChangeInput",value:function(e,t){var n=fn(this.state.updates);n[t][e.target.name]=e.target.value,this.setState(n)}},{key:"onSubmitUpates",value:function(e){e.preventDefault();var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?un(n,!0).forEach(function(t){sn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.state);this.props.saveCampaignUpdates(t)}},{key:"render",value:function(){var e=this,t=this.state.updates;return a.a.createElement("div",{className:"wpcf-dashboard-content"},a.a.createElement("h3",null,"Updates"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",{className:"withdraw-method-forms-wrap"},a.a.createElement("form",{className:"withdraw-method-form",onSubmit:this.onSubmitUpates},t.length>0&&t.map(function(t,n){return a.a.createElement("div",{key:n,className:""},a.a.createElement(Ct,{name:"date",value:t.date,onChange:function(t){return e.onChangeInput(t,n)},format:"yy-mm-dd"}),a.a.createElement("div",{className:""},a.a.createElement("label",null,"Update Title:"),a.a.createElement("input",{type:"text",name:"title",value:t.title,onChange:function(t){return e.onChangeInput(t,n)},required:!0})),a.a.createElement("div",{className:""},a.a.createElement("label",null,"Update Details:"),a.a.createElement("input",{type:"textarea",name:"details",value:t.details,onChange:function(t){return e.onChangeInput(t,n)},required:!0})),a.a.createElement("button",{type:"button",onClick:function(){return e.removeItem(n)}},"Remove"))}),a.a.createElement("button",{type:"button",onClick:this.addItem},"Add Update"),a.a.createElement("div",{className:"withdraw-account-save-btn-wrap"},a.a.createElement("button",{type:"submit",className:"wpcf-btn"},"Save Updates"),a.a.createElement("button",{type:"button",onClick:function(){return e.props.onClickUpdates("","")}}," Back "))))))}}])&&pn(n.prototype,o),i&&pn(n,i),t}(),vn=me(function(e){return{campaign:e.myCampaign}},{saveCampaignUpdates:function(e){return function(t){t({type:"save_campaign_updates_pending"});var n="".concat(WPCF.rest_url,"/save-campaign-updates"),r={method:"POST",body:JSON.stringify(e),headers:bt};fetch(n,r).then(function(e){return e.json()}).then(function(e){return t({type:"save_campaign_updates_complete",payload:e})}).catch(function(e){return t({type:"save_campaign_updates_error",payload:e})})}}})(yn);function bn(e){return(bn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function gn(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function En(e,t){return!t||"object"!==bn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _n(e){return(_n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function kn(e,t){return(kn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Cn=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=En(this,_n(t).call(this,e))).state={pager:{}},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&kn(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.items.length!==e.items.length,r=this.props.filterValue!==e.filterValue;(n||r)&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props.items,n=this.state.pager;if(!(e<1||e>n.totalPages)){n=this.getPager(t.length,e);var r=t.slice(n.startIndex,n.endIndex+1);this.setState({pager:n}),this.props.onChangePage(r)}}},{key:"getPager",value:function(e,t){t=t||1;var n,r,a=this.props.pageSize||10,o=Math.ceil(e/a);o<=10?(n=1,r=o):t<=6?(n=1,r=10):t+4>=o?(n=o-9,r=o):(n=t-5,r=t+4);var i=(t-1)*a,l=Math.min(i+a-1,e-1),c=gn(Array(r+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:o,startPage:n,endPage:r,startIndex:i,endIndex:l,pages:c}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:a.a.createElement("div",{className:"wpneo-pagination"},a.a.createElement("ul",{className:"page-numbers"},a.a.createElement("li",{className:1===t.currentPage?"disabled":""},a.a.createElement("a",{href:"javascrpt:void(0)",onClick:function(){return e.setPage(1)}},"First")),a.a.createElement("li",{className:1===t.currentPage?"disabled":""},a.a.createElement("a",{href:"javascrpt:void(0)",onClick:function(){return e.setPage(t.currentPage-1)}},"Previous")),t.pages.map(function(n,r){return a.a.createElement("li",{key:r},t.currentPage===n?a.a.createElement("span",{"aria-current":"page",className:"page-numbers current"},n):a.a.createElement("a",{className:"page-link",href:"javascrpt:void(0)",onClick:function(t){return e.setPage(n)}},n))}),a.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":""},a.a.createElement("a",{href:"javascrpt:void(0)",onClick:function(){return e.setPage(t.currentPage+1)}},"Next")),a.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":""},a.a.createElement("a",{href:"javascrpt:void(0)",onClick:function(){return e.setPage(t.totalPages)}},"Last"))))}}])&&wn(n.prototype,o),i&&wn(n,i),t}();Cn.defaultProps={initialPage:1,filterValue:""};var xn=Cn;function On(e){return(On="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Sn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pn(e,t){return!t||"object"!==On(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Tn(e){return(Tn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function jn(e,t){return(jn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Nn=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return Pn(r,(n=r=Pn(this,(e=Tn(t)).call.apply(e,[this].concat(o))),r.state={pageOfItems:[],filterValue:"running",campaignReport:{id:"",name:""},campaignId:"",updates:[]},r.onChangePage=function(e){r.setState({pageOfItems:e})},r.onClickFilter=function(e){e.preventDefault();var t=e.target.innerText.toLowerCase();r.setState({filterValue:t})},r.onClickReport=function(e){r.setState({campaignReport:e})},r.onClickUpdates=function(e,t){r.setState({campaignId:e,updates:t})},r.getCampaignData=function(){var e=r.state.filterValue;return r.props.campaign.data.filter(function(t){return t.status==e})},n))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jn(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.campaign.loaded||this.props.fetchMyCampaigns()}},{key:"render",value:function(){var e=this,t=this.props.campaign,n=this.state,o=n.pageOfItems,i=n.filterValue,l=n.campaignReport,c=n.campaignId,u=n.updates;if(t.loading)return a.a.createElement("div",null,"Loading...");if(l.id)return a.a.createElement(Yt,{campaign:l,onClickBack:this.onClickReport});if(c)return a.a.createElement(vn,{updates:u,campaignId:c,onClickUpdates:this.onClickUpdates});var s=this.getCampaignData();return a.a.createElement(r.Fragment,null,a.a.createElement(Vt,{title:"My Campaigns"}),a.a.createElement("div",{className:"wpcf-mycampaign-filter-group wpcf-btn-group"},a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("running"==i?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Running"),a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("pending"==i?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Pending"),a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("draft"==i?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Draft"),a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("completed"==i?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Completed")),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},s.length?a.a.createElement(r.Fragment,null,o.map(function(t,n){return a.a.createElement(ln,{key:n,data:t,onClickReport:e.onClickReport,onClickUpdates:e.onClickUpdates})}),a.a.createElement(xn,{items:s,pageSize:5,filterValue:i,onChangePage:this.onChangePage})):a.a.createElement(r.Fragment,null,"Campaign not found")))}}])&&Sn(n.prototype,o),i&&Sn(n,i),t}(),Dn=me(function(e){return{campaign:e.myCampaign}},{fetchMyCampaigns:function(){return function(e){e({type:"fetch_my_campaigns_pending"});var t="".concat(WPCF.rest_url,"/my-campaigns");fetch(t,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_my_campaigns_complete",payload:t})}).catch(function(t){return e({type:"fetch_my_campaigns_error",payload:t})})}}})(Nn);function Rn(e){return(Rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function In(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mn(e,t){return!t||"object"!==Rn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Fn(e){return(Fn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function An(e,t){return(An=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Un=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return Mn(r,(n=r=Mn(this,(e=Fn(t)).call.apply(e,[this].concat(o))),r.state={pageOfItems:[],filterValue:"running",campaignReport:{id:"",name:""}},r.onChangePage=function(e){r.setState({pageOfItems:e})},r.onClickReport=function(e){r.setState({campaignReport:e})},r.onClickFilter=function(e){e.preventDefault();var t=e.target.innerText.toLowerCase();r.setState({filterValue:t})},r.getCampaignData=function(){var e=r.state.filterValue;return r.props.campaign.data.filter(function(t){return t.status==e})},n))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&An(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.campaign.loaded||this.props.fetchInvestedCampaigns()}},{key:"render",value:function(){var e=this;if(this.props.campaign.loading)return a.a.createElement("div",null,"Loading...");var t=this.state,n=t.pageOfItems,o=t.filterValue,i=this.getCampaignData();return a.a.createElement(r.Fragment,null,a.a.createElement(Vt,{title:"Invested Campaigns"}),a.a.createElement("div",{className:"wpcf-mycampaign-filter-group wpcf-btn-group"},a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("running"==o?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Running"),a.a.createElement("button",{className:"wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary "+("completed"==o?"active":""),onClick:function(t){return e.onClickFilter(t)}},"Completed")),a.a.createElement("div",{className:"wpcf-dashboard-content-inners"},i.length?a.a.createElement("div",null,n.map(function(e,t){return a.a.createElement(ln,{key:t,data:e,pledge:!0,invested:!0})}),a.a.createElement(xn,{items:i,pageSize:5,filterValue:o,onChangePage:this.onChangePage})):a.a.createElement("div",null,"Campaign not found")))}}])&&In(n.prototype,o),i&&In(n,i),t}(),Ln=me(function(e){return{campaign:e.investedCampaign}},{fetchInvestedCampaigns:function(){return function(e){e({type:"fetch_invested_campaigns_pending"});var t="".concat(WPCF.rest_url,"/invested-campaigns");fetch(t,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_invested_campaigns_complete",payload:t})}).catch(function(t){return e({type:"fetch_invested_campaigns_error",payload:t})})}}})(Un);function zn(e){switch(e){case"cancelled":case"failed":return"#c91818";case"completed":return"#00a92f";default:return"#2b51a1"}}var Wn=function(e){var t=e.data,n=t.details,r=t.details,o=r.billing,i=r.raised,l=r.receivable,c=r.marketplace,u=r.status,s=r.status_name;return a.a.createElement("tr",null,a.a.createElement("td",null,o.first_name+" "+o.last_name),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:i}}),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:l}}),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:c}}),a.a.createElement("td",{style:{color:zn(u)}},s),a.a.createElement("td",null,a.a.createElement("i",{className:"fa fa-envelope"})),a.a.createElement("td",null,a.a.createElement("span",{onClick:function(){return e.onClickDetails(n)}}," Details ")))},Vn=function(e){var t=e.data,n=e.data,r=n.billing,o=n.line_items;return a.a.createElement("div",{className:"wpneo-modal-wrapper",style:{display:"block"}},a.a.createElement("div",{className:"wpneo-modal-content"},a.a.createElement("div",{className:"wpneo-modal-wrapper-head"},a.a.createElement("h4",{id:"wpcf_modal_title"},"Pledge Details"),a.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return e.onClickModalClose()},className:"wpneo-modal-close"},"×")),a.a.createElement("span",{className:"wpcf-print-button button"},"print"),a.a.createElement("div",{className:"wpneo-modal-content-inner"},a.a.createElement("div",{id:"wpcf_modal_message"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("span",null,"Order ID:")," ",t.id),a.a.createElement("div",null,a.a.createElement("span",null,"Order Date:")," ",t.formatted_c_date),a.a.createElement("div",null,a.a.createElement("span",null,"Order Status:")," ",t.status_name),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Product"),a.a.createElement("th",null,"Total"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,o[0].product_name),a.a.createElement("td",{className:"woocommerce-table__product-total product-total",dangerouslySetInnerHTML:{__html:t.raised}})),t.selected_reward&&a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"2",dangerouslySetInnerHTML:{__html:t.selected_reward}})),a.a.createElement("tr",null,a.a.createElement("td",null,"Subtotal:"),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:t.subtotal}})),a.a.createElement("tr",null,a.a.createElement("td",null,"Payments Method:"),a.a.createElement("td",null,t.payment_method_title)),a.a.createElement("tr",null,a.a.createElement("td",null,"Total:"),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:t.raised}})))),a.a.createElement("h3",null,"Customer details"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Note:"),a.a.createElement("td",null,t.customer_note)),a.a.createElement("tr",null,a.a.createElement("th",null,"Email:"),a.a.createElement("td",null,r.email)),a.a.createElement("tr",null,a.a.createElement("th",null,"Phone:"),a.a.createElement("td",null,r.phone)))),a.a.createElement("h3",null,"Billing Address:"),a.a.createElement("address",{dangerouslySetInnerHTML:{__html:t.formatted_b_addr}}))))))};function qn(e){return(qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Bn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hn(e){return(Hn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(e,t){return(Qn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Kn=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==qn(t)&&"function"!=typeof t?$n(e):t}(this,Hn(t).call(this,e))).state={pageOfItems:[],openModal:!1,modalData:""},n.onChangePage=n.onChangePage.bind($n(n)),n.onClickDetails=n.onClickDetails.bind($n(n)),n.onClickModalClose=n.onClickModalClose.bind($n(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qn(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.pledge.loaded||this.props.fetchPledgeReceived()}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"onClickDetails",value:function(e){this.setState({openModal:!0,modalData:e})}},{key:"onClickModalClose",value:function(){this.setState({openModal:!1})}},{key:"render",value:function(){var e=this,t=this.props.pledge;if(t.loading)return a.a.createElement("div",null,"Loading...");var n=this.state,r=n.pageOfItems,o=n.openModal,i=n.modalData,l=t.data,c=l.total_goal,u=l.total_raised,s=l.total_available,f=l.receiver_percent,p=l.orders;return a.a.createElement("div",null,a.a.createElement("h3",null,"Pledge Recieved"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",{className:"wpcf-dashboard-info-cards"},a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val",dangerouslySetInnerHTML:{__html:u}}),a.a.createElement("span",null,"Fund Raised"))),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val",dangerouslySetInnerHTML:{__html:c}}),a.a.createElement("span",null,"Goal"))),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val",dangerouslySetInnerHTML:{__html:s}}),a.a.createElement("span",null,"Available")))),p.length?a.a.createElement("div",{className:"wpcf-dashboard-info-table-wrap"},a.a.createElement("table",{className:"wpcf-dashboard-info-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Raised"),a.a.createElement("td",null,"Receivable ",f&&"(".concat(f,"%)")),a.a.createElement("td",null,"Marketplace ",f&&"(".concat(100-f,"%)")),a.a.createElement("td",null,"Status"),a.a.createElement("td",null,"Email"),a.a.createElement("td",null))),a.a.createElement("tbody",null,r.map(function(t,n){return a.a.createElement(Wn,{key:n,data:t,onClickDetails:e.onClickDetails})}))),a.a.createElement(xn,{items:p,pageSize:5,onChangePage:this.onChangePage}),o&&a.a.createElement(Vn,{data:i,onClickModalClose:this.onClickModalClose})):a.a.createElement("div",null,"Data not found")))}}])&&Bn(n.prototype,o),i&&Bn(n,i),t}(),Yn=me(function(e){return{pledge:e.pledgeReceived}},{fetchPledgeReceived:function(){return function(e){e({type:"fetch_pledge_received_pending"});var t="".concat(WPCF.rest_url,"/pledge-received");fetch(t,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_pledge_received_complete",payload:t})}).catch(function(t){return e({type:"fetch_pledge_received_error",payload:t})})}}})(Kn);function Gn(e){return(Gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jn(e){return(Jn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Zn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function er(e,t){return(er=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Gn(t)&&"function"!=typeof t?Zn(e):t}(this,Jn(t).call(this,e))).state={pageOfItems:[]},n.onChangePage=n.onChangePage.bind(Zn(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&er(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.campaign.loaded||this.props.fetchBookmarkCampaigns()}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"render",value:function(){var e=this.props.campaign;if(e.loading)return a.a.createElement("div",null,"Loading...");var t=this.state.pageOfItems;return a.a.createElement("div",null,a.a.createElement("h3",null,"Bookmarks"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},e.data.length?a.a.createElement("div",null,t.map(function(e,t){return a.a.createElement(ln,{key:t,data:e})}),a.a.createElement(xn,{items:e.data,pageSize:5,onChangePage:this.onChangePage})):a.a.createElement("div",null,"Campaign not found")))}}])&&Xn(n.prototype,o),i&&Xn(n,i),t}(),nr=me(function(e){return{campaign:e.bookmarkCampaign}},{fetchBookmarkCampaigns:function(){return function(e){e({type:"fetch_bookmark_campaigns_pending"});var t="".concat(WPCF.rest_url,"/bookmark-campaigns");fetch(t,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_bookmark_campaigns_complete",payload:t})}).catch(function(t){return e({type:"fetch_bookmark_campaigns_error",payload:t})})}}})(tr),rr={"Content-Type":"application/json","WP-Nonce":WPCF.nonce};function ar(e){switch(e){case"cancelled":case"failed":return"#c91818";case"completed":case"Done":return"#00a92f";default:return"#2b51a1"}}var or=function(e){var t=e.data,n=t.details,r=t.details.billing;return a.a.createElement("tr",null,a.a.createElement("td",null,"#",n.id),a.a.createElement("td",null,r.first_name+" "+r.last_name),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:n.total}}),a.a.createElement("td",null,n.formatted_c_date),a.a.createElement("td",{style:{color:ar(n.status)}},n.status_name),a.a.createElement("td",{style:{color:ar(n.fulfillment)}},n.fulfillment),a.a.createElement("td",null,a.a.createElement("span",{onClick:function(){return e.onClickDetails(n)}}," Details ")))},ir=function(e){var t=e.data,n=e.data,r=n.billing,o=n.line_items;return a.a.createElement("div",{className:"wpcf-dashboard-content"},a.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.onClickBack("")}},"Go Back Order List"),a.a.createElement("h3",null,"Order #",t.id),a.a.createElement("p",null,"Created ",t.formatted_c_date),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",null,a.a.createElement("h5",null,"Order Details"),a.a.createElement("div",null,a.a.createElement("p",null,r.first_name+" "+r.last_name),a.a.createElement("p",null,o.length?o[0].product_name:""),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:"Pledged "+t.total}})),a.a.createElement("div",null,a.a.createElement("p",null,"Payment Status"),a.a.createElement("p",null,t.status_name),a.a.createElement("p",null,t.formatted_oc_date)),a.a.createElement("div",null,a.a.createElement("p",null,"Fulfillment"),a.a.createElement("p",null,t.fulfillment))),a.a.createElement("div",null,a.a.createElement("h5",null,"Billing Details"),a.a.createElement("div",null,a.a.createElement("p",null,"First Name"),a.a.createElement("p",null,r.first_name)),a.a.createElement("div",null,a.a.createElement("p",null,"Last Name"),a.a.createElement("p",null,r.last_name)),a.a.createElement("div",null,a.a.createElement("p",null,"Company"),a.a.createElement("p",null,r.company)),a.a.createElement("div",null,a.a.createElement("p",null,"Country"),a.a.createElement("p",null,r.country_name)),a.a.createElement("div",null,a.a.createElement("p",null,"Address"),a.a.createElement("p",null,t.formatted_b_addr)),a.a.createElement("div",null,a.a.createElement("p",null,"Zip Code"),a.a.createElement("p",null,r.postcode)),a.a.createElement("div",null,a.a.createElement("p",null,"Note"),a.a.createElement("p",null,t.customer_note)))))};function lr(e){return(lr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function cr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ur(e){return(ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function sr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fr(e,t){return(fr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var pr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==lr(t)&&"function"!=typeof t?sr(e):t}(this,ur(t).call(this,e))).state={pageOfItems:[],filterValue:"",searchText:"",orderDetails:""},n.onChangePage=n.onChangePage.bind(sr(n)),n.onClickDetails=n.onClickDetails.bind(sr(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fr(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.order.loaded||this.props.fetchOrders()}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"onClickDetails",value:function(e){this.setState({orderDetails:e})}},{key:"onClickFilter",value:function(e){e.preventDefault();var t=e.target.innerText.toLowerCase();this.setState({filterValue:t})}},{key:"onChangeInput",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"geOrderLength",value:function(e){var t=this.props.order.data,n=t.length;return e&&(n=t.filter(function(t){return t.details.status==e}).length),n}},{key:"getOrderData",value:function(){var e=this.state,t=e.filterValue,n=e.searchText,r=this.props.order,a=r.data;return t&&(a=r.data.filter(function(e){return e.details.status==t})),n&&(a=r.data.filter(function(e){return-1!==e.details.billing.first_name.toLowerCase().search(n.toLowerCase())||-1!==e.details.billing.last_name.toLowerCase().search(n.toLowerCase())})),a}},{key:"render",value:function(){var e=this;if(this.props.order.loading)return a.a.createElement("div",null,"Loading...");var t=this.state,n=t.pageOfItems,r=t.filterValue,o=t.searchText,i=t.orderDetails,l=this.getOrderData();return i?a.a.createElement(ir,{data:i,onClickBack:this.onClickDetails}):a.a.createElement("div",null,a.a.createElement("h3",null,"Order"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",{className:"wpcf-dashboard-info-cards"},a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val"},this.geOrderLength()),a.a.createElement("span",null,"Total Order"))),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val"},this.geOrderLength("pending")),a.a.createElement("span",null,"Pending Order"))),a.a.createElement("div",{className:"wpcf-dashboard-info-card"},a.a.createElement("p",null,a.a.createElement("span",{className:"wpcf-dashboard-info-val"},this.geOrderLength("completed")),a.a.createElement("span",null,"Completed Order")))),a.a.createElement("div",{className:"wpcf-dashboard-search"},a.a.createElement("div",null,a.a.createElement("input",{name:"searchText",onChange:function(t){return e.onChangeInput("searchText",t.target.value)},value:o})),a.a.createElement("div",null,a.a.createElement("span",{className:"pending"==r?"active":"",onClick:function(t){return e.onClickFilter(t)}},"Pending"),a.a.createElement("span",{className:"processing"==r?"active":"",onClick:function(t){return e.onClickFilter(t)}},"Processing"),a.a.createElement("span",{className:"cancelled"==r?"active":"",onClick:function(t){return e.onClickFilter(t)}},"Cancelled"),a.a.createElement("span",{className:"completed"==r?"active":"",onClick:function(t){return e.onClickFilter(t)}},"Completed"))),l.length?a.a.createElement("div",{className:"wpcf-dashboard-info-table-wrap"},a.a.createElement("table",{className:"wpcf-dashboard-info-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Order"),a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Pledge"),a.a.createElement("td",null,"Date"),a.a.createElement("td",null,"Payment"),a.a.createElement("td",null,"Fulfillment"),a.a.createElement("td",null,"Action"))),a.a.createElement("tbody",null,n.map(function(t,n){return a.a.createElement(or,{key:n,data:t,onClickDetails:e.onClickDetails})}))),a.a.createElement(xn,{items:l,pageSize:5,filterValue:r,onChangePage:this.onChangePage})):a.a.createElement("div",null,"Data not found")))}}])&&cr(n.prototype,o),i&&cr(n,i),t}(),dr=me(function(e){return{order:e.order}},{fetchOrders:function(){return function(e){e({type:"fetch_orders_pending"});var t="".concat(WPCF.rest_url,"/orders");fetch(t,{method:"GET",headers:rr}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_orders_complete",payload:t})}).catch(function(t){return e({type:"fetch_orders_error",payload:t})})}}})(pr),mr={"Content-Type":"application/json","WP-Nonce":WPCF.nonce},hr=function(){return function(e){e({type:"fetch_withdraw_methods_pending"});var t="".concat(WPCF.rest_url,"/withdraw-methods");fetch(t,{method:"GET",headers:mr}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_withdraw_methods_complete",payload:t})}).catch(function(t){return e({type:"fetch_withdraw_methods_error",payload:t})})}},yr=function(e){var t=e.data;return a.a.createElement("tr",null,a.a.createElement("td",null,t.campaign_title),a.a.createElement("td",null,t.raised_percentage,"%"),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:t.total_raised}}),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:t.total_receivable}}),a.a.createElement("td",null,a.a.createElement("span",{onClick:function(){return e.onClickWithdrawDetails(t)}}," Withdraw ")))};function vr(e){return(vr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function br(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function gr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Er(e){return(Er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function kr(e,t){return(kr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Cr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==vr(t)&&"function"!=typeof t?_r(e):t}(this,Er(t).call(this,e))).state={withdraw_amount:"",withdraw_message:"",withdraw_method:"",errorMsg:""},n.onChangeInput=n.onChangeInput.bind(_r(n)),n.onSubmitWithdrawReq=n.onSubmitWithdrawReq.bind(_r(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&kr(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.withdraw,a=n.withdraw.reqStatus;a!==e.withdraw.reqStatus&&("complete"==a&&this.setState({withdraw_amount:"",withdraw_message:"",withdraw_method:"",errorMsg:""}),"error"==a&&this.setState({errorMsg:r.error}))}},{key:"onChangeInput",value:function(e){this.setState(gr({},e.target.name,e.target.value))}},{key:"onSubmitWithdrawReq",value:function(e){e.preventDefault();var t=this.props.data.campaign_id;if(this.state.withdraw_amount<=0)return this.setState({errorMsg:"Please enter valid amount"}),!1;var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?br(n,!0).forEach(function(t){gr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):br(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.state,{campaign_id:t});delete n.errorMsg,this.props.postWithdrawRequest(n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.data.withdraw,o=t.methods,i=t.onClickBack,l=this.state,c=l.withdraw_amount,u=l.withdraw_message,s=l.withdraw_method,f=l.errorMsg;return a.a.createElement("div",{className:"wpcf-dashboard-content"},a.a.createElement("h3",null,n.campaign_title),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},r.request_items.length>0&&a.a.createElement("div",{className:"wpcf-dashboard-info-table-wrap"},a.a.createElement("table",{className:"wpcf-dashboard-info-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#Title"),a.a.createElement("th",null,"#Amount"),a.a.createElement("th",null,"#Method"),a.a.createElement("th",null,"#Status"))),a.a.createElement("tbody",null,r.request_items.map(function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.title}}),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.amount}}),a.a.createElement("td",null," ",e.method," "),a.a.createElement("td",null,"paid"==e.status?a.a.createElement("span",{className:"label-success"},"Paid"):a.a.createElement("span",{className:"label-warning"},"Not Paid")))}),a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"1"}),a.a.createElement("td",null,a.a.createElement("strong",null,"Receivable")),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:n.total_receivable}})),a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"1"}),a.a.createElement("td",null," ",a.a.createElement("strong",null," Total Withdraw ")," "),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:r.total_withdraw}})),a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"1"}),a.a.createElement("td",null," ",a.a.createElement("strong",null," Balance ")," "),a.a.createElement("td",{dangerouslySetInnerHTML:{__html:r.balance}}))))),a.a.createElement("div",{className:"withdraw-method-forms-wrap"},a.a.createElement("form",{className:"withdraw-method-form",onSubmit:this.onSubmitWithdrawReq},f&&a.a.createElement("div",{className:"alert alert-danger"},f),a.a.createElement("div",{className:"withdraw-method-field-wrap"},a.a.createElement("label",{htmlFor:"wpcf_withdraw_amount"},"Amount"),a.a.createElement("input",{id:"wpcf_withdraw_amount",type:"number",name:"withdraw_amount",value:c,onChange:this.onChangeInput,required:!0}),a.a.createElement("p",{className:"withdraw-field-desc"},"Remain Amount ",a.a.createElement("span",{dangerouslySetInnerHTML:{__html:r.balance}}))),a.a.createElement("div",{className:"withdraw-method-field-wrap"},a.a.createElement("label",{htmlFor:"wpcf_withdraw_message"},"Message"),a.a.createElement("input",{id:"wpcf_withdraw_message",type:"textarea",name:"withdraw_message",value:u,onChange:this.onChangeInput})),a.a.createElement("div",{className:"withdraw-method-select-wrap"},null==o?a.a.createElement(mt,{to:"/settings/withdraw"},"Setup withdraw methods"):Object.keys(o.data).map(function(t){return a.a.createElement("div",{key:t,className:"withdraw-method-select"},a.a.createElement("input",{type:"radio",id:"wpcf_withdraw_method_".concat(t),className:"withdraw-method-select-input",name:"withdraw_method",value:t,onChange:e.onChangeInput,required:!0,checked:s==t}),a.a.createElement("label",{htmlFor:"wpcf_withdraw_method_".concat(t),className:s==t?"active":""},a.a.createElement("p",null,o.data[t].method_name),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.min_withdraw}}),a.a.createElement(mt,{to:"/settings/withdraw"},"Change info")))})),a.a.createElement("div",{className:"withdraw-account-save-btn-wrap"},a.a.createElement("button",{type:"submit",className:"wpcf-btn",disabled:null==o},"Confirm Withdrawal"),a.a.createElement("button",{type:"button",onClick:function(){return i("")}}," Back "))))))}}])&&wr(n.prototype,o),i&&wr(n,i),t}(),xr=me(function(e){return{withdraw:e.withdraw}},{postWithdrawRequest:function(e){return function(t){t({type:"post_withdraw_request_pending"});var n="".concat(WPCF.rest_url,"/withdraw-request"),r={method:"POST",body:JSON.stringify(e),headers:mr};fetch(n,r).then(function(e){return e.json()}).then(function(e){return t({type:"post_withdraw_request_complete",payload:e})}).catch(function(e){return t({type:"post_withdraw_request_error",payload:e})})}}})(Cr);function Or(e){return(Or="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Sr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pr(e){return(Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Tr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jr(e,t){return(jr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Nr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Or(t)&&"function"!=typeof t?Tr(e):t}(this,Pr(t).call(this,e))).state={pageOfItems:[],withdrawDetails:""},n.onChangePage=n.onChangePage.bind(Tr(n)),n.onClickWithdrawDetails=n.onClickWithdrawDetails.bind(Tr(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jr(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.withdraw,n=e.methods;t.loaded||this.props.fetchWithdraws(),n.loaded||this.props.fetchWithdrawMethods()}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"onClickWithdrawDetails",value:function(e){this.setState({withdrawDetails:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.withdraw,r=t.methods;if(n.loading||r.loading)return a.a.createElement("div",null,"Loading...");var o=this.state,i=o.pageOfItems,l=o.withdrawDetails;return l?a.a.createElement(xr,{data:l,methods:r.data.selected_method,onClickBack:this.onClickWithdrawDetails}):a.a.createElement("div",null,a.a.createElement("h3",null,"Withdraw"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},n.data.length?a.a.createElement("div",{className:"wpcf-dashboard-info-table-wrap"},a.a.createElement("table",{className:"wpcf-dashboard-info-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Project"),a.a.createElement("td",null,"Goal Complete"),a.a.createElement("td",null,"Available Currency"),a.a.createElement("td",null,"Available to Withdraw"),a.a.createElement("td",null))),a.a.createElement("tbody",null,i.map(function(t,n){return a.a.createElement(yr,{key:n,data:t,onClickWithdrawDetails:e.onClickWithdrawDetails})}))),a.a.createElement(xn,{items:n.data,pageSize:5,onChangePage:this.onChangePage})):a.a.createElement("div",null,"Data not found")))}}])&&Sr(n.prototype,o),i&&Sr(n,i),t}(),Dr=me(function(e){return{withdraw:e.withdraw,methods:e.withdrawMethod}},{fetchWithdraws:function(){return function(e){e({type:"fetch_withdraws_pending"});var t="".concat(WPCF.rest_url,"/withdraws");fetch(t,{method:"GET",headers:mr}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_withdraws_complete",payload:t})}).catch(function(t){return e({type:"fetch_withdraws_error",payload:t})})}},fetchWithdrawMethods:hr})(Nr);function Rr(e){return(Rr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ar(e){return(Ar=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ur(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Lr(e,t){return(Lr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var zr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Rr(t)&&"function"!=typeof t?Ur(e):t}(this,Ar(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ir(n,!0).forEach(function(t){Mr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.props.data,{new_pass:"",retype_pass:"",error:""}),n.changeImage=n.changeImage.bind(Ur(n)),n.onChangeValue=n.onChangeValue.bind(Ur(n)),n.onSubmit=n.onSubmit.bind(Ur(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Lr(e,t)}(t,r["Component"]),n=t,(o=[{key:"changeImage",value:function(){var e=this;wp.media.editor.send.attachment=function(t,n){e.setState({profile_image:n.url,profile_image_id:n.id})},wp.media.editor.open()}},{key:"onChangeValue",value:function(e){this.setState(Mr({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.new_pass,r=t.retype_pass,a=this.state;if(delete a.new_pass,delete a.retype_pass,delete a.error,n){if(n!==r)return this.setState({error:"Password doesn't match"}),!1;a.password=n}this.props.onClickSaveData(a),this.setState({error:""})}},{key:"render",value:function(){var e=this.props.countries,t=this.state,n=t.profile_image,r=t.username,o=t.first_name,i=t.last_name,l=t.profile_email1,c=t.profile_country,u=t.profile_city,s=t.profile_address,f=t.profile_post_code,p=t.new_pass,d=t.retype_pass,m=t.error;return a.a.createElement("form",{onSubmit:this.onSubmit},m&&a.a.createElement("div",{className:"alert alert-danger"},m),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",null,"Profile Picture"),a.a.createElement("img",{className:"",src:n,style:{maxWidth:"200px"}}),a.a.createElement("span",{onClick:this.changeImage},"Edit")),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_username"},"Username"),a.a.createElement("input",{type:"text",id:"wpcfp_username",name:"username",value:r,disabled:!0})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_first_name"},"First Name"),a.a.createElement("input",{type:"text",id:"wpcfp_first_name",name:"first_name",value:o,onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_last_name"},"Last Name"),a.a.createElement("input",{type:"text",id:"wpcfp_last_name",name:"last_name",value:i,onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_email"},"Email"),a.a.createElement("input",{type:"text",id:"wpcfp_email",name:"profile_email1",value:l,onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_email"},"Country"),a.a.createElement("select",{name:"profile_country",value:c,onChange:this.onChangeValue},a.a.createElement("option",{value:""},"Select Country"),Object.keys(e).map(function(t){return a.a.createElement("option",{key:t,value:t},e[t])}),a.a.createElement("option",null))),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_city"},"City"),a.a.createElement("input",{type:"text",id:"wpcfp_city",name:"profile_city",value:u,onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_address"},"Address"),a.a.createElement("input",{type:"text",id:"wpcfp_address",name:"profile_address",value:s,onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_post_code"},"Postal Code"),a.a.createElement("input",{type:"text",id:"wpcfp_post_code",name:"profile_post_code",value:f,onChange:this.onChangeValue})),a.a.createElement("h3",null,"Password"),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_new_pass"},"New Password"),a.a.createElement("input",{type:"password",id:"wpcfp_new_pass",name:"new_pass",value:p||"",onChange:this.onChangeValue})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcfp_retype_pass"},"Retype Password"),a.a.createElement("input",{type:"password",id:"wpcfp_retype_pass",name:"retype_pass",value:d||"",onChange:this.onChangeValue})),a.a.createElement("button",{type:"button",onClick:this.props.toggleEdit},"Cancel"),a.a.createElement("button",{type:"submit"},"Save"))}}])&&Fr(n.prototype,o),i&&Fr(n,i),t}();function Wr(e){return(Wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Br(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hr(e){return(Hr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qr(e,t){return(Qr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Kr=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Wr(t)&&"function"!=typeof t?$r(e):t}(this,Hr(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vr(n,!0).forEach(function(t){qr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vr(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.props.data),n.onChangeInput=n.onChangeInput.bind($r(n)),n.onSubmit=n.onSubmit.bind($r(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qr(e,t)}(t,r["Component"]),n=t,(o=[{key:"onChangeInput",value:function(e){this.setState(qr({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onClickSaveData(this.state)}},{key:"render",value:function(){var e=this.state,t=e.profile_facebook,n=e.profile_twitter,r=e.profile_instagram,o=e.profile_youtube,i=e.profile_linkedin,l=e.profile_pinterest;return a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profile_facebook"},"Facebook"),a.a.createElement("input",{type:"text",id:"wpcf_profile_facebook",name:"profile_facebook",value:t,placeholder:"www.facebook.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profilefile_twitter"},"Twitter"),a.a.createElement("input",{type:"text",id:"wpcf_profile_twitter",name:"profile_twitter",value:n,placeholder:"www.twitter.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profile_instagram"},"Instagram"),a.a.createElement("input",{type:"text",id:"wpcf_profile_instagram",name:"profile_instagram",value:r,placeholder:"www.instagram.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profile_youtube"},"Youtube"),a.a.createElement("input",{type:"text",id:"wpcf_profile_youtube",name:"profile_youtube",value:o,placeholder:"www.youtube.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profile_linkedin"},"Linkedin"),a.a.createElement("input",{type:"text",id:"wpcf_profile_linkedin",name:"profile_linkedin",value:i,placeholder:"www.linkedin.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("div",{className:"wpcf-form-group"},a.a.createElement("label",{htmlFor:"wpcf_profile_pinterest"},"Pinterest"),a.a.createElement("input",{type:"text",id:"wpcf_profile_pinterest",name:"profile_pinterest",value:l,placeholder:"www.pinterest.com/wp-crowdfunding",onChange:this.onChangeInput})),a.a.createElement("button",{type:"submit"},"Save"))}}])&&Br(n.prototype,o),i&&Br(n,i),t}();function Yr(e){return(Yr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Gr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xr(e){return(Xr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Jr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zr(e,t){return(Zr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ea=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Yr(t)&&"function"!=typeof t?Jr(e):t}(this,Xr(t).call(this,e))).state={profileEdit:!1},n.toggleEdit=n.toggleEdit.bind(Jr(n)),n.onClickSaveData=n.onClickSaveData.bind(Jr(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zr(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.user,n=e.countries;t.loaded||this.props.fetchUser(),n.loaded||this.props.fetchCountries()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.user,r=n.saveReq,a=n.error;r!==e.user.saveReq&&("complete"==r&&alert("data saved"),"error"==r&&alert(a))}},{key:"toggleEdit",value:function(){this.setState({profileEdit:!this.state.profileEdit})}},{key:"onClickSaveData",value:function(e){this.props.saveUserData(e)}},{key:"render",value:function(){var e=this.state.profileEdit,t=this.props.user,n=t.loading,r=t.data;return n?a.a.createElement("div",null,"Loading..."):e?a.a.createElement(zr,{data:r,countries:this.props.countries.data,toggleEdit:this.toggleEdit,onClickSaveData:this.onClickSaveData}):a.a.createElement("div",null,a.a.createElement("h3",null,"Profile"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},a.a.createElement("div",{className:"wpcf-dashboard-profile"},a.a.createElement("div",null,a.a.createElement("img",{className:"profile-form-img",src:r.profile_image,alt:"Profile Image"})),a.a.createElement("div",null,a.a.createElement("p",null,r.first_name+" "+r.last_name),a.a.createElement("p",null,r.profile_email1)),a.a.createElement("div",null,a.a.createElement("p",null," Country "),a.a.createElement("p",null,r.country_name)),a.a.createElement("div",null,a.a.createElement("span",{onClick:this.toggleEdit},"Edit"))),a.a.createElement("div",{className:"wpcf-dashboard-profile"},a.a.createElement("div",null,a.a.createElement("p",null,"Deactivated your Account"),a.a.createElement("p",null,r.country_name)),a.a.createElement("div",null,a.a.createElement("button",null,"Yes"))),a.a.createElement("div",{className:"wpcf-dashboard-profile"},a.a.createElement("h2",null,"Connected Social Account"),a.a.createElement(Kr,{data:r,onClickSaveData:this.onClickSaveData}))))}}])&&Gr(n.prototype,o),i&&Gr(n,i),t}(),ta=me(function(e){return{user:e.user,countries:e.countries}},{fetchUser:vt,saveUserData:function(e){return function(t){t({type:"save_user_data_pending"});var n="".concat(WPCF.rest_url,"/save-userdata"),r={method:"POST",body:JSON.stringify(e),headers:yt};fetch(n,r).then(function(e){return e.json()}).then(function(e){return t({type:"save_user_data_complete",payload:e})}).catch(function(e){return t({type:"save_user_data_error",payload:e})})}},fetchCountries:function(){return function(e){e({type:"fetch_countries_pending"});var t="".concat(WPCF.rest_url,"/wc-countries");fetch(t,{method:"GET",headers:yt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_countries_complete",payload:t})}).catch(function(t){return e({type:"fetch_countries_error",payload:t})})}}})(ea);function na(e){return(na="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ra(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oa(e){return(oa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ia(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function la(e,t){return(la=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ca=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==na(t)&&"function"!=typeof t?ia(e):t}(this,oa(t).call(this,e))).state=n.getDefaultState(),n.onClickMethod=n.onClickMethod.bind(ia(n)),n.onChangeInput=n.onChangeInput.bind(ia(n)),n.onSubmit=n.onSubmit.bind(ia(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&la(e,t)}(t,r["Component"]),n=t,(o=[{key:"getDefaultState",value:function(){var e=this.props.data,t=e.methods,n=e.selected_method,r=Object.keys(t)[0];null==n?n={key:r,data:ra({},r,{method_name:t[r].method_name})}:t.hasOwnProperty(n.key)||(n.key=r);return{methods:t,selected_method:n}}},{key:"getDataValue",value:function(e){var t=this.state.selected_method,n=t.key,r=t.data,a="";return r.hasOwnProperty(n)&&(a=r[n][e]||""),a}},{key:"setDataValue",value:function(e,t){var n=this.state,r=n.selected_method,a=n.selected_method,o=a.key,i=a.data;r.data=Object.assign({},i,ra({},o,Object.assign({},i[o],ra({},e,t)))),this.setState({selected_method:r})}},{key:"onClickMethod",value:function(e){var t=this.state,n=t.methods,r=t.selected_method;r.key=e,this.setState({selected_method:r}),this.setDataValue("method_name",n[e].method_name)}},{key:"onChangeInput",value:function(e){this.setDataValue(e.target.name,e.target.value)}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onClickSaveData(this.state.selected_method)}},{key:"render",value:function(){var e=this,t=this.state,n=t.methods,r=t.selected_method,o=t.selected_method.key,i=n[o].form_fields;return a.a.createElement("div",{id:"wpcf-withdraw-account-set-form"},a.a.createElement("div",{className:"withdraw-method-select-wrap"},Object.keys(n).map(function(t){return a.a.createElement("div",{key:t,className:"withdraw-method-select",onClick:function(){return e.onClickMethod(t)}},a.a.createElement("label",{className:r.key==t?"active":""},a.a.createElement("p",null,n[t].method_name),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n[t].desc}})))})),a.a.createElement("div",{className:"withdraw-method-forms-wrap"},a.a.createElement("form",{className:"withdraw-method-form",onSubmit:this.onSubmit,style:{display:"flex"}},i.map(function(t,n){return a.a.createElement("div",{key:n,className:"withdraw-method-field-wrap"},a.a.createElement("label",{htmlFor:"field_".concat(o,"_").concat(n)},t.label),a.a.createElement("input",{id:"field_".concat(o,"_").concat(n),type:t.type,name:t.name,value:e.getDataValue(t.name),onChange:e.onChangeInput,required:!0}),t.desc&&a.a.createElement("p",{className:"withdraw-field-desc"},t.desc))}),a.a.createElement("div",{className:"withdraw-account-save-btn-wrap"},a.a.createElement("button",{type:"submit",className:"wpcf-btn"},"Save Withdraw Account")))))}}])&&aa(n.prototype,o),i&&aa(n,i),t}();function ua(e){return(ua="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fa(e){return(fa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function da(e,t){return(da=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ma=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==ua(t)&&"function"!=typeof t?pa(e):t}(this,fa(t).call(this,e))).onClickSaveData=n.onClickSaveData.bind(pa(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&da(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.withdrawMethod.loaded||this.props.fetchWithdrawMethods()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.withdrawMethod,r=n.saveReq,a=n.error;r!==e.withdrawMethod.saveReq&&("complete"==r&&alert("data saved"),"error"==r&&alert(a))}},{key:"onClickSaveData",value:function(e){this.props.saveWithdrawAccount(e)}},{key:"render",value:function(){var e=this.props.withdrawMethod,t=e.loading,n=e.data;return t?a.a.createElement("div",null,"Loading..."):a.a.createElement("div",null,a.a.createElement("h3",null,"Select a withdraw method"),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},Object.keys(n.methods).length?a.a.createElement("div",{id:"wpcf-withdraw-account-set-form"},a.a.createElement(ca,{data:n,onChangeData:this.onChangeData,onClickSaveData:this.onClickSaveData})):a.a.createElement("div",null,"Data not found")))}}])&&sa(n.prototype,o),i&&sa(n,i),t}(),ha=me(function(e){return{withdrawMethod:e.withdrawMethod}},{fetchWithdrawMethods:hr,saveWithdrawAccount:function(e){return function(t){t({type:"save_withdraw_account_pending"});var n="".concat(WPCF.rest_url,"/save-withdraw-account"),r={method:"POST",body:JSON.stringify(e),headers:mr};fetch(n,r).then(function(e){return e.json()}).then(function(e){return t({type:"save_withdraw_account_complete",payload:e})}).catch(function(e){return t({type:"save_withdraw_account_error",payload:e})})}}})(ma),ya=function(e){var t=e.data;return a.a.createElement("div",{className:""},a.a.createElement("div",{className:"thumbnail"},a.a.createElement("img",{src:t.image,alt:t.title})),a.a.createElement("div",{className:"content"},a.a.createElement("div",null,t.title),a.a.createElement("p",null,t.description)),a.a.createElement("div",{className:"content"},a.a.createElement("div",null,t.endmonth+" "+t.endyear),a.a.createElement("p",null,"Estimate Delivery Date")),a.a.createElement("div",{className:"perks"},a.a.createElement("p",null,"Perks about to end"),a.a.createElement("div",null,a.a.createElement("p",null,t.interval.d),a.a.createElement("p",null,"Days")),a.a.createElement("div",null,a.a.createElement("p",null,t.interval.h),a.a.createElement("p",null,"Hrs")),a.a.createElement("div",null,a.a.createElement("p",null,t.interval.i),a.a.createElement("p",null,"Min")),a.a.createElement("div",null,a.a.createElement("p",null,t.interval.s),a.a.createElement("p",null,"Sec"))))};function va(e){return(va="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ba(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ga(e){return(ga=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function wa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ea(e,t){return(Ea=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _a=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==va(t)&&"function"!=typeof t?wa(e):t}(this,ga(t).call(this,e))).state={pageOfItems:[],filterValue:""},n.onChangePage=n.onChangePage.bind(wa(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ea(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.reward.loaded||this.props.fetchRewards()}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"onClickFilter",value:function(e){this.setState({filterValue:e})}},{key:"getRewardsData",value:function(){var e=this.state.filterValue,t=this.props.reward,n=t.data;return e&&(n=t.data.filter(function(t){return t.status==e})),n}},{key:"render",value:function(){var e=this;if(this.props.reward.loading)return a.a.createElement("div",null,"Loading...");var t=this.state,n=t.pageOfItems,r=t.filterValue,o=this.getRewardsData();return a.a.createElement("div",null,a.a.createElement("h3",null,"Rewards"),a.a.createElement("div",null,a.a.createElement("span",{className:""==r?"active":"",onClick:function(t){return e.onClickFilter("")}},"All"),a.a.createElement("span",{className:"completed"==r?"active":"",onClick:function(t){return e.onClickFilter("completed")}},"Completed"),a.a.createElement("span",{className:"remain"==r?"active":"",onClick:function(t){return e.onClickFilter("remain")}},"Remain"),a.a.createElement("span",{className:"about_to_end"==r?"active":"",onClick:function(t){return e.onClickFilter("about_to_end")}},"About To End")),a.a.createElement("div",{className:"wpcf-dashboard-content-inner"},o.length?a.a.createElement("div",null,n.map(function(e,t){return a.a.createElement(ya,{key:t,data:e})}),a.a.createElement(xn,{items:o,pageSize:5,filterValue:r,onChangePage:this.onChangePage})):a.a.createElement("div",null,"Reward not found")))}}])&&ba(n.prototype,o),i&&ba(n,i),t}(),ka=me(function(e){return{reward:e.reward}},{fetchRewards:function(){return function(e){e({type:"fetch_rewards_pending"});var t="".concat(WPCF.rest_url,"/rewards");fetch(t,{method:"GET",headers:bt}).then(function(e){return e.json()}).then(function(t){return e({type:"fetch_rewards_complete",payload:t})}).catch(function(t){return e({type:"fetch_rewards_error",payload:t})})}}})(_a);n(23);function Ca(e){return(Ca="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oa(e){return(Oa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Sa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pa(e,t){return(Pa=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ta=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==Ca(t)&&"function"!=typeof t?Sa(e):t}(this,Oa(t).call(this,e));var r=WPCF.dashboard_url.replace(window.location.origin,"");return n.state={basePath:r,myCampainsCollapse:!1,userSettingsCollapse:!1},n.logout=n.logout.bind(Sa(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pa(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.user.loaded||this.props.fetchUser()}},{key:"logout",value:function(e){e.preventDefault(),fetch("".concat(WPCF.rest_url,"/logout")).then(function(e){return e.json()}).then(function(e){e.success&&(location.href=e.redirect)})}},{key:"render",value:function(){var e=this,t=(this.state.basePath,this.props.user),n=t.loading,r=t.data;return n?a.a.createElement("div",{className:"wpcf-dashboard-container is-skeleton"},a.a.createElement("div",{className:"wpcf-dashboard-sidebar"},a.a.createElement("div",{className:"wpcf-dashboard-profile skeleton-parent"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)),a.a.createElement("ul",{className:"wpcf-dashboard-permalinks skeleton-parent"},a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null),a.a.createElement("li",null))),a.a.createElement("div",{className:"wpcf-dashboard-content"})):a.a.createElement("div",{className:"wpcf-wrap wpcf-dashboard-container"},a.a.createElement(dt,null,a.a.createElement("div",{className:"wpcf-dashboard-sidebar"},a.a.createElement("div",{className:"wpcf-dashboard-profile"},a.a.createElement("img",{className:"profile-form-img",src:r.profile_image,alt:"Profile Image"}),a.a.createElement("h4",null,r.display_name),a.a.createElement("span",null,r.user_email)),a.a.createElement("ul",{className:"wpcf-dashboard-permalinks"},a.a.createElement("li",null,a.a.createElement(ht,{exact:!0,activeClassName:"is-active",to:"/"},a.a.createElement("span",{className:"fas fa-home wpcf-icon"}),"Dashboard")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/profile"},a.a.createElement("span",{className:"far fa-user wpcf-icon"}),"My Profile")),a.a.createElement("li",{className:this.state.myCampainsCollapse?"wpcf-collapse":"wpcf-collapsed"},a.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.setState({myCampainsCollapse:!e.state.myCampainsCollapse})}},a.a.createElement("span",{className:"far fa-paper-plane wpcf-icon"}),"Campaigns",a.a.createElement("span",{className:"wpcf-float-icon fas fa-angle-"+(this.state.myCampainsCollapse?"up":"down")})),a.a.createElement("ul",{className:" wpcf-dashboard-sub-permalinks"},a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/my-campaigns"},"My Campaigns")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/invested-campaigns"},"Invested Campaigns")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/pledge-received"},"Pledge Received")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/bookmark-campaigns"},"Bookmarks")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/order"},"Order")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/withdraw"},"Withdraw")))),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/rewards"},a.a.createElement("span",{className:"fas fa-gift wpcf-icon"}),"Rewards")),a.a.createElement("li",{className:this.state.userSettingsCollapse?"wpcf-collapse":"wpcf-collapsed"},a.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.setState({userSettingsCollapse:!e.state.userSettingsCollapse})}},a.a.createElement("span",{className:"wpcf-icon fas fa-sliders-h"}),"User Settings",a.a.createElement("span",{className:"wpcf-float-icon fas fa-angle-"+(this.state.userSettingsCollapse?"up":"down")})),a.a.createElement("ul",{className:" wpcf-dashboard-sub-permalinks"},a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/settings/profile"},"Profile Settings")),a.a.createElement("li",null,a.a.createElement(ht,{activeClassName:"is-active",to:"/settings/withdraw"},"Withdraw Method")))),a.a.createElement("li",null,a.a.createElement("a",{href:"javascript:void(0)",onClick:this.logout},a.a.createElement("span",{className:"wpcf-icon fas fa-sign-out-alt"}),"Logout")))),a.a.createElement("div",{className:"wpcf-dashboard-content"},a.a.createElement(lt,{path:"/",exact:!0,component:Yt}),a.a.createElement(lt,{path:"/profile",component:nn}),a.a.createElement(lt,{path:"/my-campaigns",component:Dn}),a.a.createElement(lt,{path:"/invested-campaigns",component:Ln}),a.a.createElement(lt,{path:"/pledge-received",component:Yn}),a.a.createElement(lt,{path:"/bookmark-campaigns",component:nr}),a.a.createElement(lt,{path:"/order",component:dr}),a.a.createElement(lt,{path:"/withdraw",component:Dr}),a.a.createElement(lt,{path:"/rewards",component:ka}),a.a.createElement(lt,{path:"/settings/profile",component:ta}),a.a.createElement(lt,{path:"/settings/withdraw",component:ha}))))}}])&&xa(n.prototype,o),i&&xa(n,i),t}(),ja=me(function(e){return{user:e.user}},{fetchUser:vt})(Ta);function Na(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Da(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Na(n,!0).forEach(function(t){Ra(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Na(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ra(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ia(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Ma(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Fa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ma(n,!0).forEach(function(t){Aa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ma(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Aa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ua(n,!0).forEach(function(t){za(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function za(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Va(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Wa(n,!0).forEach(function(t){qa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ha(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ba(n,!0).forEach(function(t){$a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ka(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qa(n,!0).forEach(function(t){Ya(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qa(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ya(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ga(n,!0).forEach(function(t){Ja(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ga(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ja(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Za(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function to(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eo(n,!0).forEach(function(t){no(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function no(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ro(n,!0).forEach(function(t){oo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ro(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function lo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?io(n,!0).forEach(function(t){co(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function co(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function so(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?uo(n,!0).forEach(function(t){fo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uo(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var po=function e(t,n,r){var a;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var o=t,i=n,l=[],c=l,u=!1;function s(){c===l&&(c=l.slice())}function f(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function p(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return s(),c.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,s();var n=c.indexOf(e);c.splice(n,1)}}}function d(e){if(!A(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,i=o(i,e)}finally{u=!1}for(var t=l=c,n=0;n<t.length;n++)(0,t[n])();return e}return d({type:F.INIT}),(a={dispatch:d,subscribe:p,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,d({type:F.REPLACE})}})[I.a]=function(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[I.a]=function(){return this},e},a}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var a=t[r];0,"function"==typeof e[a]&&(n[a]=e[a])}var o,i=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:F.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:F.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+F.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,a={},l=0;l<i.length;l++){var c=i[l],u=n[c],s=e[c],f=u(s,t);if(void 0===f){var p=U(c,t);throw new Error(p)}a[c]=f,r=r||f!==s}return r?a:e}}({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,saveReq:"pending",data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user_pending":return Da({},e,{loading:!0,loaded:!1});case"fetch_user_complete":return Da({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_user_error":return Da({},e,{loading:!1,loaded:!1,error:t.payload});case"save_user_data_pending":return Da({},e,{saveReq:"pending"});case"save_user_data_complete":var n=t.payload;if(n.success){var r=Object.assign({},e.data,n.data);return Da({},e,{saveReq:"complete",data:r})}return Da({},e,{saveReq:"error",error:n.msg});case"save_user_data_error":return Da({},e,{saveReq:"error",error:t.payload});default:return e}},myCampaign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,saveReq:"pending",data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_my_campaigns_pending":return Fa({},e,{loading:!0,loaded:!1});case"fetch_my_campaigns_complete":return Fa({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_my_campaigns_error":return Fa({},e,{loading:!1,loaded:!1,error:t.payload});case"save_campaign_updates_pending":return Fa({},e,{saveReq:"pending"});case"save_campaign_updates_complete":var n=t.payload,r=Ia(e.data);if(n.success){var a=r.findIndex(function(e){return e.id==n.id});return r[a].updates=n.updates,Fa({},e,{saveReq:"complete",data:r})}return Fa({},e,{saveReq:"error",error:n.msg});case"save_campaign_updates_error":return Fa({},e,{saveReq:"error",error:t.payload});default:return e}},campaignsReport:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_campaigns_report_pending":return La({},e,{loading:!0,loaded:!1});case"fetch_campaigns_report_complete":return La({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_campaigns_report_error":return La({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},investedCampaign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_invested_campaigns_pending":return Va({},e,{loading:!0,loaded:!1});case"fetch_invested_campaigns_complete":return Va({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_invested_campaigns_error":return Va({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},bookmarkCampaign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_bookmark_campaigns_pending":return Ha({},e,{loading:!0,loaded:!1});case"fetch_bookmark_campaigns_complete":return Ha({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_bookmark_campaigns_error":return Ha({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},pledgeReceived:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_pledge_received_pending":return Ka({},e,{loading:!0,loaded:!1});case"fetch_pledge_received_complete":return Ka({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_pledge_received_error":return Ka({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_orders_pending":return Xa({},e,{loading:!0,loaded:!1});case"fetch_orders_complete":return Xa({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_orders_error":return Xa({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},withdraw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,reqStatus:"pending",data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_withdraws_pending":return to({},e,{loading:!0,loaded:!1});case"fetch_withdraws_complete":return to({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_withdraws_error":return to({},e,{loading:!1,loaded:!1,error:t.payload});case"post_withdraw_request_pending":return to({},e,{reqStatus:"pending"});case"post_withdraw_request_complete":var n=t.payload,r=Za(e.data);if(n.success){var a=r.findIndex(function(e){return e.campaign_id==n.data.campaign_id});return r[a].withdraw=n.data.withdraw,to({},e,{reqStatus:"complete",data:r})}return to({},e,{reqStatus:"error",error:n.msg});case"post_withdraw_request_error":return to({},e,{reqStatus:"error",error:t.payload});default:return e}},withdrawMethod:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,saveReq:"pending",data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_withdraw_methods_pending":return ao({},e,{loading:!0,loaded:!1});case"fetch_withdraw_methods_complete":return ao({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_withdraw_methods_error":return ao({},e,{loading:!1,loaded:!1,error:t.payload});case"save_withdraw_account_pending":return ao({},e,{saveReq:"pending"});case"save_withdraw_account_complete":var n=t.payload,r=ao({},e.data);return n.success?(r.selected_method=n.data,ao({},e,{saveReq:"complete",data:r})):ao({},e,{saveReq:"error",error:n.msg});case"save_withdraw_account_error":return ao({},e,{saveReq:"error",error:t.payload});default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_countries_pending":return lo({},e,{loading:!0,loaded:!1});case"fetch_countries_complete":return lo({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_countries_error":return lo({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}},reward:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,loaded:!1,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_rewards_pending":return so({},e,{loading:!0,loaded:!1});case"fetch_rewards_complete":return so({},e,{loading:!1,loaded:!0,data:t.payload});case"fetch_rewards_error":return so({},e,{loading:!1,loaded:!1,error:t.payload});default:return e}}}),q(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map(function(e){return e(a)});return V({},n,{dispatch:r=q.apply(void 0,o)(n.dispatch)})}}}(be),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(a.a.createElement(v,{store:po},a.a.createElement(ja,null)),document.getElementById("wpcf-dashboard"))}]);
>>>>>>> 9a925d5b606efa95a1a6d5a5d6b6888eac999c2a
