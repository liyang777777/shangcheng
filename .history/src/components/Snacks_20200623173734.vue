<template>
  <!-- 休闲食品 -->
  <div>
    <div>
      <div class="All" v-for="(item,index) in floor1" :key="index">
        <div>
          <img :src="item.image" class="img" />
        </div>
        <div v-for="(item,index) in floorNameFloor1" :key="index">
          <div>{{item.floorNameFloor1}}</div>
        </div>
      </div>
    
      
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
    floor1() {
      return this.$store.state.floor1;
    },
   
    
    floorNameFloor1() {
      return this.$store.state.floorNameFloor1;
    },
    
   
  }
};
</script>

<style scoped lang='scss'>
.All {
  width: 100px;
  height: 100px;
  font-size: 18px;
  display: flex;
  margin-top: 120px;
  margin-left: 10px;
  color: rgb(243, 25, 25);
}


.img {
  width: 200px;
  height: 200px;
}

</style>