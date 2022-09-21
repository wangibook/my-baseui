import mMenu from './src/menu.vue';

mMenu.install = (Vue) => {
  Vue.component(mMenu.name,mMenu)
}

export default mMenu;
