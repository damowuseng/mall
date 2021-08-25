<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      //监听滚动位置参数
      probeType: {
        type: Number,
        default: 0,
      },
      // 上拉加载更多
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      
      // 监听滚动的位置
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', position => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }
      
      //上拉加载更多
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          // console.log('g更多');
        })
      }
      
    },
    methods: {
      scrollToTop(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
