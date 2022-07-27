import mBadge from './index.vue';

mBadge.install = (Vue) => {
  Vue.component(mBadge.name,mBadge)
}

export default mBadge;