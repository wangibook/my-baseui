<template>
  <div class="m-date-picker-rel" v-inside>
    <div 
      class="m-date-picker" 
      :class="selectInputClass"
      @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false">
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
      <span class="m-input__suffix" @click="handleClear" v-if="showClose">
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
        <div class="m-date-panel-sidebar" v-if="shortcuts.length">
          <div 
            class="m-date-panel-shortcut" 
            v-for="(item,index) in shortcuts" 
            :key="index" 
            @click="handleShortcutClick(item)">
            {{item.text}}
          </div>
        </div>
        <div class="m-date-panel-body" :style="bodyStyle">
          <date-spinner
            ref="panelStart"
            v-model="startCurrent"
            :selectedStart="selectedStart"
            :selectedEnd="selectedEnd"
            name="left"
            :unlinkPanels="unlinkPanels"
            :isRange="isRange"
            :rangeStep="rangeStep"
            @item-click="(item) => handlePickerClick('start',item)"
            @linkagePanel="(obj) => linkagePanel(panelEnd,obj)">
          </date-spinner>
          <date-spinner
            class="end-picker-date"
            ref="panelEnd"
            v-if="isRange" 
            v-model="endCurrent"
            :selectedStart="selectedStart"
            :selectedEnd="selectedEnd"
            name="right"
            :unlinkPanels="unlinkPanels"
            :isRange="isRange"
            :rangeStep="rangeStep"
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
import { formatOutputDate,deepCopy,parseDate,getTime } from '~/utils/index';

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
    validator: (val) => ['date', 'daterange'].includes(val),
  },
  // 展示的时间格式
  format: {
    type: String,
    default: 'yyyy-MM-dd',
  },
  clearable: {
    type: Boolean,
    default: true,
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
  shortcuts: {
    type: Array,
    default: () => []
  }
})

const inputHovering = ref(false);
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
  selectedEnd: null,
  rangeStep: 'none',  // 范围选择时，当前选择所处的步骤，'none'未开始, 'start'已开始, 'end'完成
})

const selectInputClass = computed(() => {
  return {
    'm-date-picker-disabled': props.disabled
  }
})

const showClose = computed(() => {
  return props.clearable && state.inputText && inputHovering.value
})

// 是否选择日期范围
const isRange = computed(() => {
  return props.type === 'daterange'
})

const bodyStyle = computed(() => {
  return {
    'marginLeft': props.shortcuts.length ? '100px' : 0
  }
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
  // console.log('newVal',newVal);
  // 单个选择
  const handleSingle = () => {
    state.startValue = newVal;
    state.selectedStart = newVal;
    state.startCurrent = newVal;
  }
  // 范围选择
  const handleRange = () => {
    if(!newVal) {
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
  let emitVal = null;

  // 如果是非范围选择
  if(!isRange.value) {
    const startVal = getValue(t);
    state.selectedStart = startVal;
    emitVal = startVal;
    noConfirmClear()
  }
  // 如果是范围选择
  if(isRange.value) {
    if(state.rangeStep === 'none' || state.rangeStep === 'end') {
      state.rangeStep = 'start';
      const startVal = getValue(t);
      state.selectedStart = startVal;
      state.selectedEnd = '';
      emitVal = [startVal];
    } else {
      state.rangeStep = 'end';
      const t1 = getTime(t);
      const t2 = getTime(state.selectedStart);
      const t1Format = getValue(Math.min(t1, t2))
      const t2Format = getValue(Math.max(t1, t2))
      state.startValue = t1Format;
      state.endValue = t2Format;
      state.selectedStart = t1Format;
      state.selectedEnd = t2Format;
      emitVal = [t1Format, t2Format];
      noConfirmClear()
    }
  }
  updateCurrentValue(emitVal);
  emits('on-change',emitVal);
}

// 数据面板联动（切换左侧面板，右侧也会跟着联动，反之亦然）
const linkagePanel = (ref,obj) => {
  const type = obj.type;
  nextTick(() => {
    ref && ref.togglePanelData(type);
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
  emits('on-clear')
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

const noConfirmClear = () => {
  if(!props.confirm) {
    isShow.value = false;
  }
}

const handleShortcutClick = (item) => {
  if(!item.value) return;
  let val = null;
  if(isRange.value) {
    const s1 = item.value()[0]
    const s2 = item.value()[1]
    val = [s1,s2]
  } else {
    val = getValue(item.value())
  }
  updateCurrentValue(val)
  noConfirmClear()
}

const { inputText,startValue,endValue,selectedStart,selectedEnd,startCurrent,endCurrent,rangeStep } = toRefs(state);

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
