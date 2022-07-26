import fetch from '../config/fetch'
import { Models } from '@/rapper'
import { GoodsListRequest } from './interface'

export const uploadImage = (data) => fetch('POST/common/image/add', data, true)

export const login = (data) => fetch('POST/h5/login', data)

export const getUserInfo = () => fetch('GET/h5/user/info', {},)
export const updateUserInfo = (data: Models['POST/h5/user/info/update']['Req']) => fetch('POST/h5/user/info/update', data)
export const getSms = (data: Models['POST/common/sms']['Req']) => fetch('POST/common/sms', data)
export const getIndexData = () => fetch('GET/h5/index', {})
export const getGoodsList = (data: GoodsListRequest) => fetch('GET/h5/goods/list', data)
export const getCategoryList = (data) => fetch('GET/admin/goods/type/list', data)
export const getGoodsInfo = (data) => fetch('GET/h5/goods/info', data)
export const addGoodsCollect = (data: Models['POST/h5/goods/collect/add']['Req']) => fetch('POST/h5/goods/collect/add', data)
export const deleteGoodsCollect = (data: Models['POST/h5/goods/collect/delete']['Req']) => fetch('POST/h5/goods/collect/delete', data)
export const getGoodsCollect = () => fetch('GET/h5/goods/collect/list', {})

// 购物车
export const getCartList = () => fetch('GET/h5/cart/list', {})
export const addCart = (data: Models['POST/h5/cart/add']['Req']) => fetch('POST/h5/cart/add', data)
export const deleteCart = (data: Models['POST/h5/cart/delete']['Req']) => fetch('POST/h5/cart/delete', data)
export const updateCart = (data: Models['POST/h5/cart/update']['Req']) => fetch('POST/h5/cart/update', data)

// 地址
export const getRegion = () => fetch('GET/common/region', {})
export const getAddressList = () => fetch('GET/h5/user/address/list', {})
export const addAddress = (data: Models['POST/h5/user/address/add']['Req']) => fetch('POST/h5/user/address/add', data)
export const updateAddress = (data: Models['POST/h5/user/address/update']['Req']) => fetch('POST/h5/user/address/update', data)
export const getAddressInfo = (data: Models['GET/h5/user/address/info']['Req']) => fetch('GET/h5/user/address/info', data)
export const deleteAddress = (data: Models['POST/h5/user/address/delete']['Req']) => fetch('POST/h5/user/address/delete', data)
export const getAddressDefault = () => fetch('GET/h5/user/address/default', {})

export const getOrderGoodsPreview = (data: Models['GET/h5/order/goodsPreview']['Req']) => fetch('GET/h5/order/goodsPreview', data)
export const getOrderPreview = () => fetch('GET/h5/order/preview', {})
export const createOrder = (data: Models['POST/h5/order/add']['Req']) => fetch('POST/h5/order/add', data)
export const getOrderInfo = (data: Models['GET/h5/order/info']['Req']) => fetch('GET/h5/order/info', data)
export const getOrderList = (data: Models['GET/h5/order/list']['Req']) => fetch('GET/h5/order/list', data)
export const cancelOrder = (data: Models['POST/h5/order/cancel']['Req']) => fetch('POST/h5/order/cancel', data)
export const deleteOrder = (data: Models['POST/h5/order/delete']['Req']) => fetch('POST/h5/order/delete', data)
export const confirmOrder = (data: Models['POST/h5/order/confirm']['Req']) => fetch('POST/h5/order/confirm', data)
export const payOrder = (data: Models['POST/h5/order/pay']['Req']) => fetch('POST/h5/order/pay', data)
