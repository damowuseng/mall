<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		
		<scroll class="content" ref="scroll"
						:probe-type="3" @scroll="contentScroll"
						:pull-up-load="true" @pullingUp="loadMore">
			<home-swiper/>
			<recommend/>
			<feature-view/>
			<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-control"></tab-control>
			<goods-list :goods="showGoods"/>
		</scroll>
<!--		监听组件原生事件时，必须给对应事件加上.native修饰符-->
		<back-top @click.native="backClick" v-show="isShowTop"></back-top>
		
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
	import Scroll from "../../components/common/scroll/Scroll";
	import BackTop from "../../components/common/backTop/BackTop";

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
			GoodsList,
			Scroll,
			BackTop
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
				currentType: 'pop',
				isShowTop: false
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
					/**
					 * 也可以进行数据分类
					 * 有数据用一下代码
					 */
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
					
					this.$refs.scroll.finishPullUp()
					
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
			},
			backClick() {
				this.$refs.scroll.scrollTop(0,0)
			},
			
			// 监听鼠标坐标根据y值决定是否现实backtop图标
			contentScroll(position) {
				this.isShowTop = (-position.y) > 200
				// console.log(position);
			},
			// 监听上拉加载事件
			loadMore() {
				this.getGoods(this.currentType)
				console.log(111);
			},
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
		height: 100vh;
		position: relative;
	}
	.home-nav {
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;

	}
	.tab-control {
		position: sticky;
		top: 44px;
		z-index: 9;
	}
	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		right: 0;
		left: 0;
		overflow: hidden;
	}
</style>
