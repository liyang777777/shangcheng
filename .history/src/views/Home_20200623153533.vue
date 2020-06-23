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
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav";
import Roc from "../components/Roc";
import Mip from "../components/Mip"
import Prre from "../components/Prre"
export default {
  name: "",
  props: {},
  components: {
    Nav,
    Roc,
    Mip,
    Prre
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
        this.$store.commit("setFloor1",res.data.floor1)
        this.$store.commit("setFloor2",res.data.floor2)
        this.$store.commit("setFloor3",res.data.floor3)
        this.$store.commit("setFloorName",res.data.floorName)
        console.log(res.data.floorName);
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