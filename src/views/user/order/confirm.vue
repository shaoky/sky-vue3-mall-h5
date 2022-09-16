<template class="main">
  <van-nav-bar title="确定订单" fixed left-arrow @click-left="onClickLeft" />
  <div class="address" @click="goAddress" v-if="address">
    <div class="left">
      <div class="name">{{address.userName}} {{address.userTel}}</div>
      <div class="content">{{address.province}}{{address.city}}{{address.county}}{{address.address}}</div>
    </div>
    <div class="icon">
      <van-icon name="arrow"></van-icon>
    </div>
  </div>

  <div class="order">
    <div class="order-title">
      <van-icon name="orders-o"></van-icon>
      订单信息
    </div>
    <div class="goods">
      <div class="goods-item" v-for="item in goodsList">
        <div class="image">
          <img :src="item.imageUrl" alt="">
        </div>
        <div class="goods-info">
          <div class="title">{{item.title}}</div>
          <div class="spec">{{item.skuSpec}}</div>
          <div class="bottom">
            <span class="price">￥{{item.price}}</span>
            <span>x{{item.goodsNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="order-detail">
    
    <div class="cell">
      <div class="babel">商品总额</div>
      <div class="value">￥{{totalMoney}}</div>
    </div>
    <div class="cell">
      <div class="babel">运费</div>
      <div class="value">￥{{deliverMoney}}</div>
    </div>
    <!-- <div class="cell">
      <div class="babel">订单总计</div>
      <div class="value" style="color: #f00;">￥{{payMoney}}</div>
    </div> -->
    <div class="cell">
      <div class="babel">留言</div>
      <div class="value">
        <van-field
          v-model="remark"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入留言"
        />
      </div>
    </div>
  </div>

  <van-submit-bar :price="Number(payMoney)*100" button-text="提交订单" @submit="onSubmit" />

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAddressDefault, getOrderGoodsPreview, getOrderPreview, createOrder } from '@/api/getData'
import { Models } from '@/rapper'

type addressModel= Models['GET/h5/user/address/default']['Res']['data']['info']
type goodsModel= Models['GET/h5/order/preview']['Res']['data']['goodsList']

const route = useRoute()
const router = useRouter()


let address = ref<addressModel>()
let goodsList = ref<goodsModel>([])
let deliverMoney = ref<string>()
let totalMoney = ref<string>()
let payMoney = ref<string>('0')
let remark = ref<string>('')

// let price = computed(() => {
//   return Number(payMoney.value)*100
// })

const initData = async() => {
  const res = await getAddressDefault()
  address.value = res.info

  if (route.query.type === 'goods') {
    const data = await getOrderGoodsPreview({
      goodsId: Number(route.query.goodsId),
      goodsNum: Number(route.query.goodsNum),
      skuId: Number(route.query.skuId) || undefined
    })
    goodsList.value = data.goodsList
    totalMoney.value = data.totalMoney
    deliverMoney.value = data.deliverMoney
    payMoney.value = data.payMoney
  }

  if (route.query.type === 'cart') {
    const data = await getOrderPreview()
    goodsList.value = data.goodsList
    totalMoney.value = data.totalMoney
    deliverMoney.value = data.deliverMoney
    payMoney.value = data.payMoney
  }
}

const goAddress = () => {
  router.push({
    name: 'address'
  })
}

const onSubmit = async() => {
  const res = await createOrder({
    addressId: address.value!.id,
    remark: remark.value,
    goodsList: goodsList.value.map(item => ({
      goodsId: item.id,
      goodsNum: item.goodsNum,
      skuId: item.skuId
    }))
  })

  if (res.orderId) {
    router.replace({
      name: 'orderPay',
      params: {
        id: res.orderId
      }
    })
  }
}

const onClickLeft = () => {
  history.back()
}

initData()
</script>
<style lang="scss" scoped>
.main {
  background: #000;
}

.address {
  display: flex;
  align-items: center;
  margin-top: 100px;
  padding: 10px 20px 40px 20px;
  // background: #fff;
  background: url('@/../public/address_bottom.png') repeat-x bottom #fff;
  background-size: 100px 10px;
  .left {
    flex: 1;
    .name {
      font-size: 36px;
    }
    .content {
      margin-top: 10px;
    }
  }
}

.order {
  border-top: 20px solid #f5f5f5;
  .order-title {
    padding-left: 20px;
    height: 70px;
    line-height: 70px;
  } 
}

.goods-item {
  display: flex;
  height: 180px;
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  .image {
    width: 180px;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .goods-info {
    position: relative;
    flex: 1;
    margin: 0 20px;
    .spec {
      margin-top: 5px;
      color: #999;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100%;
      .price {
        flex: 1;
        color: #f2270c;
      }
      span {
        font-size: 28px;
      }
    }
  }
}

.order-detail {
  padding-bottom: 120px;
  .cell {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    .babel {
      width: 150px;
    }
    .value {
      flex: 1;
      text-align: right;
    }
  }
}

.pay {
  border-top: 20px solid #f5f5f5;
  .pay-title {
    padding: 20px;
  }
}
</style>