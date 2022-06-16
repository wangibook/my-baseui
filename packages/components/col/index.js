import mCol from './index.vue';

mCol.install = (Vue) => {
  Vue.component(mCol.name,mCol)
}

export default mCol;