<template>
  <m-select v-model="selVal" :options="options" searchable></m-select>
</template>

<script setup>
import { reactive, ref } from 'vue'
const selVal = ref('')

const state = reactive({
  options: [
    { value: 'value1',label: 'Option1'},
    { value: 'value2',label: 'Option2'},
    { value: 'value3',label: 'Option3'},
    { value: 'value4',label: 'Option4'},
    { value: 'value5',label: 'Option5'},
    { value: 'value6',label: 'Option6'},
    { value: 'value7',label: 'Option7'},
    { value: 'value8',label: 'Option8'},
    { value: 'value9',label: 'Option9'}
  ]
})
const { options } = state;
</script>