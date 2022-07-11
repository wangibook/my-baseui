<template>
  <m-row :gutter="20">
    <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
    <m-col :span="8"><div class="col-box-2 col-box">8</div></m-col>
    <m-col :span="8"><div class="col-box-1 col-box">8</div></m-col>
  </m-row>
  <m-row :gutter="30">
    <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-2 col-box">6</div></m-col>
    <m-col :span="6"><div class="col-box-1 col-box">6</div></m-col>
  </m-row>
</template>

<style scoped>
.col-box {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
}
.col-box-1 {
  background-color: #d3dce6;
  color: #333;
}
.col-box-2 {
  background-color: #e5e9f2;
  color: #333;
}
</style>