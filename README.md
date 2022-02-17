# react-ihooks

文档预览 <br /> <img src='https://github.com/00feng00/ihooks/blob/main/src/assets/preview_bg.jpg' width="100%">

## 安装 react-ihooks

```bash
$ npm i react-ihooks
```

## useDocumentTitle

示例代码

```tsx
import React from 'react';
import { useDocumentTitle } from 'react-ihooks';

export default () => {
  useDocumentTitle('页面标题');

  return (
    <div>
      <p>为页面设置标题</p>
    </div>
  );
};
```
