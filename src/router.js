import VueRouter from 'vue-router'

import Home from './components/tabBar/HomeContainer.vue'
import Member from './components/tabBar/MemberContainer.vue'
import Shopcar from './components/tabBar/ShopcarContainer.vue'
import Search from './components/tabBar/SearchContainer.vue'

import NewsList from "./components/news/NewsList.vue"
import PhotosList from "./components/photos/PhotoList.vue"
import ProductList from "./components/products/ProductList.vue"

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: Home},
		{ path: '/member', component: Member},
		{ path: '/shopcar', component: Shopcar},
		{ path: '/search', component: Search},
		{ path: '/home/newsList', component: NewsList},
		{ path: '/home/photosList', component: PhotosList},
		{ path: '/home/productList', component: ProductList}
	],
	linkActiveClass: 'mui-active'
})

export default router