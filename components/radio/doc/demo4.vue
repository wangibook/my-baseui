<template>
  <div>
    <m-radio-group v-model="radio1">
      <m-radio-button label="上海"></m-radio-button>
      <m-radio-button label="北京"></m-radio-button>
      <m-radio-button label="广州"></m-radio-button>
      <m-radio-button label="深圳"></m-radio-button>
    </m-radio-group>
  </div>
  <div style="margin-top: 20px;">
    <m-radio-group v-model="radio2">
      <m-radio-button label="上海"></m-radio-button>
      <m-radio-button label="北京" disabled></m-radio-button>
      <m-radio-button label="广州"></m-radio-button>
      <m-radio-button label="深圳"></m-radio-button>
    </m-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('上海')
const radio2 = ref('上海')
</script>