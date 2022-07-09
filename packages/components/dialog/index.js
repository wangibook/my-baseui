import mDialog from './index.vue';

mDialog.install = (Vue) => {
  Vue.component(mDialog.name,mDialog)
}

export default mDialog;
