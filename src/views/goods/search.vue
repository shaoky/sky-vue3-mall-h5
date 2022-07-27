<template>
  <search @update-keyword="updateKeyword"></search>
  <screen class="screen" @change="screenChange"></screen>
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
  </van-list>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, onActivated } from 'vue'
import { useRoute } from 'vue-router'
// @ts-ignore
import { List as VanList } from 'vant'
import { getGoodsList } from '@/api/getData'
// @ts-ignore
import Goods from '@/components/goods.vue'
// @ts-ignore
import Search from './components/search-input.vue'
// @ts-ignore
import Screen from './components/search-screen.vue'
import { Direction } from './components/search-screen.vue'
import { Models } from '@/rapper'

type GoodsListModel = Models['GET/h5/goods/list']['Res']['data']['list']

let route = useRoute()

let goodsList = ref<GoodsListModel>([])
let loading = ref<boolean>(false)
let finished = ref<boolean>(false)
let page = ref<number>(1)
let size = ref<number>(10)
let keyword = ref<string>('')

const initData = () => {
  goodsList.value = []
  keyword.value = route.query.keyword as string
  // _getGoodsList()
}

const _getGoodsList = async() => {
  loading.value = true
  const res = await getGoodsList({
    page: page.value,
    size: size.value,
    keyword: keyword.value
  })
  goodsList.value = [...goodsList.value, ...res.list]

  loading.value = false
  if (res.list.length < 10) {
    finished.value = true
  } else {
    page.value++
  }
}

const updateKeyword = (value: string) => {
  page.value = 1
  keyword.value = value
  goodsList.value = []
  finished.value = false
  _getGoodsList()
}

const screenChange = (index: number, value: Direction) => {
  page.value = 1
  goodsList.value = []
  finished.value = false
  _getGoodsList()
}

onActivated(() => {
  if (route.query.keyword !== keyword.value) {
    initData()
    _getGoodsList()
  }
})

initData()
</script>
<style lang="scss" scoped>
.screen {
  margin-top: 20px;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
}

</style>