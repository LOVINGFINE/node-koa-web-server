import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useGlobal = defineStore('global', () => {
  const token = ref('');
  const userInfo = ref<UserInfo>({} as UserInfo);

  function setToken(t: string) {
    token.value = t;
    localStorage.setItem('token', t);
  }

  function sync() {
    const t = localStorage.getItem('token') || '';
    token.value = t;
  }

  watch(token, () => {}, {
    immediate: true,
  });

  return {
    token: token.value,
    userInfo,
    sync,
    setToken,
  };
});
