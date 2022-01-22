<template>
  <div class="main">
    <van-sidebar v-model="active" @change="onChange">
      <van-sidebar-item :title="item.title" v-for="item in categoryList" />
    </van-sidebar>
    <div class="right">
      <div class="category" v-for="item in categoryChilrenList">
        <div class="item">
          <div class="title">{{item.title}}</div>
          <ul>
            <li v-for="chilren in item.children" @click="onSearch(chilren)">
              <img :src="chilren.imageUrl">
              <span>{{chilren.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <web-footer></web-footer>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import WebFooter from '@/components/web-footer.vue'
import { Sidebar as VanSidebar, SidebarItem as VanSidebarItem } from 'vant'
import { getCategoryList } from '@/api/getData'

interface CategoryModel {
  id: number
  title: string
  imageUrl: string
  children: CategoryModel[]
}

const router = useRouter()
const active = ref()
let categoryList = ref<CategoryModel[]>([])
let categoryChilrenList = ref<CategoryModel[]>([])

const initData = () => {
  _getCategoryList()
}

const _getCategoryList = async() => {
  const res: any = await getCategoryList({
    type: 2,
    isOpen: 1
  })
  categoryList.value = res.list
  categoryChilrenList.value = res.list[0].children
}

// 切换类型
const onChange = (index: number) => {
  categoryChilrenList.value = categoryList.value[index].children
}

// 搜索
const onSearch = (data: CategoryModel) => {
  router.push({name: 'search', query: {keyword: data.title}})
}


initData()

</script>
<style lang="scss" scoped>
.van-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}
.right {
  margin-left: 170px;
  padding-bottom: 100px;
}
.category {
  .item {
    font-size: 28px;
    .title {
      font-weight: bold;
      padding: 20px 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 190px;
        margin-bottom: 20px;
        text-align: center;
        img {
          width: 100%;
        }
        span {
          font-size: 24px;
        }
      }
    }
  }
}
</style>