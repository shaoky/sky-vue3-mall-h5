<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"></component>
      </keep-alive> 
        <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"></component>
    </router-view>
  </div>
</template>

<style>
body {
  font-size: 24px;
  /* color: #666; */
}
.app {
  width: 10rem;
  height: 100%;
  margin: auto;
}
.van-list__finished-text, .van-list__loading {
  width: 100%;
}

</style>
