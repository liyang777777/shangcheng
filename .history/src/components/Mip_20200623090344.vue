<template>
  <!-- 中间部分 -->
  <div>
    <div class="box">
      <div v-for="(item,index) in category" :key="index" class="box1">
        <image :src="item.image" class="img"></image>
        <div class="name">{{item.mallCategoryName}}</div>
        <div>
          <img :src="item.img">
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
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  
}
.img {
  width: 10px;
  height: 10px;
  margin-left: 10px;
}
</style>