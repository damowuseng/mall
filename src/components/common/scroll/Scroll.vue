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
      probeType: {
        type: Number,
        default: 0,
      },
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
      scrollTop(x, y, time=500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
