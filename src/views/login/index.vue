<template>
  <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
  <div class="login">
    <div class="title"></div>
    <van-field v-model="tel" maxlength="11" type="tel" label="手机" placeholder="请输入手机" />
    <div class="title"></div>
    <van-field
      v-model="sms"
      maxlength="4"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button size="small" type="primary" @click="sendSms" style="color: #f00;" v-if="!isGetSms">获取验证码</van-button>
        <van-button size="small" type="primary" v-else>重新获取({{countdown}}s)</van-button>
      </template>
    </van-field>

    <div class="submit" @click="onLogin">登录</div>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { NavBar as VanNavBar, Field as VanField, Toast } from 'vant'
import { getSms, login } from '@/api/getData'
import { phoneValidate } from '@/utils/validate'

const router = useRouter()

let sms = ref<string>('')
let tel = ref<string>('')
let isGetSms = ref<boolean>(false) // 是否发送过短信
let countdown = ref<number>(60) // 倒计时

const onClickLeft = () => {
  history.back()
}

// 发送短信
const sendSms = async() => {
  try {
    phoneValidate(tel.value)
  } catch(e) {
    // @ts-ignore
    Toast.fail(e.message)
    return
  }
  const res = await getSms({
    tel: tel.value
  })
  sms.value = String(res.code)
  isGetSms.value = true
  timer()
  Toast.success('发送成功')
}

// 定时器
const timer = () => {
  countdown.value = 10
  const time = setInterval(() => {
    if (countdown.value === 1) {
      isGetSms.value = false
      clearInterval(time)
    }
    countdown.value--
  }, 1000)
}

// 登录
const onLogin = async() => {
  try {
    phoneValidate(tel.value)
  } catch(e) {
    // @ts-ignore
    Toast.fail(e.message)
    return
  }
  if (isGetSms.value === false) {
    Toast.fail('请先获取验证码')
    return
  }
  if (sms.value.length === 0) {
    Toast.fail('请输入验证码')
    return
  }
  if (sms.value.length < 4) {
    Toast.fail('请输入正确的验证码')
    return
  }

  const res = await login({
    tel: tel.value,
    code: sms.value
  })
  localStorage.setItem('user', JSON.stringify(res))
  router.push({name: 'index'})
  
}
</script>
<style lang="scss" scoped>
.login {
  padding: 50px 20px;
}
.submit {
  width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-size: 28px;
  background: linear-gradient(to right,rgb(254,84,71),rgb(243,52,74) 100%);
}
</style>