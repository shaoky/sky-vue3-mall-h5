<template>
  <div class="goods-item" @click="goGoodsInfo">
    <div class="goods-img">
      <img :src="goods.imageUrl">
    </div>
    <div class="goods-info">
      <div class="goods-title van-multi-ellipsis--l2">{{goods.title}}</div>
      <div class="goods-price">￥{{goods.price}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { useRouter } from 'vue-router'

export interface GoodsModel {
  id: number;
  title: string;
  imageUrl?: string;
  price: string;
}

const router = useRouter()

let props = withDefaults(defineProps<{
  goods: GoodsModel
}>(), {
  goods: () => ({
    id: 0,
    title: '',
    price: ''
  })
})

const goGoodsInfo = () => {
  router.push({
    name: 'goodsInfo',
    params: {
      id: props.goods.id
    }
  })
}

</script>

<style lang="scss" scoped>
.goods-item {
  width: 355px;
  margin: 10px;
  background: #fff;
  .goods-title {
    padding: 0 20px;
    height: 75px;
    font-size: 28px;
  }
  .goods-img {
    img {
      width: 355px;
      height: 355px;
    }
  }
  .goods-price {
    padding: 0 20px;
    margin: 20px 0;
    font-size: 32px;
    color: #f00;
  }
}
</style>
