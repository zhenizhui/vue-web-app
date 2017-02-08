import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App';
// index 首屏
import index from './components/index/index.vue';
// seller 商家页面
import seller from './components/seller/seller.vue';
// 商品详情页
// import foodDetail from './components/fooddetail/fooddetail.vue';
import VueResource from 'vue-resource';
import './css/reset.css';
import './css/font-awesome.css';
import './stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  linkActiveClass: 'active',
  hashbang: false,
  history: true
});

router.map({
  '/': {
    component: index
  },
  '/index': {
    component: index
  },
  '/seller/:seller': {
    name: 'seller',
    component: seller
  }
});

router.start(app, '#app');

