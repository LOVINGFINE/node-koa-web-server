<template>
  <router-view />
</template>

<script setup lang="ts">
import useGlobalState from '@/store';

const global = useGlobalState();

// 初始化token
global.sync();
</script>

<style scoped lang="scss">
.root {
}
</style>
