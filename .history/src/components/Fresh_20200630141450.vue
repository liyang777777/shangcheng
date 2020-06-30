<template>
  <!-- 新鲜水果 -->
  <div>
    <div>
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="wap-home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>