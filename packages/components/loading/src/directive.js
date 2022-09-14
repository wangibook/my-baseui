import { createApp } from 'vue';
import Loading from './loading.vue';
import { defaultConfig } from './config';
import { attrs,merge } from '~/utils/dom';

// 获取属性
function getConfig(el, binding) {
  const text = attrs(el, 'm-loading-text');
  const icon = attrs(el, 'm-loading-icon');
  const textColor = attrs(el, 'm-loading-text-color');
  const iconColor = attrs(el, 'm-loading-icon-color');
  const background = attrs(el, 'm-loading-background');

  return {
    screen: binding.modifiers.screen,
    text,
    icon,
    textColor,
    iconColor,
    background,
  };
};

// 插入节点
function append(el,binding) {
  // 向el节点插⼊动态创建的 div 节点，内容就是我们的 loading 组件
  if (binding.modifiers.screen) {
    document.body.appendChild(el.instance.$el);
  } else {
    el.appendChild(el.instance.$el);
  }
  el.instance.isShow = true
}

// 移除节点
function remove(el,binding) {
  // 移除动态创建的 div 节点
  if (binding.modifiers.screen) {
    document.body.removeChild(el.instance.$el);
  } else {
    el.removeChild(el.instance.$el);
  }
  el.instance.isShow = false
}

export const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading);
    const config = getConfig(el, binding);
    
    // 创建div元素装载Loading对象
    const root = document.createElement('div');
    const instance = app.mount(root);
    merge(instance, defaultConfig, config);
    // 因为在updated也需要⽤到 instance 所以将 instance 添加在 el 上
    // 在 updated中 通过el.instance 可访问到
    el.instance = instance
    // v-loading传过来的值储存在 binding.value 中
    if (binding.value) {
      append(el,binding)
    }
  },
  updated(el, binding) {
    // 如果value的值有改变，那么我们去判断进⾏操作
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el,binding) : remove(el,binding)
    }
  }
}