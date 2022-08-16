<template>
    <div class="m-color__list">
        <div v-for="(item, index) in state.colorObjList" :key="index"
            :style="{ backgroundColor: item.bgColor, color: item.color }" class="m-color__item"
            :class="'item__' + index">
            <p class="m-color__title">{{ item.title }}</p>
            <p class="m-color__desc">{{ item.bgColor }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    colorObjList: [
        {
            title: 'Primary Text',
            bgColor: '#303133',
            color: '#fff'
        }, {
            title: 'Darker Border',
            bgColor: '#CDD0D6',
            color: '#333'
        }, {
            title: 'Darker Fill',
            bgColor: '#E6E8EB',
            color: '#333'
        }, {
            title: 'Basic Black',
            bgColor: '#000000',
            color: '#fff'
        }, {
            title: 'Regular Text',
            bgColor: '#606266',
            color: '#fff'
        }, {
            title: 'Dark Border',
            bgColor: '#D4D7DE',
            color: '#333'
        }, {
            title: 'Dark Fill',
            bgColor: '#EBEDF0',
            color: '#333'
        }, {
            title: 'Basic White',
            bgColor: '#FFFFFF',
            color: '#333'
        }, {
            title: 'Secondary Text',
            bgColor: '#909399',
            color: '#fff'
        }, {
            title: 'Base Border',
            bgColor: '#DCDFE6',
            color: '#333'
        }, {
            title: 'Base Fill',
            bgColor: '#F0F2F5',
            color: '#333'
        }, {
            title: 'Transparent',
            bgColor: '#Transparent',
            color: '#333'
        }, {
            title: 'Placeholder Text',
            bgColor: '#A8ABB2',
            color: '#fff'
        }, {
            title: 'Light Border',
            bgColor: '#E4E7ED',
            color: '#333'
        }, {
            title: 'Light Fill',
            bgColor: '#F5F7FA',
            color: '#333'
        }, {
            title: 'Page Background',
            bgColor: '#F2F3F5',
            color: '#333'
        }, {
            title: 'Disabled Text',
            bgColor: '#C0C4CC',
            color: '#333'
        }, {
            title: 'Lighter Border',
            bgColor: '#EBEEF5',
            color: '#333'
        }, {
            title: 'Lighter Fill',
            bgColor: '#FAFAFA',
            color: '#333'
        }, {
            title: 'Base Background',
            bgColor: '#FFFFFF',
            color: '#333'
        }, {
            title: 'Extra-light Border',
            bgColor: '#F2F6FC',
            color: '#333'
        }, {
            title: 'Extra-light Fill',
            bgColor: '#FAFCFF',
            color: '#333'
        }, {
            title: 'Overlay Background',
            bgColor: '#FFFFFF',
            color: '#333'
        }, {
            title: 'Blank Fill',
            bgColor: '#FFFFFF',
            color: '#333'
        }
    ]
})
</script>

<style lang="scss" scoped>
// @import '../../styles/components/button.scss';
.m-color__list {
    display: flex;
    flex-wrap: wrap;
    width: 1300px;
    margin-left: -10px;

    .m-color__item {
        width: 190px;
        height: 112px;
        margin: 10px 0 0 10px;
        border-radius: 5px;

        .m-color__title {
            font-size: 16px;
            margin-top: 20px;
            margin-left: 20px;
        }

        .m-color__desc {
            font-size: 14px;
            margin-top: 10px;
            margin-left: 20px;
        }
    }

    .item__11 {
        /* 马赛克背景图 */
        background-position: 0px 0px, 10px 10px;
        background-size: 20px 20px;
        background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
    }

    .item__19,.item__22,.item__23 {
        box-sizing: border-box;
        border: 1px #aeaeae solid;
    }
}
</style>