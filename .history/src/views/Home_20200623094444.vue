<template>
  <div class="All">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Roc></Roc>
    </div>
     <div>
      <Mip></Mip>
    </div>
     <div>
      <Prre></Prre>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav";
import Roc from "../components/Roc";
import Mip from "../components/Mip"
import Prre from "../components/Prre"
export default {
  name: "",
  props: {},
  components: {
    Nav,
    Roc,
    Mip,
    Prre
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
        this.$store.commit("setCategory",res.data.category)
        
        console.log(res.data.category);
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

</style>