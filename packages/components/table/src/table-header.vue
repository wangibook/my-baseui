<template>
  <thead class="m-table__header">
    <tr>
      <th class="m-table__cell" v-for="col in columns" :key="col.prop">
        <div class="cell">
          <template v-if="col.type==='selection' ">
            <input type="checkbox" id="checkAll" :checked="isSelectAll" @change="changeAllItems">
          </template>
          {{col.label}}
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const emits = defineEmits(['selection-change'])
const props = defineProps({
  tableData: Array,
  objData: Object,
  columns: {
    type: Array,
    default: () => []
  },
  selectItems: Array
})

const checkAllRef = ref(null)
const isSelectAll = computed(() => {
  return props.tableData.length === props.selectItems.length
})

watch(() =>props.selectItems,(newVal) => {
  let input = document.getElementById('checkAll');
  if(newVal.length != 0 && props.tableData.length !== props.selectItems.length) {
    input.indeterminate = true 
  } else {
    input.indeterminate = false 
  }
},{deep: true})

// 全选
const changeAllItems = (e) => {
  emits('selection-change',e.target.checked ? props.tableData : [])
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/table.scss';
</style>
