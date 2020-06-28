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
      <div class="ipt">
        <div class="ipt1">
          <van-icon name="pending-payment" size="40" style="width:50px"></van-icon>
        </div>
        <div class="ipt2">
          <van-icon name="tosend" size="40" style="width:50px"></van-icon>
        </div>
        <div class="ipt3">
          <van-icon name="logistics" size="40" style="width:50px"></van-icon>
        </div>
        <div class="ipt4">
          <van-icon name="records" size="40" style="width:50px"></van-icon>
        </div>
        <div class="ipt5">
          <van-icon name="points" size="40" style="width:50px"></van-icon>
        </div>
      </div>
      <span class="box1">待付款</span>
      <span class="box2">待发货</span>
      <span class="box3">待收货</span>
      <span class="box4">评价</span>
      <span class="box5">已完成</span>
    </div>
    <div>
      <div class="van1">
        <van-icon name="records" size="40" style="width:50px"></van-icon>
      </div>
      <div class="van2">
        <van-icon name="points" size="40" style="width:50px"></van-icon>
      </div>
      <div class="van3">
        <van-icon name="cash-back-record" size="40" style="width:50px"></van-icon>
      </div>
      <div class="van4">
        <van-icon name="gift-o" size="40" style="width:50px"></van-icon>
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
}
.ipt {
  display: flex;
}
.ipt1 {
  width: 50px;
  height: 50px;
  margin-left: -320px;
  margin-top: 15px;
}
.ipt2 {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 15px;
}
.ipt3 {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 15px;
}
.ipt4 {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 15px;
}
.ipt5 {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 15px;
}
.box1 {
  margin-left: 25px;
}
.box2 {
  margin-left: 25px;
}
.box3 {
  margin-left: 25px;
}
.box4 {
  margin-left: 25px;
}
.box5 {
  margin-left: 25px;
}
.van1 {
  margin-left: -330px;
}
</style>