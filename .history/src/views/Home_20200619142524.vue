<template>
 <div>
   <div>
     <img src="../assets/log.jpg" alt="" class="img">
   </div>
   <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      注册
    </van-button>
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
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
.img {
  width: 250px;
  height: 300px;
  margin-left: 50px;
  margin-top: 10px;
}
</style>