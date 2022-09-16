<template>
<!-- :style="{ height: searchHeight }" -->
  <div class="search-popup" :class="{'full-screen': isSearchBtn}" >
    <div class="header">
      <van-icon name="arrow-left" @click="onBack"></van-icon>
      <div class="box">
        <van-icon name="search"></van-icon>
        <van-field v-model="searchValue" placeholder="请输入关键词" clearable @focus="onFocus" />
      </div>
      <div class="btn" v-show="isSearchBtn" @click="onSearch">搜索</div>
    </div>
    <div class="list" v-show="isSearchBtn">
      <div class="item" v-for="item in keywordList">
        <div class="name" @click="onKeyword(item)">{{item.keyword}}</div>
        <div class="count">约{{item.count}}个结果</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, onActivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Field as VanField, Icon as VanIcon } from 'vant'

interface Keyword {
  keyword: string;
  count?: number;
}

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['updateKeyword'])

let searchValue = ref<string>('')
let searchHeight = ref<string>('100px')
let isSearchBtn = ref<boolean>(false)
let keywordList = ref<Keyword[]>([
  {
    keyword: '衣服',
    count: 442
  },
  {
    keyword: '衣服架',
    count: 123
  },
  {
    keyword: '衣服外套',
    count: 154
  },
  {
    keyword: '衣服女',
    count: 43
  },
  {
    keyword: '衣服男',
    count: 334
  },
  {
    keyword: '衣服收纳',
    count: 42
  },
  {
    keyword: '衣服挂钩',
    count: 47
  },
  {
    keyword: '衣服长袖',
    count: 76
  },
  {
    keyword: '衣服男',
    count: 334
  },
  {
    keyword: '衣服收纳',
    count: 42
  },
  {
    keyword: '衣服挂钩',
    count: 47
  },
  {
    keyword: '衣服长袖',
    count: 76
  },
])

const initData = () => {
  searchValue.value = route.query.keyword as string
}

// 搜索获取焦点
const onFocus = () => {
  isSearchBtn.value = true
  searchHeight.value = '100%'
}

//搜索按钮
const onSearch = () => {
  onKeyword({
    keyword: searchValue.value
  })
  isSearchBtn.value = false
}

// 返回
const onBack = () => {
  if (isSearchBtn.value) {
    searchHeight.value = '100px'
    isSearchBtn.value = false
  } else {
    router.back()
  }
}

const onKeyword = (data: Keyword) => {
  router.replace({
    name: 'search',
    query: {
      keyword: data.keyword
    }
  })
  searchValue.value = data.keyword
  isSearchBtn.value = false
  emit('updateKeyword', data.keyword)
}

onActivated(() => {
  initData()
})

initData()
</script>
<style lang="scss" scoped>

.van-cell {
  padding: 0;
  background: #f5f5f5;
}
.van-icon-arrow-left {
  margin: 8px 15px 0 15px;
  font-size: 46px;
}
.search-popup {
  position: relative;
  top: 0;
  width: 100%;
  height: 100px;
  background: #f6f6f6;
  z-index: 999;
  overflow-x: hidden;
  &.full-screen {
    height: 100%;
  }
  .header {
    display: flex;
    height: 100px;
    padding: 0 20px 0 0;
    padding-top: 20px;
    background: #fff;
    font-size: 28px;
    box-sizing: border-box;
    .box {
      display: flex;
      align-items: center;
      flex: 1;
      height: 60px;
      padding: 0 20px;
      background: #f4f4f4;
      .van-icon {
        margin-top: 6px;
        color: #999;
        font-size: 32px;
      }
    }
    .btn {
      width: 70px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      align-items: center;
      margin-left: 20px;
      background: $baseColor;
      border-radius: 5px;
      font-size: 24px;
    }
  }
  .list {
    position: fixed;
    width: 100%;
    background: #fff;
    .item {
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;
      padding-right: 20px;
      height: 80px;
      border-bottom: 1px solid #f0f2f5;
      font-size: 26px;
      color: #232326;
      .name {
        flex: 1;
      }
    }
  }
}
</style>