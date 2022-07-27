import mDropdownMenu from '../dropdown/src/dropdown-menu.vue';

mDropdownMenu.install = function(Vue) {
  Vue.component(mDropdownMenu.name, mDropdownMenu);
};

export default mDropdownMenu;
