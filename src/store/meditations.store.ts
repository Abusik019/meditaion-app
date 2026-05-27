import { API_ROUTES, client } from '@/api';
import type { IMeditation, IMeditationListResponse } from '@/interfaces/meditation.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<IMeditation[]>([]);

  async function fetchMeditations() {
    const { data } = await client().get<IMeditationListResponse>(API_ROUTES.meditations);

    meditations.value = data.data.meditations;
  }

  return { meditations, fetchMeditations };
});
