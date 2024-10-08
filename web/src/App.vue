<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAuth } from '@/hooks';

const auth = useAuth();

/** @初始化token */
auth.sync();
</script>

<style scoped lang="scss">
.root {
}
</style>
