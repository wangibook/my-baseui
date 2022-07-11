import mMessage from './index.vue';
import { h, render } from 'vue';

export default ({text, type, timeout, icon, textColor, bgColor, customClass,center,showClose}) => {
  const div =
    typeof document !== 'undefined'
      ? typeof document.createElement !== 'undefined'
        ? document.createElement('div')
        : ''
      : ''
  div.setAttribute('class', 'm-message-container')

  if (typeof document !== 'undefined') {
    document.body.appendChild(div)
  }
  let timer = null
  // 传递给组件的选项
  // h() 函数是一个用于创建 VNode 的实用程序,它接受三个参数
  const vnode = h(mMessage, { text, type, timeout, icon, textColor, bgColor, customClass,center,showClose }, () =>[text])
  render(vnode, div)
  if(timeout === 0) return
  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      document.body.removeChild(div)
    }
    clearTimeout(timer)
  },timeout || 3000)
}
