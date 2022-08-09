import mSelect from './src/index.vue';

mSelect.install = (Vue) => {
  Vue.component(mSelect.name,mSelect)
}

export default mSelect;
