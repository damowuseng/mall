<template>
  <div class="recommend">
<!--    <div v-for="item in recommends">
            <a :href="">
            <img :src="/>
            </a>
        </div>-->
    <div class="recommend">推荐信息位置</div>
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
    height: 80px;
    background-color: lightseagreen;
  }
</style>