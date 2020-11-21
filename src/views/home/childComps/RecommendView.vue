<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in Recommends" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 6px solid #eee;
}
.recommend-item {
  flex: 1;
  font-size: 12px;
}
.recommend-item img {
  width: 90%;
  margin-bottom: 10px;
}
</style>