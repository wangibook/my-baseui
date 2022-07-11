import mTag from './index.vue';

mTag.install = (Vue) => {
  Vue.component(mTag.name,mTag)
}

export default mTag;
