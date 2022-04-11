// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@umijs+runtime@3.5.21_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/sn/Desktop/work/study/react-g2plot/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/sn/Desktop/work/study/react-g2plot/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1648890704731,
          "title": "G2Plot React",
          "hero": {
            "title": "G2Plot React",
            "desc": "<div class=\"markdown\"><p>G2Plot for React</p></div>",
            "actions": [
              {
                "text": "API",
                "link": "/api"
              },
              {
                "text": "Get Started",
                "link": "/guide/get-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg",
              "title": "G2Plot",
              "desc": "<div class=\"markdown\"><p>Powered by <a href=\"https://g2plot.antv.vision/\" target=\"_blank\">G2Plot<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            },
            {
              "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
              "title": "React",
              "desc": "<div class=\"markdown\"><p>Born for React</p></div>"
            },
            {
              "icon": "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png",
              "title": "Type Strong",
              "desc": "<div class=\"markdown\"><p>Native support for TypeScript</p></div>"
            }
          ],
          "slugs": [
            {
              "depth": 2,
              "value": "Installation",
              "heading": "installation"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Links",
              "heading": "links"
            }
          ]
        },
        "title": "G2Plot React - G2Plot React"
      },
      {
        "path": "/api/area",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__api__area.md' */'/Users/sn/Desktop/work/study/react-g2plot/docs/api/area.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/api/area.md",
          "updatedTime": 1648912177380,
          "slugs": [
            {
              "depth": 1,
              "value": "AreaChart",
              "heading": "areachart"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            }
          ],
          "title": "AreaChart",
          "nav": {
            "path": "/api",
            "title": "Api"
          }
        },
        "title": "AreaChart - G2Plot React"
      },
      {
        "path": "/guide/get-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__get-started.md' */'/Users/sn/Desktop/work/study/react-g2plot/docs/guide/get-started.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/get-started.md",
          "updatedTime": 1648890704726,
          "title": "Get Started",
          "slugs": [
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Import",
              "heading": "import"
            },
            {
              "depth": 2,
              "value": "Config",
              "heading": "config"
            },
            {
              "depth": 2,
              "value": "Render",
              "heading": "render"
            },
            {
              "depth": 2,
              "value": "Update Data",
              "heading": "update-data"
            },
            {
              "depth": 2,
              "value": "Update Config",
              "heading": "update-config"
            },
            {
              "depth": 2,
              "value": "Use Lab Chart",
              "heading": "use-lab-chart"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Get Started - G2Plot React"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/sn/Desktop/work/study/react-g2plot/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1648890704729,
          "title": "Guide",
          "nav": {
            "order": 0,
            "path": "/guide",
            "title": "Guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "What",
              "heading": "what"
            },
            {
              "depth": 2,
              "value": "Features",
              "heading": "features"
            }
          ]
        },
        "title": "Guide - G2Plot React"
      },
      {
        "path": "/api",
        "meta": {},
        "exact": true,
        "redirect": "/api/area"
      }
    ],
    "title": "G2Plot React",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
