<template>
  <div>
    <p class="title">自定义展开和选中</p>
    <m-tree 
      :data="list" 
      node-key="id" 
      show-checkbox 
      :default-expanded-keys="[1,4]"
      :default-checked-keys="[4]">
    </m-tree>
  </div>
  <div class="mt-50">
    <p class="title">展开所有项</p>
    <m-tree 
      :data="list" 
      node-key="id" 
      show-checkbox 
      default-expand-all>
    </m-tree>
  </div>
</template>

<script setup>
const list = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 10,
            label: '三级 1-1-1'
          },
          {
            id: 11,
            label: '三级 1-1-2'
          }
        ]
      },
      {
        id: 5,
        label: '二级 1-2'
      }
    ]
  }, 
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 6,
        label: '二级 2-1'
      }, 
      {
        id: 7,
        label: '二级 2-2'
      }
    ]
  }, 
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 8,
        label: '二级 3-1'
      }, 
      {
        id: 9,
        label: '二级 3-2'
      }
    ]
  }
]
</script>

<style scoped>
.mt-50{
  margin-top: 50px;
}
.title{
  border-top: 1px solid #ddd;
  padding: 5px 0; 
}
</style>