import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App';
import index from './components/index/index.vue';
import VueResource from 'vue-resource';
import './css/reset.css';
import './css/font-awesome.css';
import './stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/index': {
    component: index
  }
});

router.start(app, '#app');

// 初始化路由显示
router.go('/index');
