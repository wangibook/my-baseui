// 设置内联样式
export function inlineStyle(dom, styles = {}) {
  if (!dom) return;
  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      dom.style[key] = styles[key];
    }
  }
}