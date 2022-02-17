---
nav:
  title: hooks
  path: /components
---

## useDocumentTitle

设置浏览器页面标题

Demo:

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
