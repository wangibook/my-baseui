<template>
  <div class="m-tabs" :class="positionClass">
    <div class="tabs-content" v-if="tabPosition =='bottom' ">
      <render-content />
    </div>
    <!-- nav -->
    <TabNav 
      :panes="panes"
      :currentName="currentName"
      :type="type"
      :tabPosition="tabPosition"
      :activeColor="activeColor" 
      @onTabClick="handleTabClick"
    />
    <!-- 内容 -->
    <div class="tabs-content" v-if="tabPosition !='bottom' ">
      <render-content />
    </div>
  </div>
</template>

<script>
export default {
  name: "mTabs"
};
</script>

<script setup>
import {ref,reactive,provide,onMounted,useSlots,h, computed} from 'vue';
import TabNav from './tab-nav.vue';

const emits = defineEmits(["update:modelValue","tab-click"])
const props = defineProps({
  // 当前选择的tab
  modelValue: {
    type: String,
    default: '',
  },
  //样式  card或者line
  type: {
    type: String,
    default: 'line',
  },
  //选中时字体和指示器的颜色
  activeColor: {
    type: String,
    default: '',
  },
  tabPosition: {
    type: String,
    default: 'top'
  }
})

const panes = ref([]);
const currentName = ref(props.modelValue || '0');
const slots = useSlots()

const positionClass = computed(() => {
  return {
    [`m-tabs-${props.tabPosition}`]: props.tabPosition
  }
})

const setCurrentName = (tabName) => {
  if (currentName.value === tabName) return
  currentName.value = tabName
}

const handleTabClick = (tabName,$event) => {
  setCurrentName(tabName)
  emits("tab-click",tabName,$event)
}

// 渲染内容主体
const renderContent = () => {
  return slots.default().find(item => {
    if(currentName.value === '') {
      return true
    }
    return item.props?.name === currentName.value
  })
}

// 更新Pane实例列表，用于更新tabNav
const updatePaneInstances = () => {
  //如果插槽未插入任何数据，则panes重置并return
  if (!slots.default) {
    panes.value = [];
    return;
  }
  // 获取所有的子元素（组件）
  panes.value = slots.default()
}

onMounted(() => {
  updatePaneInstances();
});

</script>

<style lang="scss" scoped>
.m-tabs-left,
.m-tabs-right{
  overflow: hidden;
}
.tabs-content{
  overflow: hidden;
  position: relative;
}
</style>
