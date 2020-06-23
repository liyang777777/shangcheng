<template>
  <!-- 中间部分 -->
  <div>
      <div>
          <div v-for="(item,index) in category" :key="index">
            <van-image round width="10rem" height="10rem" :src="item.image"></van-image>
          </div>
          <div class="name">{{item.mallCategoryName}}</div>
      </div>
      <div>
        <img src="" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {

  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
     this.$api
      .getDataHome()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides);
        this.$store.commit("setCategory",res.data.category)
        
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
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