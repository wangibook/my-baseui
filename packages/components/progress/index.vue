<template>
  <div 
    class="m-progress"
    :class="[
      'm-progress--' + type,
      status ? 'is-' + status : '',
    ]">
    <div class="m-progress-bar" v-if="type === 'line'">
      <div class="m-progress-bar__outer" :style="strokeHeightStyle">
        <div class="m-progress-bar__inner" :style="barStyle">
          <div class="m-progress-bar__innerText" v-if="showText && textInside">{{content}}</div>
        </div>
      </div>
    </div>
    <div class="m-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="47" 
          stroke="#dcdcdc" 
          :stroke-width="relativeStrokeWidth" 
          fill="none" 
        />
        <!-- 内圈圆，用于展示进度 -->
        <circle 
          cx="50" 
          cy="50" 
          r="47" 
          :stroke="circleStroke" 
          :stroke-width="percentage ? relativeStrokeWidth : 0" 
          fill="none" 
          :stroke-dasharray="strokeDasharray" 
          :stroke-dashoffset="strokeDashoffset" 
          :stroke-linecap="strokeLinecap"
          transform="rotate(90,50,50)"
        />
      </svg>
    </div>
    <div class="m-progress__text" v-if="showText && !textInside">
      <slot v-if="!status">{{content}}</slot>
       <i class="iconfont" :class="iconClass" v-else></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "mProgress"
};
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
    required: true,
    validator: val => val >= 0 && val <= 100
  },
  type: {
    type: String,
    default: 'line',
    validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1
  },
  showText: {
    type: Boolean,
    default: true
  },
  textInside: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    validator: val => ['success', 'warning', 'error'].indexOf(val) > -1
  },
  format: Function,
  strokeWidth: {
    type: Number,
    default: 6
  },
  color: {
    type: [String, Array, Function],
    default: ''
  },
  width: {
    type: Number,
    default: 126
  },
  strokeLinecap: {
    type: String,
    default: 'round'
  }
})

const barStyle = computed(() => {
  return {
    width: props.percentage + '%',
    backgroundColor: getCurrentColor(props.percentage)
  }
})

const strokeHeightStyle = computed(() => {
  return {
    height: props.strokeWidth + 'px'
  }
})

const relativeStrokeWidth = computed(() => {
  return (props.strokeWidth / props.width * 100).toFixed(1);
})

// 半径
const radius = computed(() => {
  if (props.type === 'circle' || props.type === 'dashboard') {
    return parseInt(50 - parseFloat(relativeStrokeWidth.value) / 2, 10);
  } else {
    return 0;
  }
})

// 周长
const perimeter = computed(() => {
  return 2 * Math.PI * radius.value;
})

const rate = computed(() => {
  return props.type === 'dashboard' ? 0.75 : 1;
})

const strokeDasharray = computed(() => {
  return `${perimeter.value * rate.value * (props.percentage / 100) }px, ${perimeter.value}px`
})

const strokeDashoffset = computed(() => {
  const offset = -1 * perimeter.value * (1 - rate.value) / 2;
  return `${offset}px`;
})

const iconClass = computed(() => {
  if(props.status === 'warning') {
    return 'icon-warning-filling';
  }
  if(props.status === 'success') {
    return 'icon-success-filling'
  }
  if(props.status === 'error') {
    return 'icon-delete-filling'
  }
})

const content = computed(() => {
  if (typeof props.format === 'function') {
    return props.format(props.percentage) || '';
  } else {
    return `${props.percentage}%`;
  }
})

const circleStroke = computed(() => {
  let ret;
  if (props.color) {
    ret = getCurrentColor(props.percentage);
  } else {
    switch (props.status) {
      case 'success':
        ret = '#13ce66';
        break;
      case 'warning':
        ret = '#e6a23c';
        break;
      case 'error':
        ret = '#ff4949';
        break;
      default:
        ret = '#20a0ff';
    }
  }
  return ret;
})

const getCurrentColor = (percentage) => {
  if (typeof props.color === 'function') {
    return props.color(percentage);
  } else if (typeof props.color === 'string') {
    return props.color;
  } else {
    return getLevelColor(percentage);
  }
}

const getLevelColor = (percentage) => {
  const colorArray = getColorArray().sort((a, b) => a.percentage - b.percentage);

  for (let i = 0; i < colorArray.length; i++) {
    if (colorArray[i].percentage > percentage) {
      return colorArray[i].color;
    }
  }
  return colorArray[colorArray.length - 1].color;
}

const getColorArray = () => {
  const colorArr = props.color;
  const span = 100 / colorArr.length;
  return colorArr.map((seriesColor, index) => {
    if (typeof seriesColor === 'string') {
      return {
        color: seriesColor,
        percentage: (index + 1) * span
      }
    }
    return seriesColor
  });
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/progress.scss';
</style>
