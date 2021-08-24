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
      this.scroll.on('scroll', position => {
        // console.log(position);
        this.$emit('scroll', position)
      })
      //上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        // console.log('g更多');
      })
    },
    methods: {
      scrollTop(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh() && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
