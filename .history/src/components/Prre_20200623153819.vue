<template>
  <div>
    <!-- 商品推荐 -->
    <div>
      <div class="box">
        <h1>商品推荐</h1>
      </div>
      <div class="box1">
        <div v-for="(item,index) in recommend" :key="index">
          <div>
            <img :src="item.image" class="img" width="115px" height="115px" />
          </div>
          <div class="box2">{{item.goodsName}}</div>
          <div class="box3">￥{{item.mallPrice}}</div>
          <div class="box4">￥{{item.price}}</div>
          <div class="box5">
            <van-icon name="cart-o" color="#FFA82E" />
            <van-tag plain type="danger">查看详情</van-tag>
          </div>
        </div>
      </div>
    </div>
    <!-- 休闲食品 -->
    <div>
      <div class="All" v-for="(item,index) in floor1" :key="index">
        <div>
          <img :src="item.image" class="img1" />
        </div>
        <div>{{item.floorName}}</div>
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
    recommend() {
      return this.$store.state.recommend;
    },
    floor1() {
      return this.$store.state.floor1;
    },
    floor2() {
      return this.$store.state.floor2;
    },
    floor3() {
      return this.$store.state.floor3;
    },
    floorName() {
      return this.$store.state.floorName;
    },
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 200px;
  height: 100px;
  font-size: 18px;
}
.box1 {
  width: 375px;
  height: 100px;
  display: flex;
  margin-left: 30px;
  background: aliceblue;
}
.box2 {
  font-size: 14px;
}
.box4 {
  margin-top: -20px;
  margin-left: 60px;
  text-decoration: line-through;
}
.All {
  width: 200px;
  height: 100px;
  font-size: 18px;
  margin-top: 120px;
  margin-left: 130px;
  color:rgb(243, 25, 25);
}
</style>
