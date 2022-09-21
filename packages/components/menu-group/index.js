import mMenuGroup from '../menu/src/menu-group.vue';

mMenuGroup.install = (Vue) => {
  Vue.component(mMenuGroup.name,mMenuGroup)
}

export default mMenuGroup;
