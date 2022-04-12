(self["webpackChunk_garron_react_chart"] = self["webpackChunk_garron_react_chart"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_API_js_js"],{

/***/ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/API.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/API.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/.pnpm/core-js@3.6.5/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dumi/theme */ "./node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/@umijs/preset-dumi/lib/theme/index.js");




var LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)'
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var identifier = _ref.identifier,
      expt = _ref.export;
  var data = (0,dumi_theme__WEBPACK_IMPORTED_MODULE_3__.useApiData)(identifier);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_3__.context),
      locale = _useContext.locale;

  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, data[expt].map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
      key: row.identifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, row.description || '--'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", null, row.default || row.required && texts.required || '--')));
  }))));
});

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_API.js.js":
/*!******************************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_API.js.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sn_Desktop_work_study_react_chart_node_modules_pnpm_dumi_theme_default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_modules_dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/API.js */ "./node_modules/.pnpm/dumi-theme-default@1.1.21_aaeb432d6bd604b584ce2452ef9adea8/node_modules/dumi-theme-default/es/builtins/API.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_sn_Desktop_work_study_react_chart_node_modules_pnpm_dumi_theme_default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_modules_dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);