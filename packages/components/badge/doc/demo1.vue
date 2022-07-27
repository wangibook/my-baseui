<template>
  <m-badge :value="12" class="item">
    <m-button size="small">评论</m-button>
  </m-badge>
  <m-badge :value="5" class="item">
    <m-button size="small">回复</m-button>
  </m-badge>
  <m-badge :value="12" class="item" type="primary">
    <m-button size="small">评论</m-button>
  </m-badge>
  <m-badge :value="12" class="item" type="warning">
    <m-button size="small">回复</m-button>
  </m-badge>

  <m-dropdown trigger="click" title="点我查看">
    <template #dropdown>
      <m-dropdown-menu>
        <m-dropdown-item class="clearfix">
          评论
          <m-badge :value="12" />
        </m-dropdown-item>
        <m-dropdown-item class="clearfix">
          回复
          <m-badge :value="5" />
        </m-dropdown-item>
      </m-dropdown-menu>
    </template>
  </m-dropdown>
</template>

<style>
.item {
  margin-right: 40px;
}
</style>