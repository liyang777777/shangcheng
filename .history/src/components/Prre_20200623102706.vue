<template>
  <!-- 商品推荐 -->
  <div>
    <div>
      <van-card
        num="Price"
        price="mallPrice"
        desc="goodsName"
        title="推荐商品"
        thumb="image"
      >
        <template #tags>
          <van-icon name="cart-o" color="yellow" />
          <van-tag plain type="danger">查看详情<van-tag>
        </template>
      <van-card>
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
    recommend() {
      return this.$store.state.recommend;
    }
  }
};
 </script>

<style scoped lang='scss'>
 </style>
