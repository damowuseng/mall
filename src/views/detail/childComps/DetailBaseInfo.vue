<template>
	<div class="base-info">
		<div class="info-title">商品标题············</div>
		<div class="info-price">
			<span class="new-price">￥89.00</span>
			<span class="old-price">34</span>
			<span class="discount-price">活动价</span>
		</div>
		<div class="info-other">
			<span>销量12345</span>
			<span>收藏22人</span>
			<span>72小时发货</span>
		</div>
		<div class="info-service">
			
				<span >退货补运费</span>
				<span >全国包邮</span>
				<span >七天无理由退货</span>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
		props: {
			goods: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.info-title {
		margin: 10px 0;
		padding: 0 4px;
		font-size: 14px;
		line-height: 20px;
	}
	.info-price {
		display: flex;
		padding: 0 4px 10px;
	}
	.new-price {
		color: var(--color-high-text)
	}
	.old-price {
		color: #999;
		font-size: 12px;
		margin: 0 4px;
		text-decoration: line-through;
	}
	.discount-price {
		color: #fff;
		font-size: 12px;
		border-radius: 100px;
		padding: 2px 6px;
		background-color: var(--color-high-text);
	}
	
	.info-other {
		display: flex;
		color: #999;
		font-size: 12px;
		padding: 10px 4px;
		border-bottom: 1px solid #ededed;
		border-top: 1px solid #ededed;
	}
	.info-other span {
		flex: 1;
	}
	.info-service {
		display: flex;
		font-size: 12px;
		color: #333;
		padding: 10px 4px;
		justify-content: space-between;
		border-bottom: 4px solid #ededed;
	}
	.info-service span {
		flex: 1;
	}
	img {
		width: 12px;
		height: 12px;
		vertical-align: middle;
	}
	
</style>
