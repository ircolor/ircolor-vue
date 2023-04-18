<script setup lang="ts">
import { VSearchInput } from '../src/components/VSearchInput'
import { ref } from 'vue'
const text = ref('text')
</script>

<template>
  <main class="flex justify-center items-center h-screen gap-2 bg-slate-100">
    <div class="flex flex-col gap-2">
      <VSearchInput v-model="text" />
    </div>
  </main>
</template>
