/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js":"35149caa","mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js":"918665c7","mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718":"2859e3e1","mf-dep_vendors-node_modules_pnpm_react-dom_17_0_2_react_17_0_2_node_modules_react-dom_index_js":"fb2ff398","mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_0_react_16_14_0_node_modules_umijs_runtime_dist_i-284769":"a5afd2d2","mf-dep_vendors-node_modules_pnpm_umijs_renderer-react_3_5_0_39566ec7cc5fe716a59f91f7330320ef_node_mo-890791":"fabbae27","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_renderer-react_3_5_0_39566ec7cc5fe71-51495a":"561a99ab","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_runtime_3_5_0_react_16_14_0_node_mod-8ca540":"b498fad4","mf-dep_src_umi_cache_mfsu_mf-va_regenerator-runtime_runtime_js":"ef5223b7","mf-dep_vendors-node_modules_pnpm_core-js_3_6_5_node_modules_core-js_index_js":"e3fe108a","mf-dep_src_umi_cache_mfsu_mf-va_core-js_js":"254122d6","mf-dep_src_umi_cache_mfsu_mf-va_react_js":"14b9e03e","mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js":"b5e6df44","mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115":"7d70d7c1","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-dumi_1_1_40_04f116426df175668-c18ace":"10554eba","mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_21_react_16_14_0_node_modules_umijs_runtime_dist_-2c00cf":"154f0a49","mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__baseKeys_js-node_modules_pnpm_l-3aec75":"97c41975","mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__Stack_js-node_modules_pnpm_loda-6234a2":"3f270fe7","mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-6a2f72":"861ee33f","mf-dep_vendors-node_modules_pnpm_babel_runtime_7_17_8_node_modules_babel_runtime_helpers_esm_toConsu-b1c90b":"5b349761","mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash_isEqual_js":"bf5a93ed","mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-88e9a6":"dc78b998","mf-dep_src_umi_core_umiExports_ts-src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Previewer_js_js":"bd06a0db","mf-dep_src_umi_cache_mfsu_mf-va_dumi_theme_js":"feb6f456","mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-771dd3":"059e1d52","mf-dep_src_umi_core_umiExports_ts-src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-du-d08dd9":"6cf5f5d2","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-5a3b82":"67568794","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-360b2a":"d55d52f7","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-1f8ed5":"17924f48","mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-26e66a":"48c0adea","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-dumi_1_1_40_04f116426df175668-43faf9":"92260cf2","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-867048":"066c9cee","mf-dep_vendors-node_modules_pnpm_babel_runtime_7_17_8_node_modules_babel_runtime_helpers_esm_objectW-d9f866":"19cf02bc","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Tree_js_js-node_modules_pnpm_dumi-the-2fd70d":"98ec3e35","mf-dep_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_typeof_js-src_umi_c-f946d6":"2a980c6b","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_SourceCode_js_js-node_modules_pnpm_pr-ab0cbd":"d1d87d9b","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Example_js_js":"771d0d9e","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Badge_js_js":"638e4457","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Alert_js_js":"7256bd5c","mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_API_js_js":"cf6852fc","mf-dep_vendors-node_modules_pnpm_antv_g2plot_2_4_15_node_modules_antv_g2plot_esm_index_js":"37cc83a4","mf-dep_src_umi_cache_mfsu_mf-va__antv_g2plot_js":"c9c02608","mf-dep_src_umi_cache_mfsu_mf-va_lodash_isEqual_js":"b8656c39","mf-dep_src_umi_cache_mfsu_mf-va_lodash_isEmpty_js":"dfd1e474","mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash_cloneDeep_js":"93a8e1e3","mf-dep_src_umi_cache_mfsu_mf-va_lodash_cloneDeep_js":"327b4fda","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-928783":"0cd45dfa","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-dea46b":"024a8b8a","mf-dep_vendors-node_modules_pnpm_umijs_renderer-react_3_5_21_39566ec7cc5fe716a59f91f7330320ef_node_m-145418":"9bb61430","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_renderer-react_3_5_21_39566ec7cc5fe7-9e234f":"7c562633","mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_runtime_3_5_21_react_16_14_0_node_mo-a576cf":"a8f4c80d"}[chunkId] + ".async.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "mf-dep_mf") return "mf.css";
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@garron/react-chart:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			linkTag.onload = resolve;
/******/ 			linkTag.onerror = function(event) {
/******/ 				var request = event && event.target && event.target.src || fullhref;
/******/ 				var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 				err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 				err.request = request;
/******/ 				linkTag.parentNode.removeChild(linkTag)
/******/ 				reject(err);
/******/ 			};
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			var head = document.getElementsByTagName("head")[0];
/******/ 			head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"mf-dep_mf": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-88e9a6":1,"mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-771dd3":1,"mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Tree_js_js-node_modules_pnpm_dumi-the-2fd70d":1,"mf-dep_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_typeof_js-src_umi_c-f946d6":1,"mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_SourceCode_js_js-node_modules_pnpm_pr-ab0cbd":1,"mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Example_js_js":1,"mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Badge_js_js":1,"mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Alert_js_js":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mf-dep_mf": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_garron_react_chart"] = self["webpackChunk_garron_react_chart"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
!function() {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** container entry ***!
  \***********************/
var moduleMap = {
	"./$CWD$/node_modules/.pnpm/@umijs+renderer-react@3.5.0_39566ec7cc5fe716a59f91f7330320ef/node_modules/@umijs/renderer-react": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react-dom_17_0_2_react_17_0_2_node_modules_react-dom_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_0_react_16_14_0_node_modules_umijs_runtime_dist_i-284769"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_renderer-react_3_5_0_39566ec7cc5fe716a59f91f7330320ef_node_mo-890791"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_renderer-react_3_5_0_39566ec7cc5fe71-51495a")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+renderer-react@3.5.0_39566ec7cc5fe716a59f91f7330320ef_node_modules_@umijs_renderer-react.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+renderer-react@3.5.0_39566ec7cc5fe716a59f91f7330320ef_node_modules_@umijs_renderer-react.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+runtime@3.5.0_react@16.14.0/node_modules/@umijs/runtime": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_0_react_16_14_0_node_modules_umijs_runtime_dist_i-284769"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_runtime_3_5_0_react_16_14_0_node_mod-8ca540")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+runtime@3.5.0_react@16.14.0_node_modules_@umijs_runtime.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+runtime@3.5.0_react@16.14.0_node_modules_@umijs_runtime.js")); }; });
	},
	"./regenerator-runtime/runtime": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_regenerator-runtime_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_regenerator-runtime_runtime.js */ "./src/.umi/.cache/.mfsu/mf-va_regenerator-runtime_runtime.js")); }; });
	},
	"./core-js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_core-js_3_6_5_node_modules_core-js_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_core-js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_core-js.js */ "./src/.umi/.cache/.mfsu/mf-va_core-js.js")); }; });
	},
	"./react": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_react_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_react.js */ "./src/.umi/.cache/.mfsu/mf-va_react.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-dumi_1_1_40_04f116426df175668-c18ace")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_@umijs_preset-dumi_lib_plugins_features_demo_getDemoRenderArgs.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_@umijs_preset-dumi_lib_plugins_features_demo_getDemoRenderArgs.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Previewer.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react-dom_17_0_2_react_17_0_2_node_modules_react-dom_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_21_react_16_14_0_node_modules_umijs_runtime_dist_-2c00cf"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__baseKeys_js-node_modules_pnpm_l-3aec75"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__Stack_js-node_modules_pnpm_loda-6234a2"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-6a2f72"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_17_8_node_modules_babel_runtime_helpers_esm_toConsu-b1c90b"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash_isEqual_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-88e9a6"), __webpack_require__.e("mf-dep_src_umi_core_umiExports_ts-src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Previewer_js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Previewer.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Previewer.js.js")); }; });
	},
	"./dumi/theme": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi_theme_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi_theme.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi_theme.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/dumi-theme-default/es/layout.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_21_react_16_14_0_node_modules_umijs_runtime_dist_-2c00cf"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-771dd3"), __webpack_require__.e("mf-dep_src_umi_core_umiExports_ts-src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-du-d08dd9")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_dumi-theme-default_es_layout.js.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_dumi-theme-default_es_layout.js.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator": function() {
		return __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-5a3b82").then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_asyncToGenerator.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_asyncToGenerator.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/slicedToArray": function() {
		return __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-360b2a").then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_slicedToArray.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_slicedToArray.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/regenerator": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-1f8ed5")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_regenerator.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_regenerator.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/@umijs/preset-dumi/lib/theme/layout": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-26e66a"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_preset-dumi_1_1_40_04f116426df175668-43faf9")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_@umijs_preset-dumi_lib_theme_layout.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541_node_modules_@umijs_preset-dumi_lib_theme_layout.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/extends": function() {
		return __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-867048").then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_extends.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_extends.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Tree.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react-dom_17_0_2_react_17_0_2_node_modules_react-dom_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_17_8_node_modules_babel_runtime_helpers_esm_toConsu-b1c90b"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_17_8_node_modules_babel_runtime_helpers_esm_objectW-d9f866"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Tree_js_js-node_modules_pnpm_dumi-the-2fd70d")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Tree.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Tree.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Table.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_typeof_js-src_umi_c-f946d6")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Table.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Table.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/SourceCode.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_dumi-theme-default_1_1_21_aaeb432d6bd604b584ce2452ef9adea8_node_mod-6a2f72"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_SourceCode_js_js-node_modules_pnpm_pr-ab0cbd")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_SourceCode.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_SourceCode.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Example.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Example_js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Example.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Example.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Badge.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Badge_js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Badge.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Badge.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/Alert.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_Alert_js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Alert.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_Alert.js.js")); }; });
	},
	"./dumi-theme-default/es/builtins/API.js": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_throttle_4_1_1_node_modules_lodash_throttle_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_preset-dumi_1_1_40_04f116426df175668c1e3fa5c2673541_node_modu-cdd115"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_dumi-theme-default_es_builtins_API_js_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_API.js.js */ "./src/.umi/.cache/.mfsu/mf-va_dumi-theme-default_es_builtins_API.js.js")); }; });
	},
	"./@antv/g2plot": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_antv_g2plot_2_4_15_node_modules_antv_g2plot_esm_index_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__antv_g2plot_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_@antv_g2plot.js */ "./src/.umi/.cache/.mfsu/mf-va_@antv_g2plot.js")); }; });
	},
	"./lodash/isEqual": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__baseKeys_js-node_modules_pnpm_l-3aec75"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__Stack_js-node_modules_pnpm_loda-6234a2"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash_isEqual_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_lodash_isEqual_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_lodash_isEqual.js */ "./src/.umi/.cache/.mfsu/mf-va_lodash_isEqual.js")); }; });
	},
	"./lodash/isEmpty": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__baseKeys_js-node_modules_pnpm_l-3aec75"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_lodash_isEmpty_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_lodash_isEmpty.js */ "./src/.umi/.cache/.mfsu/mf-va_lodash_isEmpty.js")); }; });
	},
	"./lodash/cloneDeep": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__baseKeys_js-node_modules_pnpm_l-3aec75"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash__Stack_js-node_modules_pnpm_loda-6234a2"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_lodash_4_17_21_node_modules_lodash_cloneDeep_js"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va_lodash_cloneDeep_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_lodash_cloneDeep.js */ "./src/.umi/.cache/.mfsu/mf-va_lodash_cloneDeep.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties": function() {
		return __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-928783").then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_objectWithoutProperties.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_objectWithoutProperties.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/objectSpread2": function() {
		return __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__babel_runtime_7_12_5_node_modules__babel_r-dea46b").then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_objectSpread2.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@babel+runtime@7.12.5_node_modules_@babel_runtime_helpers_esm_objectSpread2.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+renderer-react@3.5.21_39566ec7cc5fe716a59f91f7330320ef/node_modules/@umijs/renderer-react": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react-dom_17_0_2_react_17_0_2_node_modules_react-dom_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_21_react_16_14_0_node_modules_umijs_runtime_dist_-2c00cf"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_renderer-react_3_5_21_39566ec7cc5fe716a59f91f7330320ef_node_m-145418"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_renderer-react_3_5_21_39566ec7cc5fe7-9e234f")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+renderer-react@3.5.21_39566ec7cc5fe716a59f91f7330320ef_node_modules_@umijs_renderer-react.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+renderer-react@3.5.21_39566ec7cc5fe716a59f91f7330320ef_node_modules_@umijs_renderer-react.js")); }; });
	},
	"./$CWD$/node_modules/.pnpm/@umijs+runtime@3.5.21_react@16.14.0/node_modules/@umijs/runtime": function() {
		return Promise.all([__webpack_require__.e("mf-dep_vendors-node_modules_pnpm_react_17_0_2_node_modules_react_index_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_regenerator-runtime_0_13_5_node_modules_regenerator-runtime_runtime_js"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator_index_j-bbf718"), __webpack_require__.e("mf-dep_vendors-node_modules_pnpm_umijs_runtime_3_5_21_react_16_14_0_node_modules_umijs_runtime_dist_-2c00cf"), __webpack_require__.e("mf-dep_src_umi_cache_mfsu_mf-va__CWD__node_modules__pnpm__umijs_runtime_3_5_21_react_16_14_0_node_mo-a576cf")]).then(function() { return function() { return (__webpack_require__(/*! ./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+runtime@3.5.21_react@16.14.0_node_modules_@umijs_runtime.js */ "./src/.umi/.cache/.mfsu/mf-va_$CWD$_node_modules_.pnpm_@umijs+runtime@3.5.21_react@16.14.0_node_modules_@umijs_runtime.js")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var oldScope = __webpack_require__.S["default"];
	var name = "default"
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});
}();
self.mf = __webpack_exports__;
/******/ })()
;