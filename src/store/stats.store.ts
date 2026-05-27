import { API_ROUTES, client } from '@/api';
import type {
  IStat,
  IPostStatsResponse,
  IFetchStatsResponse,
  ISummary,
} from '@/interfaces/stats.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<IStat[]>();
  const summary = ref<ISummary>();

  async function saveStat(type: string, value: number | undefined) {
    await client().post<IPostStatsResponse>(API_ROUTES.stats, {
      type,
      value,
    });
  }

  async function fetchStats() {
    const { data } = await client().get<IFetchStatsResponse>(API_ROUTES.stats);

    stats.value = data.data.stats;
    summary.value = data.data.summary;
  }

  return { stats, summary, saveStat, fetchStats };
});
