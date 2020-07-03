<template>
  <div class="All">
    <div class="top">
    <!-- 城市定位 -->
    <div class="city" @click="goCity">
      <div v-if="city !== ''">{{city}} ▼</div>
      <div v-else>定位中 ▼</div>
    </div>
    <!-- 搜索商品框 -->
    <div class="rowing">
      <van-search v-model="value" show-action label placeholder="请输入搜索关键词" @focus="focus">
        <template #action v-if="this.flag === false">
          <div>搜索</div>
        </template>
        <template #action v-else>
          <div @click="cancel">取消</div>
        </template>
      </van-search>
    </div>
</div>
    <!-- 顶部 -->
    <div>
      <Nav></Nav>
    </div>
    <!-- 轮播图 -->
    <div>
      <Roc></Roc>
    </div>
    <!-- 中间部分 -->
    <div>
      <Mip></Mip>
    </div>
    <!-- 商品推荐 -->
    <div>
      <Prre></Prre>
    </div>
    <!-- 休闲食品 -->
    <div>
      <Snacks></Snacks>
    </div>
    <!-- 营养奶品 -->
    <div>
      <Dap></Dap>
    </div>
    <!-- 新鲜水果 -->
    <div>
      <Fruits></Fruits>
    </div>
    <!-- 热销商品 -->
    <div>
      <Hgo></Hgo>
    </div>
    <!-- 下拉刷新 -->
    <div ref="wrapper" class="wrapper">
      <div class="cont">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh>
      </div>
    </div>
    <!-- 底部栏 -->
    <div>
      <buttom></buttom>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav";
import Roc from "../components/Roc";
import Mip from "../components/Mip";
import Prre from "../components/Prre";
import Snacks from "../components/Snacks";
import Fruits from "../components/Fruits";
import Dap from "../components/Dap";
import Hgo from "../components/Hgo";
import BScroll from "better-scroll";
import buttom from "../components/buttom";

export default {
  name: "",
  props: {},

  components: {
    Nav,
    Roc,
    Mip,
    Prre,
    Snacks,
    Hgo,
    Fruits,
    Dap,
    buttom
  },
  data() {
    return {
      count: "",
      isLoading: false,

      refreshing: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  },

  watch: {},
  mounted() {
    this.$api
      .getDataHome()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides); //轮播图
        this.$store.commit("setCategory", res.data.category); //中间部分
        this.$store.commit("setRecommend", res.data.recommend); //商品推荐
        this.$store.commit("setFloor1", res.data.floor1); //休闲食品
        this.$store.commit("setFloor2", res.data.floor2); //新鲜水果
        this.$store.commit("setFloor3", res.data.floor3); //营养奶品
        this.$store.commit("setFloorNameFloor1", res.data.floorName.floor1); //休闲食品
        this.$store.commit("setFloorNameFloor2", res.data.floorName.floor2); //新鲜水果
        this.$store.commit("setFloorNameFloor3", res.data.floorName.floor3); //营养奶品
        this.$store.commit("setHotGoods", res.data.hotGoods); //热销商品
        console.log(res.data.category);
      })
      .catch(err => {
        console.log(err);
      }),
      new BScroll(this.$refs.wrapper, {
        scrollY: true, //上下滑动
        click: true //点击为true才能滑动
      });
    // this.$router.push("Classification");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  height: 670px;
}
</style>