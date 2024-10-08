<template>
  <div class="w-full h-full">
    {{ $t('aaa') }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from '@/hooks';

const { $t } = useI18n();
</script>
