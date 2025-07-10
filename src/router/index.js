import { createRouter, createWebHistory } from 'vue-router';
import daily from '../pages/daily.vue';
import hourly from '../pages/hourly.vue';
import current from '../pages/current.vue';
import mainComponent from '../component/mainComponent.vue';
import airQuality from '../pages/airQuality.vue';
import highLight from '../pages/highLight.vue';

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
    path: '/current/:city',
    name: 'current',
    component: current
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
