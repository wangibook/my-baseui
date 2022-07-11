<template>
  <div>
    <m-checkbox v-model="checked1" border>备选项1</m-checkbox>
    <m-checkbox v-model="checked2" border>备选项2</m-checkbox>
  </div>
  <div style="margin-top: 20px">
    <m-checkbox-group v-model="checkboxGroup1">
      <m-checkbox label="备选项1" border></m-checkbox>
      <m-checkbox label="备选项2" border disabled></m-checkbox>
    </m-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <m-checkbox-group v-model="checkboxGroup2" disabled>
      <m-checkbox label="备选项1" border></m-checkbox>
      <m-checkbox label="备选项2" border></m-checkbox>
    </m-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checkboxGroup1 = ref(['备选项1'])
const checkboxGroup2 = ref([])
</script>