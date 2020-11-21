<!--  -->
<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
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
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: -5px 2px 3px rgba(0, 0, 0, 0.3);
  background-color: #f6f6f6;
}
</style>