<template>
  <div class="goods">
    <div class="goods-item" v-for="item in goods" @click="goGoodsInfo(item)">
      <div class="goods-image">
        <img :src="item.imageUrl">
      </div>
      <div class="goods-info">
        <div class="goods-title van-multi-ellipsis--l2">{{item.title}}</div>
        <div class="goods-cell">
          <div class="price">￥{{item.collectPrice}}</div>
          <div class="adjust" v-if="item.adjustPrice !== 0 ">比收藏时{{item.adjustPrice > 0 ? '降价' : '提高' }}{{item.adjustPrice}}元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { getGoodsCollect } from '@/api/getData'
import Goods from './components/goods.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let goods = ref<any>([])

const initData = () => {
  getData()
}

const getData = async() => {
  let res = await getGoodsCollect()
  goods.value = res.list
}

const goGoodsInfo = (item: any) => {
  router.push({
    name: 'goodsInfo',
    params: {
      id: item.goodsId
    }
  })
}

initData()
</script>
<style lang="scss" scoped>
.goods {
  padding: 20px;
}
.goods-item {
  display: flex;
  margin-bottom: 40px;
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
  flex: 1;
  margin-left: 20px;
  .price {
    color: #f00;
    margin-top: 20px;
  }
}
</style>