<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key
            将来，谁使用此 轮播图组件，谁为我们传递 lunbotuList
            此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
        <!-- <div id="slider" class="mui-slider">
            <div class="mui-slider-group mui-slider-loop">
                额外增加的一个节点(循环轮播：第一个节点是最后一张轮播)
                <div
                    class="mui-slider-item mui-slider-item-duplicate"
                    v-for="item in lunbotuList"
                    :key="item.url">
                    <a href="#">
                        <img :src="item.img" :class="{'full':isfull}">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator" >
                <div :class="['mui-indicator', item.id == 0 ? 'mui-active' : '']" v-for="item in lunbotuList" :key="item.url"></div>
            </div>
        </div> -->
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import mui from "../lib/mui/js/mui.js";
export default {
    mounted() {
        // mui.init({
        //     swipeBack: true
        // });
        // var sliderMuiObj = mui(".mui-slider"); //滑动科目
        // sliderMuiObj.slider({
        //     interval: 2000 //如果你想自动3000ms滑动一下就写上这个。
        // });
    },
    props: ["lunbotuList", "isfull"],
    created() {
        this.getlist();
    },
    methods: {
        getlist() {
            //console.log(lunbotuList);
        }
    }
    // data() {
    //     return {
    //         isFull: false,
    //     }
    // }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        text-align: center;

        img {
            // width: 100%;
            height: 100%;
        }
        
    }
    .mint-swipe-indicators .mint-swipe-indicator {
            opacity: 0.5;
    }
}

.full {
    width: 100%;
}
</style>


