<template>
  <header>
    <img class="img-logo" src="../assets/logo.png" alt="my-baseui" />
    <a class="left" href="javascript:;" @click="toHome">my-baseui</a>
    <div class="toolsBox">
      <ul>
        <li
          class="tool-item"
          v-for="(item, index) in tools"
          :key="index"
          :class="{'active': active === index}"
          @click="pageView(item, index)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const active = ref(0)


const state = reactive({
  tools: [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "组件",
      path: "/home",
    },
    {
      name: "Gitee",
      path: "open",
      url: "https://gitee.com/DaShiKuaiPao/my-baseui"
    }
  ],
});
const { tools } = state;

const toHome = () => {
  router.push("/");
};

const pageView = (item,index) => {
  active.value = index
  if (item.path == "open") {
    window.open(item.url);
  } else {
    router.push(item.path);
  }
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
</style>
