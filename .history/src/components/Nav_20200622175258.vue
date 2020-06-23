<template>
<!-- 顶部 -->
  <div class="content">
    <div class="box1">
      <form action="/" class="box2">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
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
  methods: {
       onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("搜索");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box2 {
  width: 350px;
  height: 25px;
  
  font-size: 18px;
}
</style>