<template>
  <div class="goods-info">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in goods.bannerList">
        <img :src="item" style="width: 100%;">
      </van-swipe-item>
    </van-swipe>

    <div class="info">
      <div class="price">¥<i>{{goods.price}}</i></div>
      <div class="title">{{goods.title}}</div>
    </div>

    <van-tabs v-model:active="tabValue" sticky>
      <van-tab title="商品介绍">
        <div class="content" v-html="goods.content"></div>
      </van-tab>
      <van-tab title="商品参数">
        <div class="attr-list" v-for="item of goods.attr">
          <div class="name">{{item.name}}</div>
          <div class="value">{{item.value}}</div>
        </div>
      </van-tab>
    </van-tabs>

    <div class="footer">
      <div class="collect" @click="onCollect">
        <van-icon name="like-o" v-if="!goods.isCollect" />
        <van-icon name="like" v-else />
        <span>收藏</span>
      </div>
      <div class="cart">
        <van-icon name="shopping-cart-o" />
        <span @click="goCart">购物车</span>
      </div>
      <div class="btns">
        <div class="add-cart" @click="openCart(true)">加入购物车</div>
        <div class="buy" @click="openCart(false)">立即购买</div>
      </div>
    </div>

    <goods-bay-pop :goods="goods" v-if="goods.id" ref="goodsBayPopRef" @success="_addCart"></goods-bay-pop>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getGoodsInfo, addCart, addGoodsCollect, deleteGoodsCollect } from '@/api/getData'
import { useRoute, useRouter } from 'vue-router'
import GoodsBayPop from './components/goods-bay-pop.vue'
import { 
  Swipe as VanSwipe,
  SwipeItem as VanSwipeItem,
  Tabs as VanTabs,
  Tab as VanTab,
  Icon as VanIcon,
  Toast
} from 'vant'
import { Models } from '@/rapper'

type GoodsInfoModel = Models['GET/h5/goods/info']['Res']['data']['info']

const route = useRoute()
const router = useRouter()

let goods = ref<GoodsInfoModel>({
  id: 0,
  title: '',
  price: '',
  content: '',
  subtitle: '',
  stock: 0,
  bannerList: [],
  imageUrl: '',
  saleCount: 0,
  isCollect: false,
  spec: [],
  attr: [],
  sku: []
})
let tabValue = ref()
let goodsBayPopRef = ref()


const initData = () => {
  _getGoodsInfo()
}

const _getGoodsInfo = async() => {
  const res = await getGoodsInfo({
    id: route.params.id
  })
  goods.value = res.info
  if (goods.value.spec) {
    goods.value.spec.forEach(item => {
      // @ts-ignore
      item.activeName = item.value[0]
    })
  }
  if(res.info.bannerList.length === 0) {
    goods.value.bannerList.push(goods.value.imageUrl)
  }
}

const openCart = (isCart: boolean) => {
  goodsBayPopRef.value.open(isCart)
}

const _addCart = async(data?: any) => {
  if (data.isCart) {
   await addCart({
      goodsId: +route.params.id,
      goodsNum: 1,
      skuId: data ? data.skuId : undefined
    })
    Toast.success('添加成功')
  } else {
    router.push({
      name: 'orderConfirm',
      query: {
        type: 'goods',
        goodsNum: data.goodsNum,
        goodsId: goods.value.id,
        skuId: data ? data.skuId : undefined
      }
    })
  }
  
}

const goCart = () => {
  router.push({
    name: 'cart'
  })
}

const onCollect = async() => {
  let data
  if (goods.value.isCollect === false) {
    data = await addGoodsCollect({id: +route.params.id})
    if (data) {
      goods.value.isCollect = true
    }
  } else {
    data = await deleteGoodsCollect({id: +route.params.id})
    if (data) {
      goods.value.isCollect = false
    }
  }

}

initData()

</script>
<style lang="scss" scoped>
.goods-info {
  padding-bottom: 100px;
}
.info {
  padding: 20px 30px;
  .price {
    font-size: 36px;
    color: #f2270c;
    i {
      margin-left: 5px;
      // font-size: 60px;
      font-style: normal;
    }
  }
  .title {
    margin-top: 15px;
    font-size: 28px;
    line-height: 45px;
    // font-weight: bold;
  }
}
.content {
  margin-top: 20px;
  &:deep(img) {
    max-width: 100%;
    display: block;
  }
}

.attr-list {
  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 60px;
  }
  display: flex;
  font-size: 24px;
  padding: 0 30px;
  margin-bottom: 30px;
  .name {
    width: 300px;
    color: #666;
  }
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0px 1px 2px inset #eee;
  z-index: 999;
  .van-icon {
    display: block;
    font-size: 36px;
  }
  .collect {
    width: 120px;
    text-align: center;
  }
  .cart {
    width: 120px;
    text-align: center;
  }
  .btns {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 26px; 
    div {
      border-radius: 50px;
    }
  }
  .add-cart {
    flex: 1;
    margin: 0 20px 0 20px;
    background: $baseColor;
  }
  .buy {
    flex: 1;
    margin: 0 20px 0 0;
    background: #f2140c;
  }
}

.van-icon-like {
  color: #f2140c;
}
</style>