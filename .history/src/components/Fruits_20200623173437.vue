<template>
<!-- 新鲜水果 -->
 <div>
 <div class="All" v-for="(item,index) in floor2" :key="index">
        <div>
          <img :src="item.image" class="img" />
        </div>
        <div v-for="(item,index) in floorNameFloor2" :key="index">
          <div>{{item.floorNameFloor2}}</div>
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

   }
 }
</script>

<style scoped lang='scss'>
.All2 {
  width: 100px;
  height: 100px;
  font-size: 18px;
  display: flex;
  margin-top: 150px;
  margin-left: 10px;
  color: rgb(243, 25, 25);
}
</style>