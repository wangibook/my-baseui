<template>
  <m-row>
    <span class="mr-10 l-hegight">Dark</span>
    <m-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </m-tag>
  </m-row>
  <m-row>
    <span class="mr-10 l-hegight">Plain</span>
    <m-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </m-tag>
  </m-row>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { type: '', label: '标签一' },
  { type: 'success', label: '标签二' },
  { type: 'info', label: '标签三' },
  { type: 'danger', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
</script>