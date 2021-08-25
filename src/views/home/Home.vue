<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<tab-control :titles="['流行', '新款', '精选']"
									@tabClick="tabClick"
									ref="tabControlIsShow"
									class="tabIsShow"
									v-show="isFixed"/>
		
		<scroll class="content" ref="scroll"
						:probe-type="3" @scroll="contentScroll"
						:pull-up-load="true" @pullingUp="loadMore">
			
			<home-swiper :banners="banners" @bannerImageLoadFished="bannerImageLoadFished"/>
			<recommend :recommends="recommends"/>
			<feature-view/>
			<tab-control :titles="['流行', '新款', '精选']"
										@tabClick="tabClick"
										ref="tabControl"/>
			<goods-list :goods="showGoods"/>
			
		</scroll>
		
		<!--		监听组件原生事件时，必须给对应事件加上.native修饰符-->
		<back-top @click.native="backClick" v-show="isShowTop"/>
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
	import { debounce } from "../../utils/debounce"
	
	
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
				banners: [],
				recommends: [],
				goods: {
					'pop': {page:0, list: []},
					'new': {page:0, list: []},
					'sell': {page:0, list: []}
				},
				currentType: 'pop',
				isShowTop: false,
				tabOffsetTop: 0,
				isFixed: false,
				saveY: 0
			}
		},
		computed: {
			showGoods() {
				// console.log(this.goods[this.currentType])
				return  this.goods['pop'].list
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
		mounted() {
			// 防抖操作 对refresh刷新频繁问题，进行防抖操作
			const refresh = debounce(this.$refs.scroll.refresh, 300)
			// 监听图片加载完成后刷新解决上拉加载bug
			this.$bus.$on('imageLoadFished', () => {
				refresh()
			})
		},
		methods: {
			// 网络请求相关
			getTopData() {
				getHomeData().then(res => {
				// this.result = res
					/**
					 * 也可以进行数据分类
					 * 有数据用一下代码
					 */
					// console.log(res)
				this.banners = res.data.banners
				// this.imgs = res.data.img
				this.recommends = res.data.recommends
			})
			},
			getGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					// console.log(res.data)
					// 此处可以根据后端数据接口调整
					this.goods[type].list.push(...res.data.pop)
					this.goods[type].page += 1
					// 完成上拉加载更多
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
				// 同步吸顶tabcontrol点击
				this.$refs.tabControlIsShow.currentIndex = index
				this.$refs.tabControl.currentIndex = index
				// console.log(index);
				// console.log(this.currentType);
			},
			backClick() {
				this.$refs.scroll.scrollTop(0,0)
			},
			
			
			contentScroll(position) {
				// 监听鼠标坐标根据y值决定是否现实backtop图标
				this.isShowTop = (-position.y) > 200
				// 判断tab-control是否吸顶
				this.isFixed = (-position.y) > this.tabOffsetTop
			},
			// 上拉加载更多
			loadMore() {
				this.getGoods(this.currentType)
				console.log(111);
			},
			bannerImageLoadFished () {
				// 获取tab-control的offsetTop
				this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
			}
		},
		activated() {
			// 让home种的内容保持原来的位置
			this.$refs.scroll.scrollToTop(0, this.saveY, 0)
			this.$refs.scroll.refresh()
			
		},
		deactivated() {
			// 让home种的内容保持原来的位置
			this.saveY = this.$refs.scroll.getScrollY()
			console.log(this.saveY)
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
		color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;
	}
	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		right: 0;
		left: 0;
		overflow: hidden;
	}
	.tabIsShow {
		position: relative;
		z-index: 9;
	}
</style>
