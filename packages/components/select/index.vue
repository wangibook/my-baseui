<template>
  <div class="m-select" v-inside>
    <div>
      <input type="text" :placeholder="placeholder" :value="selectVal" @input="input">
      <i :class="iconClass"  :style="[{ transform: rotate }]"></i>
    </div>
    <div class="m-select-option" v-if="isShow">
      <ul>
        <li 
          v-for="(item, index) in options"
          :key="index"
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
})

const selectVal = ref('');
const isShow = ref(false);
const rotate = ref("rotate(0deg)");

const iconClass = computed(() => {
  return ["select-icon iconfont icon-arrow-down"];
})

const vInside = {
  // el 是select中input区域
  beforeMount(el) {
    let handler = (e) => {
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
  selectVal.value = item.label
  isShow.value = false
  emit("update:modelValue", item.label);
  emit("change", { lable: item.label, value: item.value, index: index });
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/select.scss';
</style>
