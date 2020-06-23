<template>
<!-- 轮播图 -->
  <div class="box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" class="img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);

export default {
  name: "",
  props: {
    
  },
  components: {},
  data() {
    return {
     
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    slides() {
      return this.$store.state.slides;
    }
  }
};
</script>

<style scoped lang='scss'>
.img {
    width: 350px;
    height: 200px;
    margin-left: 60px;
    margin-top: 30px;
   
}
</style>