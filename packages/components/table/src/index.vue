<template>
  <div class="m-table" ref="tableWrapperRef" :style="styles">
    <div class="table-scroll" ref="tableScrollRef" :class="classes">
      <table ref="tableRef">
        <TableHeader
          :tableData="cloneData"
          :obj-data="objData"
          :columns="columnsData"
          :selectItems="selectItems"
          @selection-change="changeSelectItems"
        />
        <TableBody 
          :columns="columnsData" 
          :tableData="cloneData"
          :obj-data="objData"
          :stripe="stripe"
          :selectItems="selectItems"
          :rowClassName="rowClassName"
          @clickCurrentRow="clickCurrentRow"
          @selection-change="changeSelectItems"
        />
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "mTable"
};
</script>

<script setup>
import TableHeader from './table-header.vue';
import TableBody from './table-body.vue';
import { ref,computed, onMounted, nextTick,useSlots, reactive, toRefs } from 'vue';
import { deepCopy } from '~/utils/index';

const emits = defineEmits(['on-current-change','on-selection-change'])
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  rowClassName: {
    type: Function,
    default () {
      return '';
    }
  },
  height: {
    type: String
  },
  width: {
    type: String
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false
  }
})
const slots = useSlots()
const columnsData = ref([]);
const tableWrapperRef = ref(null);
const tableScrollRef = ref(null);
const tableRef = ref(null);
const state = reactive({
  cloneData: deepCopy(props.data),
  objData:{},
  selectItems:[] // 多选选中的项
})

const classes = computed(() => {
  return {
    'm-table-stripe':props.stripe,
    'm-table-border':props.border
  }
})

const styles = computed(() => {
  const height = parseInt(props.height);
  const width = parseInt(props.width);
  return {
    height: `${height}px`,
    width: `${width}px`
  }
})

// 更新table实例列表
const updateTableInstances = () => {
  if (!slots.default) {
    columnsData.value = [];
    return;
  }
  // 获取所有的子元素（组件）
  columnsData.value = slots.default().map(item => {
    return item.props
  })
}

const clickCurrentRow = (_index) => {
  highlightCurrentRow(_index)
}

// 通用处理 highlightCurrentRow 和 clearCurrentRow
const handleCurrentRow = (type, _index) => {
  const { cloneData,objData } = state;
  let oldIndex = -1;
  // console.log(objData);
  for (let i in objData) {
    if (objData[i]._isHighlight) {
      oldIndex = parseInt(i);
      objData[i]._isHighlight = false;
    }
  }
  if (type === 'highlight') objData[_index]._isHighlight = true;
  const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(cloneData[oldIndex]));
  const newData = type === 'highlight' ? JSON.parse(JSON.stringify(cloneData[_index])) : null;
  emits('on-current-change', newData, oldData);
}

const highlightCurrentRow = (_index) => {
  if (!props.highlightCurrentRow) return;
  handleCurrentRow('highlight', _index);
}

const clearCurrentRow = () => {
  if (!props.highlightCurrentRow) return;
  handleCurrentRow('clear');
}

// 针对 checkbox or highlight
const makeObjData = () => {
  let data = {};
  props.data.forEach((row, index) => {
    const newRow = deepCopy(row);
    newRow._isHover = false;
    data[index] = newRow;
  });
  state.objData = data
}

const fixedHeader = () => {
  nextTick(() => {
    if(!props.height) return
    // 影子克隆: 只克隆节点本身
    let copyTable = tableRef.value.cloneNode();
    let thead = tableRef.value.children[0];
    // 获取thead的高度
    let theadHeight = thead.getBoundingClientRect().height;
    tableWrapperRef.value.style.paddingTop = theadHeight + 'px';
    // 将原表格的thead移动拷贝的表格中,appendChild具有移动性
    copyTable.appendChild(thead); 
    // 将拷贝后的结果插入到页面上
    tableWrapperRef.value.appendChild(copyTable);
    copyTable.classList.add('fixed-header')
  })
}

const changeSelectItems = (arr) => {
  state.selectItems = arr
  // 只要选中项发生变化时就会触发，返回值为 selection，已选项。
  emits('on-selection-change', state.selectItems);
}

onMounted(() => {
  updateTableInstances()
  makeObjData()
  fixedHeader()
})

// 暴露出去
defineExpose({
  clearCurrentRow
})

const { cloneData,objData,selectItems } = toRefs(state);

</script>

<style lang="scss" scoped>
@import '../../../styles/components/table.scss';
</style>
