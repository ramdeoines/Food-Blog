import {
  createRouter,
  createWebHistory
} from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import BlogsView from '@/views/BlogsView.vue';
// import DetailsView from '@/views/DetailsView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
      path: '/',
      name: 'HomeView',
      component: HomeView,
  },
  {
      path: '/blogs',
      name: 'BlogsView',
      component: BlogsView,
  },
  // {
  //     path: '/details',
  //     name: 'DetailsView',
  //     component: DetailsView,
  // },
  {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
