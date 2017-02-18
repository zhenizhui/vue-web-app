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
    component: require('./components/index/index.vue')
  },
  '/index': {
    component: require('./components/index/index.vue')
  },
  '/seller/:seller': {
    name: 'seller',
    component: require('./components/seller/seller.vue'),
    subRoutes: {
      '/': {
        component: require('./components/sellergood/sellergood.vue')
      }
    }
  },
  '/user': {
    name: 'user',
    component: require('./components/user/user.vue')
  }
});

router.start(app, '#app');

