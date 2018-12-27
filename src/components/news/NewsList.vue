<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/newsInfor/' + item.id">
					<img class="mui-media-object mui-pull-right" :src="item.images">
					<div class="mui-media-body">
						{{item.title}}
						<p class="mui-ellipsis">
							<span>发表时间：{{item.time | dateformat}}</span>
							<span>点击：{{item.clickCount}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
	data() {
		return {
			newslist: []
		};
	},
	created() {
		this.getnewslist();
	},
	methods: {
		getnewslist() {
			this.$http.get("/static/newslist.json").then(result => {
				if (result.body.status == 0) {
					this.newslist = result.body.message;
				} else {
					Toast("加载失败……");
				}
			});
		}
	}
};
</script>

<style scoped>
.mui-ellipsis {
	display: flex;
	justify-content: space-between;
}
.mui-table-view {
	overflow-y: scroll;
}
</style>

