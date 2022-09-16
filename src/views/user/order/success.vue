<template>
  <div class="header">
    <div class="title">订单支付成功</div>
    <div class="text">
      <van-button type="default" size="small" @click="$router.replace({name: 'orderInfo', params: {id: Number($route.query.id)}})">查看订单详情</van-button>
      <van-button type="default" size="small" @click="$router.push('/')">返回首页</van-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header{
  padding: 30px 0;
  .title{
    font-size: 36px;
    color:#000;
    text-align: center;
  }
  .text {
    margin-top: 100px;
    button {
      flex: 1;
      margin: 0 100px;
    }
  }
}
</style>