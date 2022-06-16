<template>
  <Header />
  <div class="main-container">
    <div class="sidebar">
      <ul v-for="(item,ii) in menuList" :key="item">
        <p class="title">{{item.name}}</p>
        <li 
          v-for="(ele,index) in item.list" 
          :key="ele"
          :class="{'active': mIndex == ii + '-' + index}"
          @click="goPath(ele,ii,index)">
          {{ele.name}}
        </li>
      </ul>
    </div>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import menuList from "@/utils/menuList.js";

const router = useRouter()
const mIndex = ref(sessionStorage.getItem("mIndex") || '0');


const goPath = (ele,ii,index) => {
  mIndex.value = ii + '-' + index
  router.push({
    path:ele.path
  })
  sessionStorage.setItem("mIndex", mIndex.value);
}

</script>

<style lang="scss" scoped>
header{
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0 40px;
  .img-logo{
    width: 22px;
    height: 22px;
    float: left;
    margin: 15px 10px 0 0;
    cursor: pointer;
  }
  .left{
    float: left;
    color: #4a5264;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
  }
  .toolsBox{
    float: right;
    .tool-item{
      font-weight: 400;
      font-size: 16px;
      padding: 8px 3px;
      margin-left: 25px;
      border-bottom: 2px solid #fff;
      display: inline-block;
      float: none;
      line-height: normal;
      transition: all .2s ease;
      cursor: pointer;
    }
    .active{
      color: #409eff;
      border-bottom: 2px solid #409eff;
    }
  }
}
.main-container{
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 50px);
  overflow: hidden;
  .sidebar{
    width: 200px;
    height: 100%;
    border-right: 1px solid #eee;
    .title{
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 24px;
      margin-left: 40px;
      padding-bottom: 5px;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    ul{
      li{
        height: 50px;
        line-height: 50px;
        padding-left: 40px;
        font-size: 13px;
        color: #606266;
        cursor: pointer;
      }
      .active{
        color: #409eff;
        background-color: #ECF5FF;
        border-right: 1px solid #409eff;
      }
    }
  }
  .app-main{
    flex: 1;
    padding: 20px 50px;
    overflow-y: auto;
  }
}
</style>
