<template>
  <van-nav-bar title="收货地址" fixed left-arrow @click-left="onClickLeft" />
  <div class="address">
    <div class="address-item" v-for="item in addressList">
      <div class="left" @click="onClick(item)">
        <div class="name">{{item.userName}} {{item.userTel}}</div>
        <div class="content"><span class="tag" v-if="item.isDefault">默认</span>{{item.province}}{{item.city}}{{item.county}}{{item.address}}</div>
      </div>
      <div class="operation" @click="$router.push({'name': 'addressInfo', params: {id: item.id}})">编辑</div>
    </div>
    <div class="add" @click="$router.push({'name': 'addressAdd'})">新增地址</div>
  </div>
  <van-empty description="暂无地址" v-if="addressList.length === 0" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAddressList } from '@/api/getData'
import { Models } from '@/rapper/index'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'

type Address = Models['GET/h5/user/address/list']['Res']['data']['list'][0]

let addressList = ref<Address[]>([])
let route = useRoute()
let store = useStore()

const initData = () => {
  _getAddressList()
}

const _getAddressList = async() => {
  const res = await getAddressList()
  addressList.value = res.list
}

const onClick = async(item: Address) => {
  if (route.query.status && route.query.status === '1') {
    store.updateOrderAddressId(item.id)
    history.back()
  }
}

const onClickLeft = () => {
  history.back()
}

initData()
</script>
<style lang="scss" scoped>
.address {
  margin-top: 100px;
  padding-bottom: 80px;
}
.address-item {
  padding: 20px 20px 40px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  .left {
    flex: 1;
    .name {
      font-size: 36px;
    }
    .content {
      margin-top: 15px;
      color: #666;
      font-size: 28px;
      .tag {
        margin: 0 10px 0 0;
        padding: 0 4px;
        border: 1px solid #f2270c;
        font-size: 20px;
        color: #f2270c;
      }
    }
  }
  .operation {
    margin-left: 30px;
    font-size: 28px;
    color: #f2270c;
  }
}

.add {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #f2270c;
  color: #fff;
  font-size: 28px;
}
</style>