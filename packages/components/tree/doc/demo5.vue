<template>
  <m-tree
    ref="treeRef"
    :data="list" 
    node-key="id" 
    show-checkbox
    default-expand-all
    style="margin-bottom:20px">
  </m-tree>
  <m-space>
    <m-button type="primary" @click="setCheckedKeys">通过node-key设置选中</m-button>
    <m-button type="primary" @click="getCheckedNodes">获取选中项的数据数组</m-button>
    <m-button type="primary" @click="getCheckedKeys">获取选中项的keys数组</m-button>
    <m-button type="primary" @click="resetChecked">清空选中项</m-button>
  </m-space>
</template>

<script setup>
import { ref } from 'vue';
const treeRef = ref(null);

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
        label: '二级 2-1',
        children: [
          {
            id: 12,
            label: '三级 2-1-1'
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

const setCheckedKeys = () => {
  treeRef.value.setCheckedKeys([4])
}

const getCheckedNodes = () => {
  const nodes = treeRef.value.getCheckedNodes()
  alert(JSON.stringify(nodes))
  console.log(nodes);
}

const getCheckedKeys = () => {
  const keys = treeRef.value.getCheckedKeys()
  alert(JSON.stringify(keys))
  console.log(keys);
}

const resetChecked = () => {
  treeRef.value.setCheckedKeys([])
}
</script>