import mBreadcrumb from './src/index.vue';

mBreadcrumb.install = (Vue) => {
  Vue.component(mBreadcrumb.name,mBreadcrumb)
}

export default mBreadcrumb;
