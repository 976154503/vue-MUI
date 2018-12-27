import VueRouter from 'vue-router'

import Home from './components/tabBar/HomeContainer.vue'
import Member from './components/tabBar/MemberContainer.vue'
import Shopcar from './components/tabBar/ShopcarContainer.vue'
import Search from './components/tabBar/SearchContainer.vue'

import NewsList from "./components/news/NewsList.vue"
import NewsInfor from "./components/news/NewsInfor.vue"
import PhotosList from "./components/photos/PhotoList.vue"
import PhotosInfor from "./components/photos/PhotoInfor.vue"
import ProductList from "./components/products/ProductList.vue"
import ProductInfor from "./components/products/ProductInfor.vue"
import ProductDesc from "./components/products/ProductDesc.vue"
import ProductComment from "./components/products/ProductComment.vue"

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: Home},
		{ path: '/member', component: Member},
		{ path: '/shopcar', component: Shopcar},
		{ path: '/search', component: Search},
		{ path: '/home/newsList', component: NewsList},
		{ path: '/home/photosList', component: PhotosList},
		{ path: '/home/photoinfo/:id', component: PhotosInfor},
		{ path: '/home/productList', component: ProductList},
		{ path: '/home/productInfor/:id', component: ProductInfor, name: 'goodsinfo'},
		{path: '/home/productdesc/:id', component: ProductDesc, name: 'goodsdesc'},
		{path: '/home/productcomment/:id', component: ProductComment, name: 'goodscomment'},
		{ path: '/home/newsInfor/:id', component: NewsInfor}
	],
	linkActiveClass: 'mui-active'
})

export default router