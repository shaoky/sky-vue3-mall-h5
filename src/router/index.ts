import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import index from "../views/index/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ "../views/index/index.vue"),
    },
    {
        path: "/search",
        name: 'search',
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
        component: () => import(/* webpackChunkName: "cart" */ "../views/cart/index.vue"),
    },
    {
        path: "/user",
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ "../views/user/index.vue"),
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
        component: () => import(/* webpackChunkName: "orderConfirm" */ "../views/user/order/confirm.vue"),
    },
    {
        path: "/user/order/pay",
        name: 'orderPay',
        component: () => import(/* webpackChunkName: "orderPay" */ "../views/user/order/pay.vue"),
    },
    {
        path: "/user/address",
        name: 'address',
        component: () => import(/* webpackChunkName: "address" */ "../views/user/address/index.vue"),
    },
    {
        path: "/user/address/info/:id",
        name: 'addressInfo',
        component: () => import(/* webpackChunkName: "addressInfo" */ "../views/user/address/info.vue"),
    },
    {
        path: "/user/address/add",
        name: 'addressAdd',
        component: () => import(/* webpackChunkName: "addressInfo" */ "../views/user/address/info.vue"),
    },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
