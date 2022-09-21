import mSubmenu from '../menu/src/sub-menu.vue';

mSubmenu.install = (Vue) => {
  Vue.component(mSubmenu.name,mSubmenu)
}

export default mSubmenu;
