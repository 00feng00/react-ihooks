import { useEffect, useRef } from 'react';

/**
 * @description: 组件页面卸载
 * @param {function} fn
 * @return {*}
 */
const useComponentDestroy = (fn: () => void) => {
  const ref = useRef(fn);
  ref.current = fn;
  const fnRef = ref;

  useEffect(() => {
    () => {
      fnRef.current();
    };
  }, []);
};

export default useComponentDestroy;
