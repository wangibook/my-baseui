import mProgress from './index.vue';

mProgress.install = (Vue) => {
  Vue.component(mProgress.name,mProgress)
}

export default mProgress;
