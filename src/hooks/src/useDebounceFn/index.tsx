import { useMemo } from 'react';
import debounce from 'lodash/debounce';
import useComponentDestroy from '../useComponentDestroy';
import useLatest from '../useLatest';
import { DebounceOptions } from '../useDebounce/debounceOption';

type noop = (...arg: any) => any;

/**
 * @description: 处理防抖函数逻辑
 * @param {T} fn
 * @param {DebounceOptions} options
 * @return {*}
 */
function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  const fnRef = useLatest(fn);
  // 默认等1s
  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce<T>(
        ((...arg: any[]) => {
          return fnRef.current(...arg);
        }) as T,
        wait,
        options,
      ),
    [],
  );
  // 页面销毁，取消防抖
  useComponentDestroy(() => {
    debounced.cancel();
  });

  return {
    run: debounced as unknown as T,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}
export default useDebounceFn;
