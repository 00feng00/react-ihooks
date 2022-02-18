import { useEffect, useState } from 'react';
import useDebounceFn from '../useDebounceFn';
import { DebounceOptions } from './debounceOption';

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
