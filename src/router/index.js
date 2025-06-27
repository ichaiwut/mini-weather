import { createRouter, createWebHistory } from 'vue-router';
import daily from '../views/daily.vue';
import hourly from '../views/hourly.vue';    
import today from '../views/today.vue';

const routes = [
  {
    path: '/',
    redirect: '/today'
  },
  {
    path: '/today',
    name: 'Today',
    component: today
  },
  {
    path: '/hourly',
    name: 'Hourly',
    component: hourly
  },
  {
    path: '/daily',
    name: 'Daily',
    component: daily
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
