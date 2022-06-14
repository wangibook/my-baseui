<template>
  <Header />
  <div class="main-container">
    <div class="sidebar">
      <ul v-for="item in routes" :key="item">
        <li 
          v-for="(ele,index) in item.children" 
          :key="ele"
          :class="{'active': mIndex == index}"
          @click="goPath(ele,index)">
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

const router = useRouter()
const mIndex = ref(sessionStorage.getItem("mIndex") || '0');

const routes = computed(() => router.options.routes)

const goPath = (ele,index) => {
  mIndex.value = index
  router.push({
    path:ele.path
  })
  sessionStorage.setItem("mIndex", index);
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
    text-align: center;
    ul{
      li{
        height: 50px;
        line-height: 50px;
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
