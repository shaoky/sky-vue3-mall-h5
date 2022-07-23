<template>
  <div class="search" @click="clickSearch" v-if="!isShow">
    <Icon name="search"></Icon>
    <div class="text">搜索</div>
  </div>
  <div class="search-popup" v-if="isShow">
  
    <div class="header">
      <Icon name="arrow-left" @click="onBack"></Icon>
      <div class="box">
        <Icon name="search"></Icon>
        <field v-model="searchValue" placeholder="请输入关键词" autofocus />
      </div>
      <div class="btn" @click="onSearch">搜索</div>
    </div>
    <div class="hot-search">
      <div class="title">热门搜索</div>
      <span v-for="item in searchKeywordList" :key="item.id" @click="onHotSearch(item)">{{item.name}}</span>
      <!-- <div class="clear"></div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon, Field } from 'vant'

interface Keyword {
  id: number;
  name: string;
}

const router = useRouter()

let isShow = ref<boolean>(false)
let searchValue = ref<string>()
let searchKeywordList = ref<Keyword[]>([
  {
    id: 1,
    name: '葡萄酒',
  },
  {
    id: 2,
    name: '衣服',
  },
  {
    id: 3,
    name: '餐桌',
  },
  {
    id: 4,
    name: '篮球',
  },
  {
    id: 5,
    name: '游戏显卡',
  },
  {
    id: 6,
    name: '羽毛球拍',
  },
  {
    id: 7,
    name: '洗面奶',
  },
  {
    id: 8,
    name: '手机',
  }
])

window.addEventListener('popstate', (e) => {
  if (e.state.source === 'search') {
    isShow.value = true
  } else {
    isShow.value = false
  }
})

const clickSearch = () => {
  history.pushState({
    source: 'search'
  }, '', '?search')
  isShow.value = true
  document.querySelector('body')!.setAttribute('style', 'position: fixed')
}

const onSearch = () => {
  document.querySelector('body')!.setAttribute('style', 'position: static')
  router.push({name: 'search', query: {keyword: searchValue.value}})
}

const onBack = () => {
  router.go(-1)
  document.querySelector('body')!.setAttribute('style', 'position: static')
}

const onHotSearch = (data: Keyword) => {
  document.querySelector('body')!.setAttribute('style', 'position: static')
  router.push({
    name: 'search',
    query: {
      keyword: data.name
    }
  })
}


</script>
<style lang="scss" scoped>
.van-cell {
  margin: 3px 0 0 10px;
  background: none;
  padding: 0;
  font-size: 24px;
}
.van-field__control {
  color: #f00;
}
.van-icon-arrow-left {
  margin: 8px 15px 0 15px;
  font-size: 46px;
}

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

.search-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  z-index: 999;
  overflow-x: hidden;
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
}

.hot-search {
  padding: 20px;
  background: #fff;
  .title {
    font-size: 30px;
    color: #232326;
    margin-bottom: 20px;
  }
  span {
    float: left;
    margin: 0 20px 20px 0;
    padding: 0 20px;
    height: 52px;
    line-height: 52px;
    font-size: 24px;
    color: #666;
    background: #f4f4f4;
    border-radius: 10px;
  }
  &::after {
    @include afterClearBoth;
  }
}
</style>