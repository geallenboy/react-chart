// @ts-nocheck
import React from 'react';
import {
  ApplyPluginsType,
  dynamic
} from '/Users/sn/Desktop/work/study/react-chart/node_modules/.pnpm/@umijs+runtime@3.5.21_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [
        dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */ '../dumi/layout') })
      ],
      component: ((props) =>
        dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(
              /* webpackChunkName: 'dumi_demos' */ '/Users/sn/Desktop/work/study/react-chart/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs'
            );
            const { default: Previewer } = await import(
              /* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js'
            );
            const { usePrefersColor, context } = await import(
              /* webpackChunkName: 'dumi_demos' */ 'dumi/theme'
            );

            return (props) => {
              const { demos } = React.useContext(context);
              const [renderArgs, setRenderArgs] = React.useState([]);

              // update render args when props changed
              React.useLayoutEffect(() => {
                setRenderArgs(getDemoRenderArgs(props, demos));
              }, [
                props.match.params.uuid,
                props.location.query.wrapper,
                props.location.query.capture
              ]);

              // for listen prefers-color-schema media change in demo single route
              usePrefersColor();

              switch (renderArgs.length) {
                case 1:
                  // render demo directly
                  return renderArgs[0];

                case 2:
                  // render demo with previewer
                  return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

                default:
                  return `Demo ${props.match.params.uuid} not found :(`;
              }
            };
          },
          loading: () => null
        }))()
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid'
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */ '../dumi/layout') }),
        dynamic({
          loader: () =>
            import(
              /* webpackChunkName: 'wrappers' */ '/Users/sn/Desktop/work/study/react-chart/node_modules/.pnpm/@umijs+preset-dumi@1.1.40_04f116426df175668c1e3fa5c2673541/node_modules/dumi-theme-default/es/layout.js'
            )
        })
      ],
      routes: [
        {
          path: '/',
          component: dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__index.md' */ '/Users/sn/Desktop/work/study/react-chart/docs/index.md'
              )
          }),
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1649671094000,
            title: 'react chart',
            hero: {
              title: 'react chart',
              desc: '<div class="markdown"><p>react chart</p></div>',
              actions: [
                {
                  text: '组件',
                  link: '/api'
                },
                {
                  text: '文档',
                  link: '/guide/get-started'
                }
              ]
            },
            features: [
              {
                icon: 'https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg',
                title: 'G2Plot',
                desc: '<div class="markdown"><p>基于G2Plot</p></div>'
              },
              {
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                title: 'React',
                desc: '<div class="markdown"><p>React开发</p></div>'
              },
              {
                icon: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
                title: 'TypeScript',
                desc: '<div class="markdown"><p>支持TypeScript</p></div>'
              }
            ],
            slugs: [
              {
                depth: 2,
                value: '安装',
                heading: '安装'
              },
              {
                depth: 2,
                value: '使用',
                heading: '使用'
              },
              {
                depth: 2,
                value: 'Examples',
                heading: 'examples'
              }
            ]
          },
          title: 'react chart - react图表'
        },
        {
          path: '/api/area',
          component: dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__api__area.md' */ '/Users/sn/Desktop/work/study/react-chart/docs/api/area.md'
              )
          }),
          exact: true,
          meta: {
            filePath: 'docs/api/area.md',
            updatedTime: 1649671094000,
            slugs: [
              {
                depth: 1,
                value: 'AreaChart',
                heading: 'areachart'
              },
              {
                depth: 2,
                value: 'Usage',
                heading: 'usage'
              }
            ],
            title: 'AreaChart',
            nav: {
              path: '/api',
              title: 'Api'
            }
          },
          title: 'AreaChart - react图表'
        },
        {
          path: '/guide/get-started',
          component: dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__get-started.md' */ '/Users/sn/Desktop/work/study/react-chart/docs/guide/get-started.md'
              )
          }),
          exact: true,
          meta: {
            filePath: 'docs/guide/get-started.md',
            updatedTime: 1649671094000,
            title: '开始',
            slugs: [
              {
                depth: 2,
                value: '安装',
                heading: '安装'
              },
              {
                depth: 2,
                value: '导入',
                heading: '导入'
              },
              {
                depth: 2,
                value: '配置',
                heading: '配置'
              },
              {
                depth: 2,
                value: '案例 1',
                heading: '案例-1'
              },
              {
                depth: 2,
                value: '案例 2',
                heading: '案例-2'
              },
              {
                depth: 2,
                value: '案例 3',
                heading: '案例-3'
              }
            ],
            hasPreviewer: true,
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: '开始 - react图表'
        },
        {
          path: '/guide',
          component: dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__index.md' */ '/Users/sn/Desktop/work/study/react-chart/docs/guide/index.md'
              )
          }),
          exact: true,
          meta: {
            filePath: 'docs/guide/index.md',
            updatedTime: 1649671094000,
            title: '介绍',
            nav: {
              order: 0,
              path: '/guide',
              title: 'Guide'
            },
            slugs: [
              {
                depth: 2,
                value: '特性',
                heading: '特性'
              }
            ]
          },
          title: '介绍 - react图表'
        },
        {
          path: '/api',
          meta: {},
          exact: true,
          redirect: '/api/area'
        }
      ],
      title: 'react图表',
      component: (props) => props.children
    }
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes }
  });

  return routes;
}
