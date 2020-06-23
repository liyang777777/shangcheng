<template>
  <!-- 中间部分 -->
  <div>
    <div v-for="(item,index) in category" :key="index">
      <van-image round width="10rem" height="10rem" :src="item.category1"></van-image>
      <van-image round width="10rem" height="10rem" :src="item.category2"></van-image>
      <van-image round width="10rem" height="10rem" :src="item.category3"></van-image>
      <van-image round width="10rem" height="10rem" :src="item.category4"></van-image>
      <van-image round width="10rem" height="10rem" :src="item.category5"></van-image>
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