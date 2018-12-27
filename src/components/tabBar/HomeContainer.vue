<template>
  <div>
    <!-- <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        额外增加的一个节点(循环轮播：第一个节点是最后一张轮播)
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../images/girl.jpg">
          </a>
        </div>
        第一张
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../images/shuijiao.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../images/muwu.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../images/cbd.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../images/yuantiao.jpg">
          </a>
        </div>
        额外增加的一个节点(循环轮播：最后一个节点是第一张轮播)
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../images/shuijiao.jpg">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div> -->
    <swiper :lunbotuList="this.lunbotuList" :isfull="true"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-12">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <router-link to="/home/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <router-link to="/home/photosList">
                <span class="mui-icon mui-icon-email"></span>
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <router-link to="/home/productList">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div></a>
        </li>
    </ul>
    <div class="like-news-list">
        <p class="news-title">猜你喜欢</p>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>晨曦依旧，梦短情长，道一句早安，快快起床，收拾好心情，晒晒阳光，温暖一整天。</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        我喜欢紧紧的抱住你那一刻，就像得到了全世界。
                        <p class='mui-ellipsis'>
                            <span>祝福伴随你身旁，简简单单最幸福，早晨希望最光芒，时刻微笑牢牢记，新的一天新希望!</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        一个人应该有梦想，没有梦想就不可能成功!
                        <p class='mui-ellipsis'>
                            <span>祝福伴随你身旁，简简单单最幸福，早晨希望最光芒，时刻微笑牢牢记，新的一天新希望!</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import mui from '../../lib/mui/js/mui.js'
import swiper from '../../subcomponents/swiper.vue'

export default {
    data() {
        return {
            lunbotuList:[]
        }
    },
    created() {
        this.getlunbotu();
        //Toast('加载成功……')
    },
    methods: {
        getlunbotu() {
            this.$http.get("/static/getimgcategory.json").then(result => {
                if (result.body.status == 0) {
                    result.body.message.forEach(item => {
                        item.img = item.images;
                        item.url = item.images;
                    });
                    this.lunbotuList = result.body.message;
                } else {
                    Toast("加载失败……");
                }
            });
        }
    },
    updated() {
        
    },
    components: {
        swiper
    }
};
</script>
<style scoped>
    .mui-icon {
        font-size: 18px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
        margin-top: 0;
    }
    .mui-grid-view.mui-grid-12 .mui-table-view-cell {
        padding: 0px 5px 0 5px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        text-overflow: unset
    }
    .mui-grid-view.mui-grid-12 {
        background-color: #fff;
        border: none;
        margin-top: 10px;
        padding: 0;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell {
        font-size: 17px;
        display: inline-block;
        margin-right: -4px;
        padding: 10px 0 0 14px;
        text-align: center;
        vertical-align: middle;
        background: none;
    }
    .mui-grid-view.mui-grid-12 .mui-table-view-cell {
        border: none;
        padding: 0;
    }
    .mui-grid-view.mui-grid-12 .mui-media .mui-icon {
        background-color: #61cee2;
        color: #fff;
        border-radius: 100%;
        padding: 5px;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(1) .mui-icon {
        background-color: #f9d016;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(2) .mui-icon {
        background-color: #ff6700;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(3) .mui-icon {
        background-color: #00bbff;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(4) .mui-icon {
        background-color: #f75ddf;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(5) .mui-icon {
        background-color: #ff7c7c;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(6) .mui-icon {
        background-color: #6c85f7;
    }
    .mui-grid-view.mui-grid-12 .mui-media:nth-child(8) .mui-icon {
        background-color: #00bd1e;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 12px;
    }
    .mui-grid-view.mui-grid-12 .mui-table-view-cell {
        padding: 0px 0px 8px 15px;
    }
    .mui-table-view:before ,.mui-table-view:after {
        height: 0;
    }
    .like-news-list {
        padding: 0 20px 50px 20px;
    }
    .like-news-list .mui-table-view li {
        padding: 11px 0;
    }
    p.news-title {
        font-size: 12px;
        color: #6f6f6f;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eee;
    }
    .mui-table-view .mui-media-object {
        line-height: 32px;
        max-width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    .mui-media-body {
        font-size: 13px;
        color: #333;
    }
    .mui-table-view-cell p {
        font-size: 12px;
    }
</style>

