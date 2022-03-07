import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-ihooks',
  favicon:
    'https://raw.githubusercontent.com/00feng00/react-ihooks/main/src/assets/react-ihooks_bg.png',
  logo: 'https://raw.githubusercontent.com/00feng00/react-ihooks/main/src/assets/react-ihooks_bg.png',
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
        title: '设置标题',
        children: ['UseDocumentTitle'],
      },
      {
        title: '防抖/节流',
        children: ['useDebounce', 'useThrottle'],
      },
      // {
      //   title: '全屏(已废弃)',
      //   children: ['useFullScreen'],
      // },
      {
        title: '管理历史状态',
        children: ['useTravel'],
      },
    ],
  },
});
