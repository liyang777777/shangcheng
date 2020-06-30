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
  width: 400px;
  height: 50px;
  display: flex;
  
}
.box1 {
  font-size: 20px;
  margin-top: 10px;
}
.box2 {
  font-size: 20px;
  margin-top: 10px;
}
.box3 {
  font-size: 20px;
  margin-top: 10px;
}
.box4 {
  font-size: 20px;
  margin-top: 10px;
}
.box5 {
  font-size: 20px;
  margin-top: 10px;
}
</style>