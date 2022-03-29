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
      <van-tab title="规格参数">
        待开发
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
        <div class="add-cart" @click="_addCart">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
    
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, reactive, toRefs, defineExpose } from 'vue'
import { getGoodsInfo, addCart, addGoodsCollect, deleteGoodsCollect } from '@/api/getData'
import { useRoute, useRouter } from 'vue-router'
import { 
  Swipe as VanSwipe,
  SwipeItem as VanSwipeItem,
  Tabs as VanTabs,
  Tab as VanTab,
  Icon as VanIcon,
  Toast
} from 'vant'

interface GoodsInfoModel {
  id: number
  title: string
  price: string
  content: string
  bannerList: string[]
  imageUrl: string
  saleCount: number
  isCollect: boolean
}

const route = useRoute()
const router = useRouter()

let goods = ref<GoodsInfoModel>({
  id: 0,
  title: '',
  price: '',
  content: '',
  bannerList: [],
  imageUrl: '',
  saleCount: 0,
  isCollect: false
})
let tabValue = ref()

const initData = () => {
  _getGoodsInfo()
}

const _getGoodsInfo = async() => {
  const res: any = await getGoodsInfo({
    id: route.params.id
  })
  goods.value = res.info
  if(res.info.bannerList.length === 0) {
    goods.value.bannerList.push(goods.value.imageUrl)
  }
}

const _addCart = async() => {
  const res = await addCart({
    goodsId: +route.params.id,
    goodsNum: 1
  })
  Toast.success('添加成功')
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