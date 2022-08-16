<template>
  <ul class="m-tree-node" :style="nodeStyle">
    <div 
      :class="[
        'm-tree-node__content'
      ]" 
      @click.stop="handleToggle(items)">
      <span :class="expandIconClass">
        <i class="iconfont" :class="iconClass"></i>
      </span>
      <m-checkbox 
        class="m-tree-node-checkbox"
        v-if="showCheckbox" 
        v-model="items.isChecked"
        :indeterminate="items.indeterminate"
        :disabled="items.disabled"
        @change="handleCheckChange">
      </m-checkbox>
      <!-- <span>{{items.label}}</span> -->
      <nodeContent 
        :data="items"
        :render-content="renderContent" 
        :parent-data="parentData" 
      />
    </div>
    <transition>
      <div class="m-tree-ul-box" v-if="isShow" v-show="items.isOpen">
        <tree-node 
          v-for="(it,j) in items.children" 
          :key="j" 
          :items="it"
          :label="label"
          :children="children"
          :show-checkbox="showCheckbox"
          :index="index+1"
          :node-key="nodeKey"
          :default-expanded-keys="defaultExpandedKeys"
          :default-checked-keys="defaultCheckedKeys"
          :default-expand-all="defaultExpandAll"
          :render-content="renderContent"
          :parent-data="items.children">
        </tree-node>
      </div>
    </transition>
  </ul>
</template>

<script>
export default {
  name: "mTreeNode"
};
</script>

<script setup>
import { ref, computed, onMounted, watch, inject,nextTick } from "vue";
import nodeContent from './node-content.vue';

const props = defineProps({
  items:{
    type: Object,
    default:()=>{}
  },
  label: String,
  children: String,
  showCheckbox: Boolean,
  index: Number,
  nodeKey: String,
  // 默认展开项
  defaultExpandedKeys: Array,
  // 默认选中项
  defaultCheckedKeys: Array,
  // 默认展开所有
  defaultExpandAll: Boolean,
  renderContent: Function,
  parentData: Array
})

const checkboxChange = inject('checkboxChange')
const toggleChange = inject('toggle-change')
const checkedChange = inject('checked-change')

onMounted(() => {
  _initDefault()
})

watch(()=>props.defaultCheckedKeys,(val) => {
  if(val) {
    _initDefault()
  }
})

const isShow = computed(() => {
  return props.items.children && props.items.children.length
})

const nodeStyle = computed(() => {
  return {
    'padding-left':props.index * 15 + 'px'
  }
})

const expandIconClass = computed(() => {
  return [
    'm-tree-node__expand-icon',
    {
      expanded: props.items.isOpen
    }
  ]
})

const iconClass = computed(() => {
  return {
    'icon-arrow-right-filling': props.items.children && props.items.children.length
  }
})

const handleToggle = (item) => {
  item.isOpen = !item.isOpen
  // 展开/收起子节点时触发
  toggleChange(item)
}

const handleCheckChange = (val) => {
  updateChildChecked(props.items,val)   // 设置子级
  updateParentChecked()   // 设置父级

  checkedChange(props.items)
}

// 选中一个节点时，递归地遍历下面所属的所有子节点
const updateChildChecked = (item,val) => {
  item.isChecked = val
  if(item.children && item.children.length) {
    item.children.forEach(el => {
      updateChildChecked(el,val)
    })
  }
}

const updateParentChecked = () => {
  nextTick(() => {
    checkboxChange && checkboxChange()
  })
}

// 初始化默认的展开项和选中项
const _initDefault = () => {
  let { items,nodeKey,defaultExpandedKeys,defaultCheckedKeys,defaultExpandAll } = props
  const nodeKeyValue = items[nodeKey];
  const isExpand = defaultExpandedKeys.includes(nodeKeyValue) || defaultExpandAll;
  const isChecked = defaultCheckedKeys.includes(nodeKeyValue);
  items.isOpen = isExpand
  items.isChecked = isChecked

  nextTick(() => {
    // 设置默认节点，需要默认勾选对应的所有子节点
    if (isChecked) {
      updateChildChecked(props.items, isChecked);
    }
    updateParentChecked();
  })
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/tree.scss';
</style>
