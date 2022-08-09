<template>
  <div 
    class="m-pagination" 
    :class="{
      'is-background':background,
      'is-small': !!size
    }"
  >
    <span class="m-pagination__total" v-if="showTotal">
      共 {{total}} 条
    </span>
    <span class="m-pagination__sizes" v-if="showSizer">
      <m-select class="m-pagination-select" v-model="selVal" @change="handleSizeChange">
        <m-option
          v-for="(item,index) in pageSizeOpts"
          :key="index"
          :label="item + '条/页' "
          :value="item">
        </m-option>
      </m-select>
    </span>
    <button class="btn-prev" :class="prevClasses" @click="handlePrev">
      <i class="iconfont icon-arrow-left-bold"></i>
    </button>
    <Pager 
      :currentPage="currentPage" 
      :allPages="allPages" 
      @change="handleCurrentChange" 
    />
    <button class="btn-next" :class="nextClasses" @click="handleNext">
      <i class="iconfont icon-arrow-right-bold"></i>
    </button>
    <span class="m-pagination__jump" v-if="showElevator">
      前往 <input type="text" :value="currentPage" @keyup.enter="handleKeyup"> 页
    </span>
  </div>
</template>

<script>
export default {
  name: "mPagination"
};
</script>

<script setup>
import { computed, ref,watch } from 'vue';
import Pager from './pager.vue';
import { oneOf,isValueNumber } from '~/utils/index';

const emits = defineEmits(['current-change','size-change'])
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  background: {
    type: Boolean,
    default: false
  },
  pageSizeOpts: {
    type: Array,
    default () {
      return [10, 20, 30, 40];
    }
  },
  size: {
    validator (value) {
      return oneOf(value, ['small']);
    }
  },
  showTotal: {
    type: Boolean,
    default: false
  },
  showSizer: {
    type: Boolean,
    default: false
  },
  showElevator: {
    type: Boolean,
    default: false
  },
})

const currentPage = ref(props.currentPage);
const currentPageSize = ref(props.pageSize);
const selVal = ref(props.pageSize + '条/页')

const options = [
  { value: 'value1',label: 'Option1'},
  { value: 'value2',label: 'Option2'},
  { value: 'value3',label: 'Option3'},
  { value: 'value4',label: 'Option4'},
  { value: 'value5',label: 'Option5'}
]

// 总页数
const allPages = computed(() => {
  const allPage = Math.ceil(props.total / currentPageSize.value);
  return (allPage === 0) ? 1 : allPage;
})

const prevClasses = computed(() => {
  return {
    'is-disabled': currentPage.value === 1
  }
})

const nextClasses = computed(() => {
  return {
    'is-disabled': currentPage.value === allPages.value
  }
})

watch(()=> props.total,(val) => {
  let maxPage = Math.ceil(val / currentPageSize.value);
  console.log(maxPage);
  if (maxPage < currentPage.value) {
    currentPage.value = (maxPage === 0 ? 1 : maxPage);
  }
})

watch(allPages,(val) => {
  // 切换size时，如果当前页 > 总页数
  if (currentPage.value > val) {
    currentPage.value = val
  }
})

const handleCurrentChange = (val) => {
  emitChange(val)
}

const handlePrev = () => {
  if (currentPage.value <= 1) {
    return false;
  }
  emitChange(currentPage.value - 1)
}

const handleNext = () => {
  if (currentPage.value >= allPages.value) {
    return false;
  }
  emitChange(currentPage.value + 1)
}

const emitChange = (page) => {
  if(currentPage.value != page) {
    currentPage.value = page
    emits('current-change',page)
  }
}

// 跳转方法
const handleKeyup = ({ keyCode,target }) => {
  let val = Number(target.value);
  if (keyCode !== 13) return;
  if(val == currentPage.value) return;
  let page = 0;
  if(isValueNumber(val)) {
    if (val > allPages.value) {
      page = allPages.value;
    } else {
      page = val;
    }
  } else {
    // 输入汉字，字母，小数，小于1的一律赋为 1
    page = 1;
  }
  emits('size-change', page);
  emitChange(page)
  target.value = page;
}

const handleSizeChange = () => {
  currentPageSize.value = selVal.value
  emits('size-change',selVal.value)
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/pagination.scss';
</style>