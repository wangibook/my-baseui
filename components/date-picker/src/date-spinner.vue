<template>
  <div class="m-date-panel__wrap">

    <div class="m-date-picker__header">
      <template v-if="unlinkPanels || name === 'left' || !isRange ">
        <m-button 
          class="m-date-picker__btn" 
          type="text"
          leftIcon="icon-arrow-double-left"
          @click="handleToggleButton('prevYear')">
        </m-button>
        <m-button 
          class="m-date-picker__btn" 
          type="text" 
          leftIcon="icon-arrow-left-bold"
          @click="handleToggleButton('prevMonth')">
        </m-button>
      </template>
      <span class="m-date-picker__header-label">{{titleText}}</span>
      <template v-if="unlinkPanels || name === 'right' || !isRange ">
        <m-button 
          class="m-date-picker__btn" 
          type="text"
          leftIcon="icon-arrow-right-bold"
          @click="handleToggleButton('nextMonth')">
        </m-button>
        <m-button 
          class="m-date-picker__btn" 
          type="text" 
          leftIcon="icon-arrow-double-right"
          @click="handleToggleButton('nextYear')">
        </m-button>
      </template>
    </div>
    <div class="m-picker-panel__content">
      <table>
        <thead>
          <tr>
            <th class="m-picker-panel__th" v-for="(item, index) in titleList" :key="index">
              {{item}}
            </th>
          </tr>
        </thead>
        <tbody v-if="dataList.length">
          <tr v-for="(trItem, trIndex) in 6" :key="trIndex">
            <td 
              class="m-picker-panel__td"
              v-for="(tdItem, tdIndex) in 7" 
              :key="tdIndex"
              :class="tdClasss(dataList[trIndex * 7 + tdIndex])"
              @click="handleItemClick(dataList[trIndex * 7 + tdIndex])"
              @mouseover="handleItemMouseover(dataList[trIndex * 7 + tdIndex], dataList)"
            >  
              <span class="m-picker-panel__cell">
                {{dataList[trIndex * 7 + tdIndex].D}}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, toRefs, watch,nextTick } from "vue";
import { parseDate,checkToday,getTime,formatOutputDate,checkSelectDay } from '~/utils/index';

const emits = defineEmits(['update:modelValue','item-click','linkagePanel']);
const props = defineProps({
  modelValue: String,
  selectedStart: String,
  selectedEnd: String,
  unlinkPanels: Boolean,
  name: String,
  isRange: Boolean,
  rangeStep: String
})

const state = reactive({
  titleList: Object.freeze(['日', '一', '二', '三', '四', '五', '六']),
  dataList: [],
  pickerHoverItem:{}
})

watch(() =>props.modelValue,(newVal) => {
  nextTick(() => {
    state.dataList = generatePaneData(newVal)
  })
},{immediate:true})

const titleText = computed(() => {
  const { year, month } = parseDate(props.modelValue);
  return `${year}年${month + 1}月`;
})

const tdClasss = computed(() => {
  const selectedStartParsed = parseDate(props.selectedStart);
  const selectedEndParsed = parseDate(props.selectedEnd);
  return (item) => {
    const isSelectedStart = props.selectedStart && checkSelectDay(selectedStartParsed,item)
    const isSelectedEnd = props.selectedEnd && checkSelectDay(selectedEndParsed,item)

    return {
      'is-today': item.isToday,
      'other-month': !item.isCurMonth,
      'is-selected-start': isSelectedStart && item.isCurMonth,
      'is-selected-end': isSelectedEnd && item.isCurMonth,
      'in-range': (props.isRange && isSelectedStart && item.isCurMonth) || isRope(item)
    }
  }
})

const isRope = (item) => {
  if (!item.isCurMonth) return false;
  const cur = getTime(item.Y, item.M, item.D);
  const start = getTime(props.selectedStart);
  const end = getTime(props.selectedEnd);
  const hoverItem = state.pickerHoverItem;
 
  if(props.rangeStep == 'start') {
    if (!hoverItem) return false;
    const min = Math.min(start, hoverItem.timeStamp);
    const max = Math.max(start, hoverItem.timeStamp);
    return cur >= min && cur <= max;
  }
  return cur >= start && cur <= end; 
}

// 生成面板日期数据
const generatePaneData = (newVal) => {
  // 解析当前月第一天和最后一天的日期对象
  const timeParsed = parseDate(newVal);
  const first = new Date(timeParsed.year, timeParsed.month, 1);
  const last = new Date(timeParsed.year, timeParsed.month + 1, 0);
  // 解析第一天和最后一天对应的分解对象
  const firstParsed = parseDate(first);
  const lastParsed = parseDate(last);

  // 表格是一个6行七列共计42个单元格的布局形式。在这42个单元格中，包含上月剩余的天数 + 当前月份的全部天数 +下月的开始天数。
  // 当前月的第一天是周几，则表格要显示的上月剩余的天数就有几天
  let dayList = [];
  // 前置的上一月的日期
  const prevParsed = parseDate(new Date(timeParsed.year, timeParsed.month, 0));
  for (let i = 0; i < firstParsed.day; i++) {
    const Y = prevParsed.year;
    const M = prevParsed.month;
    const D = prevParsed.date - (firstParsed.day - 1 - i);
    const isToday = checkToday(Y, M, D);
    const timeStamp = getTime(Y, M, D);
    dayList.push({
      Y, M, D, isToday, timeStamp, isPrevMonth: true,
    });
  }
  // 当前月的所有日期
  for (let i = 1; i <= lastParsed.date; i++) {
    const Y = timeParsed.year;
    const M = timeParsed.month;
    const D = i;
    const isToday = checkToday(Y, M, D);
    const timeStamp = getTime(Y, M, D);
    dayList.push({
      Y, M, D, isToday, timeStamp,isCurMonth: true,
    });
  }
  // 后置的下一月的日期
  const nextParese = parseDate(new Date(timeParsed.year, timeParsed.month + 1, 1));
  const len = 42 - dayList.length;
  for (let i = 1; i <= len; i++) {
    const Y = nextParese.year;
    const M = nextParese.month;
    const D = i;
    const isToday = checkToday(Y, M, D);
    const timeStamp = getTime(Y, M, D);
    dayList.push({
      Y, M, D, isToday, timeStamp, isNextMonth: true,
    });
  }
  return dayList;
}

// 点击选项
const handleItemClick = (item) => {
  emits('item-click',item)
}

// 切换面板日期数据
const handleToggleButton = (type) => {
  togglePanelData(type,true)
}

const togglePanelData = (type, action) => {
  const { year, month } = parseDate(props.modelValue);
  const targetMaps = {
    prevYear: { value: new Date(year - 1, month, 1),ref: 'panelEnd' },
    prevMonth: { value: new Date(year, month - 1, 1),ref: 'panelEnd' },
    nextMonth: { value: new Date(year, month + 1, 1),ref: 'panelStart' },
    nextYear: { value: new Date(year + 1, month, 1),ref: 'panelStart'},
  }
  let val = formatOutputDate(targetMaps[type].value,'yyyy-MM-dd')
  emits('update:modelValue', val);

  if (!action) return;
  if (!props.unlinkPanels) {
    emits('linkagePanel', {
      ref: targetMaps[type].ref,
      type
    })
  }
}

// 鼠标划过日期面板上的日期时
// 若划过内容超出本月范畴，则自动取本月第一天或者最后一天
const handleItemMouseover = (item,dataList) => {
  const curData = dataList.filter((e) => e.isCurMonth);
  if (item.isNextMonth) {
    state.pickerHoverItem = curData[curData.length - 1];
  } else if (item.isPrevMonth) {
    state.pickerHoverItem = curData[0];
  } else {
    state.pickerHoverItem = item;
  }
}

const { titleList,dataList } = toRefs(state);
defineExpose({
  togglePanelData
})

</script>

<style lang="scss" scoped>
@import '../../../styles/components/date-picker.scss';

table{
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  line-height: 32px;
  tr{
    padding: 4px 0;
  }
  th{
    padding: 5px;
    color: #606266;
    font-weight: 400;
    border-bottom: 1px solid #ebeef5;
  }
  td{
    border-top: none;
    border-bottom: none;
    padding: 4px 6px;
    text-align: center;
    max-width: 250px;
    box-sizing: border-box;
    white-space: pre-wrap;
    cursor: pointer;
    &:hover{
      color: #409eff;
    }
    &.is-today{
      color: #409eff;
      font-weight: 700;
    }
    &.other-month{
      color: #c0c4cc;
    }
    &.is-selected-start,
    &.is-selected-end{
      position: relative;
      .m-picker-panel__cell{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        align-items: center;
        width: 24px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        border-radius: 50%;
        color: #fff;
        background-color: #409eff;
      }
    }
    &.in-range{
      background-color: #f2f6fc;
    }
  }
}
</style>
