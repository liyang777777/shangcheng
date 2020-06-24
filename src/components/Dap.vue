<template>
<!-- 营养奶品 -->
 <div>
<div class="All" v-for="(item,index) in floor3" :key="index">
        <div>
          <img :src="item.image" class="img" />
        </div>
        <div v-for="(item,index) in floorNameFloor3" :key="index">
          <div>{{item.floorNameFloor3}}</div>
        </div>
      </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {
floor3() {
      return this.$store.state.floor3;
    },
     floorNameFloor3() {
      return this.$store.state.floorNameFloor3;
    }
   }
 }
</script>

<style scoped lang='scss'>
.All {
  width: 100px;
  height: 100px;
  font-size: 18px;
  display: flex;
  margin-top: 180px;
  margin-left: 10px;
  color: rgb(243, 25, 25);
}
.img {
  width: 200px;
  height: 200px;
}
</style>