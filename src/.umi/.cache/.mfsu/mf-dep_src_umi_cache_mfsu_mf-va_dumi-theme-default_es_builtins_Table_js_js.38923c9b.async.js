(self["webpackChunk_garron_react_chart"] = self["webpackChunk_garron_react_chart"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Table_js_js"],{

/***/ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.less":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.less ***!
  \**********************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.js ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table.less */ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.less");
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Table_less__WEBPACK_IMPORTED_MODULE_6__);





function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





var Table = function Table(_ref) {
  var children = _ref.children;
  var container = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      leftFolded = _useState2[0],
      setLeftFolded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      rightFolded = _useState4[0],
      setRightFolded = _useState4[1]; // watch content scroll to render folded shadow


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var elm = container.current;
    var handler = lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default()(function () {
      setLeftFolded(elm.scrollLeft > 0);
      setRightFolded(elm.scrollLeft < elm.scrollWidth - elm.offsetWidth);
    }, 100);
    handler();
    elm.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    return function () {
      elm.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "__dumi-default-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "__dumi-default-table-content",
    ref: container,
    "data-left-folded": leftFolded || undefined,
    "data-right-folded": rightFolded || undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("table", null, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Table.js.js":
/*!********************************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Table.js.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sn_Desktop_work_study_react_chart_node_modules_pnpm_dumi_theme_default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_modules_dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.js */ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/Table.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_sn_Desktop_work_study_react_chart_node_modules_pnpm_dumi_theme_default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_modules_dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);