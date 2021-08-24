<template>
  <div class="goods-item">
    <img :src="goodsItem.image" alt="" @load="imageLoadFished">
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="fav">{{goodsItem.fav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + 11111)
        // this.$router.push('/detail/' + this.goodsItem.id)
        },
      imageLoadFished () {
        this.$bus.$emit('imageLoadFished')
        }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .title {
    overflow: hidden;
    text-overline: ellipsis;
    white-space: nowrap;
    margin-top:3px;
  }
  .price {
    color: var(--color-high-text);
    margin-right:20px;
  }
  .fav {
    position: relative
  }
  .fav::before {
    content: "";
    position: absolute;
    left: -14px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }

</style>
