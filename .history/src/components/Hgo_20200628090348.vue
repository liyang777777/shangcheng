<template>
  <!-- 热销商品 -->
  <div>
    <div class="All">
      <div v-for="(item,index) in hotGoods" :key="index">
        <div>
          <img :src="item.image" class="img" />
        </div>
        <div class="box1">￥{{item.mallPrice}}</div>
        <div class="box2">{{item.name}}</div>
        <div class="box3">￥{{item.price}}</div>
      </div>
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
  computed: {
    hotGoods() {
      return this.$store.state.hotGoods;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>