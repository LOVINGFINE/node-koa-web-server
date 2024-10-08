import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export const useI18n = defineStore('i18n', () => {
  const lang = ref('zh-CN');
  const dataMaps = ref<Record<string, string | number>>({
    aaa: '你哈不',
  });
  /** @设置token */
  function set(t: string) {
    lang.value = t;
    localStorage.setItem('i18n-lang', t);
  }

  function sync() {
    const t = localStorage.getItem('i18n-lang') || 'zh-CN';
    lang.value = t;
  }

  function refresh() {}

  const $t = computed(() => {
    return (t: string) => {
      return dataMaps.value[t] || 'not found';
    };
  });

  watch(lang, refresh, {
    immediate: true,
  });

  return {
    dataMaps,
    $t,
    lang,
    set,
    sync,
    refresh,
  };
});
