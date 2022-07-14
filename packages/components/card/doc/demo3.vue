<template>
  <m-row>
    <m-col
      v-for="(item, index) in 2"
      :key="item"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <m-card :body-style="{ padding: '0px' }">
        <h2 style="padding:0 10px">这是一段标题</h2>
        <div style="padding: 14px">
          <span>卡片名称</span>
          <div class="bottom">
            <p>什么是快乐星球</p>
            <m-button class="button" type="text">操作按钮</m-button>
          </div>
        </div>
      </m-card>
    </m-col>
  </m-row>
</template>

<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>