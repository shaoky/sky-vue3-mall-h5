import fetch from '../config/fetch'
import { Models } from '@/rapper'
import { GoodsListRequest } from './interface'

// @ts-ignore
export const uploadImage = (data) => fetch('/common/image/add', data, 'post', true) as Promise<Models['POST/common/image/add']['Res']['data']>
export const getQNToken = () => fetch('/v1/upload/qn-uptoken', {}, 'get')

export const login = (data: Models['POST/h5/login']['Req']) => fetch('/h5/login', data, 'post') as Promise<Models['POST/h5/login']['Res']>
export const getUserInfo = () => fetch('/h5/user/info', {}, 'get') as Promise<Models['GET/h5/user/info']['Res']['data']>
export const updateUserInfo = (data: Models['POST/h5/user/info/update']['Req']) => fetch('/h5/user/info/update', data, 'post') as Promise<Models['POST/h5/user/info/update']['Res']['data']>
export const getSms = (data: Models['POST/common/sms']['Req']) => fetch('/common/sms', data, 'post') as Promise<Models['POST/common/sms']['Res']>
export const getIndexData = (data: any) => fetch('/h5/index', data, 'get')
export const getGoodsList = (data: GoodsListRequest) => fetch('/h5/goods/list', data, 'get')
export const getCategoryList = (data: any) => fetch('/admin/goods/type/list', data, 'get')
export const getGoodsInfo = (data: any) => fetch('/h5/goods/info', data, 'get')
export const addGoodsCollect = (data: Models['POST/h5/goods/collect/add']['Req']) => fetch('/h5/goods/collect/add', data, 'post') as Promise<Models['POST/h5/goods/collect/add']['Res']>
export const deleteGoodsCollect = (data: Models['POST/h5/goods/collect/delete']['Req']) => fetch('/h5/goods/collect/delete', data, 'post') as Promise<Models['POST/h5/goods/collect/delete']['Res']>
export const getGoodsCollect = () => fetch('/h5/goods/collect/list', {}, 'get') as Promise<Models['GET/h5/goods/collect/list']['Res']['data']>

// 购物车
export const getCartList = () => fetch('/h5/cart/list', {}, 'get') as Promise<Models['GET/h5/cart/list']['Res']['data']>
export const addCart = (data: Models['POST/h5/cart/add']['Req']) => fetch('/h5/cart/add', data, 'post') as Promise<Models['POST/h5/cart/add']['Res']>
export const deleteCart = (data: Models['POST/h5/cart/delete']['Req']) => fetch('/h5/cart/delete', data, 'post') as Promise<Models['POST/h5/cart/add']['Res']>
export const updateCart = (data: Models['POST/h5/cart/update']['Req']) => fetch('/h5/cart/update', data, 'post') as Promise<Models['POST/h5/cart/update']['Res']>

// 地址
export const getRegion = () => fetch('/common/region', {}, 'get') as Promise<Models['GET/common/region']['Res']['data']>
export const getAddressList = () => fetch('/h5/user/address/list', {}, 'get') as Promise<Models['GET/h5/user/address/list']['Res']['data']>
export const addAddress = (data: Models['POST/h5/user/address/add']['Req']) => fetch('/h5/user/address/add', data, 'post') as Promise<Models['POST/h5/user/address/add']['Res']>
export const updateAddress = (data: Models['POST/h5/user/address/update']['Req']) => fetch('/h5/user/address/update', data, 'post') as Promise<Models['POST/h5/user/address/update']['Res']>
export const getAddressInfo = (data: Models['GET/h5/user/address/info']['Req']) => fetch('/h5/user/address/info', data, 'get') as Promise<Models['GET/h5/user/address/info']['Res']['data']>
export const deleteAddress = (data: Models['POST/h5/user/address/delete']['Req']) => fetch('/h5/user/address/delete', data, 'post') as Promise<Models['POST/h5/user/address/delete']['Res']['data']>
export const getAddressDefault = () => fetch('/h5/user/address/default', {}, 'get') as Promise<Models['GET/h5/user/address/default']['Res']['data']>

export const getOrderPreview = () => fetch('/h5/order/preview', {}, 'get') as Promise<Models['GET/h5/order/preview']['Res']['data']>
export const createOrder = (data: Models['POST/h5/order/add']['Req']) => fetch('/h5/order/add', data, 'post') as Promise<Models['POST/h5/order/add']['Res']['data']>
export const getOrderInfo = (data: Models['GET/h5/order/info']['Req']) => fetch('/h5/order/info', data, 'get') as Promise<Models['GET/h5/order/info']['Res']['data']>
export const getOrderList = (data: Models['GET/h5/order/list']['Req']) => fetch('/h5/order/list', data, 'get') as Promise<Models['GET/h5/order/list']['Res']['data']>
export const cancelOrder = (data: Models['POST/h5/order/cancel']['Req']) => fetch('/h5/order/cancel', data, 'post') as Promise<Models['POST/h5/order/cancel']['Res']['data']>
export const deleteOrder = (data: Models['POST/h5/order/delete']['Req']) => fetch('/h5/order/delete', data, 'post') as Promise<Models['POST/h5/order/delete']['Res']['data']>
