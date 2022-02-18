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

## useDebounce

示例代码

```tsx
import React, { useState } from 'react';
import { useDebounce } from 'react-ihooks';

export default () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, { wait: 200 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="请输入信息"
        style={{ width: 180 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};
```

## 技术交流

<img src='https://github.com/00feng00/ihooks/blob/main/src/assets/preview_bg.jpg' width="300">
