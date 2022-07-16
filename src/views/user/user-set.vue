<template>
  <div class="list">
    <div class="cell">
      <div class="label">头像</div>
      <div class="value"><img :src="user.photo" class="photo"></div>
      <div class="arrow">
        <van-uploader :after-read="afterRead">
          <van-button icon="plus" type="primary"><van-icon name="arrow" /></van-button>
        </van-uploader>
      </div>
    </div>
    <div class="cell">
      <div class="label">昵称</div>
      <div class="value">{{user.name}}</div>
    </div>
    <div class="cell">
      <div class="label">手机</div>
      <div class="value">{{user.tel}}</div>
    </div>
  </div>

  <div class="out-login" @click="outLogin">退出登录</div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { getUserInfo, uploadImage, updateUserInfo } from '@/api/getData'
import { Uploader as VanUploader, Toast, Icon as VanIcon } from 'vant'
import router from '@/router';


let show = ref<boolean>(false)
let user = ref<any>({})


const initData = async() => {
  let res = await getUserInfo()
  user.value = res.user
}

const afterRead = async(file: any) => {
  const formData = new FormData()
  formData.append('file', file.file)
  const res = await uploadImage(formData)
  const data = await updateUserInfo({
    photo: res.url,
    name: user.value.name
  })
  if (data) {
    user.value.photo = res.url
  }
}
 
const outLogin = () => {
  window.localStorage.clear()
  router.push({name: 'index'})
}

initData()

</script>
<style lang="scss" scoped>
.list {
  padding: 0 25px;
  .cell {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #f5f5f5;
    .label {
      flex: 1;
    }
    .value {
      .photo {
        width: 60px;
        height: 60px;
        display: block;
        border-radius: 50%;
      }
    }
  }
}

.out-login {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 32px;
  text-align: center;
  line-height: 100px;
  background: $baseColor;
}
</style>