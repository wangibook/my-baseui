<template>
  <m-tree 
    :data="list" 
    node-key="id" 
    show-checkbox
    default-expand-all
    :render-content="renderContent">
  </m-tree>
</template>

<script setup>
import { ref } from 'vue';

let id = 1000;
const list = ref([
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
])

const renderContent = (h, { data, parentData }) => {
  return h(
    'div',
    {
      class: 'custom-tree__item'
    },
    [
      h(
        'span',
        {
          class: 'custom-tree__label'
        },
        data.label
      ),
      h(
        'div',
        {
          style: {
            color: '#409eff',
            fontSize: '14px'
          }
        },
        [
          h(
            'span',
            {
              style: {
                margin: '0 10px'
              },
              onClick: (e) => append(data,e)
            },
            '追加'
          ),
          h(
            'span',
            {
              onClick: (e) => remove(data,parentData,e)
            },
            '删除'
          )
        ]
      )
    ]
  )
}

const append = (data,e) => {
  e.stopPropagation()
  let children = data.children || []
  children.push({
    id: id++,
    label: 'children-node'
  })
  list.value = [...list.value]
}

const remove = (data,parentData,e) => {
  e.stopPropagation()
  const index = parentData.indexOf(data)
  if (index > -1) {
    parentData.splice(index, 1)
  }
}
</script>

<style>
.custom-tree__item{
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>