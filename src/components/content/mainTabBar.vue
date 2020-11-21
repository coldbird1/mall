<!--  -->
<template>
  <div class="">
    <TabBar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="tabbar-item-img" src="~assets/img/tabbar/home.svg" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/home_active.svg"
        />
        <div slot="tabbar-item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="tabbar-item-img" src="~assets/img/tabbar/category.svg" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="tabbar-item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="tabbar-item-img" src="~assets/img/tabbar/shopcart.svg" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/shopcart_active.svg"
        />
        <div slot="tabbar-item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="tabbar-item-img" src="~assets/img/tabbar/profile.svg" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <div slot="tabbar-item-text">我的</div>
      </tab-bar-item>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>