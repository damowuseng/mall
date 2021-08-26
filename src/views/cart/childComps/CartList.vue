<template>
		<div class="cart_list">
			<scroll class="content">
<!--				<li v-for="item in cartList" :key="item.id">{{item}}</li>-->
				<cart-list-item v-for="(item, index) in cartList"
												:key="index"
												:product="item"/>
			</scroll>
			
		</div>
</template>

<script>
	import Scroll from "../../../components/common/scroll/Scroll";
	import CartListItem from "./CartListItem";
	
	import{ mapGetters } from 'vuex'
	export default {
		name: "CartList",
		components: {
			Scroll,
			CartListItem
		},
		computed: {
			...mapGetters([
					'cartList'
			])
		}
	}
</script>

<style scoped>
	.cart_list {
		height: calc(100% - 44px - 49px - 40px);
	}
.content {
	height: 100%;
	overflow: hidden;
}
</style>
