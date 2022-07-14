<template>
  <div class="demo-progress">
    <m-progress 
      :text-inside="true" 
      :stroke-width="26" 
      :percentage="70" 
    />
    <m-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <m-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <m-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="error"
    />
  </div>
</template>

<style scoped>
.demo-progress .m-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>