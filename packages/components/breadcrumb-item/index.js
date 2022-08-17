import mBreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';

mBreadcrumbItem.install = (Vue) => {
  Vue.component(mBreadcrumbItem.name,mBreadcrumbItem)
}

export default mBreadcrumbItem;