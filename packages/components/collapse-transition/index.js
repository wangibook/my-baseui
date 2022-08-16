import mCollapseTransition from './transition';

mCollapseTransition.install = function (Vue) {
  Vue.component(mCollapseTransition.name, mCollapseTransition);
};

export default mCollapseTransition;
