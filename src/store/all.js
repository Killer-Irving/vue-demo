import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 引入login 模块import login from "./login"
import login from "./login.js";
import index from "./index.js";
export default new Vuex.Store({
	// 通过modules属性引入login 模块。
	modules: {
		login: login,
		index: index
	}
})