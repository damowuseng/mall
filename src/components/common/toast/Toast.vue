<template>
	<div class="toast" v-show="true">
	
	</div>
</template>

<script>
	export default {
		name: "Toast",
		props: {
			message: {
				type: String,
				default: ""
			},
		}
	}
</script>

<style scoped>
.toast {
	positon:fixed;
	top: 50%;
	left: 50%;
	padding: 8px;
	transform: translate(-50%, -50%);
	color:#fff;
	background-color: rgba(0,0,0,.6);
}
</style>
