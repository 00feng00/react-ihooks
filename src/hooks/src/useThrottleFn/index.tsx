import { useMemo } from 'react';
import throttle from 'lodash/throttle';
import useLatest from '../useLatest';
import useComponentDestroy from '../useComponentDestroy';

type noop = (...args: any) => any;

export interface ThrottleOptions {
  wait: number;
  leading: boolean;
  trailing: boolean;
}

function useThrottleFn<T extends noop>(fn: T, options: ThrottleOptions) {
  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const throttled = useMemo(
    () =>
      throttle<T>(
        ((args: any[]) => {
          return fnRef.current(...args);
        }) as T,
        wait,
        options,
      ),
    [],
  );

  useComponentDestroy(() => {
    throttled.cancel();
  });

  return {
    run: throttled as unknown as T,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottleFn;
