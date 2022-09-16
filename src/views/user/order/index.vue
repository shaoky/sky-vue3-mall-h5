<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab" sticky>
    <van-tab title="全部" :name="0"></van-tab>
    <van-tab title="待付款" :name="1"></van-tab>
    <van-tab title="待发货" :name="2"></van-tab>
    <van-tab title="待收货" :name="3"></van-tab>
    <van-tab title="交易成功" :name="4"></van-tab>
  </van-tabs>
  <div class="order-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="_getOrderList"
    >
      <div class="order" v-for="item in orderList">
        <div class="title" @click="$router.push({name: 'orderInfo', params: {id: item.id}})">
          <div class="left"><van-icon name="orders-o" /><span>{{item.createTime}}</span><van-icon name="arrow" /></div>
          <div class="status" :class="{ cancel: item.status === 5 }">{{item.statusName}}</div>
        </div>
        <div class="goods">
          <goods :goods="goods" :orderId="item.id" v-for="goods in item.goodsList" @click="$router.push({name: 'orderInfo', params: {id: item.id}})"></goods>
        </div>
        <div class="order-info">
          <div class="order-total">
            <div class="name">订单总计</div>
            <div class="price">￥{{item.totalMoney}}</div>
          </div>
          <div class="order-btn">
            <van-button type="default" size="small" @click="_cancelOrder(item)" v-if="item.status === 1">取消订单</van-button>
            <van-button type="default" size="small" @click="_deleteOrder(item.id)" v-if="item.status === 5">删除订单</van-button>
            <van-button 
              type="default" 
              size="small" 
              style="color: #ff2828; border: 1px solid #ff2828; margin-left: 10px;"
              v-if="item.status === 1"
              @click="$router.push({name: 'orderPay', params: { id: item.id }})"
            >去付款</van-button>
          </div>
        </div>
      </div>
    </van-list>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Tabs as VanTabs,
  Tab as VanTab,
  Icon as VanIcon,
  Button as VanButton,
  List as VanList,
  Toast
} from 'vant'
import { getOrderList, deleteOrder, cancelOrder } from '@/api/getData'
import Goods from './components/goods.vue'
import pullAllBy from 'lodash/pullAllBy'
import { useRoute } from 'vue-router'
import { Models } from '@/rapper'
type orderModel = Models['GET/h5/order/list']['Res']['data']['list'][0]

const route = useRoute()
let page = ref<number>(1)
let size = ref<number>(10)
let status = ref<number>(0)
let loading = ref<boolean>(false)
let finished = ref<boolean>(false)
let orderList = ref<orderModel[]>([])
let active = ref()

const initData = () => {
  if (route.query.status) {
    status.value = +route.query.status
    active.value = +route.query.status
  }
}

const _getOrderList = async() => {
  const res = await getOrderList({
    page: page.value,
    size: size.value,
    status: status.value === 0 ? undefined : status.value
  })
  orderList.value = [...orderList.value, ...res.list]
  loading.value = false
  if (res.list.length < size.value) {
    finished.value = true
  } else {
    page.value++
  }
}

const onClickTab = (data) => {
  orderList.value = []
  page.value = 1
  finished.value = false
  status.value = data.name
  route.query.status = data.name
  _getOrderList()
}

const _cancelOrder = async(order: orderModel) => {
  await cancelOrder({id: order.id})
  order.status = 5
  order.statusName = '已取消'
}

const _deleteOrder = async(id: number) => {
  await deleteOrder({id})
  pullAllBy(orderList.value, [{id}], 'id')
  Toast.success('删除成功')
  
}

initData()
</script>
<style lang="scss" scoped>
:deep(.van-tabs__wrap) {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99;
}

.order-list {
  padding-top: 80px;
}

.order {
  margin-top: 20px;
  padding: 20px 0 0 0;
  border-bottom: 1px solid #f5f5f5;
  .title {
    position: relative;
    padding: 0 20px;
    .left {
      span {
        margin: 0 10px;
      }
    }
    .status {
      position: absolute;
      top: -5px;
      right: 0;
      width: 110px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: #fff;
      background: #fe823f;
      &.cancel {
        background: #999;
      }
    }
  }
  .order-info {
    padding: 20px;
  }
  .order-total {
    display: flex;
    margin: 20px 0;
    .name {
      flex: 1;
    }
    .price {
      color: #f00;
    }
  }
  .order-btn {
    text-align: right;
    .van-button {
      border-radius: 7px;
    }
  }
}
</style>