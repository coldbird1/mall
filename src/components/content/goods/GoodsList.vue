<!--  -->
<template>
  <div class="goods">
    <GoodsListItem
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
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
.goods {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2px;
}
</style>