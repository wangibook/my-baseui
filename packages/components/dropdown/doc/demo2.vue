<template>
  <m-dropdown title="下拉菜单" disabled>
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
  <m-dropdown title="下拉菜单" style="margin-left:50px">
    <template #dropdown>
      <m-dropdown-menu>
        <m-dropdown-item>菜单1</m-dropdown-item>
        <m-dropdown-item>菜单2</m-dropdown-item>
        <m-dropdown-item>菜单3</m-dropdown-item>
        <m-dropdown-item disabled>菜单4</m-dropdown-item>
        <m-dropdown-item divided>菜单5</m-dropdown-item>
      </m-dropdown-menu>
    </template>
  </m-dropdown>
</template>