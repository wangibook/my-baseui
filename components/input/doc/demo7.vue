<template>
  <m-space>
    <m-input v-model="value1" clearable>
      <template #prepend>
        <m-button type="primary" leftIcon="icon-search">搜索</m-button>
      </template>
    </m-input>
    <m-input v-model="value2" clearable>
      <template #append>
        <m-button type="primary" leftIcon="icon-search">搜索</m-button>
      </template>
    </m-input>
  </m-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
</script>