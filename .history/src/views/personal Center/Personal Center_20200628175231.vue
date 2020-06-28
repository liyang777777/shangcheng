<template>
  <!-- 个人中心 -->
  <div>
    <div class="All">
      <span>会员中心</span>
    </div>
    <div class="conter">
      <van-icon name="setting-o" size="20"></van-icon>
      <div>
        <img src="../../assets/log1.jpg" class="img" />
      </div>

      <span class="box">欢迎您: 小白</span>
      <div>
        <van-button type="primary" to="index" class="btn">退出登录</van-button>
      </div>
    </div>
    <div class="dv">
      <van-icon name="pending-payment" size="40"></van-icon>
      <van-icon name="tosend" size="40"></van-icon>
      <van-icon name="logistics" size="40"></van-icon>
      <van-icon name="records" size="40"></van-icon>
      <van-icon name="points" size="40"></van-icon>
      <span class="box1">待付款</span>
      <span class="box2">待发货</span>
      <span class="box3">待收货</span>
      <span class="box4">评价</span>
      <span class="box5">已完成</span>
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
.conter {
  width: 375px;
  height: 250px;
  background: coral;
}
.All {
  width: 375px;
  height: 50px;
  background: aliceblue;
  font-size: 20px;
  text-align: center;
}
.img {
  width: 100px;
  height: 100px;
  margin-left: 150px;
}
.van-icon {
  margin-left: 350px;
}
.box {
  margin-left: 150px;
  font-size: 20px;
  font-weight: normal;
}
.btn {
  margin-top: 15px;
  margin-left: 150px;
}
.dv {
  width: 375px;
  height: 100px;
  background: cornsilk;
  display: flex;
  
}
</style>