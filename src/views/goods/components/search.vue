<template>
  <div class="search">
    <div class="header">
      <div class="box">
        <van-icon name="search"></van-icon>
        <van-field v-model="searchValue" placeholder="请输入关键词" clearable autofocus @focus="onFocus" />
      </div>
      <div class="btn" v-show="isSearch" @click="onSearch(searchValue)">搜索</div>
    </div>

    <!-- 搜索结果 -->
    <div class="list" v-if="isSearch && searchValue.length > 0">
      <div class="item" v-for="item in keywordList">
        <div class="name" @click="onSearch(item.keyword)">{{item.keyword}}</div>
        <div class="count">约{{item.count}}个结果</div>
      </div>
    </div>

    <!-- 热门搜索 -->
    <div class="hot-search" v-if="isSearch && searchValue.length === 0">
      <div class="title">热门搜索</div>
      <span v-for="item in searchKeywordList" :key="item.id" @click="onSearch(item.name)">{{item.name}}</span>
      <!-- <div class="clear"></div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Keyword {
  keyword: string;
  count?: number;
}

interface Hot {
  id: number;
  name: string;
}

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['updateKeyword', 'update:isSearch'])
defineProps({
  'isSearch': Boolean
})

let searchValue = ref('')
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

let searchKeywordList = ref<Hot[]>([
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

const initData = () => {
  searchValue.value = route.query.keyword as string || ''
}

// 搜索获取焦点
const onFocus = () => {
  emit('update:isSearch', true)
}

//搜索按钮
const onSearch = async(keyword?: string) => {
  searchValue.value = keyword || ''
  emit('updateKeyword', keyword)
  router.replace({
    name: 'search',
    query: {
      keyword
    }
  })
}

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
.search {
  background: #f6f6f6;
  &.full-screen {
    height: 100%;
  }
  .header {
    display: flex;
    height: 100px;
    padding: 0 20px;
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