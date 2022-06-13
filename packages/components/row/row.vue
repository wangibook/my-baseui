<template>
  <div class="row-default">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-row'
}
</script>

<style lang="scss" scoped>
.row-default{
  width:100%;
  height:auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
