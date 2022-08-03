<template>
  <div class="m-tabs__header" :class="typeClass">
    <div class="m-tabs__nav-scroll">
      <div class="m-tabs__nav">
        <component
          v-for="(pane,index) in panes"
          :is="getLabelNode(pane)"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive,computed,h} from 'vue';

const emits = defineEmits(["onTabClick"]);
const props = defineProps({
  panes: {
    type: Array,
    default: [],
  },
  currentName: {
    type: String,
  },
  active_color: {
    type: String,
  },
  type: {
    type: String,
    default: "line",
  },
  tabPosition: {
    type: String
  },
  activeColor: {
    type: String,
    default: '',
  }
})

const typeClass = computed(() => {
  return {
    [`tabs_header_${props.type}`]: props.type,
    [`is-${props.tabPosition}`]: props.tabPosition
  }
});

const hanleClick = (pane, $event) => {
  const tabName = pane.props.name
  emits("onTabClick", tabName, $event);
}

const isActive = (pane) => {
  return props.currentName === pane.props.name
}

const getLabelNode = (pane) => {
  return h(
    "div",
    {
      class: {
        'm-tabs__item': true,
        'is-active': isActive(pane),
        'is-disabled': pane.props.disabled
      },
      style: { 
        color: isActive(pane) ? props.activeColor : '',
        borderBottom: props.activeColor && isActive(pane) ? `2px solid ${props.activeColor}` : '',
      },
      onClick: pane.props.disabled ? null : ($event) => hanleClick(pane, $event),
    },
    [
      h(
        'i',
        {
          class: `iconfont ${pane.props.icon}`
        }
      ),
      pane.props.label,
    ]
  );
}
</script>

<style lang="scss" scoped>
.m-tabs__header{
  padding: 0;
  margin-bottom: 15px;
  position: relative;
  .m-tabs__nav-scroll{
    overflow: hidden;
    .m-tabs__nav{
      white-space: nowrap;
      position: relative;
      transition: transform .3s;
      float: left;
      z-index: 2;
      .m-tabs__item{
        height: 40px;
        line-height: 40px;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
        box-sizing: border-box;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        position: relative;
        &:first-child{
          margin-left: 0;
        }
        &:last-child{
          margin-right: 0;
        }
      }
      .is-disabled{
        cursor: no-drop;
        color: #cacaca;
      }
    }
  }
}
.tabs_header_line{
  &::after {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #e4e7ed;
  }
  .is-active{
    border-bottom: 2px solid #409eff;
    color: #409eff;
  }
}
.tabs_header_card{
  .m-tabs__nav-scroll{
    border-bottom: 1px solid #e4e7ed;
    .m-tabs__nav{
      border: 1px solid #e4e7ed;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      box-sizing: border-box;
      .m-tabs__item{
        border-left: 1px solid #e4e7ed;
        &:first-child{
          border-left: 0;
        }
      }
      .is-active{
        color: #409eff;
      }
    }
  }
}
.is-right{
  float: right;
  margin-bottom: 0;
  margin-left: 10px;
  .m-tabs__item{
    display: block !important;
  }
}
.is-right.tabs_header_line{
  &::after {
    background-color: #fff !important;
  }
  .m-tabs__nav{
    border-left: 1px solid #e4e7ed;
  }
  .is-active{
    border-bottom: none;
    border-left: 2px solid #409eff;
  }
}
.is-left{
  float: left;
  margin-bottom: 0;
  margin-right: 10px;
  .m-tabs__item{
    display: block !important;
  }
}
.is-left.tabs_header_line{
  &::after {
    background-color: #fff !important;
  }
  .m-tabs__nav-scroll{
    border-right: 1px solid #e4e7ed;
  }
  .is-active{
    border-bottom: none;
    border-right: 2px solid #409eff;
  }
}
.is-bottom{
  margin-bottom: 0;
  margin-top: 10px;
}
</style>
