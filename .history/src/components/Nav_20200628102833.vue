<template>
  <!-- 顶部 -->
  <div>
    <!-- 搜索 -->
    <div class="box2">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div>
      <City></City>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import City from '../views/city/City'
export default {
  name: "",
  props: {},
  components: {
    City
  },
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
  width: 300px;
  height: 25px;
  margin-left: 80px;
  font-size: 20px;
}
</style>