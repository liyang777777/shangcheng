<template>
  <div class="All">
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
import Mip from "../components/Mip"
import Prre from "../components/Prre"
import Snacks from '../components/Snacks'
import Dap from '../components/Dap'
import Fruits from '../components/Fruits'
import Hgo from '../components/Hgo'  
export default {
  name: "",
  props: {},
  components: {
    Nav,
    Roc,
    Mip,
    Prre,
    Snacks
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .getDataHome()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides);//轮播图
        this.$store.commit("setCategory",res.data.category)//中间部分
        this.$store.commit("setRecommend",res.data.recommend)//商品推荐
        this.$store.commit("setFloor1",res.data.floor1)//休闲食品
        this.$store.commit("setFloor2",res.data.floor2)//新鲜水果
        this.$store.commit("setFloor3",res.data.floor3)//营养奶品
        this.$store.commit("setFloorNameFloor1",res.data.floorName.floor1)
        this.$store.commit("setFloorNameFloor2",res.data.floorName.floor2)
        this.$store.commit("setFloorNameFloor3",res.data.floorName.floor3)
        // console.log(res.data.floorName.floor1);
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