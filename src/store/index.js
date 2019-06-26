import Vue from 'vue';
import Vuex from 'vuex';
// const http = require('../../static/base.js');
//使用vuex
Vue.use(Vuex);
//创建实例
const store = new Vuex.Store({
	state: {
		count: 1,
		isLogin: false
	},
	getters: {
		stateCount: function (state) {
			return state.count + 3
		}
	},
})
export default store;