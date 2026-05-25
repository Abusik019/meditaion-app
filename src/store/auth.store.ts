import { API_ROUTES, client } from '@/api';
import type { ILoginResponse, IRegisterResponse } from '@/interfaces/auth.inteface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const TOKEN_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();
  const initToken = localStorage.getItem(TOKEN_KEY);

  if (initToken) {
    token.value = initToken;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_KEY, newToken);
  }

  function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
    token.value = undefined;
  }

  const getToken = computed(() => token.value);

  async function registration(email: string, username: string, password: string) {
    const res = await client().post<IRegisterResponse>(API_ROUTES.auth.register, {
      email,
      username,
      password,
    });

    if (res.status == 201) {
      return true;
    }
  }

  async function login(username: string, password: string) {
    const { data } = await client().post<ILoginResponse>(API_ROUTES.auth.login, {
      username,
      password,
    });

    token.value = data.data.token;
    setToken(data.data.token);
  }

  return { token, registration, getToken, login, clearToken, setToken };
});
