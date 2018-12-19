<template>
    <div class="app-container">
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">导航栏</h1>
		</header>
        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cate"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.app-container {
    padding: 40px 0 0 0;
    overflow-x: hidden;
}

.mui-bar {
    background-color: #61cee2;
}

.mui-title ,.mui-bar .mui-icon ,.mui-bar-tab .mui-tab-item {
    color: #fff;
}
.mui-bar-tab .mui-tab-item.mui-active ,.mui-bar-tab .mui-tab-item.mui-active span.mui-icon {
    color: #7b7b7b;
}
.mui-bar {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active {
    transition: all 0.5s ease
}
</style>

