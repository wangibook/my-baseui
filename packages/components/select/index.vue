<template>
  <div class="m-select" v-inside>
    <div :class="selectInputClass" @mouseenter="inputHovering = true" @mouseleave="inputHovering = false">
      <div>
        <input 
          type="text" 
          :placeholder="placeholder" 
          :value="selectVal" 
          @input="input" 
          :disabled="disabled"
          >
        <i class="iconfont icon-arrow-down select-icon" :style="[{ transform: rotate }]" v-show="!showClose"></i>
        <i class="iconfont icon-close select-icon" v-if="showClose"  @click="handleClearClick"></i>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="m-select-option" v-if="isShow">
        <ul>
          <li 
            v-for="(item, index) in options"
            :key="index"
            class="m-option-item"
            :class="{
              'm-option-disabled':item.disabled,
              'm-option-active':activeIndex == index || item.selected
            }"
            @click="selChange(item, index)">
            {{item.label}}
            <i class="iconfont icon-select-bold" v-if="multiple && item.selected"></i>
          </li>
        </ul>
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
import { computed, ref } from 'vue'

const emit = defineEmits(["update:modelValue","change"]);
const props = defineProps({
  modelValue: String | Array,
  placeholder: {
    type: String,
    default: '请选择'
  },
  options: {
    type: Array,
    default: () => []
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
  }
})

props.options.forEach((item, index) => {
  if (!props.multiple) {
    item.selected = false;
  } else {
    props.modelValue.forEach((item1, index1) => {
      if (item.value == item1) {
        item.selected = true;
      }
    })
  }
});


const selectVal = ref(
  props.multiple
    ? props.modelValue
    : props.modelValue != ""
    ? props.options.filter((item) => {
        return item.value == props.modelValue
      })[0].label
    : ""
);
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
    let handler = (e) => {
      if(props.disabled) return
  
      if(el.contains(e.target) && e.target.className.indexOf('m-option-item') == -1) {
        isShow.value = true
        rotate.value = "rotate(180deg)"
      } else {
        isShow.value = false
        rotate.value = "rotate(0deg)"
      }
    }
    document.addEventListener("click", handler);
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

const handleClearClick = (event) => {
  event.stopPropagation();
  isShow.value = false
  selectVal.value = ''
  activeIndex.value = -1
  emit("update:modelValue", '');
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/select.scss';

</style>
