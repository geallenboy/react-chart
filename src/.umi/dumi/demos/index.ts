// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'get-started-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _extends2 = _interopRequireDefault(await import("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/extends"));

    var _react = _interopRequireWildcard(await import("react"));

    var _g2plotReact = await import("@opd/g2plot-react");

    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var config = {
      height: 400,
      xField: 'year',
      yField: 'value',
      smooth: true,
      meta: {
        value: {
          max: 15
        }
      },
      data: [{
        year: '1991',
        value: 3
      }, {
        year: '1992',
        value: 4
      }, {
        year: '1993',
        value: 3.5
      }, {
        year: '1994',
        value: 5
      }, {
        year: '1995',
        value: 4.9
      }, {
        year: '1996',
        value: 6
      }, {
        year: '1997',
        value: 7
      }, {
        year: '1998',
        value: 9
      }, {
        year: '1999',
        value: 11
      }]
    };

    var _default = function _default() {
      var getChart = (0, _react.useCallback)(function (chart) {
        console.log(chart);
      }, []);
      var getContainer = (0, _react.useCallback)(function (container) {
        console.log(container);
      }, []);
      return /*#__PURE__*/_react.default.createElement(_g2plotReact.LineChart, (0, _extends2.default)({}, config, {
        ref: getContainer,
        chartRef: getChart
      }));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React, { useCallback } from 'react'\nimport { LineChart } from '@opd/g2plot-react'\n\nconst config = {\n  height: 400,\n  xField: 'year',\n  yField: 'value',\n  smooth: true,\n  meta: {\n    value: {\n      max: 15,\n    },\n  },\n  data: [\n    { year: '1991', value: 3 },\n    { year: '1992', value: 4 },\n    { year: '1993', value: 3.5 },\n    { year: '1994', value: 5 },\n    { year: '1995', value: 4.9 },\n    { year: '1996', value: 6 },\n    { year: '1997', value: 7 },\n    { year: '1998', value: 9 },\n    { year: '1999', value: 11 },\n  ],\n}\n\nexport default () => {\n  const getChart = useCallback((chart) => {\n    console.log(chart)\n  }, [])\n  const getContainer = useCallback((container) => {\n    console.log(container)\n  }, [])\n  return <LineChart {...config} ref={getContainer} chartRef={getChart} />\n}"}},"dependencies":{"react":{"version":"^15.0.0 || ^16.0.0 || ^17.0.0"},"@opd/g2plot-react":{"version":"2.12.0"},"@antv/g2plot":{"version":"^2.3.21"},"lodash":{"version":"^4.17.x"}},"identifier":"get-started-demo"},
  },
  'get-started-demo-1': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _extends2 = _interopRequireDefault(await import("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/extends"));

    var _slicedToArray2 = _interopRequireDefault(await import("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

    var _react = _interopRequireWildcard(await import("react"));

    var _g2plotReact = await import("@opd/g2plot-react");

    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var config = {
      height: 400,
      xField: 'year',
      yField: 'value',
      smooth: true,
      meta: {
        value: {
          max: 15
        }
      },
      data: [{
        year: '1991',
        value: 3
      }, {
        year: '1992',
        value: 4
      }, {
        year: '1993',
        value: 3.5
      }, {
        year: '1994',
        value: 5
      }, {
        year: '1995',
        value: 4.9
      }, {
        year: '1996',
        value: 6
      }, {
        year: '1997',
        value: 7
      }, {
        year: '1998',
        value: 9
      }, {
        year: '1999',
        value: 11
      }]
    };

    var _default = function _default() {
      var getChart = (0, _react.useCallback)(function (chart) {
        console.log(chart);
      }, []);
      var getContainer = (0, _react.useCallback)(function (container) {
        console.log(container);
      }, []);

      var _useState = (0, _react.useState)([{
        year: '1991',
        value: 3
      }, {
        year: '1992',
        value: 4
      }, {
        year: '1993',
        value: 3.5
      }, {
        year: '1994',
        value: 5
      }, {
        year: '1995',
        value: 4.9
      }, {
        year: '1996',
        value: 6
      }, {
        year: '1997',
        value: 7
      }, {
        year: '1998',
        value: 9
      }, {
        year: '1999',
        value: 11
      }]),
          _useState2 = (0, _slicedToArray2.default)(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];

      var handleBtnClick = (0, _react.useCallback)(function () {
        setData(function (items) {
          var last = items.pop();
          return items.concat(last, {
            year: (+last.year + 1).toString(),
            value: Math.random() * 10
          });
        });
      }, []);
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: handleBtnClick
      }, "Update Data"), /*#__PURE__*/_react.default.createElement(_g2plotReact.LineChart, (0, _extends2.default)({}, config, {
        ref: getContainer,
        chartRef: getChart,
        data: data
      })));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React, { useCallback, useState } from 'react'\nimport { LineChart } from '@opd/g2plot-react'\n\nconst config = {\n  height: 400,\n  xField: 'year',\n  yField: 'value',\n  smooth: true,\n  meta: {\n    value: {\n      max: 15,\n    },\n  },\n  data: [\n    { year: '1991', value: 3 },\n    { year: '1992', value: 4 },\n    { year: '1993', value: 3.5 },\n    { year: '1994', value: 5 },\n    { year: '1995', value: 4.9 },\n    { year: '1996', value: 6 },\n    { year: '1997', value: 7 },\n    { year: '1998', value: 9 },\n    { year: '1999', value: 11 },\n  ],\n}\n\nexport default () => {\n  const getChart = useCallback((chart) => {\n    console.log(chart)\n  }, [])\n  const getContainer = useCallback((container) => {\n    console.log(container)\n  }, [])\n\n  const [data, setData] = useState([\n    { year: '1991', value: 3 },\n    { year: '1992', value: 4 },\n    { year: '1993', value: 3.5 },\n    { year: '1994', value: 5 },\n    { year: '1995', value: 4.9 },\n    { year: '1996', value: 6 },\n    { year: '1997', value: 7 },\n    { year: '1998', value: 9 },\n    { year: '1999', value: 11 },\n  ])\n\n  const handleBtnClick = useCallback(() => {\n    setData((items) => {\n      const last = items.pop()\n\n      return items.concat(last, {\n        year: (+last.year + 1).toString(),\n        value: Math.random() * 10,\n      })\n    })\n  }, [])\n\n  return (\n    <div>\n      <button onClick={handleBtnClick}>Update Data</button>\n      <LineChart\n        {...config}\n        ref={getContainer}\n        chartRef={getChart}\n        data={data}\n      />\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"^15.0.0 || ^16.0.0 || ^17.0.0"},"@opd/g2plot-react":{"version":"2.12.0"},"@antv/g2plot":{"version":"^2.3.21"},"lodash":{"version":"^4.17.x"}},"identifier":"get-started-demo-1"},
  },
  'get-started-demo-2': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _extends2 = _interopRequireDefault(await import("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/extends"));

    var _slicedToArray2 = _interopRequireDefault(await import("/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

    var _react = _interopRequireWildcard(await import("react"));

    var _g2plotReact = await import("@opd/g2plot-react");

    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var config = {
      height: 400,
      xField: 'year',
      yField: 'value',
      smooth: true,
      meta: {
        value: {
          max: 15
        }
      },
      data: [{
        year: '1991',
        value: 3
      }, {
        year: '1992',
        value: 4
      }, {
        year: '1993',
        value: 3.5
      }, {
        year: '1994',
        value: 5
      }, {
        year: '1995',
        value: 4.9
      }, {
        year: '1996',
        value: 6
      }, {
        year: '1997',
        value: 7
      }, {
        year: '1998',
        value: 9
      }, {
        year: '1999',
        value: 11
      }]
    };

    var _default = function _default() {
      var getChart = (0, _react.useCallback)(function (chart) {
        console.log(chart);
      }, []);
      var getContainer = (0, _react.useCallback)(function (container) {
        console.log(container);
      }, []);

      var _useState = (0, _react.useState)({}),
          _useState2 = (0, _slicedToArray2.default)(_useState, 2),
          restConfig = _useState2[0],
          setConfig = _useState2[1];

      var handleBtnClick = (0, _react.useCallback)(function () {
        setConfig(function (config) {
          return {
            point: config.point ? undefined : {}
          };
        });
      }, []);
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: handleBtnClick
      }, "Update Config"), /*#__PURE__*/_react.default.createElement(_g2plotReact.LineChart, (0, _extends2.default)({}, config, {
        ref: getContainer,
        chartRef: getChart
      }, restConfig)));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React, { useCallback, useState } from 'react'\nimport { LineChart } from '@opd/g2plot-react'\n\nconst config = {\n  height: 400,\n  xField: 'year',\n  yField: 'value',\n  smooth: true,\n  meta: {\n    value: {\n      max: 15,\n    },\n  },\n  data: [\n    { year: '1991', value: 3 },\n    { year: '1992', value: 4 },\n    { year: '1993', value: 3.5 },\n    { year: '1994', value: 5 },\n    { year: '1995', value: 4.9 },\n    { year: '1996', value: 6 },\n    { year: '1997', value: 7 },\n    { year: '1998', value: 9 },\n    { year: '1999', value: 11 },\n  ],\n}\n\nexport default () => {\n  const getChart = useCallback((chart) => {\n    console.log(chart)\n  }, [])\n  const getContainer = useCallback((container) => {\n    console.log(container)\n  }, [])\n\n  const [restConfig, setConfig] = useState({})\n\n  const handleBtnClick = useCallback(() => {\n    setConfig((config) => ({\n      point: config.point ? undefined : {},\n    }))\n  }, [])\n\n  return (\n    <div>\n      <button onClick={handleBtnClick}>Update Config</button>\n      <LineChart\n        {...config}\n        ref={getContainer}\n        chartRef={getChart}\n        {...restConfig}\n      />\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"^15.0.0 || ^16.0.0 || ^17.0.0"},"@opd/g2plot-react":{"version":"2.12.0"},"@antv/g2plot":{"version":"^2.3.21"},"lodash":{"version":"^4.17.x"}},"identifier":"get-started-demo-2"},
  },
};
