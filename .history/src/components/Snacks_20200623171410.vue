<template>
<!-- 休闲食品 -->
 <div>
 <div>
      <div class="All1" v-for="(item,index) in floor1" :key="index">
        <div>
          <img :src="item.image" class="img1" />
        </div>
        <div v-for="(item,index) in floorNameFloor1" :key="index">
          <div>{{item.floorNameFloor1}}</div>
        </div>
      </div>
      <div class="All2" v-for="(item,index) in floor2" :key="index">
        <div>
          <img :src="item.image" class="img2" />
        </div>
        <div v-for="(item,index) in floorNameFloor2" :key="index">
          <div>{{item.floorNameFloor2}}</div>
        </div>
      </div>
      <div class="All3" v-for="(item,index) in floor3" :key="index">
        <div>
          <img :src="item.image" class="img3" />
        </div>
        <div v-for="(item,index) in floorNameFloor3" :key="index">
          <div>{{item.floorNameFloor3}}</div>
        </div>
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

</style>