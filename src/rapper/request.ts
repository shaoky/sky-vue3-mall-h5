/* md5: 81b6a39f405ea4f0811d4a37e79b5f53 */
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
   * 接口名：图片上传
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2204944
   */
  'POST/common/image/add': {
    Req: {
      file: string
    }
    Res: {
      code: number
      data: {
        url: string
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
      skuId?: number
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
          skuSpec: string
          skuId: number
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
      list: {
        goodsNum: number
        goodsId: number
        isSelected: boolean
        skuId: number
      }[]
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
        info: {
          address: string
          city: string
          county: string
          id: number
          province: string
          userName: string
          userTel: string
          isDefault: boolean
        }
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
        goodsList: {
          goodsNum: number
          id: number
          imageUrl: string
          price: string
          skuId: number
          skuSpec: string
          title: string
        }[]
        totalMoney: string
        payMoney: string
        deliverMoney: string
      }
    }
  }

  /**
   * 接口名：订单列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2190328
   */
  'GET/h5/order/list': {
    Req: {
      page: number
      size: number
      /**
       * 1. 待付款 2. 待发货 3. 待收货 4. 交易成功
       */
      status?: number
    }
    Res: {
      code: number
      data: {
        list: {
          id: number
          createTime: string
          status: number
          statusName: string
          totalMoney: string
          goodsList: {
            id: number
            imageUrl: string
            number: number
            price: string
            skuSpec: string
            title: string
          }[]
        }[]
        count: string
      }
    }
  }

  /**
   * 接口名：订单详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2190329
   */
  'GET/h5/order/info': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: {
        info: {
          no: number
          province: string
          city: string
          county: string
          userTel: string
          userName: string
          address: string
          remark: string
          createTime: string
          status: number
          statusName: string
          remainingTime: number
          totalMoney: string
          freightMoney: string
          payMoney: string
          goodsList: any[]
        }
        systemTime: number
      }
    }
  }

  /**
   * 接口名：创建订单
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2195053
   */
  'POST/h5/order/add': {
    Req: {
      addressId: number
      goodsList: {
        goodsId: number
        goodsNum: number
      }[]
      remark?: string
    }
    Res: {
      code: number
      data: {
        /**
         * 订单编号
         */
        orderNo: string
        /**
         * 订单ID
         */
        orderId: number
      }
    }
  }

  /**
   * 接口名：订单取消
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2196218
   */
  'POST/h5/order/cancel': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：订单删除
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2196222
   */
  'POST/h5/order/delete': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：商品预览
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2247758
   */
  'GET/h5/order/goodsPreview': {
    Req: {
      goodsId: number
      goodsNum: number
      skuId?: number
    }
    Res: {
      code: number
      data: {
        payMoney: string
        deliverMoney: string
        goodsList: any[]
        totalMoney: string
      }
    }
  }

  /**
   * 接口名：支付订单
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2252256
   */
  'POST/h5/order/pay': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：订单确认
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2257707
   */
  'POST/h5/order/confirm': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：用户详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=499304&itf=2199147
   */
  'GET/h5/user/info': {
    Req: {}
    Res: {
      code: number
      data: {
        user: {
          name: string
          tel: string
          photo: string
        }
      }
    }
  }

  /**
   * 接口名：用户更新
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=499304&itf=2204939
   */
  'POST/h5/user/info/update': {
    Req: {
      photo: string
      name: string
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：商品列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2307545
   */
  'GET/h5/goods/list': {
    Req: {
      page?: number
      size?: number
      keyword?: string
    }
    Res: {
      code: string
      data: {
        list: {
          id: number
          imageUrl: string
          price: string
          title: string
        }[]
        count: number
      }
    }
  }

  /**
   * 接口名：商品详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224267
   */
  'GET/h5/goods/info': {
    Req: {
      id: number
    }
    Res: {
      code: number
      data: {
        info: {
          id: number
          imageUrl: string
          /**
           * 是否收藏
           */
          isCollect: boolean
          price: string
          stock: number
          subtitle: string
          title: string
          attr: {
            name: string
            value: string
          }[]
          sku: {
            id: number
            goodsId: number
            imageUrl: string
            price: string
            spec: string
            stock: number
          }[]
          spec: {
            name: string
            value: any[]
          }[]
          content: string
          bannerList: any[]
          saleCount: number
        }
      }
    }
  }

  /**
   * 接口名：新增收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224269
   */
  'POST/h5/goods/collect/add': {
    Req: {
      /**
       * 商品id
       */
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：删除收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224271
   */
  'POST/h5/goods/collect/delete': {
    Req: {
      /**
       * 商品id
       */
      id: number
    }
    Res: {
      code: number
      data: boolean
    }
  }

  /**
   * 接口名：收藏列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2228675
   */
  'GET/h5/goods/collect/list': {
    Req: {}
    Res: {
      code: number
      data: {
        list: {
          title: string
          price: string
          difference: string
          imageUrl: string
          goodsId: string
          adjustPrice: string
        }[]
      }
    }
  }

  /**
   * 接口名：首页
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2307536
   */
  'GET/h5/index': {
    Req: {}
    Res: {
      code: number
      data: {
        adList: {
          imageUrl: string
          id: number
          title: string
        }[]
        iconList: {
          id: number
          imageUrl: string
          title: string
        }[]
      }
    }
  }

  /**
   * 接口名：产品分类列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=518381&itf=2307747
   */
  'GET/admin/goods/type/list': {
    Req: {
      /**
       * 1是扁平化，2是层级
       */
      type: string
    }
    Res: {
      code: number
      data: {
        list: {
          id: number
          imageUrl: string
          isOpen: number
          level: number
          parentId: number
          sort: number
          title: string
          children: any[]
        }[]
      }
    }
  }

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=518383&itf=2307742
   */
  'GET/example/1658799749723': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string: string
      /**
       * 数字属性示例
       */
      number: number
      /**
       * 布尔属性示例
       */
      boolean: boolean
      /**
       * 正则属性示例
       */
      regexp: string
      /**
       * 函数属性示例
       */
      function: string
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number
        /**
         * 数组元素示例
         */
        bar: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items: any[]
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number
        /**
         * 对象属性示例
         */
        bar: string
      }
      /**
       * 占位符示例
       */
      placeholder: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'POST/common/sms': ResSelector<IModels['POST/common/sms']['Res']>
  'GET/common/region': ResSelector<IModels['GET/common/region']['Res']>
  'POST/common/image/add': ResSelector<IModels['POST/common/image/add']['Res']>
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
  'GET/h5/order/list': ResSelector<IModels['GET/h5/order/list']['Res']>
  'GET/h5/order/info': ResSelector<IModels['GET/h5/order/info']['Res']>
  'POST/h5/order/add': ResSelector<IModels['POST/h5/order/add']['Res']>
  'POST/h5/order/cancel': ResSelector<IModels['POST/h5/order/cancel']['Res']>
  'POST/h5/order/delete': ResSelector<IModels['POST/h5/order/delete']['Res']>
  'GET/h5/order/goodsPreview': ResSelector<IModels['GET/h5/order/goodsPreview']['Res']>
  'POST/h5/order/pay': ResSelector<IModels['POST/h5/order/pay']['Res']>
  'POST/h5/order/confirm': ResSelector<IModels['POST/h5/order/confirm']['Res']>
  'GET/h5/user/info': ResSelector<IModels['GET/h5/user/info']['Res']>
  'POST/h5/user/info/update': ResSelector<IModels['POST/h5/user/info/update']['Res']>
  'GET/h5/goods/list': ResSelector<IModels['GET/h5/goods/list']['Res']>
  'GET/h5/goods/info': ResSelector<IModels['GET/h5/goods/info']['Res']>
  'POST/h5/goods/collect/add': ResSelector<IModels['POST/h5/goods/collect/add']['Res']>
  'POST/h5/goods/collect/delete': ResSelector<IModels['POST/h5/goods/collect/delete']['Res']>
  'GET/h5/goods/collect/list': ResSelector<IModels['GET/h5/goods/collect/list']['Res']>
  'GET/h5/index': ResSelector<IModels['GET/h5/index']['Res']>
  'GET/admin/goods/type/list': ResSelector<IModels['GET/admin/goods/type/list']['Res']>
  'GET/example/1658799749723': ResSelector<IModels['GET/example/1658799749723']['Res']>
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
     * 接口名：图片上传
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=493311&itf=2204944
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/common/image/add': (req?: IModels['POST/common/image/add']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/common/image/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/common/image/add']>
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

    /**
     * 接口名：订单列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2190328
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/order/list': (req?: IModels['GET/h5/order/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/order/list']>
    },

    /**
     * 接口名：订单详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2190329
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/order/info': (req?: IModels['GET/h5/order/info']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/info',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/order/info']>
    },

    /**
     * 接口名：创建订单
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2195053
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/order/add': (req?: IModels['POST/h5/order/add']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/order/add']>
    },

    /**
     * 接口名：订单取消
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2196218
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/order/cancel': (req?: IModels['POST/h5/order/cancel']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/cancel',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/order/cancel']>
    },

    /**
     * 接口名：订单删除
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2196222
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/order/delete': (req?: IModels['POST/h5/order/delete']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/delete',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/order/delete']>
    },

    /**
     * 接口名：商品预览
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2247758
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/order/goodsPreview': (req?: IModels['GET/h5/order/goodsPreview']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/goodsPreview',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/order/goodsPreview']>
    },

    /**
     * 接口名：支付订单
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2252256
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/order/pay': (req?: IModels['POST/h5/order/pay']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/pay',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/order/pay']>
    },

    /**
     * 接口名：订单确认
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=497588&itf=2257707
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/order/confirm': (req?: IModels['POST/h5/order/confirm']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/order/confirm',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/order/confirm']>
    },

    /**
     * 接口名：用户详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=499304&itf=2199147
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/user/info': (req?: IModels['GET/h5/user/info']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/info',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/user/info']>
    },

    /**
     * 接口名：用户更新
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=499304&itf=2204939
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/user/info/update': (req?: IModels['POST/h5/user/info/update']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/user/info/update',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/user/info/update']>
    },

    /**
     * 接口名：商品列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2307545
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/goods/list': (req?: IModels['GET/h5/goods/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/goods/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/goods/list']>
    },

    /**
     * 接口名：商品详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224267
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/goods/info': (req?: IModels['GET/h5/goods/info']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/goods/info',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/goods/info']>
    },

    /**
     * 接口名：新增收藏
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224269
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/goods/collect/add': (req?: IModels['POST/h5/goods/collect/add']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/goods/collect/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/goods/collect/add']>
    },

    /**
     * 接口名：删除收藏
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2224271
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/h5/goods/collect/delete': (
      req?: IModels['POST/h5/goods/collect/delete']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/h5/goods/collect/delete',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/h5/goods/collect/delete']>
    },

    /**
     * 接口名：收藏列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2228675
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/goods/collect/list': (req?: IModels['GET/h5/goods/collect/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/goods/collect/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/goods/collect/list']>
    },

    /**
     * 接口名：首页
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=503900&itf=2307536
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/h5/index': (req?: IModels['GET/h5/index']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/h5/index',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/h5/index']>
    },

    /**
     * 接口名：产品分类列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=518381&itf=2307747
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/admin/goods/type/list': (req?: IModels['GET/admin/goods/type/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/admin/goods/type/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/admin/goods/type/list']>
    },

    /**
     * 接口名：示例接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=295591&mod=518383&itf=2307742
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1658799749723': (req?: IModels['GET/example/1658799749723']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/example/1658799749723',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1658799749723']>
    },
  }
}
