<template>
  <div class="m-select" v-inside>
    <div :class="selectInputClass" @mouseenter="inputHovering = true" @mouseleave="inputHovering = false">
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
    <div class="m-select-option" v-if="isShow">
      <ul>
        <li 
          v-for="(item, index) in options"
          :key="index"
          :class="{'m-option-disabled':item.disabled}"
          @click="selChange(item, index)">
          {{item.label}}
        </li>
      </ul>
    </div>
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
  }
})

const selectVal = ref('');
const isShow = ref(false);
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
      if(el.contains(e.target)) {
        isShow.value = true
        rotate.value = "rotate(180deg)"
      } else {
        isShow.value = false
        rotate.value = "rotate(0deg)"
      }
    }
    document.addEventListener("click", handler);
  }
}

const selChange = (item,index) => {
  if(item.disabled) return
  selectVal.value = item.label
  isShow.value = false
  emit("update:modelValue", item.label);
  emit("change", { lable: item.label, value: item.value, index: index });
}

const handleClearClick = (event) => {
  event.stopPropagation();
  isShow.value = false
  selectVal.value = ''
  emit("update:modelValue", '');
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/select.scss';
</style>
