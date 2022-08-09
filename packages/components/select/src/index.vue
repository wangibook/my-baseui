<template>
  <div class="m-select" v-inside>
    <div 
      class="m-select-input" 
      :class="selectInputClass"
      @mouseenter="inputHovering = true" 
      @mouseleave="inputHovering = false">
      <input
        class="m-select-input__inner"
        type="text" 
        :readonly="!searchable"
        :placeholder="placeholder" 
        :value="selectVal" 
        @input="input" 
        :disabled="disabled"
      >
      <i class="iconfont icon-arrow-down select-icon" :style="[{ transform: rotate }]" v-show="!showClose"></i>
      <i class="iconfont icon-close select-icon" v-if="showClose"  @click="handleClearClick"></i>
    </div>
    <transition name="slide-fade">
      <div class="m-select-option" v-if="isShow">
        <div class="m-select-option-find">
          <ul>
            <li 
              v-for="(item, index) in optionsData"
              :key="index"
              class="m-option-item"
              :class="{
                'm-option-disabled':item.disabled,
                'm-option-active':activeIndex == index || item.selected || selectVal == item.label
              }"
              @click="selChange(item, index)">
              {{item.label}}
              <i class="iconfont icon-select-bold" v-if="multiple && item.selected"></i>
            </li>
            <p class="no-data" v-if="!optionsData.length">无匹配数据</p>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mSelect"
};
</script>

<script setup>
import { computed, onMounted, ref,useSlots, watch } from 'vue'

const emit = defineEmits(["update:modelValue","change"]);
const props = defineProps({
  modelValue: String | Array,
  placeholder: {
    type: String,
    default: '请选择'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()
const selectVal = ref(props.modelValue);
let allData = []
const optionsData = ref([]);
const isShow = ref(false);
const activeIndex = ref(-1);
const rotate = ref("rotate(0deg)");
const inputHovering = ref(false);

const showClose = computed(() => {
  return props.clearable && selectVal.value && inputHovering.value
})

const selectInputClass = computed(() => {
  return {
    'm-select-input-disabled': props.disabled
  }
})

const vInside = {
  // el 是select中input区域
  beforeMount(el) {
    el.handler = (e) => {
      if(props.disabled) return
      if(el.contains(e.target)) {
        onFocus()
        // 选择之后并且没disabled 关闭
        if(e.target.className.indexOf('m-option-item') > -1 && 
          e.target.className.indexOf('m-option-disabled') == -1 &&
          !props.multiple) {
          onBlur()
        }
      } else {
        onBlur()
      }
    }
    if (typeof document !== "undefined") {
      document.addEventListener("click", el.handler);
    }
  },
  unmounted(el) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler);
    }
  }
}

// 选择事件
let labels = [];
let indexs = [];
const selChange = (item,index) => {
  if(item.disabled) return
  // 单选逻辑
  if (!props.multiple) {
    selectVal.value = item.label
    activeIndex.value = index
    emit("update:modelValue", item.value);
    emit("change", { lable: item.label, value: item.value, index: index });
  } else {
    // 多选逻辑
    item.selected = !item.selected;
    if (item.selected) {
      selectVal.value.push(item.label);
      labels.push(item.label);
      indexs.push(index);
    } else {
      selectVal.value.splice(selectVal.value.indexOf(item.label), 1);
      labels.splice(labels.indexOf(item.label), 1);
      indexs.splice(indexs.indexOf(index), 1);
    }
    emit("update:modelValue", selectVal.value);
    emit("change", { lable: labels, value: selectVal.value, index: indexs });
  }
}

const onFocus = () => {
  isShow.value = true
  rotate.value = "rotate(180deg)"
}

const onBlur = () => {
  isShow.value = false;
  rotate.value = "rotate(0deg)";
}

const input = (e) => {
  selectVal.value = e.target.value;

  let filterList = allData.filter((item) => {
    return item.label.indexOf(e.target.value) > -1
  })
  optionsData.value = filterList
};

const handleClearClick = (event) => {
  event.stopPropagation();
  isShow.value = false
  selectVal.value = ''
  activeIndex.value = -1
  emit("update:modelValue", '');
}

const updateSlots = () => {
  if (!slots.default) {
    optionsData.value = [];
    return;
  }
  const data = slots.default()[0].children
  optionsData.value = allData = data.map(item => {
    return item.props
  })
} 

onMounted(() => {
  updateSlots()
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/select.scss';
</style>
