import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/Home';
import routerList from './routerList';
Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/',
          name: 'Home',
          meta: {
            permission: true,
          },
          component: () => import(/* webpackChunkName: "question" */ '../views/about.vue'),
        },
        {
          path: '/demo',
          name: 'Demo',
          meta: {
            permission: true,
          },
          component: () => import(/* webpackChunkName: "question" */ '../views/Demo.vue'),
        },
        ...routerList
      ],
    },
  ],
});