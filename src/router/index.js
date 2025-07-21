import { createRouter, createWebHistory } from 'vue-router';
import daily from '../pages/daily.vue';
import hourly from '../pages/hourly.vue';
import toDay from '../pages/toDay.vue';
import mainComponent from '../component/layoutComponent/mainComponent.vue';
import airQuality from '../pages/airQuality.vue';
import highLight from '../pages/highLight.vue';
import history from '../component/layoutComponent/historyComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainComponent
  },
  {
    path: '/hourly/:city',
    name: 'hourly',
    component: hourly
  },
  {
    path: '/daily/:city',
    name: 'daily',
    component: daily
  },
  {
    path: '/toDay/:city',
    name: 'toDay',
    component: toDay
  },
  {
    path: '/airQuality/:city',
    name: 'airQuality',
    component: airQuality
  },
  {
    path: '/highLight/:city',
    name: 'highLight',
    component: highLight
  },
  {
    path: '/history',
    name: 'history',
    component: history
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
