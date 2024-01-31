import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './views/HomeView.vue';
import RecipeView from './views/RecipeView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: 'recipe/:id', component: RecipeView, props: true}
  // Add more routes for other sections/pages as needed
];

const router = new VueRouter({
  routes,
  mode: 'history' //Use history mode to remove '#' from URLs
});

export default router;