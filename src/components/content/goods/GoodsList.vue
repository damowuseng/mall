<template>
  <div class="goods">
<!--    有数据时候用-->
    <goods-list-item v-for="item in goods"
                     :key="item.id"
                     :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }
</style>
