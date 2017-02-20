import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App';
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
    component: function (resolve) {
      require(['./components/index/index.vue'], resolve);
    }
  },
  '/index': {
    component: function (resolve) {
      require(['./components/index/index.vue'], resolve);
    }
  },
  '/seller/:seller': {
    name: 'seller',
    component: function (resolve) {
      require(['./components/seller/seller.vue'], resolve);
    },
    subRoutes: {
      '/': {
        name: 'sellergoods',
        component: function (resolve) {
          require(['./components/sellergood/sellergood.vue'], resolve);
        }
      },
      '/sellercomments': {
        name: 'sellercomments',
        component: function (resolve) {
          require(['./components/sellercomments/sellercomments.vue'], resolve);
        }
      },
      '/sellerdetail': {
        name: 'sellerdetail',
        component: function (resolve) {
          require(['./components/sellerdetail/sellerdetail.vue'], resolve);
        }
      }
    }
  },
  '/user': {
    name: 'user',
    component: function (resolve) {
      require(['./components/user/user.vue'], resolve);
    }
  }
});

router.start(app, '#app');

