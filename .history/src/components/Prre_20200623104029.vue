<template>
  <!-- 商品推荐 -->
  <div>
    <div v-for="(item,index) in recommend" :key="index">
      
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
    recommend() {
      return this.$store.state.recommend;
    }
  }
};
 </script>

<style scoped lang='scss'>
 </style>
