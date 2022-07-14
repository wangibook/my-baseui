<template>
  <m-row :gutter="12">
    <m-col :span="8">
      <m-card shadow="always"> 总是显示 </m-card>
    </m-col>
    <m-col :span="8">
      <m-card shadow="hover"> 鼠标悬浮时显示 </m-card>
    </m-col>
    <m-col :span="8">
      <m-card shadow="never"> 从不显示 </m-card>
    </m-col>
  </m-row>
</template>