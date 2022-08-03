import mTabs from './src/index.vue';

mTabs.install = (Vue) => {
  Vue.component(mTabs.name,mTabs)
}

export default mTabs;
