<template>
  <!-- 个人中心 -->
  <div>
    <div class="All">
      <span>会员中心</span>
    </div>
    <div>
      <div>
        <img src="../../assets/log1.jpg" class="img" />
      </div>
      <van-icon name="setting-o"></van-icon>
      <span class="box">欢迎:小白</span>
      <van-button type="primary" to="index" class="btn">退出登录</van-button>
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
.All {
  width: 375px;
  height: 50px;
  background: aliceblue;
  font-size: 20px;
  text-align: center;
  
}
</style>