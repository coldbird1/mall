<!--  -->
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar-item-img"></slot></div>
    <div v-else><slot name="tabbar-item-img-active"></slot></div>
    <div :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.path == this.$route.path ? { color: this.activeColor } : {};
    },
  },
  watch: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.tabbar-item img {
  height: 29px;
  width: 29px;
}
</style>