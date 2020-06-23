<template>
  <div class="All">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Roc></Roc>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav";
import Roc from "../components/Roc";
export default {
  name: "",
  props: {},
  components: {
    Nav,
    Roc
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .getDataHome()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.All {
  width: 300px;
  height: 400px;
  background: chartreuse;
  margin-left: 70px;
}
</style>