<template>
  <div class="All">
    <div class="recommand-wrap">
      <div class="title">
        <span class="title-hotrec">商品推荐</span>
      </div>
      <div ref="wrapper">
        /* 这里是父盒子*/
        <ul class="cont" ref="cont">
          /* 这里是子盒子，即滚动区域*/
          <li class="cont-item" v-for="item of recommendList" :key="item.id">
            <div class="cont-img">
              <img class="img" :src="item.url" :alt="item.text" />
            </div>
            <div class="cont-dest">{{item.text}}</div>
            <div class="cont-price">
              <span class="price">￥{{item.price}}</span>
              <span>起</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
import BScroll from "better-scroll";

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
</style>