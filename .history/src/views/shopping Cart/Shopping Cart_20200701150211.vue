<template>
  <!-- 购物车 -->
  <div>
    <div class="shopping">
      <span>购物车</span>
    </div>
    <div>
      <img src="../../assets/timg.jpg" class="img" />
      <div class="box">您的购物车还是空的哦</div>
      <div>
        <van-button round type="info" class="btn">去购物</van-button>
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
  computed: {}
};
</script>

<style scoped lang='scss'>
.shopping {
  width: 375px;
  height: 50px;
  background: antiquewhite;
  font-size: 20px;
  text-align: center;
}
.img {
  width: 375px;
  height: 300px;
}
.box {
  width: 375px;
  height: 50px;
  font-size: 20px;
  text-align: center;
}
.btn {
  width: 50px;
  height: 50px;
  text-align: center;
}
</style>