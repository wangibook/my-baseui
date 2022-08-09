import mTableColumn from '../table/src/table-column.vue';

mTableColumn.install = function(Vue) {
  Vue.component(mTableColumn.name, mTableColumn);
};

export default mTableColumn;
