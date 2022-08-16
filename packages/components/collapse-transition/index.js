import mCollapseTransition from './transition.vue';

mCollapseTransition.install = function (Vue) {
  Vue.component(mCollapseTransition.name, mCollapseTransition);
};

export default mCollapseTransition;
