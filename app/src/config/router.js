import Vue from 'vue';
import Router from 'vue-router';

import Main from '@Views/pages/main/index';
import Article from '@Views/pages/article/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/main/:id',
      name: 'Article',
      component: Article
    }
  ]
});
export default router;
