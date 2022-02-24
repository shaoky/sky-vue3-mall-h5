<template class="main">
  <van-nav-bar title="确定订单" fixed left-arrow @click-left="onClickLeft" />
  <div class="address" @click="goAddress">
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
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入留言"
        />
      </div>
    </div>
  </div>

  <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" />

</template>
<script setup lang="ts">
// @ts-ignore
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  NavBar as VanNavBar,
  Icon as VanIcon,
  Field as VanField,
  SubmitBar as VanSubmitBar
} from 'vant'
import { getAddressDefault, getOrderPreview, createOrder } from '@/api/getData'
const router = useRouter()

let address = ref<any>({})
let goodsList = ref<any>([])
let deliverMoney = ref<string>()
let totalMoney = ref<string>()
let payMoney = ref<string>()
let message = ref<string>()

let price = computed(() => {
  return Number(payMoney.value)*100
})

const initData = async() => {
  const res = await getAddressDefault()
  address.value = res.info

  const data = await getOrderPreview()
  goodsList.value = data.goodsList
  totalMoney.value = data.totalMoney
  deliverMoney.value = data.deliverMoney
  payMoney.value = data.payMoney
}

const goAddress = () => {
  router.push({
    name: 'address'
  })
}

const onSubmit = async() => {
  const res = await createOrder({
    addressId: address.value.id,
    goodsList: goodsList.value.map((item: any) => ({
      goodsId: item.id,
      goodsNum: item.goodsNum
    }))
  })

  if (res.orderId) {
    router.push({
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

.goods {

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
    .title {

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