# 商城h5

技术栈：vue3 + ts + vite2

### 项目链接
1. h5（[在线访问地址](http://h5.shop.shaoky.com/)）
2. 管理后台（[项目链接](https://github.com/shaoky/vue3-mall-admin)）

### 功能

1. 首页√
2. 产品分类√
3. 产品搜索√
4. 产品展示√
5. 购物车√
6. 订单流程√
7. 用户地址√
8. 产品收藏√
9. 优惠券×
10. 商品评价×
11. 会员系统×
12. 秒杀/抢购活动×

### 目录结构

<pre>
├── README.md           
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── api            // api接口
│   ├── assets         // 图片资源
│   ├── components     // 各种组件
│   ├── config         // 配置
│   ├── router         // 配置路由
│   ├── styles         // 样式
│   ├── store          // 状态管理
│   ├── views          // 各种页面
|   ├── utils          // 工具库
│   └── main.js
</pre>

### 提交规则
格式：前缀 + 英文冒号: + 1个空格 + 描述

1. feat: 新功能（feature）
2. hotfix: 修补bug
3. docs: 文档（documentation）
4. style: 格式（不影响代码运行的变动）
5. refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
6. build: 生产环境改动
7. test: 增加测试
8. chore: 构建过程或辅助工具的变动
9. release: 发布
10. delete: 删除文件