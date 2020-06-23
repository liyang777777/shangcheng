<template>
  <div>
    <Nav></Nav>
    <Roc></Roc>
  </div>
</template>

<script>
import axios from 'axios'
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
    return {}
  },
  methods: {
    getDataHome() {
       this.$api.then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {
    article() {
      return this.$store.articles
    }
  }
};
</script>

<style scoped lang='scss'>
</style>