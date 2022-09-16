<template>
  <van-tabbar v-model="active" active-color="#ff2828" inactive-color="#000" @change="change">
    <van-tabbar-item name="index" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item name="cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { onActivated } from 'vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const active = ref<string>('index')



const initData = () => {
  active.value = route.name as string
}

const change = (name: string) => {
  switch (name) {
    case 'index':
      router.push({name: 'index'})
      break
    case 'category':
      router.push({name: 'category'})
      break
    case 'cart':
      router.push({name: 'cart'})
      break
    case 'user':
        router.push({name: 'user'})
      break
  }
}
onActivated(() => {
  initData()
})
initData()

</script>

<style lang="scss">
.van-tabbar--fixed {
  position: fixed!important;
}
</style>