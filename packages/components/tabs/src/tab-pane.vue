<template>
  <div class="m-tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mTabPane"
};
</script>

<script setup>
import { computed,inject } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
  },
  disabled:{
    type: Boolean,
    default:false
  },
})

</script>

<style lang="scss" scoped>

</style>
