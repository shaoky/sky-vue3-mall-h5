<template>
  <search @update-keyword="updateKeyword" v-model:isSearch="isSearch"></search>
  <screen class="screen" @change="screenChange" v-show="!isSearch"></screen>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="_getGoodsList"
    class="goods"
    v-if="!isSearch"
  >
    <goods 
      v-for="item in goodsList"
      :key="item.id"
      :goods="item">
    </goods>
  </van-list>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getGoodsList } from '@/api/getData'
import Goods from '@/components/goods.vue'
import Search from './components/search.vue'
import Screen from './components/screen.vue'
import { Direction } from './components/screen.vue'
import { Models } from '@/rapper'

type GoodsListModel = Models['GET/h5/goods/list']['Res']['data']['list']

let route = useRoute()

let goodsList = ref<GoodsListModel>([])
let loading = ref(false)
let finished = ref(false)
let page = ref(1)
let size = ref(10)
let keyword = ref('')
let isSearch = ref(false)

const initData = () => {
  if (!route.query.keyword) {
    isSearch.value = true
  }
  keyword.value = route.query.keyword as string
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
  isSearch.value = false
  // _getGoodsList()
}

const screenChange = (index: number, value: Direction) => {
  page.value = 1
  goodsList.value = []
  finished.value = false
  _getGoodsList()
}

// onActivated(() => {
//   if (route.query.keyword !== keyword.value) {
//     initData()
//   }
// })

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