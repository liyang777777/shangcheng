<template>
  <!-- 中间部分 -->
  <div>
      <div>
           <div v-for="(item,index) in category" :key="index">
      <van-image round width="10rem" height="10rem" :src="item.category"></van-image>
    </div> 
      </div>
    <div class="name">
      {{item.mallCategoryName}}
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
</style>