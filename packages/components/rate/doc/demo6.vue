<template>
  <m-row>
    <m-col>
      <m-rate v-model="value1" character="A"></m-rate>
    </m-col>
    <m-col style="margin-top:20px">
      <m-rate v-model="value2" character="好" allow-half></m-rate>
    </m-col>
    <m-col style="margin-top:20px">
      <m-rate v-model="value3" icon="smile-filling"></m-rate>
    </m-col> 
  </m-row>
</template>

<script setup>
import { computed, ref } from 'vue';
const value1 = ref(2);
const value2 = ref(2);
const value3 = ref(2);
</script>