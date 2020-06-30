<template>
  <!-- 商品分类 -->
  <div>
    <div class="label">
      <span>商品分类</span>
    </div>
    <div class="box">
      <div class="box1">
        <span>新鲜水果</span>
      </div>
      <div class="box2">
        <span>热带水果</span>
      </div>
      <div class="box3">
        <span>时令水果</span>
      </div>
      <div class="box4">
        <span>苹果/梨</span>
      </div>
      <div class="box5">
        <span>柑橘橙柚</span>
      </div>
    </div>
    <div class="spa">
      <div class="spa1">
        <span>中外名酒</span>
      </div>
      <div class="spa2">
        <span>营养奶品</span>
      </div>
      <div class="spa3">
        <span>食品饮料</span>
      </div>
      <div class="spa4">
        <span>个人护理</span>
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
  computed: {}
};
</script>

<style scoped lang='scss'>
.label {
  width: 375px;
  height: 50px;
  background: aquamarine;
  font-size: 20px;
  text-align: center;
}
.box {
  width: 375px;
  height: 50px;
  display: flex;
  background: blueviolet;
}
.box1 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box2 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box3 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box4 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box5 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.spa {
  width: 75px;
  height: 300px;
  font-size: 18px;
}
</style>