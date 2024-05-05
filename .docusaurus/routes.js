import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/oetrc/',
    component: ComponentCreator('/oetrc/', 'ca5'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug',
    component: ComponentCreator('/oetrc/__docusaurus/debug', '605'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/config',
    component: ComponentCreator('/oetrc/__docusaurus/debug/config', '771'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/content',
    component: ComponentCreator('/oetrc/__docusaurus/debug/content', '715'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/globalData',
    component: ComponentCreator('/oetrc/__docusaurus/debug/globalData', 'f16'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/metadata',
    component: ComponentCreator('/oetrc/__docusaurus/debug/metadata', 'beb'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/registry',
    component: ComponentCreator('/oetrc/__docusaurus/debug/registry', 'e22'),
    exact: true
  },
  {
    path: '/oetrc/__docusaurus/debug/routes',
    component: ComponentCreator('/oetrc/__docusaurus/debug/routes', '0ff'),
    exact: true
  },
  {
    path: '/oetrc/blog',
    component: ComponentCreator('/oetrc/blog', '097'),
    exact: true
  },
  {
    path: '/oetrc/blog/archive',
    component: ComponentCreator('/oetrc/blog/archive', '776'),
    exact: true
  },
  {
    path: '/oetrc/blog/first-blog-post',
    component: ComponentCreator('/oetrc/blog/first-blog-post', '6a6'),
    exact: true
  },
  {
    path: '/oetrc/blog/greetings',
    component: ComponentCreator('/oetrc/blog/greetings', 'a26'),
    exact: true
  },
  {
    path: '/oetrc/blog/long-blog-post',
    component: ComponentCreator('/oetrc/blog/long-blog-post', '562'),
    exact: true
  },
  {
    path: '/oetrc/blog/mdx-blog-post',
    component: ComponentCreator('/oetrc/blog/mdx-blog-post', 'bc1'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags',
    component: ComponentCreator('/oetrc/blog/tags', 'cec'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags/docusaurus',
    component: ComponentCreator('/oetrc/blog/tags/docusaurus', '7b2'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags/facebook',
    component: ComponentCreator('/oetrc/blog/tags/facebook', '95f'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags/greetings',
    component: ComponentCreator('/oetrc/blog/tags/greetings', 'b4a'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags/hello',
    component: ComponentCreator('/oetrc/blog/tags/hello', 'e65'),
    exact: true
  },
  {
    path: '/oetrc/blog/tags/hola',
    component: ComponentCreator('/oetrc/blog/tags/hola', '291'),
    exact: true
  },
  {
    path: '/oetrc/blog/welcome',
    component: ComponentCreator('/oetrc/blog/welcome', '886'),
    exact: true
  },
  {
    path: '/oetrc/docs',
    component: ComponentCreator('/oetrc/docs', '20a'),
    routes: [
      {
        path: '/oetrc/docs',
        component: ComponentCreator('/oetrc/docs', '6be'),
        routes: [
          {
            path: '/oetrc/docs',
            component: ComponentCreator('/oetrc/docs', 'c93'),
            routes: [
              {
                path: '/oetrc/docs/placeholder',
                component: ComponentCreator('/oetrc/docs/placeholder', 'b96'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
