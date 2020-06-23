<template>
  <!-- 商品推荐 -->
  <div>
    <div class="box">
      <h1>商品推荐</h1>
    </div>
    <div class="box1">
      <div v-for="(item,index) in recommend" :key="index">
        <div>
          <img :src="item.image" class="img" />
        </div>
        <div>{{item.goodsName}}</div>
        <div>{{item.mallPrice}}</div>
        <div>{{item.price}}</div>
        <van-icon name="cart-o" color="#FFA82E" />
        <van-tag plain type="danger">查看详情</van-tag>
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
    recommend() {
      return this.$store.state.recommend;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 200px;
  height: 100px;
  font-size: 18px;
}
</style>
