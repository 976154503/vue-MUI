<template>
  <div>
    <!-- <div class="mui-content">
      <ul class="mui-table-view mui-table-view-chevron">
        <li id="switch" class="mui-table-view-cell">定时轮播
          <div class="mui-switch">
            <div class="mui-switch-handle"></div>
          </div>
        </li>
      </ul>
    </div> -->
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../images/girl.jpg">
          </a>
        </div>
        <!-- 第一张 -->
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
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
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
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图片分享</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div></a>
        </li>
    </ul> 
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {}
    },
    created() {
        //Toast('加载成功……')
    },
    methods: {},
    updated() {}
};
</script>
<style scoped>
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        margin-top: 10px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-media .mui-icon {
        background-color: #61cee2;
        color: #fff;
        border-radius: 100%;
        padding: 5px;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(1) .mui-icon {
        background-color: #f9d016;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(2) .mui-icon {
        background-color: #ff6700;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(3) .mui-icon {
        background-color: #00bbff;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(4) .mui-icon {
        background-color: #f75ddf;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(5) .mui-icon {
        background-color: #ff7c7c;
    }
    .mui-grid-view.mui-grid-9 .mui-media:nth-child(6) .mui-icon {
        background-color: #6c85f7;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 12px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        padding: 0px 15px 0 15px;
    }
    
</style>

