<template>
  <!-- 热销商品 -->
  <div>
    <div>
      <div v-for="(item,index) in hotGoods" :key="index">
        <div>{{item.price}}</div>
        <div>{{item.mallPrice}}</div>
        <div>{{item.name}}</div>
        <div>
          <img :src="item.image" class="img" />
        </div>
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