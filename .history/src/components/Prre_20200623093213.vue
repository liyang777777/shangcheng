<template>
  <!-- 商品推荐 -->
  <div>
    <div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb=""
      >
        <template #tags>
          <van-icon name="cart-o" color="yellow" />
          <van-tag plain type="danger" color="red">查看详情<an-tag>
        </template>
      <an-card>
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
 </style>
