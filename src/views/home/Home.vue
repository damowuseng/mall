<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper/>
		<recommend/>
		<feature-view></feature-view>
		<tab-control :titles="['流行', '新款', '精选']"></tab-control>
<!--		有真实数据时候用以下代码-->
<!--		<home-swiper :banners="banners"/>-->
<!--		<recommend :recommends="recommends"></recommend>-->
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
		<div>11111</div>
	</div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar";
	import HomeSwiper from "./childcomponents/HomeSwiper";
	import Recommend from "./childcomponents/Recommend";
	import FeatureView from "./childcomponents/FeatureView";
	import TabControl from "../../components/content/tabcontrol/TabControl";
	// 导入数据请求模块
	import { getHomeData } from "../../network/home";


	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			Recommend,
			FeatureView,
			TabControl
		},
		data() {
			return {
				result: null
			// 也可以进行数据分类
			// 	banners = [],
			// 	imgs = []
			// 	recommends = []
			}
		},
		created() {
			getHomeData().then(res => {
				this.result = res
				// // 也可以进行数据分类
				// this.banners = res.data.banner
				// this.imgs = res.data.img
				// this.recommends = res.data.recommends
			}).catch()
		}
	}
</script>

<style scoped>
	.home-nav {
		background-color: var(--color-tint);
		color: white;
	}
</style>
