<template>
  <m-menu mode="horizontal" default-active="1" :theme="theme">
    <m-menu-item name="1">菜单一</m-menu-item>
    <m-menu-item name="2">菜单二</m-menu-item>
    <m-submenu name="3">
      <template #title>菜单三</template>
      <m-menu-group title="分组一">
        <m-menu-item name="3-1">item1</m-menu-item>
        <m-menu-item name="3-2">item2</m-menu-item>
        <m-menu-item name="3-3">item3</m-menu-item>
      </m-menu-group>
      <m-menu-group title="分组二">
        <m-menu-item name="3-4">item4</m-menu-item>
        <m-menu-item name="3-5">item5</m-menu-item>
        <m-menu-item name="3-6">item6</m-menu-item>
      </m-menu-group>
    </m-submenu>
    <m-menu-item name="4">菜单四</m-menu-item>
  </m-menu>

  <m-menu class="mt-50" default-active="1" :theme="theme">
    <m-menu-item name="1">菜单一</m-menu-item>
    <m-menu-item name="2">菜单二</m-menu-item>
    <m-submenu name="3">
      <template #title>菜单三</template>
      <m-menu-group title="分组一">
        <m-menu-item name="3-1">item1</m-menu-item>
        <m-menu-item name="3-2">item2</m-menu-item>
        <m-menu-item name="3-3">item3</m-menu-item>
      </m-menu-group>
      <m-menu-group title="分组二">
        <m-menu-item name="3-4">item4</m-menu-item>
        <m-menu-item name="3-5">item5</m-menu-item>
        <m-menu-item name="3-6">item6</m-menu-item>
      </m-menu-group>
    </m-submenu>
    <m-menu-item name="4">菜单四</m-menu-item>
  </m-menu>
  <div class="theme-style">
    <p class="title">切换主题</p>
    <m-radio-group v-model="theme">
      <m-radio label="light">light</m-radio>
      <m-radio label="dark">dark</m-radio>
    </m-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')
</script>

<style scoped>
.theme-style{
  margin-top: 20px;
}
.title{
  margin: 5px;
  font-size: 14px;
}
.mt-50{
  margin-top: 50px;
}
</style>