import BackTop from "../components/common/backTop/BackTop";

export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return {
			isShowTop: false
		}
	},
	methods: {
		backClick() {
			this.$refs.scroll.scrollToTop(0,0)
		},
	}
}
