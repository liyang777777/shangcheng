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
    return {};
  },
  methods: {
    axios.get
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>