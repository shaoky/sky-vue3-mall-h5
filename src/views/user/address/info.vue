<template>
  <van-nav-bar :title="id ? '编辑收货地址' : '新增收货地址'" fixed left-arrow @click-left="onClickLeft" />
  <div class="address">
    <!-- :area-list="areaList" -->
    <van-address-edit
      v-if="loading"
      :area-list="areaList"
      :show-delete="id ? true : false"
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { NavBar as VanNavBar, AddressEdit as VanAddressEdit } from 'vant'
// @ts-ignore
import type { AddressEditInfo } from 'vant'
import { getRegion, addAddress, updateAddress, getAddressInfo, deleteAddress } from '@/api/getData'
import { useRoute } from 'vue-router'
// import { areaList } from '@vant/area-data'

const route = useRoute()

let id = +route.params.id
let searchResult = ref<any>([])
// @ts-ignore
let addressInfo = ref<AddressEditInfo>()
let areaList: any = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
  },
};
let loading = ref(false)

const initData = async() => {
  const region = sessionStorage.getItem('region');
  if (region) {
    areaList = JSON.parse(region)
  } else {
    await _getRegion()
  }

  if (id) {
    await _getAddressInfo()
  }

  loading.value = true
}

const _getRegion = async() => {
  const res = await getRegion()
  let province_list: any = res.list.filter((item: any) => item.code.indexOf('0000') > 0)
  let city_list: any = res.list.filter((item: any) => item.code.indexOf('00') > 0 && item.code.indexOf('0000') === -1)
  let county_list: any = res.list.filter((item: any) => item.code.indexOf('00') === -1)
  for(let item of province_list) {
    areaList.province_list[item.code] = item.name
  }
  for(let item of city_list) {
    areaList.city_list[item.code] = item.name
  }
  for(let item of county_list) {
    areaList.county_list[item.code] = item.name
  }
  sessionStorage.setItem('region', JSON.stringify(areaList))
}

const _getAddressInfo = async() => {
  const { info } = await getAddressInfo({id: id})
  addressInfo.value = {
    name: info.userName,
    addressDetail: info.address,
    tel: info.userTel,
    city: info.city,
    province: info.province,
    county: info.county,
    areaCode: info.areaCode,
    country: info.county,
    isDefault: info.isDefault
  }
}

const onSave = async(data: any) => {
  let form: any = {
    userName: data.name,
    userTel: data.tel,
    address: data.addressDetail,
    province: data.province,
    city: data.city,
    county: data.county,
    areaCode: data.areaCode,
    isDefault: data.isDefault
  }

  if (id) {
    form.id = id
  }
  const res = await addAddress(form)
  if (res.data) {
    onClickLeft()
  }
}

const onDelete = async() => {
  const res = await deleteAddress({id})
  onClickLeft()
}

const onChangeDetail = () => {

}
const onClickLeft = () => {
  history.back()
}

initData()
</script>
<style lang="scss" scoped>
.address {
  margin-top: 100px;
  :deep(.van-switch--on) {
    background: #f00;
  }
}
</style>