<template>
  <van-popup v-model:show="show" position="bottom">
    <div class="goods-info">
      <div class="image">
        <img :src="goods.imageUrl" alt="" @click="clickImage">
      </div>
      <div class="right">
        <div class="price">￥{{goods.price}}</div>
        <div class="stock">(库存{{goods.stock}}件)</div>
      </div>
    </div>

    <div class="spec">
      <div class="spec-item" v-for="item of goods.spec">
        <div class="spec-title">{{item.name}}</div>
        <div class="spec-content">
          <div 
            class="item" 
            :class="{ active: item.activeName === item1 }" 
            @click="item.activeName = item1, onSpec()" 
            v-for="item1 of item.value"
          >{{item1}}</div>
        </div>
      </div>
    </div>

    <div class="number">
      <div class="text">购买数量</div>
      <div class="selector">
        <van-stepper v-model="data.goodsNum" :max="goods.stock" />
      </div>
    </div>

    <div class="submit" @click="onClick">确认</div>
  </van-popup>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref, defineProps, defineExpose, defineEmits } from 'vue'
import { Popup as VanPopup, Stepper as VanStepper, Toast, ImagePreview } from 'vant'
import { Models } from '@/rapper'

type GoodsInfo = Models['GET/h5/goods/info']['Res']['data']['info']
type GoodsInfoModel = GoodsInfo & {
  spec: {
    name: string,
    value: any[],
    activeName?: string
  }[]
}

const props = defineProps<{
  goods: GoodsInfoModel,
}>()

let show = ref(false)
let data = ref({
  goodsNum: 1
})
const emit = defineEmits(['success', 'update'])
let cart = ref(true)

let isSku = ref(false)

const initData = () => {
  if (props.goods.sku.length > 0) {
    isSku.value = true
  }
  onSpec()
}

const open = (isCart = true) => {
  cart.value = isCart
  show.value = true
}

const onClick = () => {
  if (props.goods.stock === 0) {
    Toast.fail('库存不足')
    return 
  }
  let arr: string[] = []
  let skuId
  for(let item of props.goods.spec) {
    // @ts-ignore
    arr.push(item.activeName)
  }
  for (let item of props.goods.sku) {
    if (item.spec === arr.join()) {
      skuId = item.id
    }
  }
  if (cart.value) {
    emit('success', {
      goodsNum: data.value.goodsNum,
      skuId,
      isCart: true
    })
  } else {
    emit('success', {
      goodsNum: data.value.goodsNum,
      skuId,
      isCart: false
    })
  }
  show.value = false
}

const onSpec = () => {
  let activeNames: string[] = []
  for (let item of props.goods.spec) {
    // @ts-ignore
    activeNames.push(item.activeName)
  }
  for (let item of props.goods.sku) {
    if (item.spec === activeNames.toString()) {
      props.goods.stock = item.stock
      props.goods.price = item.price
      props.goods.imageUrl = item.imageUrl
    }
  }
}

const clickImage = () => {
  ImagePreview([props.goods.imageUrl])
}

initData()
defineExpose({ open })
</script>
<style>
.goods-info .van-popup {
  overflow-y: visible;
}
</style>

<style lang="scss" scoped>
.goods-info {
  display: flex;
  margin: -20px 0 0 20px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 40px;
  .image {
    position: relative;
    z-index: 999;
    img {
      width: 130px;
      height: 130px;
    }
  }
  .right {
    margin: 40px 0 0 20px;
    .price {
      color: #f00;
      font-size: 28px;
    }
    .stock {
      margin-top: 10px;
      color: #999;
    }
  }
}

.spec {
  margin-top: 20px;
  padding: 0 20px;
  .spec-item {
    margin-bottom: 20px;
    .spec-title {
      margin-bottom: 20px;
      font-size: 28px;
    }
    .spec-content {
      display: flex;
      .item {
        margin-right: 20px;
        padding: 10px 20px;
        border-radius: 15px;
        border: 1px solid #a8a8a8;
        &.active {
          color: $baseColor;
          border: 1px solid $baseColor;
        }
      }
    }
  }
}

.number {
  display: flex;
  margin: 50px 20px 20px 20px;
  font-size: 28px;
  .text {
    flex: 1;
  }
}

.submit {
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 28px;
  background: $baseColor;
  color: #fff;
}
</style>