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
    <div>
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="新鲜水果" />
        <van-sidebar-item title="中外名酒" />
        <van-sidebar-item title="营养奶品" />
        <van-sidebar-item title="食品饮料" />
         <van-sidebar-item title="个人护理" />
      </van-sidebar>
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
</style>