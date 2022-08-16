<template>
  <m-tree 
    :data="list" 
    node-key="id" 
    show-checkbox 
    :default-expanded-keys="[1,2,6]"
    :default-checked-keys="[2]">
  </m-tree>
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
    disabled: true,
    children: [
      {
        id: 6,
        label: '二级 2-1',
        disabled: true,
        children: [
          {
            id: 12,
            label: '三级 2-1-1',
            disabled: true
          }
        ]
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