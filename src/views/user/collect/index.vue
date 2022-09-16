<template>
  <van-nav-bar title="我的收藏" fixed left-arrow @click-left="onClickLeft" />
  <div class="goods">
    <div class="goods-item" v-for="item in goods" @click="goGoodsInfo(item)">
      <div class="goods-image">
        <img :src="item.imageUrl">
      </div>
      <div class="goods-info">
        <div class="goods-title van-multi-ellipsis--l2">{{item.title}}</div>
        <div class="goods-cell">
          <div class="price">￥{{item.price}}</div>
          <div class="adjust" v-if="Number(item.adjustPrice) !== 0 ">比收藏时{{Number(item.adjustPrice) > 0 ? '降价' : '提高' }}{{item.adjustPrice}}元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getGoodsCollect } from '@/api/getData'
import { useRouter } from 'vue-router'
import { Models } from '@/rapper'

type GoodsCollectModel = Models['GET/h5/goods/collect/list']['Res']['data']['list']

const router = useRouter()

let goods = ref<GoodsCollectModel>([])

const initData = () => {
  getData()
}

const getData = async() => {
  let res = await getGoodsCollect()
  goods.value = res.list
}

const goGoodsInfo = (item: GoodsCollectModel[0]) => {
  router.push({
    name: 'goodsInfo',
    params: {
      id: item.goodsId
    }
  })
}

const onClickLeft = () => {
  history.back()
}

initData()
</script>
<style lang="scss" scoped>
.goods {
  margin-top: 100px;
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