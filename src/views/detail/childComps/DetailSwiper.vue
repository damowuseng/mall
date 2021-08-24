<template>
	<div class="detail-swiper">
		<swiper>
			<swiper-item v-for="n in 5" :key="n.id" class="s-item">{{n}}轮播图</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper'
	
	export default {
		name: "DetailSwiper",
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			topImages: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.s-item {
		height: 200px;
		background-color: #8bce9c;
	}
</style>
