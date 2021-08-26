<template>
<!--	<div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">-->
	<div class="detail-shop-info">
		<div class="flex shop-name-info">
			<img src="" alt="" class="shop-img">
			<div>店铺名</div>
		</div>
		<div class="flex shop-other-info">
			<div class="flex shop-other-item shop-other-sell">
				<div>
					<p class="f16">6.9万</p>
					<p>总销量</p>
				</div>
				<div>
					<p class="f16">22</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="shop-other-item shop-other-right">
				<div >
					<div>
						描述相符&ensp;
						<span class="score">4.7</span>
						<span class="score-bg">高</span>
					</div>
					<div>
						价格合适&ensp;
						<span class="score">4.7</span>
						<span class="score-bg">低</span>
					</div>
					<div>
						质量满意&ensp;
						<span class="score">4.7</span>
						<span class="score-bg">高</span>
					</div>
				</div>
			</div>
		</div>
		<div class="enter-shop-wrap">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailShopInfo"
	}
</script>

<style scoped>
	.f16 {
		font-size: 16px;
	}
	.shop-name-info {
		align-items: center;
		margin: 20px 10px;
	}
	.shop-name-info .shop-img {
		border-radius: 100%;
		width: 50px;
		height: 50px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.shop-other-info {
		font-size: 12px;
		align-items: center;
		line-height: 22px;
	}
	.shop-other-info .shop-other-item {
		flex: 1;
	}
	.shop-other-info .shop-other-sell {
		border-right: 1px solid #ececec;
	}
	.shop-other-info .shop-other-sell div {
		flex: 1;
		text-align: center;
	}
	.shop-other-info .shop-other-right {
		padding-left: 40px;
	}
	.shop-other-info .shop-other-right .score {
		display: inline-block;
		width: 30px;
		color: #006666;
	}
	.shop-other-info .shop-other-right .score.active {
		color: #880000;
	}
	.shop-other-info .shop-other-right .score-bg {
		background-color: #006666;
		color: #fff;
		padding: 1px 4px;
		font-size: 12px;
	}
	.shop-other-info .shop-other-right .score-bg.active {
		background-color: #880000;
	}
	.enter-shop-wrap {
		text-align: center;
	}
	.enter-shop-wrap .enter-shop {
		display: inline-block;
		background-color: #f2f2f2;
		font-size: 12px;
		padding: 6px 30px;
		border-radius: 100px;
		margin: 10px;
	}

</style>
