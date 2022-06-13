<template>
  <div class="m-input-default">
    <div class="demo-input">
      <input type="text" class="m-input" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  name:"mInput"
}
</script>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入'
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/components/input.scss';
</style>
