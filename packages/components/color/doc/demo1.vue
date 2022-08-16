<template>
    <div class="m-color__section">
        <div class="m-color__top" :style="{backgroundColor: state.currentColor}">
            <p class="m-color__title">Brand Color</p>
            <p class="m-color__desc">{{state.currentColor}}</p>
        </div>
        <div class="m-color__bottom">
            <div @click="mColorItemAction(index)" :style="{backgroundColor: item}" v-for="(item, index) in state.colorList" :key="index" class="m-color__item"></div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    currentColor: '#409EFF',
    colorList: ['#409EFF', '#337ECC', '#79BBFF', '#A0CFFF', '#C6E2FF', '#D9ECFF', '#ECF5FF']
})

const mColorItemAction = (index) => {
    state.currentColor = state.colorList[index];
}
</script>

<style lang="scss" scoped>
// @import '../../styles/components/button.scss';
.m-color__section {
    width: 326px;
    height: 112px;
    border-radius: 5px;

    .m-color__top {
        color: #fff;
        height: 60%;
        padding: 10px 0 0 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        .m-color__title {
            font-size: 16px;
        }

        .m-color__desc {
            font-size: 14px;
        }
    }

    .m-color__bottom {
        height: 40%;
        display: flex;

        .m-color__item {
            width: calc(100% / 7);
            cursor: pointer;
        }
    }
}
</style>