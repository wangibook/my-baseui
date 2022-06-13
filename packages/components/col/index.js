import mCol from './col.vue';

mCol.install = (Vue) => {
  Vue.component(mCol.name,mCol)
}

export default mCol;