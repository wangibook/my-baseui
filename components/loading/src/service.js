import { createApp } from 'vue';
import Loading from './loading.vue';
import { defaultConfig } from './config';
import { merge } from '~/utils/dom';

let instance = null

const loadingService = {
  show(config = {}) {
    const app = createApp(Loading);
    // 创建div元素装载Loading对象
    const root = document.createElement('div');
    instance = app.mount(root);
    merge(instance, defaultConfig, config);

    document.body.appendChild(instance.$el);
    instance.isShow = true
  },
  close() {
    document.body.removeChild(instance.$el)
    instance.isShow = false
  }
}

export default loadingService;