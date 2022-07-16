import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import index from "../views/index/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'index',
        meta: {
            keepAlive: true
        },
        component: () => import(/* webpackChunkName: "index" */ "../views/index/index.vue"),
    },
    {
        path: "/search",
        name: 'search',
        meta: {
            keepAlive: true
        },
        component: () => import(/* webpackChunkName: "search" */ "../views/goods/search.vue"),
    },
    {
        path: "/category",
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ "../views/category/index.vue"),
    },
    {
        path: "/cart",
        name: 'cart',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "cart" */ "../views/cart/index.vue"),
    },
    {
        path: "/user",
        name: 'user',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "user" */ "../views/user/index.vue"),
    },
    {
        path: "/user/set",
        name: 'userSet',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "user" */ "../views/user/user-set.vue"),
    },
    {
        path: "/goods/info/:id",
        name: 'goodsInfo',
        component: () => import(/* webpackChunkName: "goodsInfo" */ "../views/goods/info.vue"),
    },
    {
        path: "/login",
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
    },
    {
        path: "/user/order/confirm",
        name: 'orderConfirm',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "orderConfirm" */ "../views/user/order/confirm.vue"),
    },
    {
        path: "/user/order/pay/:id",
        name: 'orderPay',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "orderPay" */ "../views/user/order/pay.vue"),
    },
    {
        path: "/user/address",
        name: 'address',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "address" */ "../views/user/address/index.vue"),
    },
    {
        path: "/user/address/info/:id",
        name: 'addressInfo',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "addressInfo" */ "../views/user/address/info.vue"),
    },
    {
        path: "/user/address/add",
        name: 'addressAdd',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "addressInfo" */ "../views/user/address/info.vue"),
    },
    {
        path: "/user/order",
        name: 'order',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "orderList" */ "../views/user/order/index.vue"),
    },
    {
        path: "/user/order/:id",
        name: 'orderInfo',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "orderInfo" */ "../views/user/order/info.vue"),
    },
    {
        path: "/user/order/success",
        name: 'orderSuccess',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "orderInfo" */ "../views/user/order/success.vue"),
    },
    {
        path: "/user/collect",
        name: 'collect',
        meta: {
            login: true
        },
        component: () => import(/* webpackChunkName: "collect" */ "../views/user/collect/index.vue"),
    },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
