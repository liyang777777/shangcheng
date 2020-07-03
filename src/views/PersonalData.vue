<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-cell-group>
      <div class="Photo">
        <div>
          <van-field label="头像" />
        </div>
        <div>
          <van-image
            round
            width="5rem"
            height="5rem"
            src="http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%94%A8%E6%88%B7%E5%9B%BE%E6%A0%87&step_word=&hs=0&pn=12&spn=0&di=1320&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2103755331%2C3068281572&os=1405342688%2C3151781269&simid=3422888719%2C529861322&adpicid=0&lpn=0&ln=1467&fr=&fmq=1593331966759_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byjt1jg_z%26e3Bv54AzdH3FwAzdH3Fp57ptw5AzdH3Fda8lAzdH3FandnAzdH3Fc0dn0_z%26e3Bip4s&gsm=b&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
          />
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="userInfo.username" label="用户名" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="userInfo.nickname" label="昵称" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="userInfo.gender" label="性别" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="mail" label="邮箱" />
    </van-cell-group>

    <van-field is-link @click="showPopup" label="出生年月" v-model="value">
      
    </van-field>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="show = false"
        @confirm="confirm"
      />
    </van-popup>

    <van-button type="primary" size="large" class="preservation" @click="save">保存</van-button>
    <van-button type="danger" size="large">取消</van-button>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      userInfo: {},
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: "",
      show: false,
      mail: "",
      year: "",
      month: "",
      day: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    showPopup() {
      this.show = true;
    },
    confirm(value) {
      this.show = false;
      this.value = dayjs(value).format("YYYY年MM月DD日");
      this.year = dayjs(value).format("YYYY");
      this.month = dayjs(value).format("MM");
      this.day = dayjs(value).format("DD");
      //   console.log(this.year)
      //   console.log(this.month)
      //   console.log(this.day)
    },
    save() {
      this.$api
        .saveUser({
          gender: this.userInfo.gender,
          year: this.year,
          month: this.month,
          day: this.day,
          nickname: this.userInfo.nickname
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInfo = res.userInfo;
        this.value =
          this.userInfo.year +
          "年" +
          this.userInfo.month +
          "月" +
          this.userInfo.day +
          "日";
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Photo {
  display: flex;
  align-items: center;
  padding-right: 10px;
}
.preservation {
  margin-bottom: 20px;
  margin-top: 20px;
}
.van-button--large {
  width: 70%;
  margin-left: 15%;
}
.born {
  display: flex;
  align-items: center;
}
.van-icon-arrow:before {
  margin-top: 10px;
}
.year {
  width: 19vw;
}
</style>