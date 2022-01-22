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
  <web-footer></web-footer>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
// @ts-ignore
import WebFooter from '@/components/web-footer.vue'
import { List as VanList } from 'vant'
import { getGoodsList } from '@/api/getData'
// @ts-ignore
import Goods, { GoodsModel } from '@/components/goods.vue'
// @ts-ignore
import Search from './components/search-input.vue'
// @ts-ignore
import Screen from './components/search-screen.vue'
import { Direction } from './components/search-screen.vue'


let goodsList = ref<GoodsModel[]>([])
let loading = ref<boolean>(false)
let finished = ref<boolean>(false)
let page = ref<number>(1)
let size = ref<number>(10)
let keyword = ref<string>('')

const initData = () => {
  // _getGoodsList()
}

const _getGoodsList = async() => {
  loading.value = true
  const res: any = await getGoodsList({
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

initData()
</script>
<style lang="scss" scoped>
.screen {
  margin-top: 20px;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  // margin-top: 100px;
  // padding: 0 20px;
  padding-bottom: 100px;
  background: #f5f5f5;
}

</style>