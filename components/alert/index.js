import mAlert from './index.vue';

mAlert.install = (Vue) => {
  Vue.component(mAlert.name,mAlert)
}

export default mAlert;
