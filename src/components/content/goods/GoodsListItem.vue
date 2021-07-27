<template>
  <div class="goods-item">
<!--    <img :src="goodsItem" alt="">-->
<!--    <div class="goods-info">-->
<!--      <span>商品描述</span>-->
<!--      <span>收藏数量</span>-->
<!--    </div>-->
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
    <li>测试填充goods</li>
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
    }

  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
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

</style>