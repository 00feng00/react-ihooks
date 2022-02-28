import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-ihooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'hooks/src'],
  },
  navs: {
    'zh-CN': [{ title: 'Hooks', path: '/zh-CN/hooks' }],
  },
  menus: {
    '/hooks': [
      {
        title: '设置浏览器标题',
        children: [{ title: 'useDocumentTitle', path: '/useDocumentTitle' }],
      },
      {
        title: '防抖/节流',
        children: [
          { title: '防抖', path: '/useDebounce' },
          { title: '节流', path: '/useThrottle' },
        ],
      },
    ],
  },
});
