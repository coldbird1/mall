<!--  -->
<template>
  <div id="home">
    <NavBar class="home-nav">
      <h3 slot="center">购物街</h3>
    </NavBar>
    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <HomeSwiper :banners="banners" />
      <RecommendView :Recommends="recommends" />
      <FeatureView />
      <TabControl :titles="['流行', '新款', '精选']" @tabclick="tabclick" />
      <GoodsList :goods="goods[currentType].list" />
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    GoodsList,
    RecommendView,
    FeatureView,
    TabControl,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     *事件监听方法
     */
    tabclick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";

          break;
        case 1:
          this.currentType = "new";

          break;
        case 2:
          this.currentType = "sell";

          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    },
    /**
     * 网络请求方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
#home {
  height: 100vh;
  position: relative;
}
.tab-control {
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>