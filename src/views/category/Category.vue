<template>
	<div class="wrapper">
		<ul>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>内容</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>

</template>

<script>
	import BetterScroll from 'better-scroll'
	// let bs = new BetterScroll('.wrapper', {})

	export default {
		name: "Category",
		mounted() {
			this.scroll  = new BetterScroll('.wrapper', {
				probeType: 3,
				pullUpLoad: true
			})
			// this.scroll.on('scroll', position => {
			// 	console.log(position);
			// })
			this.scroll.on('pullingUp', () => {
				console.log("更多");
			})
		}

	}
</script>

<style scoped>
	.wrapper {
		height: 200px;
		background-color: #5e79ad;
		overflow: hidden;
	}
</style>
