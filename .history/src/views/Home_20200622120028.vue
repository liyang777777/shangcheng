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
      axios.get(`https://cnodejs.org/api/v1`).then(res => {

      }).catch(err => {
        console.log(err);
      })
    
  
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>