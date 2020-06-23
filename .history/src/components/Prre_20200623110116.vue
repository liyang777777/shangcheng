<template>
  <!-- 商品推荐 -->
  <div>
    <van-card>
      <template #tags>
        <van-icon name="chat-o" color="#FFA82E" />
        <van-tag plain type="danger">查看详情</van-tag>
      </template>
      <div v-for="(item,index) in recommend" :key="index"></div>
    </van-card>
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
