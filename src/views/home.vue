<template>
    <Header />
    <div class="main-container">
        <aside @mousemove="mousemove" @mouseleave="mouseleave" :class="{ 'sidebar-scroll': isEnter }">
            <div class="sidebar">
                <ul v-for="(item, ii) in menuList" :key="item">
                    <p class="title">{{  item.name  }}</p>
                    <li v-for="(ele, index) in item.list" :key="ele" :class="{ 'active': mIndex == ii + '-' + index }"
                        @click="goPath(ele, ii, index)">
                        {{  ele.name  }}
                    </li>
                </ul>
            </div>
        </aside>
        <main class="app-main" ref="mainScroll">
            <router-view></router-view>
        </main>
        <div class="content-slidebar">
            <div class="content-section">
                <p class="content-title">内容导航</p>
                <ul v-for="(item, ii) in state.contentList" :key="item">
                    <p @click="mainScrollHandler(ii)" class="nav-title" :class="{ selected: item.active }">
                        <span class="desc"> {{  item.title  }}</span>
                    </p>
                    <!-- <li v-for="(ele, index) in item.list" :key="ele" :class="{ 'active': mIndex == ii + '-' + index }"
                        @click="goPath(ele, ii, index)">
                        {{ ele.name }}
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted, nextTick, watch, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import { menuList } from '@/router/routerConfig/index';

const router = useRouter()
const mIndex = ref(sessionStorage.getItem("mIndex") || '0');
const isEnter = ref(false)
const state = reactive({
    contentList: [],
    topList: []
})
const mainScroll = ref(null)

state.contentList = menuList[0]['list'][0]?.content;

const goPath = (ele, ii, index) => {
    mIndex.value = ii + '-' + index
    state.contentList = menuList[ii]['list'][index]?.content;
    router.push({
        path: ele.path
    })
    sessionStorage.setItem("mIndex", mIndex.value);
    confirmContentSlider(0); //初始化 内容导航栏
    setTimeout(() => {
        nextTick(() => {
            calcH2TopList();
        })
    }, 500);
}

const confirmContentSlider = (index) => {
    let arr = state.contentList;
    arr && arr.forEach((item, indexPath) => {
        item.active = false;
        if (indexPath == index) {
            item.active = true;
        }
    })
    state.contentList = arr;
}

const mousemove = () => {
    isEnter.value = true
}

const mouseleave = () => {
    isEnter.value = false
}

const calcH2TopList = () => {
    let h2List = document.querySelectorAll('h2');
    let arr = [];
    h2List.forEach(item => {
        arr.push(item.offsetTop);
    })
    state.topList = arr;
}

let isScrollStatus = false;

const mainScrollHandler = (index) => {
    confirmContentSlider(index);
    isScrollStatus = true;
    mainScroll.value?.scrollTo({
        top: state.topList[index] - 70,
        left: 0,
        behavior: 'smooth'
    })
    setTimeout(() => {
        isScrollStatus = false;
    }, 500);
}

// watch(mainScroll.value, (newValue, oldValue) => {
//     console.log("new", newValue, "old", oldValue);
// });

const handleScroll = () => {
    if (isScrollStatus) return;
    //获取dom滚动距离
    const scrollTop = mainScroll.value.scrollTop;
    // console.log('滚动的距离:' + scrollTop);
    for (let i = 0; i < state.topList.length; i++) {
        if (scrollTop > state.topList[i] - 80 && scrollTop <= state.topList[i + 1] - 80) {
            confirmContentSlider(i);
            break;
        }
    }
}

let flag = true;

const thorrle = (fn, interval) => {
    let last = 0;
    return function () {
        if (!flag) return false;
        let context = this;
        let args = arguments;
        let now = new Date();
        if ((now - last) > interval) {
            last = now;
            //劫持当前所在的方法返回fn的方法的内容
            fn.apply(context, args);
        }
    }
}

// onBeforeUnmount(() => {
//     nextTick(() => {
//         mainScroll.value.removeEventListener('scroll', () => { }); // 离开当前组件别忘记移除事件监听
//     })
// });


onMounted(() => {
    nextTick(() => {
        calcH2TopList();
        mainScroll.value.addEventListener("scroll", thorrle(handleScroll, 200));
    })
})

</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 60px);
    overflow: hidden;

    aside {
        height: 100%;
        border-right: 1px solid #eee;
        overflow-y: auto;
        box-shadow: 0 2px 8px #f0f1f2;

        .sidebar {
            width: 250px;
            height: auto;
            margin-top: 10px;
            box-sizing: border-box;

            .title {
                font-weight: 700;
                line-height: 40px;
                margin-left: 40px;
                color: #333;
                border-bottom: 1px solid #f0f0f0;
            }

            ul {
                li {
                    height: 50px;
                    line-height: 50px;
                    padding-left: 40px;
                    font-size: 13px;
                    color: #606266;
                    cursor: pointer;
                }

                .active {
                    color: #409eff;
                    background-color: #ECF5FF;
                }
            }
        }
    }

    .sidebar-scroll {
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

    .content-slidebar {
        width: 300px;
        height: 100%;

        .content-section {
            margin-top: 50px;

            .content-title {
                font-weight: 550;
                font-size: 17px;
                padding-bottom: 20px;
            }

            .nav-title {
                cursor: pointer;
                font-size: 15px;
                padding: 10px 0;
                position: relative;

                .desc {
                    margin-left: 10px;
                }

                &:after {
                    content: '';
                    width: 0;
                    height: 0;
                    border-right: 4px solid #409eff;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    transition: .3s;
                }
            }

            .selected {
                color: #409eff;

                &:after {
                    height: 40%;
                }
            }
        }
    }

    .app-main {
        flex: 1;
        padding: 20px 50px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
            width: 10px;
            height: 1px;
        }

        // &::-webkit-scrollbar-thumb {
        //   border-radius: 8px;
        //   background: #ccc;
        // }

        // &::-webkit-scrollbar-track {
        //   border-radius: 8px;
        //   background: #fff;
        // }

    }
}
</style>
