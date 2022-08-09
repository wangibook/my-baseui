import mTable from './src/index.vue';

mTable.install = (Vue) => {
  Vue.component(mTable.name,mTable)
}

export default mTable;
