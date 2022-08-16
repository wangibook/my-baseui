import mTree from './src/index.vue';

mTree.install = (Vue) => {
  Vue.component(mTree.name,mTree)
}

export default mTree;
