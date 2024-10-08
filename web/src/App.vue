<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAuth, useI18n } from '@/hooks';

const auth = useAuth();
const i18n = useI18n();
/** @初始化token */
auth.sync();

/** @初始化i18n */
i18n.sync();
</script>

<style scoped lang="scss">
.root {
}
</style>
