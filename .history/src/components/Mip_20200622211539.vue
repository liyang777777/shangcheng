<template>
  <!-- 中间部分 -->
  <div>
    <div class="box">
      <div v-for="(item,index) in category" :key="index" class="box1">
        <van-image round width="10rem" height="10rem" :src="item.image" class="img"></van-image>
        <div class="name">{{item.mallCategoryName}}</div>
        <div>
          <img :src="item.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  
}
.img {
  width: -5px;
  height: -5px;
  margin-left: 10px;
}
</style>