<!--  -->
<template>
  <div class="goods-item">
    <div><img :src="goodsItem.show.img" alt="" /></div>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div class="price">{{ goodsItem.price }}</div>
      <div class="collect">{{ goodsItem.cfav }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
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
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
}
.goods-info .price {
  color: var(--color-high-text);
  position: absolute;
  bottom: 0;
  left: 20%;
}
.goods-info .collect {
  position: absolute;
  bottom: 0;
  right: 20%;
}
.goods-info .collect::before {
  content: "";
  width: 14px;
  height: 14px;
  left: -15px;
  top: -1px;
  position: absolute;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>