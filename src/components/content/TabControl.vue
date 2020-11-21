<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === ActiveIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      ActiveIndex: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(index) {
      this.ActiveIndex = index;
      this.$emit("tabclick", index);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  position: sticky;
  top: 44px;
  background: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: red;
}
.active span {
  padding-bottom: 5px;
  border-bottom: 3px solid red;
}
</style>