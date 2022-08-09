import mPagination from './src/index.vue';

mPagination.install = (Vue) => {
  Vue.component(mPagination.name,mPagination)
}

export default mPagination;
