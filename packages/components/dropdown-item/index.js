import mDropdownItem from '../dropdown/src/dropdown-item.vue';

mDropdownItem.install = function(Vue) {
  Vue.component(mDropdownItem.name, mDropdownItem);
};

export default mDropdownItem;
