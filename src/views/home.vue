<template>
  <Header />
  <div class="main-container">
    <aside @mousemove="mousemove" @mouseleave="mouseleave" :class="{'sidebar-scroll':isEnter}">
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
    </aside>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import { menuList } from '@/router/routerConfig/index';

const router = useRouter()
const mIndex = ref(sessionStorage.getItem("mIndex") || '0');
const isEnter = ref(false)

const goPath = (ele,ii,index) => {
  mIndex.value = ii + '-' + index
  router.push({
    path:ele.path
  })
  sessionStorage.setItem("mIndex", mIndex.value);
}

const mousemove = () => {
  isEnter.value = true
}

const mouseleave = () => {
  isEnter.value = false
}

</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 60px);
  overflow: hidden;
  aside{
    height: 100%;
    border-right: 1px solid #eee;
    overflow-y: auto;
    box-shadow: 0 2px 8px #f0f1f2;
    .sidebar{
      width: 250px;
      height: auto;
      margin-top: 10px;
      box-sizing: border-box;
      .title{
        font-weight: 700;
        line-height: 40px;
        margin-left: 40px;
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
        }
      }
    }
  }
  .sidebar-scroll{
    &::-webkit-scrollbar {
      display: block;
      width: 6px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: #ddd;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #fff;
    }
  }
  .app-main{
    flex: 1;
    padding: 20px 50px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: block;
      width: 10px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: #ccc;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #fff;
    }
  }
}
</style>
