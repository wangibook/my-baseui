<template>
  <div class="m-date-picker-rel" v-inside>
    <div class="m-date-picker" :class="selectInputClass">
      <span class="m-input__prefix">
        <i class="iconfont icon-calendar"></i>
      </span>
      <input 
        type="text" 
        class="m-input__inner" 
        :value="inputText" 
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
      >
      <span class="m-input__suffix" @click="handleClear">
        <i class="iconfont icon-error"></i>
      </span>
    </div>
    <transition name="slide-fade">
      <div 
        class="m-date-panel" 
        :class="{
          'is-range':isRange,
          'is-confirm': confirm
        }" 
        v-if="isShow" 
        @click.stop
      >
        <div class="m-date-panel-body">
          <date-spinner
            ref="panelStart"
            v-model="startCurrent"
            :selectedStart="selectedStart"
            name="left"
            :unlinkPanels="unlinkPanels"
            @item-click="(item) => handlePickerClick('start',item)"
            @linkagePanel="(obj) => linkagePanel(panelEnd,obj)">
          </date-spinner>
          <date-spinner
            class="end-picker-date"
            ref="panelEnd"
            v-if="isRange" 
            v-model="endCurrent"
            :selectedEnd="selectedEnd"
            name="right"
            :unlinkPanels="unlinkPanels"
            @item-click="(item) => handlePickerClick('end',item)"
            @linkagePanel="(obj) => linkagePanel(panelStart,obj)">
          </date-spinner>
        </div>
        <div class="m-date-panel__footer" v-if="confirm">
          <button class="m-date-panel__btn" @click="handleClear">清空</button>
          <button class="m-date-panel__btn btn__confirm" @click="handleConfirm">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mDatePicker"
};
</script>

<script setup>
import { reactive, ref, computed, toRefs, watch,nextTick, watchEffect } from 'vue';
import dateSpinner from './date-spinner.vue';
import { formatOutputDate,deepCopy,parseDate } from '~/utils/index';

const emits = defineEmits(['on-change','on-confirm','on-clear'])
const props = defineProps({
  modelValue: String | Array,
  placeholder: {
    type: String,
    default: '请选择'
  },
  // 类型
  type: {
    type: String,
    default: 'date',
    validator: (val) => ['date', 'daterange', 'datetime', 'datetimerange'].includes(val),
  },
  // 展示的时间格式
  format: {
    type: String,
    default: 'yyyy-MM-dd',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  confirm: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  separator: {
    type: String,
    default: ' - ',
  },
  // 面板是否支持联动
  unlinkPanels: {
    type: Boolean,
    default: false,
  },
})

const isShow = ref(false);
const panelStart = ref(null);
const panelEnd = ref(null);
const state = reactive({
  inputText: '',
  startValue: null,  // 选中的开始值
  endValue: null,
  startCurrent: '',
  endCurrent: '',
  selectedStart: null,  // 选择的开始日期
  selectedEnd: null
})

const selectInputClass = computed(() => {
  return {
    'm-date-picker-disabled': props.disabled
  }
})

// 是否选择日期范围
const isRange = computed(() => {
  return props.type === 'daterange' || props.type === 'datetimerange';
})

// 监听传入的value变化
watch(() => props.modelValue,(newVal,oldVal) => {
  nextTick(() => {
    updateCurrentValue(newVal)
  })
},{immediate:true,deep:true})

const vInside = {
  beforeMount(el) {
    el.handler = (e) => {
      if(props.disabled || props.readonly) return;
      if(el.contains(e.target)) {
        isShow.value = true
      } else {
        isShow.value = false
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

// 计算inputText的值
const calcInputText = () => {
  const startText = formatOutputDate(state.startValue, props.format);
  if (!isRange.value) {
    state.inputText = startText;
    return;
  }
  // 范围选择时，如果有一个没选就return
  if(isRange.value) {
    if(!state.startValue || !state.endValue) return
  }
  const endText = formatOutputDate(state.endValue, props.format);
  state.inputText = !startText && !endText ? '' : `${startText}${props.separator}${endText}`;
}

// 更新startValue和endValue值
const updateCurrentValue = (newVal) => {  
  // 单个选择
  const handleSingle = () => {
    state.startValue = newVal;
    state.selectedStart = newVal;
    state.startCurrent = newVal
  }
  // 范围选择
  const handleRange = () => {
    if(newVal.length == 0) {
      state.startValue = null
      state.endValue = null
      state.selectedStart = null
      state.selectedEnd = null
      defaultNowVal()
    } else {
      state.startValue = getValue(newVal[0]);
      state.endValue = getValue(newVal[1]);
      state.selectedStart = getValue(newVal[0]);
      state.selectedEnd = getValue(newVal[1]);

      state.startCurrent = getValue(newVal[0]);
      const sVal = parseDate(state.startCurrent);
      const endV = new Date(sVal.year, sVal.month + 1, sVal.date);
      state.endCurrent = getValue(endV);
    }
  }

  if(isRange.value) {
    // 范围选择
    handleRange()
  } else {
    // 单个选择
    handleSingle()
  }

  calcInputText()
}

const defaultNowVal = () => {
  const now = new Date(Date.now())
  const sVal = parseDate(now)
  const nowDate = getValue(now);    // 当前日期

  state.startCurrent = nowDate;
  const endV = new Date(sVal.year, sVal.month + 1, sVal.date);
  state.endCurrent = getValue(endV);
}

const handlePickerClick = (type,arg) => {
  nextTick(() => {
    pickerClick(type,arg)
  })
}

const pickerClick = (type,arg) => {
  const t = new Date(arg.Y, arg.M, arg.D);
  const startVal = getValue(t);
  let emitVal = null;
  // 点击开始日期项
  if(type == 'start') {
    if(isRange.value) {
      state.selectedStart = startVal;
      emitVal = [startVal, null];
    } else {
      state.selectedStart = startVal;
      emitVal = startVal;
    }
  }

  // 点击结束日期项
  if(type === 'end') {
    const t2 = new Date(arg.Y, arg.M, arg.D);
    const start = deepCopy(state.startValue);
    const end = getValue(t2)
    state.selectedEnd = end;
    emitVal = [start, end];
  }
  updateCurrentValue(emitVal);
  emits('on-change',emitVal)
}

// 数据面板联动（切换左侧面板，右侧也会跟着联动，反之亦然）
const linkagePanel = (ref,obj) => {
  const type = obj.type;
  nextTick(() => {
    ref.togglePanelData(type);
  })
}

// 清空
const handleClear = (event) => {
  event.stopPropagation();
  if(props.disabled) return;
  isShow.value = false;
  state.inputText = '';
  state.startValue = null;
  state.endValue = null;
  defaultNowVal()
  state.selectedStart = null;
  state.selectedEnd = null;
}

// 确定
const handleConfirm = () => {
  isShow.value = false;
  const emitVal = getEmitValue();
  emits('on-confirm',emitVal)
}

// 触发emit事件应该派发的值
const getEmitValue = () => {
  return isRange.value ? [getValue(state.startValue),getValue(state.endValue)] : getValue(state.startValue);
}

const getValue = (val) => {
  return formatOutputDate(val, 'yyyy-MM-dd');
}

const { inputText,startValue,endValue,selectedStart,selectedEnd,startCurrent,endCurrent } = toRefs(state);

</script>

<style lang="scss" scoped>
@import '../../../styles/components/date-picker.scss';
// 动画
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
