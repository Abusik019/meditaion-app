import { API_ROUTES, client } from '@/api';
import type { IProfile, IProfileResponse } from '@/interfaces/profile.inteface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>();

  async function fetchProfileInfo() {
    const { data } = await client().get<IProfileResponse>(API_ROUTES.profile);

    profile.value = data.data.user;
  }

  return { profile, fetchProfileInfo };
});
