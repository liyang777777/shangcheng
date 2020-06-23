<template>
  <!-- 中间部分 -->
  <div>
    <div class="box">
      <div v-for="(item,index) in category" :key="index" class="box1">
        <img :src="item.image" class="img">
        <div class="name">{{item.mallCategoryName}}</div>
        
      </div>
      <div>
         <img src="http://images.baixingliangfan.cn/adv" alt="">
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
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 375px;
  height: 200px;
  display: flex;
  position: relative;
  background: coral;
  top: 10px;
}
.img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;
}
.name {
  margin-left: 10px;
}
</style>