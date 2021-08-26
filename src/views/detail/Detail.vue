<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav-bar"
										@titleClick="titleClick"
										ref="detailNav"/>
		
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="detailScroll">
			<detail-swiper :top-images="topImages"/>
			<detail-base-info :goods="goods"/>
			<detail-shop-info :shop="shop"/>
			<detail-goods-info :detailInfo="detailInfo"
													@imageLoadFished="imageLoadFished"/>
			<detail-param-info ref="param" :paramInfo="paramInfo"/>
			<detail-comment-info ref="comment" :commentsInfo="commentsInfo"/>
			<goods-list ref="recommend" :goods="recommends"/>
			<h2>~~~~~~~~~~~~~~~~~~~~~~~</h2>
			<div><p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p>
				<p>推荐信息</p></div>
		</scroll>
		
		<detail-bottom-bar @addCart="addToCart"/>
		<back-top @click.native="backClick" v-show="isShowTop"/>
	</div>
</template>

<script>
	import DetailNavBar from "./childComps/DetailNavBar";
	import DetailSwiper from "./childComps/DetailSwiper";
	import DetailBaseInfo from "./childComps/DetailBaseInfo";
	import DetailShopInfo from "./childComps/DetailShopInfo";
	import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
	import DetailParamInfo from "./childComps/DetailParamInfo";
	import DetailCommentInfo from "./childComps/DetailCommentInfo";
	import DetailBottomBar from "./childComps/DetailBottomBar";
	
	import Scroll from "../../components/common/scroll/Scroll";
	import GoodsList from "../../components/content/goods/GoodsList";
	//mixin
	import {backTopMixin} from "../../mixin/mixin";
	
	import {getDetail, Goods, Shop, getRecommend} from "../../network/detail";
	import {debounce} from "../../utils/debounce";
	
	
	export default {
		name: "Detail",
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodsList,
			DetailBottomBar
		},
		mixins: [backTopMixin],
		data() {
			return {
				id: null,
				topImages: [],
				goods: {},
				shop:{},
				detailInfo: {},
				paramInfo: {},
				commentsInfo: {},
				recommends: [],
				topY: [],
				currentIndex: []
			}
		},
		created() {
			// 获取并保存传入的商品id
			this.id = this.$route.params.id
			// 根据id获取详情页数据
			getDetail(this.id).then(res => {
				// console.log(res);
				// 获取产品轮播图
				this.topImages = res.topImages
				// 获取商品详细信息
				this.goods = new Goods(res.data1, res.data2)
				// console.log(new Goods(res.data1, res.data2))
				// 获取店铺数据
				this.shop = new Shop(res.shopData)
				// 商品详情数据
				this.detailInfo = res.detailInfoData
				// 获取参数信息
				// this.paramInfo = res.paramInfoData
				//获取评论信息
				// this.commentsInfo = res.commentsInfo
			})
			// 获取推荐数据
			getRecommend().then(res => {
				// this.recommends = res.recommends
				console.log(res)
			})
			//获取detail滚动坐标
			this.getTopY = debounce(() => {
				this.topY = []
				this.topY.push(0)
				this.topY.push(this.$refs.param.$el.offsetTop)
				this.topY.push(this.$refs.comment.$el.offsetTop)
				this.topY.push(this.$refs.recommend.$el.offsetTop)
				console.log(this.topY)
			}, 300)
		},
		mounted() {
			this.getTopY()
		},
		methods:{
			imageLoadFished() {
				this.$refs.scroll.refresh()
				// this.getTopY()
			},
			//导航根据点击标题跳转相应内容
			titleClick(index) {
				this.$refs.scroll.scrollToTop(0, -this.topY[index], 300)
				console.log(index)
			},
			// 导航页详情联动
			detailScroll(position) {
				const positionY = -position.y
				let length = this.topY.length
				for (let i = 0; i < length ; i++) {
					if(this.currentIndex !== i && (i < length - 1 && positionY >= this.topY[i]) && positionY < this.topY[i + 1]
							|| (i === length - 1 && positionY >= this.topY[i])) {
						this.currentIndex = i
						this.$refs.detailNav.currentIndex = this.currentIndex
					}
				}
				// 回到顶部判断
				this.isShowTop = (-position.y) > 200
			},
			// 监听加入购物车按钮
			addToCart() {
				this.$store.commit('addCart', '商品1')
				// console.log('addCart')
			}
		}
	}
</script>

<style scoped>
#detail {
	position: relative;
	height:100vh;
	z-index:9;
	background-color: #fff;
}
.detail-nav-bar {
	position: relative;
	z-index:9;
	background-color: #fff;
}
.content {
	height: calc(100% - 44px - 49px)
}

</style>
