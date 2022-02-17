---
nav:
  title: hooks
  path: /components
---

## UseDocumentTitle

设置浏览器页面标题

Demo:

```tsx
import React from 'react';
import { UseDocumentTitle } from 'react-ihooks';

export default () => {
  useTitle('页面标题');

  return (
    <div>
      <p>为页面设置标题</p>
    </div>
  );
};
```
