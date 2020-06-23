<template>
  <div class="box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      images: ["http://images.baixingliangfan.cn/advertesPic]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    slides() {
      return this.$store.slides;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>