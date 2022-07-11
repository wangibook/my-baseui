<template>
  <m-switch 
    v-model="switchVal"
    size="large"
    active-text="启用"
    inactive-text="停用">
  </m-switch>
  <m-switch 
    v-model="switchVal"
    active-text="启用"
    inactive-text="停用"
    style="display:block;margin-top:10px">
  </m-switch>
  <m-switch 
    v-model="switchVal"
    size="small"
    active-text="启用"
    inactive-text="停用"
    style="display:block;margin-top:10px">
  </m-switch>
</template>

<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>