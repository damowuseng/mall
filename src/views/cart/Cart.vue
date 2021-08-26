<template>
	<div class="cart">
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{cartLength}})</div>
		</nav-bar>
		<cart-list></cart-list>
		<cart-bottom-bar></cart-bottom-bar>
		
	</div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar"
	import CartList from "./childComps/CartList";
	import CartBottomBar from "./childComps/CartBottomBar";
	
	import { mapGetters } from 'vuex'
	
	export default {
		name: "Cart",
		components: {
			NavBar,
			CartList,
			CartBottomBar
		},
		computed: {
			// 封装getters为了其他地方也可以使用。
			...mapGetters([
					'cartLength'
			])
		}
	}
</script>

<style scoped>
.nav-bar {
	background-color: var(--color-tint);
	color:#ffffff;
}
	.cart {
		height:100vh;
	}
</style>
