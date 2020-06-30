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
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import Citrus from '../../components/Citrus';
import Personacl from '../../components/Personacl'
import Tropical from '../../components/Tropical'
import Season from '../../components/Season'
import Pear from '../../components/Pear'
import Nutritious  from '../../components/Nutritious '
import Fresh from '../../components/Fresh'
import Food  from '../../components/Food '
import Famous from '../../components/Famous'
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
.box1:hover {
  color: red;
}
.box2 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box2:hover {
  color: red;
}
.box3 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box3:hover {
  color: red;
}

.box4 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box4:hover {
  color: red;
}
.box5 {
  width: 75px;
  height: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}
.box5:hover {
  color: red;
}
.spa {
  width: 75px;
  height: 667px;
  font-size: 18px;
  background: cyan;
}
.spa1 {
  width: 75px;
  height: 50px;
}

.spa2 {
  width: 75px;
  height: 50px;
  margin-top: 10px;
}
.spa3 {
  width: 75px;
  height: 50px;
  margin-top: 10px;
}
.spa4 {
  width: 75px;
  height: 50px;
  margin-top: 10px;
}
</style>