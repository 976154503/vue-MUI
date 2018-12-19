import VueRouter from 'vue-router'

import Home from './components/tabBar/HomeContainer.vue'
import Member from './components/tabBar/MemberContainer.vue'
import Shopcar from './components/tabBar/ShopcarContainer.vue'
import Search from './components/tabBar/SearchContainer.vue'

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: Home},
		{ path: '/member', component: Member},
		{ path: '/shopcar', component: Shopcar},
		{ path: '/search', component: Search}
	],
	linkActiveClass: 'mui-active'
})

export default router