<template>
  <div>
    <m-radio v-model="radio1" label="1" border>备选项1</m-radio>
    <m-radio v-model="radio1" label="2" border>备选项2</m-radio>
    <m-radio v-model="radio1" label="3" border>备选项3</m-radio>
  </div>
  <div style="margin-top: 20px">
    <m-radio-group v-model="radio2">
      <m-radio label="1" border>备选项1</m-radio>
      <m-radio label="2" border>备选项2</m-radio>
      <m-radio label="3" border>备选项3</m-radio>
    </m-radio-group>
  </div>
  <div style="margin-top: 20px">
    <m-radio-group v-model="radio3">
      <m-radio label="1" border>备选项1</m-radio>
      <m-radio label="2" border disabled>备选项2</m-radio>
      <m-radio label="3" border>备选项3</m-radio>
    </m-radio-group>
  </div>
  <div style="margin-top: 20px">
    <m-radio-group v-model="radio4" disabled>
      <m-radio label="1" border>备选项1</m-radio>
      <m-radio label="2" border>备选项2</m-radio>
      <m-radio label="3" border>备选项3</m-radio>
    </m-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>