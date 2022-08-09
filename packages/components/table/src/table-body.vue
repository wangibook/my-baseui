<template>
  <tbody class="m-table__body">
    <tr class="m-table__row" v-for="(row,i) in tableData" :key="i" :class="rowClasses(i)">
      <td class="m-table__cell" 
        v-for="(col,j) in columns" 
        :key="j" 
        :class="colCellClasses(row,col)"
        @click="clickCurrentRow(i)">
        <div class="cell">
          <template v-if="col.type==='index' ">
            {{i + 1}}
          </template>
          <template v-if="col.type==='selection' ">
            <input type="checkbox" :checked="rowChecked(row)" @change="handleChange(row,$event)">
          </template>
          {{row[col.prop]}}
          <slot name="default"></slot>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { ref } from 'vue';
import { deepCopy } from '~/utils/index';

const emits = defineEmits(['clickCurrentRow','selection-change'])
const props = defineProps({
  tableData: Array,
  objData: Object,
  columns: {
    type: Array,
    default: () => []
  },
  rowClassName: {
    type: Function,
    default () {
      return '';
    }
  },
  selectItems: {
    type: Array,
    default: () => []
  }
})

const isSelected = ref([])

const rowClasses = (index) => {
  const { tableData,objData,rowClassName } = props
  return [
    rowClassName(tableData[index],index),
    {
      'm-table-row-highlight': objData[index] && objData[index]._isHighlight,
    }
  ]
}

const colCellClasses = (row,col) => {
  if(row.cellClassName) {
    return row.cellClassName[col.prop]
  }
  if(col.className) {
    return col.className
  }
  if(col.fixed) {
    return `fixed-${col.fixed}`
  }
}

const clickCurrentRow = (_index) => {
  emits('clickCurrentRow',_index)
}

const handleChange = (row,e) => {
  let copySelectItems = deepCopy(props.selectItems)
  if(e.target.checked) {
    copySelectItems.push(row)
  } else {
    let idx = copySelectItems.findIndex(item => item.id === row.id)
    copySelectItems.splice(idx,1)
  }
  emits('selection-change',copySelectItems)
}

const rowChecked = (row) => {
  return props.selectItems.some(item => item.id === row.id)
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/table.scss';
</style>
