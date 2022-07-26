import router from '@/router'
import axios from 'axios'
import { Toast } from 'vant'
import { IModels } from '../rapper/request';

const ENVIR = process.env.NODE_ENV === 'development' ? 'DEVELOPMENT' : 'PRODUCTION';

export default async function<T extends keyof IModels> (
    url: T,
    params: IModels[T]['Req'],
    upload: boolean = false
    // @ts-ignore
) :Promise<IModels[T]['Res']['data']> {
    return new Promise((resolve, reject) => {
        let method 
        let userData: string = window.localStorage.getItem('user') || ''
        let user
        if (userData) {
            user = JSON.parse(userData)
        }
        let urlRep = url.replace(/GET/g, '')
        urlRep = urlRep.replace(/POST/g, '')

        if (url.indexOf('GET') > -1) {
            method = 'get'
        } else {
            method = 'post'
        }
        axios({
            baseURL: ENVIR === 'DEVELOPMENT' ? 'http://t.wzyyyy.com': 'http://api.shop.shaoky.com',
            url: urlRep,
            method,
            params: method === 'get' ? params : {},
            data: method === 'post' ? params : {},
            responseType: 'json',
            headers: {
                Authorization: user.token || '',
                'content-type': upload ? 'multipart/form-data': 'application/json'
            }
        }).then(res => {
            if (res.data.code === 401) {
                Toast(res.data.error)
                router.push({
                    name: 'login'
                })
                return
            }
            if (res.data.code === 200) {
                resolve(res.data.data)
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}