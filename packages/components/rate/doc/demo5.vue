<template>
  <m-row>
    <m-col>
      <m-rate v-model="value1" clearable></m-rate> clearable: true
    </m-col>
    <m-col style="margin-top:20px">
      <m-rate v-model="value2"></m-rate> clearable: false
    </m-col>  
  </m-row>
</template>

<script setup>
import { computed, ref } from 'vue';
const value1 = ref(2);
const value2 = ref(2);
</script>