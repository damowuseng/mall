import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";

Vue.use(Vuex)

const state = {
	cartList: []
}

const store = new Vuex.Store({
	state,
	// 修改state必须经过mutations
	mutations: {
		addCart(state, payload) {
			state.cartList.push(payload)
			
			console.log(payload)
			console.log(this.state.cartList.length)
		}
	},
	getters
})

export default store
