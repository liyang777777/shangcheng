<template>
  <!-- 底部栏 -->
  <div>
    <div>
      <van-tabbar v-model="active" @change="onChange">
        <div class="box1">
          <van-tabbar-item icon="wap-home-o">商城</van-tabbar-item>
        </div>
        <div class="box2">
          <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        </div>
        <div class="box3">
          <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        </div>
        <div class="box4">
          <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </div>
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
    return {
      active: ""
    };
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
.box1 {
  width: 65px;
  height: 10px;
  margin-left: 20px;
  font-size: 18px;
  
}
.box2 {
  width: 65px;
  height: 10px;
  margin-left: 20px;
  font-size: 18px;
  
}
.box3 {
  width: 65px;
  height: 10px;
  margin-left: 20px;
  font-size: 18px;
  
}
.box4 {
  width: 65px;
  height: 10px;
  margin-left: 20px;
  font-size: 18px;
  
}
</style>