<template>
    <div>
        新闻详情页
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from '../../subcomponents/comment.vue'
export default {
  data() {
    return {
        id: this.$route.params.id,
        newsinfor : []
    }
  },
  created() {
    this.getnewsinfor();
  },
  methods: {
    getnewsinfor() {
    //   this.$http.get("/static/newslist.json").then(result => {
    //     if (result.body.status == 0) {
    //       this.newslist = result.body.message;
    //     } else {
    //       Toast("加载失败……");
    //     }
    //   });
    }
  },
  components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }
};
</script>
<style scoped>

</style>



