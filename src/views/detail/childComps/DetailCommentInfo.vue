<template>
	<div>
		<h2>~~~~~~~~~~~~~~~~~~~~~~</h2>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
		<p>此处是评论信息</p>
	</div>
	
<!--	<div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0">-->
<!--		<div class="comment-title flex">-->
<!--			<div>用户评价</div>-->
<!--			<div>更多</div>-->
<!--		</div>-->
<!--		<div v-for="item in commentInfo">-->
<!--			<div class="comment-user-info">-->
<!--				<span><img :src="item.user.avatar" alt="" class="avatar"></span>-->
<!--				<span>{{item.user.uname}}</span>-->
<!--			</div>-->
<!--			<div class="comment-text">{{item.content}}</div>-->
<!--			<div class="comment-goods-info">-->
<!--				<span class="comment-time">{{item.created | showDate}}</span>-->
<!--				<span>{{item.style}}</span>-->
<!--			</div>-->
<!--			<div class="flex">-->
<!--				<div class="comment-info-images" v-for="item in item.images">-->
<!--					<img :src="item" alt="">-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
</template>

<script>
	export default {
		name: "DetailCommentInfo",
		props: {
			commentsInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		filters: {
			//对时间格式化。用法{{ time_stamp | formatDate}}
			formatDate(time_stamp) {
				// time_stamp = 1629886136;
				let date = new Date(parseInt(time_stamp) * 1000).toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai',hour12: false});
				return date
			}
	}
	}
</script>

<style scoped>
p {
	color: #ff5777;
}
/*.comment-info-wrap {*/
/*	padding: 0 8px;*/
/*	font-size: 14px;*/
/*	border-bottom: 4px solid #ececec;*/
/*}*/
/*.comment-info-wrap .comment-title {*/
/*	justify-content: space-between;*/
/*	border-bottom: 1px solid #ececec;*/
/*	padding: 10px 4px;*/
/*}*/
/*.comment-info-wrap .comment-user-info {*/
/*	padding: 10px 0;*/
/*}*/
/*.comment-info-wrap .comment-user-info .avatar {*/
/*	width: 40px;*/
/*	height: 40px;*/
/*	border-radius: 100%;*/
/*	margin-right: 10px;*/
/*	vertical-align: middle;*/
/*}*/
/*.comment-info-wrap .comment-text {*/
/*	line-height: 20px;*/
/*}*/
/*.comment-info-wrap .comment-goods-info {*/
/*	color: #999;*/
/*	margin: 4px 0;*/
/*}*/
/*.comment-info-wrap .comment-goods-info .comment-time {*/
/*	margin-right: 10px;*/
/*}*/
/*.comment-info-wrap .comment-info-images img {*/
/*	width: 60px;*/
/*	height: 60px;*/
/*	margin-right: 6px;*/
/*}*/

</style>
