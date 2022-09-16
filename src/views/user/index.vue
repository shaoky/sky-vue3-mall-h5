<template>
  <div class="header">
    <div class="user-info">
      <div class="user-imgs">
        <img :src="user.photo">
      </div>
      <div class="user-name">{{user.name}}</div>
    </div>
    
    <div class="setting">
      <van-icon name="setting-o" @click="$router.push({name: 'userSet'})" />
    </div>
  </div>
  <div class="my-order">
    <div class="cell">
      <div class="label">我的订单</div>
      <div class="value" @click="$router.push({name: 'order'})">
        所有订单<van-icon name="arrow" />
      </div>
    </div>
    <div class="status">
      <div class="item" @click="$router.push({name: 'order', query: { status: 1 }})">
        <van-icon name="credit-pay"/>
        <div class="content">待付款</div>
      </div>
      <div class="item" @click="$router.push({name: 'order', query: { status: 2 }})">
        <van-icon name="peer-pay" />
        <div class="content">待发货</div>
      </div>
      <div class="item" @click="$router.push({name: 'order', query: { status: 3 }})">
        <van-icon name="debit-pay" />
        <div class="content">待收货</div>
      </div>
      <div class="item" @click="$router.push({name: 'order', query: { status: 4 }})">
        <van-icon name="sign" />
        <div class="content">交易完成</div>
      </div>
      <!-- <div class="item" @click="$router.push({name: 'order', query: { status: 1 }})">
        <van-icon name="cash-on-deliver" />
        <div class="content">退款/售后</div>
      </div> -->
    </div>
  </div>
  <div class="bg"></div>
  <div class="cells">
    <!-- <div class="item" @click="$router.push({path:'/user/coupon/index'})">
      <div class="label">
        <i class="iconfont icon-youhuiquan"></i>
        <div class="content">我的优惠券</div>
      </div>
      <i class="iconfont icon-more"></i>
    </div> -->
    <div class="item" @click="$router.push({name:'collect'})">
      <div class="label">
        <!-- <i class="iconfont icon-dizhi"></i> -->
        <div class="content">我的收藏</div>
      </div>
      <i class="iconfont icon-more">
        <van-icon name="arrow" />
      </i>
    </div>
    <div class="item" @click="$router.push({name:'address'})">
      <div class="label">
        <!-- <i class="iconfont icon-dizhi"></i> -->
        <div class="content">地址管理</div>
      </div>
      <i class="iconfont icon-more">
        <van-icon name="arrow" />
      </i>
    </div>
    <div class="item">
      <div class="label">
        <!-- <i class="iconfont icon-kefu"></i> -->
        <div class="content">服务热线</div>
      </div>
      <div class="value">123456789</div>
    </div>
  </div>
  <web-footer></web-footer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import WebFooter from '@/components/web-footer.vue'
import { Icon as VanIcon } from 'vant'
import { getUserInfo } from '@/api/getData'

let user = ref({
  photo: '',
  name: ''
})

const initData = () => {
  _getUserInfo()
}

const _getUserInfo = async() => {
  const data = await getUserInfo()
  user.value = data.user
}

initData()
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  margin-top: 32px;
  padding:0 24px;
  .user-info {
    margin: 0 auto;
    .user-imgs {
      img{
        margin: 0 auto;
        height: 120px;
        width: 120px;
        display: block;
        border-radius: 50%;
      }
    }
    .user-name {
      margin-top: 20px;
      font-size: 28px;
      color: #000;
      text-align: center;
    }
  }
  .setting {
    position: absolute;
    top: 0;
    right: 35px;
    width: 32px;
    height: 32px;
    font-size: 40px;
  }
}
.my-order {
  margin-top: 44px;
  padding: 0 24px;
  .cell {
    display: flex;
    justify-content: space-between;
    .label {
      font-size: 28px;
      color:#000;
    }
    .value {
      font-size: 28px;
      color:#666;
    }
  }
  .status {
    display: flex;
    padding: 38px 0 32px;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .van-icon {
        font-size: 54px;
      }
      .content {
        margin-top: 20px;
        font-size: 24px;
        color:#666;
      }
    }
  }
}
.bg {
  height: 20px;
  background:#f5f5f5;
}
.cells {
  padding: 0 24px;
  .item {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #f5f5f5;
    .label {
      flex: 1;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 28px;
        margin-right: 18px;
        color: #ff843a;
      }
      .content{
        font-size: 28px;
        color:#000;
      }
    }
    .value {
      font-size: 28px;
      color:#999;
      padding-right: 10px;
    }
  }
}
</style>