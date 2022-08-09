<template>
  <ul class="m-pager" @click="onPagerClick">
    <li
      :class="{ active: currentPage === 1 }"
      class="number">
      1
    </li>
    <li
      class="m-icon-more"
      v-if="showPrevMore"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'icon-elipsis'">
      <i class="iconfont" :class="quickprevIconClass"></i>
    </li>
    <li 
      class="number" 
      v-for="pager in pagers" 
      :key="pager"
      :class="{active: currentPage === pager}">
      {{pager}}
    </li>
    <li
      class="m-icon-more"
      v-if="showNextMore"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'icon-elipsis'">
      <i class="iconfont" :class="quicknextIconClass"></i>
    </li>
    <li
      :class="{ active: currentPage === allPages }"
      class="number"
      v-if="allPages > 1">
      {{ allPages }}
    </li>
  </ul>
</template>

<script setup>
import { computed, reactive, ref,toRefs,watch } from 'vue';
const emits = defineEmits(['change'])
const props = defineProps({
  currentPage: Number,
  disabled: Boolean,
  allPages: Number
})

const state = reactive({
  showPrevMore: false,
  showNextMore: false,
  quickprevIconClass: 'icon-elipsis',
  quicknextIconClass: 'icon-elipsis'
})

watch(()=>state.showPrevMore,(val)=> {
  if (!val) state.quickprevIconClass = 'icon-elipsis';
})

watch(()=>state.showNextMore,(val)=> {
  if (!val) state.quicknextIconClass = 'icon-elipsis';
})

// 1.首页尾页需要始终显示出来（如果只有1页则不显示尾页）
// 2.除首尾页之外，当前页码左右最多只显示2页（共5页） 
// 3.其他页码折叠起来，用更多按钮代替

const pagers = computed(() => {
  const allPages = props.allPages
  const halfAllPages = (allPages - 1) / 2;
  const currentPage = props.currentPage;

  let showPrevMore = false;
  let showNextMore = false;
  
  // currentPage超过5后开始显示前面的更多
  if (allPages> 7 && currentPage >= 5 ) {
    showPrevMore = true;
  }
  if (allPages> 7 && allPages - currentPage >= 5) {
    showNextMore = true;
  }

  const array = [];
  if(showPrevMore  && !showNextMore) {
    // 只有左侧更多
    const startPage = allPages - 5;
    for (let i = startPage; i < allPages; i++) {
      array.push(i);
    }
  } else if(!showPrevMore  && showNextMore) {
    // 只有右侧更多 (超过7条后显示省略号)
    for (let i = 2; i < 7; i++) {
      array.push(i);
    }
  } else if(showPrevMore  && showNextMore) {
    // 左侧和右侧都有更多
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      array.push(i)
    }
  } else {
    for (let i = 2; i < allPages; i++) {
      array.push(i)
    }
  }

  state.showPrevMore = showPrevMore;
  state.showNextMore = showNextMore;
  
  return array;
})

const onMouseenter = (direction) => {
  if(direction === 'left') {
    state.quickprevIconClass = 'icon-arrow-double-left'
  } else {
    state.quicknextIconClass = 'icon-arrow-double-right'
  }
}

const onPagerClick = (event) => {
  const allPages = props.allPages
  const target = event.target;
  
  if (target.tagName === 'UL' || props.disabled) {
    return;
  }
  let newPage = Number(target.textContent);
  const currentPage = props.currentPage;

  if(target.className.indexOf('iconfont') > -1) {
    if(target.className.indexOf('icon-arrow-double-left') > -1) {
      newPage = currentPage - 5;
    }
    if(target.className.indexOf('icon-arrow-double-right') > -1) {
      newPage = currentPage + 5;
    }
  }

  // 临界值处理
  if (!isNaN(newPage)) {
    if (newPage < 1) {
      newPage = 1;
    }

    if (newPage > allPages) {
      newPage = allPages;
    }
  }

  if (newPage !== currentPage) {
    emits('change', newPage);
  }
}

const { 
  showPrevMore,
  showNextMore,
  quickprevIconClass,
  quicknextIconClass
} = toRefs(state);


</script>

<style lang="scss" scoped>
@import '../../../styles/components/pagination.scss';
</style>
