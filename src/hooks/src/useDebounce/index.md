---
nav:
  title: hooks
  path: /components
---

## useDebounce

定制处理防抖： ·设置等待时间， ·是否在延迟开始前调用函数 ·是否在延迟开始后调用函数 ·最大等待时间，单位为毫秒

Demo:

```tsx
import React, { useState } from 'react';
import { useDebounce } from 'react-ihooks';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};
```
