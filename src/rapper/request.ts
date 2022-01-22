/* md5: 53478a274bd29510d4ba0f6b786b0282 */
/* Rap仓库id: 295591 */
/* Rapper版本: 1.3.1 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=295591
 */

import * as commonLib from 'rap/runtime/commonLib'

export interface IModels {
  /**
   * 接口名：获取短信
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2165647
   */
  'POST/common/sms': {
    Req: {
      /**
       * 手机号码
       */
      tel: string
    }
    Res: {
      code: string
      data: {
        code: number
      }
    }
  }

  /**
   * 接口名：获取地区
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2182498
   */
  'GET/common/region': {
    Req: {}
    Res: {
      code: number
      data: {
        list: {
          code: string
          name: string
        }[]
      }
    }
  }

  /**
   * 接口名：登录
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493321&itf=2165753
   */
  'POST/h5/login': {
    Req: {
      /**
       * 手机号码
       */
      tel: string
      /**
       * 短信
       */
      code: string
    }
    Res: {
      code: number
      data: {
        token: string
        name: string
      }
    }
  }

  /**
   * 接口名：新增
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2160324
   */
  'POST/h5/cart/add': {
    Req: {
      goodsId: number
      goodsNum: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：删除
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2164894
   */
  'POST/h5/cart/delete': {
    Req: {
      goodsId: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2167559
   */
  'GET/h5/cart/list': {
    Req: {}
    Res: {
      code: number
      data: {
        list: {
          goodsId: number
          goodsNum: number
          isSelected: boolean
          title: string
          imageUrl: string
          price: string
          stock: number
        }[]
      }
    }
  }

  /**
   * 接口名：更新
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2168529
   */
  'POST/h5/cart/update': {
    Req: {
      goodsNum: number
      isSelected: boolean
      goodsId: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：新增
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172165
   */
  'POST/h5/user/address/add': {
    Req: {
      /**
       * 用户姓名
       */
      userName: string
      /**
       * 用户手机
       */
      userTel: number
      /**
       * 详细地址
       */
      address: string
      /**
       * 是否默认
       */
      isDefault: boolean
      /**
       * 省id
       */
      provinceId?: number
      /**
       * 市id
       */
      cityId?: number
      /**
       * 区县id
       */
      countyId?: number
      areaCode?: string
      province: string
      city: string
      county: string
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2182639
   */
  'GET/h5/user/address/info': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: {
        info: {
          id: number
          userName: string
          userTel: string
          address: string
          areaCode: string
          province: string
          city: string
          county: string
          isDefault: boolean
        }
      }
    }
  }

  /**
   * 接口名：列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172169
   */
  'GET/h5/user/address/list': {
    Req: {}
    Res: {
      code: number
      data: {
        list: {
          address: string
          provinceId: number
          countyId: number
          cityId: number
          userTel: number
          userName: string
          province: string
          county: string
          city: string
          isDefault: boolean
          areaCode: number
          id: number
        }[]
      }
    }
  }

  /**
   * 接口名：更新
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172171
   */
  'POST/h5/user/address/update': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：删除
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172172
   */
  'POST/h5/user/address/delete': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：获取默认
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172173
   */
  'GET/h5/user/address/default': {
    Req: {}
    Res: {
      code: number
      data: {
        info: {}
      }
    }
  }

  /**
   * 接口名：设置默认
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172196
   */
  'POST/h5/user/address/set-default': {
    Req: {
      id: string
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：购物车预览
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2189433
   */
  'GET/h5/order/preview': {
    Req: {
      /**
       * 不传，会查找该用户下的购物车商品
       */
      goodsId?: number
      goodsNum?: number
    }
    Res: {
      code: number
      data: {
        goodsList: any[]
        totalMoney: string
        payMoney: string
        deliverMoney: string
      }
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'POST/common/sms': ResSelector<IModels['POST/common/sms']['Res']>
  'GET/common/region': ResSelector<IModels['GET/common/region']['Res']>
  'POST/h5/login': ResSelector<IModels['POST/h5/login']['Res']>
  'POST/h5/cart/add': ResSelector<IModels['POST/h5/cart/add']['Res']>
  'POST/h5/cart/delete': ResSelector<IModels['POST/h5/cart/delete']['Res']>
  'GET/h5/cart/list': ResSelector<IModels['GET/h5/cart/list']['Res']>
  'POST/h5/cart/update': ResSelector<IModels['POST/h5/cart/update']['Res']>
  'POST/h5/user/address/add': ResSelector<IModels['POST/h5/user/address/add']['Res']>
  'GET/h5/user/address/info': ResSelector<IModels['GET/h5/user/address/info']['Res']>
  'GET/h5/user/address/list': ResSelector<IModels['GET/h5/user/address/list']['Res']>
  'POST/h5/user/address/update': ResSelector<IModels['POST/h5/user/address/update']['Res']>
  'POST/h5/user/address/delete': ResSelector<IModels['POST/h5/user/address/delete']['Res']>
  'GET/h5/user/address/default': ResSelector<IModels['GET/h5/user/address/default']['Res']>
  'POST/h5/user/address/set-default': ResSelector<IModels['POST/h5/user/address/set-default']['Res']>
  'GET/h5/order/preview': ResSelector<IModels['GET/h5/order/preview']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  // if (!extraConfig || !extraConfig.fetchType) {
  //   console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
  // }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)

  return {
    /**
     * 接口名：获取短信
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2165647
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/common/sms': (req?: IModels['POST/common/sms']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/common/sms',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/common/sms']>
    },

    /**
     * 接口名：获取地区
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2182498
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/common/region': (req?: IModels['GET/common/region']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/common/region',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/common/region']>
    },

    /**
     * 接口名：登录
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493321&itf=2165753
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/login': (req?: IModels['POST/h5/login']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/login']>
    },

    /**
     * 接口名：新增
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2160324
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/cart/add': (req?: IModels['POST/h5/cart/add']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/cart/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/cart/add']>
    },

    /**
     * 接口名：删除
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2164894
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/cart/delete': (req?: IModels['POST/h5/cart/delete']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/cart/delete',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/cart/delete']>
    },

    /**
     * 接口名：列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2167559
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/cart/list': (req?: IModels['GET/h5/cart/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/cart/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/cart/list']>
    },

    /**
     * 接口名：更新
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=492376&itf=2168529
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/cart/update': (req?: IModels['POST/h5/cart/update']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/cart/update',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/cart/update']>
    },

    /**
     * 接口名：新增
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172165
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/user/address/add': (req?: IModels['POST/h5/user/address/add']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/user/address/add']>
    },

    /**
     * 接口名：详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2182639
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/user/address/info': (req?: IModels['GET/h5/user/address/info']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/info',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/user/address/info']>
    },

    /**
     * 接口名：列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172169
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/user/address/list': (req?: IModels['GET/h5/user/address/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/user/address/list']>
    },

    /**
     * 接口名：更新
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172171
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/user/address/update': (req?: IModels['POST/h5/user/address/update']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/update',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/user/address/update']>
    },

    /**
     * 接口名：删除
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172172
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/user/address/delete': (req?: IModels['POST/h5/user/address/delete']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/delete',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/user/address/delete']>
    },

    /**
     * 接口名：获取默认
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172173
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/user/address/default': (req?: IModels['GET/h5/user/address/default']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/address/default',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/user/address/default']>
    },

    /**
     * 接口名：设置默认
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=494514&itf=2172196
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/user/address/set-default': (
      req?: IModels['POST/h5/user/address/set-default']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/h5/user/address/set-default',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/user/address/set-default']>
    },

    /**
     * 接口名：购物车预览
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2189433
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/order/preview': (req?: IModels['GET/h5/order/preview']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/preview',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/order/preview']>
    },
  }
}
