import { createRouter, createWebHistory } from 'vue-router';
import daily from '../views/daily.vue';
import hourly from '../views/hourly.vue';    

const routes = [
  {
    path: '/hourly',
    name: 'Hourly',
    component: hourly
  },
  {
    path: '/daily',
    name: 'Daily',
    component: daily
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
