<template>
  <div class="search" @click="clickSearch">
    <van-icon name="search"></van-icon>
    <div class="text">搜索</div>
  </div>
  
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
      :key="item.id"
      :goods="item">
    </goods>
    <!-- <van-cell v-for="item in state.list" :key="item" :title="item" /> -->
  </van-list>

  <web-footer></web-footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getIndexData, getGoodsList } from '@/api/getData'
import Goods from '@/components/goods.vue'
import WebFooter from '@/components/web-footer.vue'
import Search from './components/search.vue'
import { Models } from '@/rapper'
import { useRouter } from 'vue-router'

type GoodsListModel = Models['GET/h5/goods/list']['Res']['data']['list']
type adModel = Models['GET/h5/index']['Res']['data']['adList']

const router = useRouter()

let adList = ref<adModel>([])
let iconList = ref<adModel>([])
let loading = ref<boolean>(false)
let finished = ref<boolean>(false)
let goodsList = ref<GoodsListModel>([])
let size = ref(20)
let page = ref(1)


onMounted(() => {
  getData()
})

const getData = async() => {
  const res = await getIndexData()
  adList.value = res.adList
  iconList.value = res.iconList
}

const _getGoodsList = async() => {
  const res = await getGoodsList({
    page: page.value,
    size: size.value
  })
  goodsList.value = [...goodsList.value, ...res.list]
  loading.value = false
  if (res.list.length < size.value) {
    finished.value = true
  } else {
    page.value++
  }
}

const clickSearch = () => {
  router.push({name: 'search'})
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  margin: 20px;
  padding-left: 20px;
  height: 60px;
  background: #f4f4f4;
  .van-icon {
    margin-top: 6px;
    color: #999;
    font-size: 32px;
  }
  .text {
    flex: 1;
    margin-left: 10px;
    font-size: 24px;
    color: #999;
    margin-right: 20px;
  }
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
  background: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  // padding: 0 20px;
  padding-bottom: 100px;
}
</style>
