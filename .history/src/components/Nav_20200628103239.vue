<template>
  <!-- 顶部 -->
  <div>
    <!-- 搜索 -->
    <div>
      <Search></Search>
    </div>
    <!-- 城市列表 -->
    <div>
      <City></City>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import City from '../views/city/City'
import Search from '../views/search/Search'
export default {
  name: "",
  props: {},
  components: {
    City,
    Search
  },
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>