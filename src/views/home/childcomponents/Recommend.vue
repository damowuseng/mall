<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="recommend-item">
        <a :href="item.recommend">
          <img :src="item.recommend "/>
          <div>{{item.title}}</div>
        </a>
      </div>
<!--    <div class="recommend">推荐信息位置</div>-->
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 10px 0;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-bottom: 8px;
  }
</style>
