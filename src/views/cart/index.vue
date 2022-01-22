<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed left-arrow @click-left="onClickLeft" />
    <div class="cart-item" v-for="item in cartList" @touchstart="moveStart(item)" @mousedown="moveEnd">
      <div class="select">
        <!-- <img src="/public/icon_selected.png" alt=""> -->
        <img src="/public/icon_unselected.png" alt="" v-if="!item.isSelected" @click.stop="updateCartIsSelected(item)">
        <img src="/public/icon_selected.png" alt="" v-if="item.isSelected" @click.stop="updateCartIsSelected(item)">
      </div>
      <div class="image">
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="goods">
        <div class="title">{{item.title}}</div>
        <div class="price">
          <span>￥{{item.price}}</span>
          <van-stepper v-model="item.goodsNum" @change="_updateCart(item)" :button-size="20" :max="item.stock" />
        </div>
      </div>
    </div>
  </div>
  <van-submit-bar :price="priceSum" button-text="提交订单" @submit="onSubmit">
    <img src="/public/icon_unselected.png" class="allBtn" @click="onSelectAll" v-if="!isSelectAll" />
    <img src="/public/icon_selected.png" class="allBtn" @click="onSelectAll" v-else />
    <!-- <van-checkbox v-model="cartAllChecked">全选</van-checkbox> -->
  </van-submit-bar>
  <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
  <web-footer></web-footer>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, reactive, computed } from 'vue'
// @ts-ignore
import WebFooter from '@/components/web-footer.vue'
import { 
  NavBar as VanNavBar,
  Stepper as VanStepper,
  ActionSheet as VanActionSheet,
  SubmitBar as VanSubmitBar,
  Checkbox as VanCheckbox
} from 'vant'
import { deleteCart, getCartList, updateCart } from '@/api/getData'
import { Models } from '@/rapper/index'
import router from '@/router';

let cartList = ref<Models['GET/h5/cart/list']['Res']['data']['list']>([])
let flag = ref<boolean>(false)
let timeValue = ref<number>(0)
let timer = reactive<any>({})
let show = ref<boolean>(false)
let actions = ref([
  { name: '删除' },
])
let cartAllChecked = ref<boolean>(false)
let activeGoods = ref<number>(0)
let isSelectAll = ref<boolean>(false) // 是否选中全选

// 计算总价格
let priceSum = computed(() => {
  let count = cartList.value.reduce((sum: number, item: any) => {
    if (item.isSelected) {
      return Number(item.price) * item.goodsNum + sum
    } else {
      return sum
    }
  }, 0)
  return count*100
})

const initData = () => {
  _getCartList()
  document.addEventListener('touchmove', moving)
  // document.addEventListener('touchend', moveEnd)
}

const _getCartList = async() => {
  const res = await getCartList()
  cartList.value = res.list
  isSelectAll.value = res.list.every(item => item.isSelected)
}

const onClickLeft = () => {
  history.back()
}

const moveStart = (item: any) => {
  let timeValue = 0
  timer = setInterval(() => {
    console.log(timeValue)
    timeValue++
    if (timeValue === 1) {
      activeGoods.value = item.goodsId
      show.value = true
      clearInterval(timer)
    }
  }, 1000)
}
const moveEnd = () => {
  clearInterval(timer)
}

const moving = () => {
  clearInterval(timer)
}

const onSelect = async(item: any) => {
  if (item.name === '删除') {
    let res = await deleteCart({
      goodsId: activeGoods.value
    })
    show.value = false
    _getCartList()
  }
}


// 更新是否选中
const updateCartIsSelected = (item: any) => {
  item.isSelected = !item.isSelected
  isSelectAll.value = cartList.value.every((item: any) => item.isSelected)
  _updateCart(item)
}

// 全选按钮
const onSelectAll = () => {
  isSelectAll.value = !isSelectAll.value
  cartList.value.forEach((item: any) => {
    item.isSelected = isSelectAll.value
  })
}


// 更新购物车
const _updateCart = async(item: any) => {
  let res = await updateCart({
    goodsNum: item.goodsNum,
    isSelected: item.isSelected,
    goodsId: item.goodsId
  })
}


// 提交订单
const onSubmit = () => {
  router.push({
    name: 'orderConfirm'
  })
}


initData()


</script>
<style lang="scss" scoped>
.cart {
  // height: 100vh;
  // background: #f2f2f2;
  padding: 100px 0 220px 0;
}
.van-submit-bar {
  border-top: 1px solid #f4f2f4;
  bottom: 100px;
}
.allBtn {
  width: 60px;
}

.cart-item {
  display: flex;
  height: 180px;
  padding: 20px 0;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  .select {
    margin-top: 55px;
    padding: 0 10px;
    img {
      width: 60px;
      margin-top: 10px;
    }
  }
  .image {
    width: 180px;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .goods {
    position: relative;
    flex: 1;
    margin: 0 20px;
    .title {

    }
    .price {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100%;
      span {
        flex: 1;
        font-size: 28px;
        color: #f2270c;
      }
    }
  }
}
</style>