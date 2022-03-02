import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-ihooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  // resolve: {
  //   includes: ['docs', 'hooks/src'],
  // },
  navs: {
    'zh-CN': [{ title: 'Hooks', path: '/hooks' }],
  },
  menus: {
    '/hooks': [
      {
        title: 'UseDocumentTitle',
        children: ['UseDocumentTitle'],
      },
      {
        title: 'UseDebounce',
        children: ['useDebounce'],
      },
    ],
  },
});
