<template>
  <!-- 个人中心 -->
  <div>
    <div class="All">
      <span>会员中心</span>
    </div>
    <div class="conter">
      <van-icon name="setting-o"></van-icon>
      <div>
        <van-image round width="10rem" height="10rem" src="http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%94%A8%E6%88%B7%E5%9B%BE%E6%A0%87&step_word=&hs=0&pn=10&spn=0&di=880&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2103755331%2C3068281572&os=1405342688%2C3151781269&simid=3422888719%2C529861322&adpicid=0&lpn=0&ln=1467&fr=&fmq=1593331966759_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byjt1jg_z%26e3Bv54AzdH3FwAzdH3Fp57ptw5AzdH3Fda8lAzdH3FandnAzdH3Fc0dn0_z%26e3Bip4s&gsm=b&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" />
      </div>

      <span class="box">欢迎:小白</span>
      <van-button type="primary" to="index" class="btn">退出登录</van-button>
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
  computed: {}
};
</script>

<style scoped lang='scss'>
.conter {
  width: 375px;
  height: 200px;
  background: coral;
}
.All {
  width: 375px;
  height: 50px;
  background: aliceblue;
  font-size: 20px;
  text-align: center;
}
.img {
  width: 100px;
  height: 100px;
}
</style>