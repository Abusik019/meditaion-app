import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/home/meditations',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'meditations' },
        },
        {
          path: 'meditations',
          name: 'meditations',
          component: () => import('@/views/MeditationsView.vue'),
        },
        {
          path: 'stats',
          name: 'stats',
          component: () => import('@/views/StatsView.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
});
