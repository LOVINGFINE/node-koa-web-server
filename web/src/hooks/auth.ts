import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { userApi } from '@/apis';

export const useAuth = defineStore('auth', () => {
  const token = ref('');
  const myInfo = ref<UserInfo>({} as UserInfo);

  const isLogin = computed(() => !!token.value);

  /** @设置token */
  function set(t: string) {
    token.value = t;
    localStorage.setItem('token', t);
  }

  function sync() {
    const t = localStorage.getItem('token') || '';
    token.value = t;
  }

  function refreshMyInfo() {
    if (isLogin.value) {
      userApi.getMyInfo().then((v) => {
        myInfo.value = v;
      });
    }
  }

  watch(token, refreshMyInfo);

  return {
    token,
    isLogin,
    myInfo,
    set,
    sync,
    refreshMyInfo,
  };
});
