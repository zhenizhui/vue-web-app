import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import sellers from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';

import './css/reset.css';
import './css/font-awesome.css';
import './stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/': {
    component: goods
  },
  '/goods': {
    component: goods
  },
  '/sellers': {
    component: sellers
  },
  '/ratings': {
    component: ratings
  }
});

router.start(app, '#app');

// 初始化路由显示
// router.go('/goods');
