import mOption from '../select/src/option.vue';

mOption.install = function(Vue) {
  Vue.component(mOption.name, mOption);
};

export default mOption;
