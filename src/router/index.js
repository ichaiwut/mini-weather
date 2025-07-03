import { createRouter, createWebHistory } from 'vue-router';
import daily from '../views/daily.vue';
import hourly from '../views/hourly.vue';
import mainComponent from '../component/mainComponent.vue';    

const routes = [
  {
    path: '/',
    name: 'Home',
    component: mainComponent
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
