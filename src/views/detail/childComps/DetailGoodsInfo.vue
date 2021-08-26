<template>
<!--	<div v-if="Object.keys(detailInfo).length !== 0">-->
	<div>
		<div class="info-text-wrap">
			<div class="text-top-style"></div>
			<div class="desc info-text-desc">商品详情描述信息</div>
			<div class="text-bot-style"></div>
		</div>
		<div class="img-list-wrap" >
			<div class="desc">商品详情描述信息。下边是产品图。目前没有数据哈哈</div>
			<div >
				<img src="" alt="" class="img" @load="imageLoadFished">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
		props: {
			detailInfo: {
				type: Object
			}
		},
		data() {
			return {
				counter: 0,
				imagesLength: 0,
			}
		},
		methods: {
			// 监听判断详情图片是否加载完毕,进行一次回调即可
			imageLoadFished() {
				if(++this.counter === this.imagesLength) {
					this.$emit('imageLoadFished')
				}
			},
			// 获取图的数量。有真实数据就可以用来获取
			// watch: {
			// 	detailInfo() {
			// 		this.imagesLength = this.detailInfo().images.length
			// 	}
			// }
		}
	}
</script>

<style scoped>
	.info-text-wrap {
		position: relative;
	}
	.info-text-wrap .text-top-style {
		width: 60px;
		height: 1px;
		background-color: #333;
		margin-left: 4px;
	}
	.info-text-wrap .text-top-style::before {
		position: absolute;
		left: 4px;
		top: -2.5px;
		display: block;
		content: '';
		width: 5px;
		height: 5px;
		background-color: #333;
	}
	.info-text-wrap .text-bot-style {
		width: 60px;
		height: 1px;
		background-color: #333;
		position: absolute;
		right: 4px;
		bottom: 0;
	}
	.info-text-wrap .text-bot-style::after {
		position: absolute;
		right: 0;
		top: -2.5px;
		display: block;
		content: '';
		width: 5px;
		height: 5px;
		background-color: #333;
	}
	.info-text-wrap .info-text-desc {
		padding: 10px 4px;
	}
	.desc {
		font-size: 12px;
		padding-bottom: 6px;
		line-height: 20px;
		margin: 4px 0;
		text-indent: 10px;
	}
	.img {
		width: 100%;
	}

</style>
