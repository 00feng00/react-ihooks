/**
 * @description: 判断是否是浏览器
 * @param {*}
 * @return {*} boolean
 */
const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export default isBrowser;
