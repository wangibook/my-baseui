import mMenuItem from '../menu/src/menu-item.vue';

mMenuItem.install = (Vue) => {
  Vue.component(mMenuItem.name,mMenuItem)
}

export default mMenuItem;
