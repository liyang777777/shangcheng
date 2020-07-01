<template>
  <!-- 购物车 -->
  <div>
    <div class="shopping">
      <span>购物车</span>
    </div>
    <div>
      <img src="../../assets/timg.jpg" class="img">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.shopping {
  width: 375px;
  height: 50px;
  background: antiquewhite;
  font-size: 20px;
  text-align: center;
}
.img {
  width: 375px;
  height: 600px;
}
</style>