<template>
  <m-tree :data="list" label="name" children="children" show-checkbox></m-tree>
</template>

<script setup>
const list = [
  {
    name: '一级 1',
    children: [
      {
        name: '二级 1-1',
        children: [
          {
            name: '三级 1-1-1'
          },
          {
            name: '三级 1-1-2'
          }
        ]
      },
      {
        name: '二级 1-2'
      }
    ]
  }, 
  {
    name: '一级 2',
    children: [
      {
        name: '二级 2-1',
        children: [
          {
            name: '三级 2-1-1'
          }
        ]
      }, 
      {
        name: '二级 2-2'
      }
    ]
  }, 
  {
    name: '一级 3',
    children: [
      {
        name: '二级 3-1'
      }, 
      {
        name: '二级 3-2'
      }
    ]
  }
]
</script>