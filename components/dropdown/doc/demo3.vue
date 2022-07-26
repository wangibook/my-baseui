<template>
  <m-dropdown title="hover 激活">
    <template #dropdown>
      <m-dropdown-menu>
        <m-dropdown-item>菜单1</m-dropdown-item>
        <m-dropdown-item>菜单2</m-dropdown-item>
        <m-dropdown-item>菜单3</m-dropdown-item>
        <m-dropdown-item>菜单4</m-dropdown-item>
        <m-dropdown-item>菜单5</m-dropdown-item>
      </m-dropdown-menu>
    </template>
  </m-dropdown>
  <m-dropdown title="click 激活" trigger="click" style="margin-left:50px">
    <template #dropdown>
      <m-dropdown-menu>
        <m-dropdown-item>菜单1</m-dropdown-item>
        <m-dropdown-item>菜单2</m-dropdown-item>
        <m-dropdown-item>菜单3</m-dropdown-item>
        <m-dropdown-item>菜单4</m-dropdown-item>
        <m-dropdown-item>菜单5</m-dropdown-item>
      </m-dropdown-menu>
    </template>
  </m-dropdown>
</template>