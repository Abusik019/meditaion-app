import { API_ROUTES, client } from '@/api';
import type { IProfile, IProfileResponse } from '@/interfaces/profile.inteface';
import type { IStats, IStatsResponse } from '@/interfaces/stats.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<IStats>();

  async function saveTheFeeling(type: string, value: number) {
    const { data } = await client().post<IStatsResponse>(API_ROUTES.stats, {
      type,
      value,
    });

    stats.value = data.data.stat;
  }

  return { stats, saveTheFeeling };
});
