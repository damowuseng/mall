<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper/>
		<recommend/>
		<feature-view/>
		<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
		<goods-list :goods="showGoods"/>

<!--		有真实数据时候用以下代码-->
<!--		<home-swiper :banners="banners"/>-->
<!--		<recommend :recommends="recommends"></recommend>-->
	</div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar";
	import HomeSwiper from "./childcomponents/HomeSwiper";
	import Recommend from "./childcomponents/Recommend";
	import FeatureView from "./childcomponents/FeatureView";
	import TabControl from "../../components/content/tabcontrol/TabControl";
	import GoodsList from "../../components/content/goods/GoodsList";

	// 导入数据请求模块
	import { getHomeData, getHomeGoods } from "../../network/home";


	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			Recommend,
			FeatureView,
			TabControl,
			GoodsList
		},
		data() {
			return {
				result: null,
			// 真实数据按以下进行数据分类
			// 	banners = [],
			// 	imgs = []
			// 	recommends = []
				goods: {
					'pop': {page:0, list: []},
					'new': {page:0, list: []},
					'sell': {page:0, list: []}
				},
				currentType: 'pop'
			}
		},
		computed: {
			showGoods() {
				return  this.goods[this.currentType]
			}
		},
		created() {
			// 请求轮播图推荐数据
			this.getTopData()

			// 请求商品数据
			this.getGoods('pop')
			this.getGoods('new')
			this.getGoods('sell')
		},
		methods: {
			// 网络请求相关
			getTopData() {
				getHomeData().then(res => {
				this.result = res
				// // 也可以进行数据分类
				// this.banners = res.data.banner
				// this.imgs = res.data.img
				// this.recommends = res.data.recommends
			})
			},
			getGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
				this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
			})
			},

			// 事件监听方法
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				console.log(index);
				console.log(this.currentType);
			}
		}
	}
</script>

<style scoped>
	.home-nav {
		background-color: var(--color-tint);
		color: white;
	}
</style>
