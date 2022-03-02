---
nav:
  path: /hooks
---

## useDebounce

定制处理防抖： ·设置等待时间， ·是否在延迟开始前调用函数 ·是否在延迟开始后调用函数 ·最大等待时间，单位为毫秒

### 基础用法

Demo:

<code src='./demo/demo1.tsx' />

## API

```typescript
const debouncedValue = useDebounce(
  value: any,
  options?: Options
);
```

### Params

| Property | Description                        | Type      | Default |
| -------- | ---------------------------------- | --------- | ------- |
| value    | The value to debounce.             | `any`     | -       |
| options  | Config for the debounce behaviors. | `Options` | -       |

### Options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| wait | The number of milliseconds to delay. | `number` | `1000` |
| leading | Specify invoking on the leading edge of the timeout. | `boolean` | `false` |
| trailing | Specify invoking on the trailing edge of the timeout. | `boolean` | `true` |
| maxWait | The maximum time func is allowed to be delayed before it’s invoked. | `number` | - |
