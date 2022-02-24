import router from '@/router'
import axios from 'axios'
import { Toast } from 'vant'

export default async (
    url: string = '',
    params: object,
    method: any = 'get',
    upload: boolean = false
) => {
    return new Promise((resolve, reject) => {
        let user: any = window.localStorage.getItem('user') || ''
        if (user) {
            user = JSON.parse(user)
        }
        axios({
            baseURL: 'http://t.wzyyyy.com',
            url,
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