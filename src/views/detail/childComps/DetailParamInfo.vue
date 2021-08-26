<template>
<!--	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">-->
<!--		<div>产品参数信息</div>-->
<!--	</div>-->
	<div>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
		<p>商品参数信息</p>
	</div>
</template>

<script>
	export default {
		name: "DetailParamInfo",
		props: {
			paramInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
		border-bottom: 4px solid #ececec;
	}
	

</style>
