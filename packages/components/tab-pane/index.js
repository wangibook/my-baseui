import mTabPane from '../tabs/src/tab-pane.vue';

mTabPane.install = (Vue) => {
  Vue.component(mTabPane.name,mTabPane)
}

export default mTabPane;
