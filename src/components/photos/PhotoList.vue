<template>
  <div>
    <!-- 格式化 option+shift+f shift+alt+f -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in phototabList"
            :key="item.id" 
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <img v-lazy="item.images">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      phototabList: [],
      list: []
    };
  },
  created() {
    this.getphototablist();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getphototablist() {
      this.$http.get("/static/getimgcategory.json").then(result => {
        if (result.body.status == 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.phototabList = result.body.message;
        } else {
          Toast("加载失败……");
        }
      });
    },
    getPhotoListByCateId(cateId) {
      this.$http.get("/static/getimgcategory.json").then(result => {
        if (result.body.status == 0) {
            console.log(result.body.message)
          this.list = result.body.message;
        } else {
          Toast("加载失败……");
        }
      });
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}
img[lazy="loading"] {
  width: 100%;
  height: 100px;
  margin: auto;
}

ul {
    margin: 0;
    padding: 0;
}
ul li {
    /* list-style: none; */
    background-color: #ccc;
}
ul li img {
    width: 320px;
    display: block;
    margin: 10px auto;
}
</style>
