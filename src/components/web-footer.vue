<template>
  <tabbar v-model="active" active-color="#ff2828" inactive-color="#000" @change="change">
    <tabbar-item name="index" icon="home-o">首页</tabbar-item>
    <tabbar-item name="category" icon="apps-o">分类</tabbar-item>
    <tabbar-item name="cart" icon="cart-o">购物车</tabbar-item>
    <tabbar-item name="user" icon="user-o">我的</tabbar-item>
  </tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
// @ts-ignore
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const active = ref<string>('index')

active.value = route.name as string

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

</script>
