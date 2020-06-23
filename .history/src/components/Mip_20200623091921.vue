<template>
  <!-- 中间部分 -->
  <div>
    <div class="box">
      <div v-for="(item,index) in category" :key="index" class="box1">
        <img :src="item.image" class="img"></img>
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
  width: 375px;
  height: 150px;
  display: flex;
  position: relative;
  top: 20px;
}
.img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;
}
.name {
  
}
</style>