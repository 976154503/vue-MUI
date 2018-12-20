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
			<router-link class="mui-tab-item-change" to="/home">
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-change" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-change" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-change" to="/search">
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
/*重新改名字*/
.mui-bar-tab .mui-tab-item-change {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-change .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-change .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.app-container {
    padding: 40px 0 0 0;
    overflow-x: hidden;
}

.mui-bar {
    background-color: #61cee2;
}

.mui-title ,.mui-bar .mui-icon ,.mui-bar-tab .mui-tab-item-change {
    color: #fff;
}
.mui-bar-tab .mui-tab-item-change.mui-active ,.mui-bar-tab .mui-tab-item-change.mui-active span.mui-icon {
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

