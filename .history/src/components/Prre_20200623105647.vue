<template>
  <!-- 商品推荐 -->
  <div>
    <div v-for="(item,index) in recommend" :key="index">
      <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-icon name="chat-o" color="#FFA82E" />
    <van-tag plain type="danger">标签</van-tag>
  </template>
  
</van-card>
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
