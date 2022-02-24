<template>
  <div class="header">
    <div class="status">{{order.statusName}}</div>
    <div class="desc">{{statusDesc}}</div>
    <div class="no">订单编号：{{order.no}}</div>
  </div>
  <div class="address">
    <div class="left">
      <div class="name">{{order.userName}} {{order.userTel}}</div>
      <div class="content">{{order.province}}{{order.city}}{{order.county}}{{order.address}}</div>
    </div>
    <div class="icon">
      <van-icon name="arrow"></van-icon>
    </div>
  </div>

  <div class="order">
    <div class="title">
      <div class="left"><van-icon name="orders-o" /><span>{{order.createTime}}</span><van-icon name="arrow" /></div>
    </div>
    <div class="goods">
      <goods :goods="goods" v-for="goods in order.goodsList"></goods>
    </div>
  </div>

  <div class="cost">
    <div class="cell">
      <div class="label">运费</div>
      <div class="value">￥{{order.freightMoney}}</div>
    </div>
    <div class="cell">
      <div class="label">商品金额</div>
      <div class="value">￥{{order.totalMoney}}</div>
    </div>
    <div class="cell">
      <div class="label">应付金额</div>
      <div class="value" style="color: #f00;">￥{{order.payMoney}}</div>
    </div>
  </div>

  <a href="tel: 13700000000" class="btn-tel">联系客服</a>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, reactive, computed } from 'vue'
import { getOrderInfo } from '@/api/getData'
import { useRoute } from 'vue-router'
// @ts-ignore
import Goods from './components/goods.vue'

const route = useRoute()
let order = ref<any>({})

let statusDesc = computed(() => {
  if (order.value.status === 1) {
    return '请在规定时间内付款，时间结束后，订单会被取消'
    // return '取消成功，等待您下次的购买'
  }
})

const initData = () => {
  _getOrderInfo()
}

const _getOrderInfo = async() => {
  const data = await getOrderInfo({id: +route.params.id})
  order.value = data.info
}

initData()
</script>
<style lang="scss" scoped>
.header {
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
  .status {
    font-size: 40px;
  }
  .desc {
    margin-top: 10px;
    color: #333;
  }
  .no {
    margin-top: 25px;
    font-size: 36px;
  }
}

.address {
  display: flex;
  align-items: center;
  padding: 20px 20px 40px 20px;
  // background: #fff;
  background: url('@/../public/address_bottom.png') repeat-x bottom #fff;
  background-size: 100px 10px;
  .left {
    flex: 1;
    .name {
      font-size: 28px;
    }
    .content {
      margin-top: 10px;
    }
  }
}

.order {
  border-top: 20px solid #f5f5f5;
  padding: 20px 0;
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
    }
  }
  .order-info {
    padding: 20px;
  }
  .order-btn {
    text-align: right;
    .van-button {
      border-radius: 7px;
    }
  }
}

.cost {
  padding-bottom: 100px;
  .cell {
    display: flex;
    padding: 0 20px;
    margin-bottom: 20px;
    .label {
      flex: 1;
    }
    .value {

    }
  }
}

.btn-tel {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: #fe823f;
  font-size: 32px;
  text-align: center;
  color: #fff;
}
</style>