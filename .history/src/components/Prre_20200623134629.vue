<template>
  <!-- 商品推荐 -->
  <div>
    <div class="box">
      <h1>商品推荐</h1>
    </div>
    <div class="box1">
      <div v-for="(item,index) in recommend" :key="index">
        <div>
          <img :src="item.image" class="img" width="115px" height="115px">
        </div>
        <div class="box2">{{item.goodsName}}</div>
        <div class="box3">￥{{item.mallPrice}}</div>
        <div class="box4">￥{{item.price}}</div>
        <van-icon name="cart-o" color="#FFA82E" class="box5">
        <van-tag plain type="danger" class="box6">查看详情</van-tag>
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
.box1 {
  width: 375px;
  height: 100px;
  display: flex;
  margin-left: 30px;
  background: aliceblue;
}
box2 {
  font-size: 14px;
}
</style>
