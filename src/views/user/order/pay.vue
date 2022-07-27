<template>
  <div class="header">
    <div class="title">支付剩余时间</div>
    <div class="cell">
      <span>{{time.minute || '00'}}</span>：<span>{{time.second || '00'}}</span>
      
    </div>
    <div class="cell"  v-if="time.minute === '' && time.second === ''" style="font-size: 12px;">(支付时间已到，请取消重新下单)</div>
    <div class="value">订单应付金额</div>
    <div class="value">￥{{totalMoney}}</div>
  </div>

  <div class="btn" @click="onPay">去支付</div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOrderInfo, payOrder } from '@/api/getData'

const route = useRoute()
const router = useRouter()
let totalMoney = ref()
let time = reactive({
  minute: '',
  second: ''
})

const initData = () => {
  _getOrderInfo()
}

const _getOrderInfo = async() => {
  const res = await getOrderInfo({
    id: +route.params.id
  })
  totalMoney.value = res.info.totalMoney
  const remainingTime = res.info.remainingTime - res.systemTime
  setCountdown(remainingTime)
}

const setCountdown = (n: number) => {
  if (n <= 0) {
    return
  }
  // @ts-ignore
  let minute: any = parseInt(n / 60)
  let second: any = n - minute * 60
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  time.minute = minute
  time.second = second
  n--
  setTimeout(() => {
    setCountdown(n)
  }, 1000)
}

const onPay = async() => {
  const data = await payOrder({id: +route.params.id})
  if (data) {
    router.replace({
      name: 'orderSuccess',
      query: {
        id: +route.params.id
      }
    })
  }
}

initData()
</script>
<style lang="scss" scoped>
.header{
  padding: 30px 0;
  border-bottom: 1px solid #f5f5f5;
  .title{
    font-size: 28px;
    color:#000;
    text-align: center;
  }
  .cell{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    span{
      display: inline-block;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      // background:#fe823f;
      border-radius: 4px;
    }
  }
  .value{
    margin-top: 32px;
    font-size: 32px;
    color:#000;
    text-align: center;
  }
}
.btn {
    width: 670px;
    margin: 0 auto;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 32px;
    color: #fff;
    background: $baseColor;
    border-radius: 8px;
}
</style>