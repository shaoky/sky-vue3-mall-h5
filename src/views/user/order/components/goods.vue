<template>
  <div class="goods">
    <div class="goods-image">
      <img :src="goods.imageUrl">
    </div>
    <div class="goods-info">
      <div class="goods-title van-multi-ellipsis--l2">{{goods.title}}</div>
      <div class="goods-cell">
        <div class="price">￥{{goods.price}}</div>
        <div class="number">x{{goods.number}}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { withDefaults, defineProps } from 'vue'

export interface GoodsModel {
  id: number;
  title: string;
  imageUrl?: string;
  price: number;
  number: number;
}

let props = withDefaults(defineProps<{
  goods: GoodsModel
}>(), {
  goods: () => ({
    id: 0,
    title: '',
    price: 0,
    number: 0
  })
})
</script>
<style lang="scss" scoped>
.goods {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
}
.goods-image {
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.goods-info {
  margin-left: 20px;
  flex: 1;
  .goods-title {

  }
  .goods-cell {
    margin-top: 35px;
    display: flex;
    .price {
      flex: 1;
    }
    .number {

    }
  }
}
</style>