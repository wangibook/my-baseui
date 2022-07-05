<template>
  <m-checkbox-group v-model="checkList1" @change="checkChange">
    <m-checkbox label="复选框 A"></m-checkbox>
    <m-checkbox label="复选框 B"></m-checkbox>
    <m-checkbox label="复选框 C"></m-checkbox>
    <m-checkbox label="复选框 D" disabled></m-checkbox>
    <m-checkbox label="复选框 E" disabled></m-checkbox>
  </m-checkbox-group>
  <m-checkbox-group v-model="checkList2" style="margin-top:10px">
    <m-checkbox 
      v-for="(item,index) in checkOptions" 
      :key="index" 
      :label="item.label"
      :disabled="item.disabled">
    </m-checkbox>
  </m-checkbox-group>
</template>

<script setup>
import { reactive, ref } from 'vue'

const checkList1 = ref(['复选框 A', '复选框 E'])
const checkList2 = ref([])

const state = reactive({
  checkOptions:[
    {label:'复选框 A'},
    {label:'复选框 B'},
    {label:'复选框 C'},
    {label:'复选框 D',disabled:true},
    {label:'复选框 E',disabled:true}
  ]
})

const checkChange = (e) => {
  console.log(e);
}

const { checkOptions } = state;
</script>