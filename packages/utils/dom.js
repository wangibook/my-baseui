// 设置内联样式
export function inlineStyle(dom, styles = {}) {
  if (!dom) return;
  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      dom.style[key] = styles[key];
    }
  }
}

// 获取/设置html属性
export function attrs(dom, ...props) {
  if (!dom) return false;
  if (props.length === 1) return dom.getAttribute(props[0]);
  if (props.length === 2) return dom.setAttribute(props[0], props[1]);
  return false;
}

// 浅合并参数
export const merge = (target, ...args) => {
  args.forEach((arg) => {
    for (const prop in arg) {
      if (arg.hasOwnProperty(prop)) {
        if (arg[prop] !== undefined && arg[prop] !== null) {
          target[prop] = arg[prop];
        }
      }
    }
  });
  return target;
};
