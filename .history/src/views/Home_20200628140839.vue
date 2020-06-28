<template>
  <div class="All">
    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="https://img.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})`}"
        />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
      </template>
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Roc></Roc>
    </div>
    <div>
      <Mip></Mip>
    </div>
    <div>
      <Prre></Prre>
    </div>
    <div>
      <Snacks></Snacks>
    </div>
    <div>
      <Dap></Dap>
    </div>
    <div>
      <Fruits></Fruits>
    </div>
    <div>
      <Hgo></Hgo>
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
    Dap
  },
  data() {
    return {
      count: "",
      isLoading: false
    };
  },
  methods: {},
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
        // console.log(res.data.hotGoods);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>