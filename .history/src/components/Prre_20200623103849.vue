<template>
  <!-- 商品推荐 -->
  <div>
    <div v-for="(item,index) in recommend" :key="index">
      <van-card
        num={{item.Price}}
        price={{mallPrice}}
        desc={{goodsName}}
        title={{item.title}}
        thumb={{item.image}}
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
