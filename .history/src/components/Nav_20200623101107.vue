<template>
  <!-- 顶部 -->
  <div class="content">
    <div class="box2">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box2 {
  width: 300px;
  height: 25px;
  margin-left: 75px;
  font-size: 18px;
}
</style>