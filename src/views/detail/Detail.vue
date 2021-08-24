<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
		详情页{{id}}
	</div>
</template>

<script>
	import DetailNavBar from "./childComps/DetailNavBar";
	import DetailSwiper from "./childComps/DetailSwiper";
	
	import {getDetail} from "../../network/detail";
	
	export default {
		name: "Detail",
		components: {
			DetailNavBar,
			DetailSwiper
		},
		data() {
			return {
				id: null,
				topImages: []
			}
		},
		created() {
			this.id = this.$route.params.id
			// 获取详情页数据
			getDetail(this.id).then(res => {
				console.log(res);
			})
		}
	}
</script>

<style scoped>

</style>
