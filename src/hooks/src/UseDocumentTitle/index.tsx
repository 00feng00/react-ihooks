import { useEffect, useRef } from 'react';
import isBrowser from '../utils/isBrowser';
import useComponentDestroy from '../UseComponentDestroy';
export interface Options {
  recoverOnDestroy?: boolean;
}
const DEFAULT_OPTION: Options = {
  recoverOnDestroy: false,
};
/**
 * @description: 设置浏览器标题
 * @param {*} title 标题
 * @param {*} options 选项
 * @return {*}
 */
function useDocumentTitle(title: string, options: Options = DEFAULT_OPTION) {
  const documentTitleRef = useRef(isBrowser ? document.title : '');

  useEffect(() => {
    document.title = title;
  }, [title]);

  // 页面卸载,是否恢复上一个页面的标题
  useComponentDestroy(() => {
    if (options.recoverOnDestroy) {
      document.title = documentTitleRef.current;
    }
  });
}
export default useDocumentTitle;
