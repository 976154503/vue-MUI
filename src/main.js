import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.css'

import app from './App.vue'
import router from './router.js'

console.log('ok')

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
