# react-ihooks

[文档预览](https://react-ihooks.github.io/) <br />

# logo

<img src='' style="width: 300px;">
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

<img src='https://camo.githubusercontent.com/cd50eb85ab332891faee0c34486e9921f63bd1bd1da12e246dd7f3f83814b6be/68747470733a2f2f303066656e6730302e6769746875622e696f2f696d672f71647a635f6c6f676f2e6a7067' width="300">
