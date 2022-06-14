<template>
  <div>
    <p class="titlep">所有图标</p>
    <m-input v-model="keywords" placeholder="输入关键词进行搜索" @input="search"></m-input>
    <div class="iconListBox">
      <ul class="icon-list">
        <li v-for="(item,index) in iconData" :key="index">
          <i class="iconfont" :class=" 'icon-'+ item.name "></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import iconList from '@/assets/iconfont/iconfont.json';
export default {
  setup() {
    const keywords = ref('')
    const iconData = ref(iconList.glyphs)

    const search = (event) => {
      iconData.value = []
      iconList.glyphs.filter(item => {
        if(item.name.indexOf(event) != -1) {
          iconData.value.push(item)
        }
      })
    }
    return {
      keywords,
      iconData,
      search
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list{
  li{
    list-style: none;
    width: 16.66%;
    height: 120px;
    float: left;
    padding: 1vw;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
    transition: all .15s ease;
    cursor: pointer;
    i{
      font-size: 36px;
      color: #555;
      display: block;
      margin-top: 1vh;
    }
    span{
      display: inline-block;
      color: #555;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
    &:hover{
      i,span{
        color:#409eff;
      }
    }
  }
}
</style>
