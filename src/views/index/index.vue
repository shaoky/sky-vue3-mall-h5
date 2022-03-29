<template>

  <search class="search"></search>

  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in adList">
        <img :src="item.imageUrl" style="width: 100%;">
      </van-swipe-item>
    </van-swipe>
  </div>

  <div class="nav">
    <div class="item" v-for="item in iconList">
      <img :src="item.imageUrl" alt="">
      <div class="text">{{item.title}}</div>
    </div>
  </div>
  
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="_getGoodsList"
    class="goods"
  >
    <goods 
      v-for="item in goodsList"
      :key="item"
      :goods="item">
    </goods>
    <!-- <van-cell v-for="item in state.list" :key="item" :title="item" /> -->
  </van-list>

  <web-footer></web-footer>
</template>

<script setup lang="ts">
// @ts-ignore
import { ref, onMounted } from 'vue'
import { Swipe as vanSwipe, SwipeItem as vanSwipeItem, List as VanList } from 'vant'
import { getIndexData, getGoodsList } from '@/api/getData'
// @ts-ignore
import Goods from '@/components/goods.vue'
import { adModel } from './interface'
// @ts-ignore
import WebFooter from '@/components/web-footer.vue'
// @ts-ignore
import Search from './components/search.vue'

const count = ref(0)
let adList = ref<Array<adModel>>([])
let iconList = ref<Array<adModel>>([])
let loading = ref<boolean>(false)
let finished = ref<boolean>(false)
let goodsList = ref<any>([])
let size = ref(20)
let page = ref(1)


onMounted(() => {
  getData()
})

const getData = async() => {
  const res: any = await getIndexData({})
  adList.value = res.adList
  iconList.value = res.iconList
}

const _getGoodsList = async() => {
  const res: any = await getGoodsList({
    page: page.value,
    size: size.value
  })
  goodsList.value = [...res.list, ...goodsList.value]
  loading.value = false
  if (res.list.length < size.value) {
    finished.value = true
  } else {
    page.value++
  }
}

</script>

<style lang="scss" scoped>

.search {
  margin: 20px;
}
.nav {
  display: flex;
  margin-top: 20px;
  .item {
    flex: 1;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      display: block;
      margin: 0 auto;
    }
    .text {
      margin-top: 15px;
      color: #999;
      font-size: 24px;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  // padding: 0 20px;
  padding-bottom: 100px;
}
</style>
