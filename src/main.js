import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//http://dev.dcloud.net.cn/mui/ui/
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import app from './App.vue'
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource) 

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
