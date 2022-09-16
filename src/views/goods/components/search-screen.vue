<template>
  <div class="screen">
    <div class="item" :class="{ 'active': index === 1 }" @click="onClick(1)">默认</div>
    <div class="item" :class="{ 'active': index === 2 }" @click="onClick(2)">销量</div>
    <div class="item" :class="{ 'active': index === 3 }" @click="onClick(3)">
    <span>
      价格
    <i class="arrow-up" :class="{ 'on': index === 3 && direction === 'up' }"></i>
    <i class="arrow-down" :class="{ 'on': index === 3 && direction === 'down' }"></i>
    </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue'

export type Direction = '' | 'up' | 'down'

const emit = defineEmits(['change'])
let index = ref<number>(1)
let direction = ref<Direction>('')

const onClick = (data: number) => {
  index.value = data
  if (index.value === 3) {
    let data: Direction = direction.value === 'up' ? 'down' : 'up'
    direction.value = data
  }
  emit('change', index.value, direction.value)
}
</script>
<style lang="scss" scoped>
.screen {
  display: flex;
  align-items: center;
  height: 80px;
  .item {
    flex: 1;
    font-size: 28px;
    text-align: center;
    &.active {
      color: #f00;
    }
    span {
      position: relative;
      i {
       width: 0;
        height: 0;
        font-size: 0;
        line-height: 0;
        border-color: transparent transparent #777f86 transparent;
        border-width: 0 8px 8px;
        display: inline-block;
        border-style: solid;
        // top: 0.7rem;
        // right: 0;
        position: absolute;
        &.arrow-up {
          top: 5px;
          right: -35px;
          &.on {
            border-color: transparent transparent $baseColor transparent;
          }
        }
        &.arrow-down {
          border-color: #777f86 transparent transparent transparent;
          border-width: 8px 8px 0;
          top: 20px;
          right: -35px;
          &.on {
            border-color: $baseColor transparent transparent transparent;
          }
        }
      }
    }
  }
}


</style>