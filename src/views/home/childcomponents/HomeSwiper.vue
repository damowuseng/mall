<template>
  <swiper>
			<swiper-item v-for="item in banners" v-bind:key="item.id">
				<a :href="item.banner">
					<img :src="item.banner" alt="" @load="imageLoadFished">
				</a>
			</swiper-item>

<!--			有数据时用上边代码。无数据为了调试用下边代码-->
<!--			<swiper-item v-for="n in 4" v-bind:key="n.id">-->
<!--				<div class="sw">{{ n+'轮播图' }}</div>-->
<!--			</swiper-item>-->
	</swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/common/swiper"
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
		data() {
      return {
        isLoad: false
			}
		},
		components: {
      Swiper,
			SwiperItem
    },
		methods: {
			imageLoadFished () {
				// 通过if判断，只需发出一次事件即可
				if(!this.isLoad) {
					this.$emit('bannerImageLoadFished')
					this.isLoad = true
				}
				
			}
		}
  }
</script>

<style scoped>
	.sw {
		width: 100%;
		height: 170px;
		background-color: #666666;
		color: white;
	}
</style>
