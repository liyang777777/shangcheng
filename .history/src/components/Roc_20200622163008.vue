<template>
  <div class="box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" />
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
      images: [`http://images.baixingliangfan.cn/advertesPic`]
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