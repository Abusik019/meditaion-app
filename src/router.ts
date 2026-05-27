import { useAuthStore } from '@/store/auth.store';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          component: () => import('@/views/IndexView.vue'),
        },
        {
          path: 'auth/login',
          name: 'login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: 'auth/register',
          name: 'register',
          component: () => import('@/views/RegisterView.vue'),
        },
      ],
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
          path: 'meditations/start/:id',
          name: 'start',
          component: () => import('@/views/StartMeditationView.vue'),
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

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (!authStore.getToken && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' };
  }
});
