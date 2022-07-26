<template>
  <ul class="m-dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "mDropdownMenu"
};
</script>

<script setup>

</script>

<style lang="scss" scoped>
.m-dropdown-menu{
  position: absolute;
  left: 0;
  z-index: 99;
  white-space: nowrap;
  min-width: 90px;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 5px;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #dcdfe6f6;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
