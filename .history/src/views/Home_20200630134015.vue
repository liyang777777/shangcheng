<template>
  <div class="All">
    <div ref="wrapper">
      <slot></slot>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Roc></Roc>
    </div>
    <div>
      <Mip></Mip>
    </div>
    <div>
      <Prre></Prre>
    </div>
    <div>
      <Snacks></Snacks>
    </div>
    <div>
      <Dap></Dap>
    </div>
    <div>
      <Fruits></Fruits>
    </div>
    <div>
      <Hgo></Hgo>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav";
import Roc from "../components/Roc";
import Mip from "../components/Mip";
import Prre from "../components/Prre";
import Snacks from "../components/Snacks";
import Fruits from "../components/Fruits";
import Dap from "../components/Dap";
import Hgo from "../components/Hgo";
import BScroll from "better-scroll";

export default {
  name: "",
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },

  components: {
    Nav,
    Roc,
    Mip,
    Prre,
    Snacks,
    Hgo,
    Fruits,
    Dap
  },
  data() {
    return {
      count: "",
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    //初始化滚动组件
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.robeType,
        click: this.click
      });
    },
    //所使用到的函数作用自行查看文档
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  },

  watch: {
    //观察传入的数据，一旦数据发生变化，重新渲染滚动组件
    data() {
      setTimeout(() => {
        // this.scroll.refresh()
        this.refresh();
      }, 20);
    }
  },
  mounted() {
    this.$api
      .getDataHome()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides); //轮播图
        this.$store.commit("setCategory", res.data.category); //中间部分
        this.$store.commit("setRecommend", res.data.recommend); //商品推荐
        this.$store.commit("setFloor1", res.data.floor1); //休闲食品
        this.$store.commit("setFloor2", res.data.floor2); //新鲜水果
        this.$store.commit("setFloor3", res.data.floor3); //营养奶品
        this.$store.commit("setFloorNameFloor1", res.data.floorName.floor1); //休闲食品
        this.$store.commit("setFloorNameFloor2", res.data.floorName.floor2); //新鲜水果
        this.$store.commit("setFloorNameFloor3", res.data.floorName.floor3); //营养奶品
        this.$store.commit("setHotGoods", res.data.hotGoods); //热销商品
        console.log(res.data.floor2);
      })
      .catch(err => {
        console.log(err);
      }),
      setTimeout(() => {
        this._initScroll();
      }, 20);
  },
  watch: {
    //观察传入的数据，一旦数据发生变化，重新渲染滚动组件
    data() {
      setTimeout(() => {
        // this.scroll.refresh()
        this.refresh();
      }, 20);
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>